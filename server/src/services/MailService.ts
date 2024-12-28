import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

type Feedback = {
  name: string;
  email: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
});

export class MailService {
  public static async sendFeedback(feedback: Feedback) {
    const html = `
      <h4>From: ${feedback.name} - ${feedback.email}</h4>
      <p>${feedback.message}</p>
    `;

    return await transporter.sendMail({
      from: feedback.email,
      to: 'kcnpoow@gmail.com',
      subject: 'Feedback',
      html,
    });
  }
}
