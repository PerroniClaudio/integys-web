export async function POST(request: Request) {
  const { token } = await request.json();
  const recaptchaSecretKey = process.env.CAPTCHA_SECRET_KEY;

  if (!recaptchaSecretKey) {
    return new Response("Missing CAPTCHA_SECRET_KEY", { status: 500 });
  }

  if (!token) {
    return new Response("Missing captcha token", { status: 400 });
  }

  // Google expects application/x-www-form-urlencoded
  const body = new URLSearchParams({
    secret: recaptchaSecretKey,
    response: token,
  });

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  const resData = await response.json();

  if (resData.success) {
    return new Response("success!", { status: 200 });
  }

  return new Response("Failed Captcha", { status: 400 });
}
