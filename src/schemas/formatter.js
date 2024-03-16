export const formatterZodError = (result) => {
  if (!!result.error) {
    return {
      success: false,
      error: result.error.issues.map(({ path, message }) => ({
        path: path.at(0),
        message,
      })),
    }
  }
  return result
}
