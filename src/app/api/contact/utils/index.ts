import { ContactPayload } from '@/src/app/api/contact/types/types'
import MissingPayloadFieldError from '@/src/app/api/contact/error/MissingPayloadFieldError'
import nodemailer from 'nodemailer'

export const verifyContactPayload = (payload: ContactPayload): void => {
  const requiredFields = ['name', 'email', 'phone', 'message']
  requiredFields.forEach((field) => {
    if (!payload[field as keyof ContactPayload]) {
      throw new MissingPayloadFieldError(field)
    }
  })
}

export const getMailOptions = (
  name: string,
  email: string,
  phone: string,
  message: string,
  emailUser: string,
): nodemailer.SendMailOptions => {
  return {
    from: `"${name}" <${emailUser}>`,
    to: emailUser,
    replyTo: email,
    subject: `${name} has reached out on speechwithellie.com`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n\nPlease do not click on any links in this email unless you are certain they are safe. This email may contain links to potentially harmful websites. Do not share personal information with untrusted sources.`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p><em>Please do not click on any links in this email unless you are certain they are safe. This email may contain links to potentially harmful websites. Do not share personal information with untrusted sources.</em></p>
    `,
  }
}
