const validationRegister = (req, res, next) => {
  const { displayName, email, password } = req.body;
  const regexEmail = /\S+@\S+\.\S+/;
  const regexPassword = /^.{6,}$/;
  const regexDisplayName = /^.{8,}$/; 

  if (!regexDisplayName.test(displayName)) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' }); 
  }

  if (!regexEmail.test(email)) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' }); 
  }

  if (!regexPassword.test(password)) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' }); 
  }

  next();
};

module.exports = {
  validationRegister,
};