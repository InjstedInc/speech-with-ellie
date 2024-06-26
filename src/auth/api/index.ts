import crypto from 'crypto'

export const generateSignature = (apiSecret: string, payload: object) => {
  const payloadString = JSON.stringify(payload)
  return crypto
    .createHmac('sha256', apiSecret)
    .update(payloadString)
    .digest('hex')
}

export const verifySignature = (
  apiSecret: string,
  payload: object,
  signature: string,
) => {
  const expectedSignature = generateSignature(apiSecret, payload)
  return expectedSignature === signature
}
