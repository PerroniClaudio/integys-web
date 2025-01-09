export async function POST(request: Request) {

    const { token } = await request.json();
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${token}`,
      {
        method: 'POST'
      }
    );
    const resData = await response.json();
    if (resData.success) {
      return new Response("success!", { status: 200 });
    } else {
      return new Response("Failed Captcha", { status: 400 });
    }
}