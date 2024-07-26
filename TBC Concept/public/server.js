import express from 'express';
import bodyParser from "body-parser";
import nodemailer from 'nodemailer';

const app = express();
const port = 3000;

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'examplegm12@gmail.com',
//     pass: 'example123example',
//   },
// });

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}))

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.redirect('/ge');
});

app.get('/ge', async (req, res) => {
    try {
        res.render('conceptGe.ejs', {});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/en', async (req, res) => {
  try {
      res.render('conceptEn.ejs', {});
  } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
  }
});

// app.post('/ge', async (req, res) => {
//   try {
//     const infoEmail = req.body.infoEmail;
//     const infoText = req.body.infoText;

//     const mailOptions = {
//       from: `${infoEmail}`,
//       to: 'examplegm12@gmail.com',
//       subject: 'Test Email',
//       text: `${infoText}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//         return res.status(500).send('Error sending email');
//       }
//       res.send('Email sent: ' + info.response);
//     });

//   } catch (err) {
//     console.error('Error:', err);
//     res.status(500).send('Internal Server Error');
//   }
// });



// app.post('/en', async (req, res) => {
//   res.redirect('/en');
//   console.log("U GOT HERE")
// });



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
