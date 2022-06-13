let nodemailer = require('nodemailer')

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    host:'smtp.qq.com',
    secureConnection:true ,// 使用ssl
    port:465, // true 端口为465,false则为其他端口
    secure:true,
    auth:{
        user:'917495617@qq.com',
        pass:'xxxxxx'
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '我是发件人<progerchai@qq.com>', // sender address
    to: 'progerchai@qq.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});


// sendMail('progerchai@qq.com','这是测试邮件', '这是内容');