// login user
const loginUser = (req, res) => {
  res.status(200).json({ msg: 'User logined' });
};
// signup user
const signupUser = (req, res) => {
  res.status(200).json({ msg: 'User sign up' });
};

module.exports = { loginUser, signupUser };
