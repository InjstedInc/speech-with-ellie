import getConfig from '@/src/config'

const getMailTransportConfig = () => {
  const {
    EMAIL_HOST,
    EMAIL_PORT,
    EMAIL_SECURE,
    EMAIL_USER,
    EMAIL_TOKEN,
    CONTACT_EMAIL,
  } = getConfig()

  return {
    host: EMAIL_HOST,
    port: parseInt(EMAIL_PORT, 10),
    secure: EMAIL_SECURE === 'true',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_TOKEN,
    },
    contactEmail: CONTACT_EMAIL,
  }
}

export default getMailTransportConfig
