import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import nodemailer from 'nodemailer'
import MissingPayloadFieldError from '@/src/app/api/contact/error/MissingPayloadFieldError'
import getMailTransportConfig from '@/src/app/api/utils/emailConfig'
import { verifySignature } from '@/src/auth/api'
import { ContactPayload } from '@/src/app/api/contact/types/types'
import getConfig from '@/src/config'
import MissingConfigError from '@/src/config/error/MissingConfigError'
import {
  getMailOptions,
  verifyContactPayload,
} from '@/src/app/api/contact/utils'

export const POST = async (req: NextRequest) => {
  try {
    const apiKey = req.headers.get('x-api-key')
    const signature = req.headers.get('x-signature')
    const payload = (await req.json()) as ContactPayload

    if (!apiKey || !signature) {
      return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), {
        status: 401,
      })
    }
    const { API_SECRET, EMAIL_USER } = getConfig()

    verifyContactPayload(payload)

    if (!verifySignature(API_SECRET, payload, signature)) {
      return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), {
        status: 401,
      })
    }
    const { name, email, phone, message } = payload
    const transporter = nodemailer.createTransport(getMailTransportConfig())

    await transporter.sendMail(
      getMailOptions(name, email, phone, message, EMAIL_USER),
    )

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      {
        status: 200,
      },
    )
  } catch (error) {
    if (error instanceof MissingPayloadFieldError) {
      return new NextResponse(JSON.stringify({ message: error.message }), {
        status: 400,
      })
    } else if (error instanceof MissingConfigError) {
      return new NextResponse(JSON.stringify({ message: error.message }), {
        status: 500,
      })
    } else {
      console.error('Error sending email:', error)
      return new NextResponse(
        JSON.stringify({ message: 'Internal Server Error' }),
        {
          status: 500,
        },
      )
    }
  }
}
