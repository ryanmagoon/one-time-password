

module.exports = (req, res) => {
  // Verify the user provided a phone number
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' })
  }

  // Format the phone number to remove dashes and parens
  const phone = String(req.body.phone).replace(/[^\d]/g, '')

  // Create a nrew user account using that phone number

  // Respond to the user request, saying that the account was made

}
