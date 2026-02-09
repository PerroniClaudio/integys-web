import nodemailer from 'nodemailer';

type HCaptchaVerifyResponse = {
  success: boolean;
  "error-codes"?: string[] | string;
  challenge_ts?: string;
  hostname?: string;
  credit?: boolean;
  score?: number;
  score_reason?: string[];
};

// Escape base per HTML (evita injection nelle variabili utente)
function escapeHtml(str: string) {
  return str.replace(/[&<>'"/]/g, function (s) {
    const entity: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
      '/': '&#x2F;',
    };
    return entity[s] || s;
  });
};

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const mailSenderAccount = {
  user: process.env.MAIL_SENDER_ACCOUNT_USERNAME,
  pass: process.env.MAIL_SENDER_ACCOUNT_PASSWORD,
};

export async function POST(request: Request) {
  try {
    const { name, surname, email, businessName, requestType, description, hCaptchaToken, language } =
      await request.json();

    // Verifica hCaptcha
    if (!hCaptchaToken) {
      return new Response(JSON.stringify({ success: false, message: "hCaptcha token missing" }), { status: 400 });
    }

    if (!name || !surname || !email || !businessName || !requestType || !description ) {
      return new Response("Missing required fields", { status: 400 });
    }

    if (!isValidEmail(email)) {
      return new Response("Invalid email format", { status: 400 });
    }

    // Applica escape HTML ai campi che verranno usati nei template
    const escapedName = escapeHtml(name);
    const escapedSurname = escapeHtml(surname || '');
    const escapedBusinessName = escapeHtml(businessName);
    const escapedRequestType = escapeHtml(requestType);
    const escapedDescription = escapeHtml(description);

    // Verifica hcaptcha
    const captchaVerifyUrl = 'https://hcaptcha.com/siteverify';
    const captchaResponse = await fetch(captchaVerifyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.HCAPTCHA_SECRET_KEY}&response=${hCaptchaToken}`,
    });

    const captchaData: HCaptchaVerifyResponse = await captchaResponse.json();

    if (!captchaData.success) {
      return new Response(JSON.stringify({ success: false, message: "hCaptcha verification failed" }), { status: 400 });
    }

    if (!mailSenderAccount.user || !mailSenderAccount.pass) {
      return new Response("Email configuration missing", { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      auth: {
        user: mailSenderAccount.user,
        pass: mailSenderAccount.pass,
      },
    });

    // Email interna sempre in italiano
    const internalMailData = {
      from: mailSenderAccount.user,
      // to: "commerciale@integys.com",
      to: "erasmo.ifortech@gmail.com",
      subject: `INTEGYS - Richiesta di contatto`,
      text: `Nome: ${escapedName}\nEmail aziendale: ${email}\nAzienda: ${escapedBusinessName}\nRichiesta: ${escapedRequestType}\nMessaggio:\n${escapedDescription}`,
      html: `<div> Nome: ${escapedName} <br/> Email aziendale: ${email} <br/> Azienda: ${escapedBusinessName} <br/> Richiesta: ${escapedRequestType} <br/> Messaggio: <br/> ${escapedDescription} </div>`,
    };

    // Email di conferma per l'utente (multilingue)
    const confirmationTexts = {
      it: {
        subject: "Riepilogo richiesta di contatto - Integys",
        body: `<div>
          <h1>Integys</h1>
          <div>
            <p>Gentile ${escapedName} ${escapedSurname}, <br><br>
            Grazie per averci contattato. Di seguito il riepilogo della tua richiesta: <br><br>
            <strong>Azienda:</strong> ${escapedBusinessName} <br>
            <strong>Oggetto:</strong> ${escapedRequestType} <br>
            <strong>Messaggio:</strong> ${escapedDescription} <br><br>
            Ti contatteremo al più presto. <br><br>
            Cordiali saluti, <br><br>
            Il Team di Integys</p>
          </div>
        </div>`,
        text: `${escapedName} ${escapedSurname}, grazie per averci contattato. Richiesta: ${escapedRequestType}. Messaggio: ${escapedDescription}`,
      },
      en: {
        subject: "Contact Request Summary - Integys",
        body: `<div>
          <h1>Integys</h1>
          <div>
            <p>Dear ${escapedName} ${escapedSurname}, <br><br>
            Thank you for contacting us. Below is a summary of your request: <br><br>
            <strong>Company:</strong> ${escapedBusinessName} <br>
            <strong>Subject:</strong> ${escapedRequestType} <br>
            <strong>Message:</strong> ${escapedDescription} <br><br>
            We will contact you as soon as possible. <br><br>
            Best regards, <br><br>
            The Integys Team</p>
          </div>
        </div>`,
        text: `${escapedName} ${escapedSurname}, thank you for contacting us. Request: ${escapedRequestType}. Message: ${escapedDescription}`,
      }
    };

    const lang = language === "en" ? "en" : "it";
    const confirmationTemplate = confirmationTexts[lang];

    const userConfirmationMail = {
      from: mailSenderAccount.user,
      to: email,
      subject: confirmationTemplate.subject,
      text: confirmationTemplate.text,
      html: confirmationTemplate.body,
    };

    // Invia entrambe le email
    await transporter.sendMail(internalMailData);
    await transporter.sendMail(userConfirmationMail);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Richiesta inviata correttamente",
        data: { name, email, businessName, requestType },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("contactform error", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
