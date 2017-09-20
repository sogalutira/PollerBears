const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const CONFIG = require('./config.json'); 
const mailConfig = require('./env.json');
const fs = require('fs');
const connection = mongoose.connect('mongodb://heroku_kxlgbn5c:71lut2aoai91n3pdhnmvb54usl@ds141474.mlab.com:41474/heroku_kxlgbn5c');
const app = require('./app');
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'build_final')));

mongoose.connection.once('open', function() {
  console.log('connected');

<<<<<<< HEAD
  var server = app.listen(13001, function(){
=======
  var server = app.listen(process.env.PORT || 3001, function(){
>>>>>>> master
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening on',host, port);
  });
});

/*------------------SMTP Start-----------------------------*/
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: mailConfig.SMTP_LOGIN,
        pass: mailConfig.SMTP_PASSW
    }
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

app.get('/',function(req,res){
  res.sendfile('Map.js');
});

app.get('/send',function(req,res){
  var mailOptions={
      from: "PollerBears <fsgcodedummy@gmail.com",
      to : req.query.to,
      subject : req.query.subject,
      text : req.query.text
  }
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
   if(error){
          console.log(error);
      res.end("error");
   }else{
          console.log("Message sent: " + response.message);
      res.end("sent");
       }
  });
<<<<<<< HEAD
});

app.listen(18000,function(){
    console.log("Express Started on Port 18000");
});
=======
});
>>>>>>> master
