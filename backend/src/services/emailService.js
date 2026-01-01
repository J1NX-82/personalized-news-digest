import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendDigestEmail = async (to, digest) => {
  const htmlContent = `
    <h2>Your Daily News Digest</h2>
    ${digest.items
      .map(
        (item) => `
          <div style="margin-bottom:16px">
            <h4>${item.title}</h4>
            <pre style="white-space: pre-wrap">${item.summary}</pre>
            <a href="${item.url}" target="_blank">Read more</a>
          </div>
        `
      )
      .join("")}
  `;

  await transporter.sendMail({
    from: `"News Digest" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your Personalized Daily News Digest",
    html: htmlContent,
  });
};
