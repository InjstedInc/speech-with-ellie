class MissingConfigError extends Error {
  constructor(configName: string) {
    super(`Missing config environment variable: ${configName}`)
  }
}

export default MissingConfigError
