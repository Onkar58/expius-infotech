import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const fname: string = formData.get("fname") as string;
    const lname: string = formData.get("lname") as string;
    const email: string = formData.get("email") as string;
    const phone: string = formData.get("phone") as string;
    const location: string = formData.get("location") as string;
    const position: string = formData.get("position") as string;
    const relocation: string = formData.get("relocate") as string;
    const coverLetter: string = formData.get("cover-letter") as string;

    const resume = formData.get("resume");
    if (!(resume instanceof File)) {
      return NextResponse.json(
        { success: false, message: "No file found or incorrect format" },
        { status: 400 },
      );
    }

    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const transporter = nodemailer.createTransport({
      host: "mail.expiusinfotech.com", // your SMTP server
      port: 465, // port for secure SSL
      secure: true, // use SSL
      auth: {
        user: "careers@expiusinfotech.com",
        pass: "Eipl@2025", // store this securely in .env
      },
    });
    const mailOptions = {
      from: {
        name: `${fname} ${lname} via Expius`,
        address: email,
      },
      replyTo: email,
      to: ["careers@expiusinfotech.com"],
      subject: `Applying for from the Expius Website`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Job Application</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 20px;
              }
              .container {
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  max-width: 600px;
                  margin: auto;
              }
              h2 {
                  color: #333;
              }
              p {
                  line-height: 1.6;
                  color: #555;
              }
              .details {
                  background-color: #f9f9f9;
                  padding: 15px;
                  border-left: 4px solid #0073e6;
                  margin-top: 10px;
              }
              .footer {
                  margin-top: 20px;
                  font-size: 14px;
                  color: #777;
              }
              a {
                  color: #0073e6;
                  text-decoration: none;
              }
          </style>
      </head>
      <body>

          <div class="container">
              <h2>Job Application – ${fname} ${lname} for ${position}</h2>
              <p>Dear Sir/Mam,</p>
              <p>
                  I hope this email finds you well. I am interested in applying for the
                  <strong>${position}</strong> position.
                  Please find my details below:
              </p>

              <div class="details">
                  <h3>Personal Information:</h3>
                  <p><strong>Full Name:</strong> ${fname} ${lname}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Phone Number:</strong> ${phone}</p>
                  <p><strong>Current Location:</strong> ${location}</p>

                  <h3>Position Details:</h3>
                  <p><strong>Position Applying For:</strong> ${position}</p>
                  <p><strong>Willing to Relocate:</strong> ${relocation}</p>
                  <p><strong>Cover-letter:</strong> ${coverLetter}</p>
              </div>

              <p>I have attached my resume for your review. I would appreciate the opportunity to discuss how my skills and experience align with the role. Please let me know a convenient time for a conversation.</p>

              <p>Looking forward to your response.</p>

              <p>Best regards,</p>
              <p><strong>${fname} ${lname}</strong><br>
              <a href="mailto:${email}">${email}</a><br>
              ${phone}</p>

              <div class="footer">
                  <p>This email was sent as part of a job application. If you received this in error, please ignore it.</p>
              </div>
          </div>

      </body>
      </html>
          `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info);
    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    console.log("Error while sending email", err);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
};
