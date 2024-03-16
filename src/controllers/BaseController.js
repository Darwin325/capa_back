export class BaseController {
  successResponse = (res, data, status = 200) => {
    return res.status(status).json({
      error: null,
      data: data || [],
    })
  }

  errorResponse = (res, error, status = 500) => {
    return res.status(status).json({ error: error, data: null })
  }

  messageResponse = (res, message, status = 200) => {
    return res.status(status).json({ error: null, message })
  }
}
