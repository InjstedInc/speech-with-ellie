import MissingConfigError from '@/src/config/error/MissingConfigError'

type Config = {
  EMAIL_HOST: string
  EMAIL_PORT: string
  EMAIL_SECURE: string
  EMAIL_USER: string
  EMAIL_TOKEN: string
  CONTACT_EMAIL: string
  API_KEY: string
  API_SECRET: string
}

const getConfig = (): Config => {
  const requiredEnvVars = [
    'EMAIL_HOST',
    'EMAIL_PORT',
    'EMAIL_SECURE',
    'EMAIL_USER',
    'EMAIL_TOKEN',
    'CONTACT_EMAIL',
    'API_KEY',
    'API_SECRET',
  ]

  const initialConfig = {} as Config
  return requiredEnvVars.reduce((config, envVar) => {
    if (!process.env[envVar]) {
      throw new MissingConfigError(envVar)
    }
    return {
      ...config,
      [envVar]: process.env[envVar],
    }
  }, initialConfig)
}

export default getConfig
