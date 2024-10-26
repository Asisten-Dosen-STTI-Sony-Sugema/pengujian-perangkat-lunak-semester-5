function validateUsername(username) {
  const minLength = 6;
  const startsWithCapital = /^[A-Z]/.test(username);

  return username.length > minLength && startsWithCapital;
}

module.exports = validateUsername;
