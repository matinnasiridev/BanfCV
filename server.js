const express = require('express')
require('dotenv').config()
const app = express()

app.use(express.static("public"))
app.set('view engine', 'ejs')

app.get('/downloadResume', (req, res) => res.download('public/pdf/MatinNasiriAndroid.pdf'))
app.get('/', (req, res) => res.render('index', JSON.parse(process.env.CONFIG) ))

app.use((req, res, next) => res.redirect('/'))



app.listen(3003,()=> console.log("Server On 3003 Is Running..."))