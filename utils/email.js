const nodemailer = require('nodemailer');
const { convert } = require('html-to-text');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.name = user.name.split(' ')[0];
    this.url = url;
    this.from = `Testing App <${process.env.EMAIL_CLASS_FROM}>`;
    this.x = true;
  }

  //Development
  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      //Sendgrid to be set here
      return 1;
    }
    return nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  //Send email
  async send(subject) {
    // 1) Render HTML
    const htmlW = `<p>Hi ${this.name},</p>
      <p>Welcome to Petxy Shop, we're glad to have you</p> 🎉🙏
      <a href=${this.url} target='_blank'> Upload user photo</a>
      <p>If you need any help, please don't hesitate to contact us!</p>
    `;
    const htmlF = `<p>Hi ${this.name}</p>
      <p>Forgot your password? 
      Please click on the link below to create a new password:</p>
      <a href=${this.url} target='_blank'> Reset your password</a>
      <p> If you didn't request a new password , please ignore this email</p>
    `;

    // 2. Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html: this.x ? htmlW : htmlF,
      text: convert(htmlW, {
        selectors: [
          // url to be updated
          { selector: 'a', options: { baseUrl: '/me' } },
          { selector: 'p', format: 'skip' },
        ],
      }),
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    this.x = true;
    await this.send('Welcome to the FreakingTours Family!');
  }

  async sendPasswordReset() {
    this.x = false;
    await this.send('Forgot your password mate? no worries');
  }
};
