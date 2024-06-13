class ContentfulConfigError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ContentfulConfigError'
  }
}
export default ContentfulConfigError
