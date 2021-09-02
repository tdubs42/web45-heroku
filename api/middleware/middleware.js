const logger = (req, res, next) => {
  const dateAndTime = new Date()
  const formatDateTime = `${dateAndTime.getFullYear()}-${(dateAndTime.getMonth() + 1)}-${dateAndTime.getDate()} ${dateAndTime.getHours()}:${dateAndTime.getMinutes()}:${dateAndTime.getSeconds()}`
  const formatUrl = `${req.baseUrl}${req.url}`
  const log = `---------------------------
  date: ${formatDateTime} 
  method: ${req.method}
  URL: ${formatUrl}
  status: ${res.statusCode}
  requester IP: ${req.ip} \n************`
  console.log(log)
  next()
}

module.exports = {logger}
