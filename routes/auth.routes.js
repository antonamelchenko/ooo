const { Router } = require('express')
const router = Router()
const User = require('../model/User')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Uncorrectly email').isEmail(),
    check('password', 'Minimum length of password is 6 symbols').isLength({
      min: 6,
    }),
    check('login', 'Maximum length of login is 11 symbols').isLength({
      max: 11,
    }),
  ],
  async (req, res) => {
    try {
      console.log('Body', req.body)

      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Uncorrecntly registration data',
        })
      }

      const { email, password, login } = req.body

      const candidateEmail = await User.findOne({ email })
      const candidateLogin = await User.findOne({ login })

      if (candidateEmail) {
        return res
          .status(400)
          .json({ message: 'Пользователь с таким email уже существует' })
      }
      if (candidateLogin) {
        return res
          .status(400)
          .json({ message: 'Пользователь с таким логином уже существует' })
      }

      const hashePassword = await bcrypt.hash(password, 12)

      const user = new User({ email, password: hashePassword, login })

      await user.save()

      res.status(201).json({ message: 'Пользователь создан' })
    } catch (e) {
      res.status(500).json({ message: 'Somethink wrong, try again' })
    }
  }
)

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Input correct email').normalizeEmail().isEmail(),
    check('password', 'Input passwort').exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Проверьте правильность ввода данных',
        })
      }

      const { email, password } = req.body

      // const userLogin =  User

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res
          .status(400)
          .json({ message: 'Неверный пароль, попробуйте снова' })
      }

      const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
        expiresIn: '1h',
      })

      res.json({
        token,
        userId: user.id,
        message: 'Вход в систему выполнен успешно',
      })

      // res.status(201).json({ message: 'Пользователь создан' })
    } catch (e) {
      res.status(500).json({ message: 'Something wrong' })
    }
  }
)

module.exports = router
