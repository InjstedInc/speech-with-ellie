class MissingPayloadFieldError extends Error {
  constructor(field: string) {
    super(`Missing field: ${field} in payload`)
  }
}

export default MissingPayloadFieldError
