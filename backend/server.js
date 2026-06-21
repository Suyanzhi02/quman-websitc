
require('dotenv').config()

const express = require('express')
const multer = require('multer')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()

app.use(cors())

const upload = multer({
  limits: {
    fileSize: 10 * 1024 * 1024
  }
})

const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})
app.post(
  '/api/resume',
  upload.single('resume'),
  async (req, res) => {

    console.log('=====收到请求=====')
    console.log('body:', req.body)
    console.log('file:', req.file)
    try {

      const { username, useremail } = req.body

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: '未上传简历文件'
        })
      }

      await transporter.sendMail({
        from: process.env.EMAIL_USER,

        to: '3419055459@qq.com',

        subject: `新简历投递 - ${username}`,

        html: `
          <h2>收到新的简历投递</h2>
          <p><strong>姓名：</strong>${username}</p>
          <p><strong>邮箱：</strong>${useremail}</p>
          <p><strong>简历文件：</strong>${req.file.originalname}</p>
        `,

        attachments: [
          {
            filename: req.file.originalname,
            content: req.file.buffer
          }
        ]
      })

      res.json({
        success: true,
        message: '投递成功'
      })

    } catch (err) {

  console.error('================')
  console.error(err)
  console.error('================')

  res.status(500).json({
    success: false,
    message: err.message
  })
}
  }
)

app.listen(3000, () => {
  console.log('简历服务器启动成功：http://localhost:3000')
})
