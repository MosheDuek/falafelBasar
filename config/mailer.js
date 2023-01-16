const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.FORGOT_PASSWORD_CLIENT_ID,
    process.env.FORGOT_PASSWORD_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.FORGOT_PASSWORD_REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) reject("failed to get token");
      else resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.FORGOT_PASSWORD_CLIENT_ID,
      clientSecret: process.env.FORGOT_PASSWORD_CLIENT_SECRET,
      refreshToken: process.env.FORGOT_PASSWORD_REFRESH_TOKEN,
    },
  });

  return transporter;
};

const sendEmail = async (emailOptions) => {
  try {
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail(emailOptions);
  } catch (err) {
    console.log("error from nodemailer", err);
  }
};

module.exports = sendEmail;