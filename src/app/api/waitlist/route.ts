import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return new NextResponse("Email is required", { status: 400 });
  }

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  // Define the email options
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: email,
    subject: "Welcome to the HearMe AI Waitlist",
    html: `
      <p>Hi there,</p>
      <p>Thank you for joining the waitlist for HearMe AI. We are excited to have you on board! HearMe AI helps you capture and summarize professional meetings and calls from any platform.</p>
      <p>Best regards,<br>The HearMe AI Team</p>
      <img src="https://media.giphy.com/media/Dh5q0sShxgp13DwrvG/giphy.gif?cid=790b7611hej0mgq7rx7y09iiuhkyorj9xa8x2kl19awk88ha&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Welcome GIF">
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
