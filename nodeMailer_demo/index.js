
// Name	-> Lavern Heidenreich
// Username	-> lavern.heidenreich88@ethereal.email (also works as a real inbound email address)
// Password ->	MXKRWqbZ9brdX2Xht3

//=========Receiver================
// Name	Tania Schmeler
// Username	tania.schmeler38@ethereal.email (also works as a real inbound email address)
// Password	sKbnCMYmXgvGf8AVQ1

// Name	Anahi Stark
// Username	anahi.stark1@ethereal.email (also works as a real inbound email address)
// Password	snK3RRF1k3Fq9qw3mk

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));


const route = express.Router();
app.use('/v1', route)

//send a text mail using postman
route.post('/text-mail', async(req, res) => {
    const transporter =  nodemailer.createTransport({
        host : 'smtp.ethereal.email',
        port : 587,
        secure : false,
        auth : {
            user : 'lavern.heidenreich88@ethereal.email',
            pass : 'MXKRWqbZ9brdX2Xht3' 
        }
    })
    const {to, subject, text} = req.body;
    const mailData  = {
        from : 'lavern.heidenreich88@ethereal.email',
        to : to,
        subject : subject,
        text : text,
        html : '<b>This is our first mail sent with Nodemailer</b>'
    }
    transporter.sendMail(mailData, (err, info) => {
        if(err)
            {
                return console.log(err);
            }         
            res.status(200).send({error:false, message: 'Mail send', message_id: info.messageId, previewURL: nodemailer.getTestMessageUrl(info)})
            console.log('Email sent: ', info.messageId);
            //Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
        })
})

//Send a text mail with image and text file attachments
route.post('/attachments-mail', (req, res) => {

    const transporter = nodemailer.createTransport({
        host : 'smtp.ethereal.email',
        port : 587,
        secure : false,
        auth : {
            user : 'lavern.heidenreich88@ethereal.email',
            pass : 'MXKRWqbZ9brdX2Xht3'
        }
        
    })
    const {to, subject, text} = req.body;
    const mailData = {
        from : 'lavern.heidenreich88@ethereal.email',
        to : to,
        subject : subject,
        text : text,
        html : '<b>This is a email using nodemailer with attachment file </b>',
        attachments : [
            {
                filename: 'screenshot.png',
                path : 'screenshot.png'
            },
            {
                filename : 'sample.txt',
                path : 'sample.txt'
            }
            
        ]
    };
    transporter.sendMail(mailData, (err, info) => {
        if(err)
        {
            return console.log(err)
        }
        res.status(200).send({error:false, message: 'Mail send with attachment', message_id : info.messageId, previewURL: nodemailer.getTestMessageUrl(info)});
        console.log('Email sent: ', info.messageId);
        console.log('Preview URl: ', nodemailer.getTestMessageUrl(info))
    })
})
const server = app.listen(3500, () => {
    let port = server.address().port;
    console.log('Nodemailer example listening on port: ', port);
})