const path = require('path')
const expresss = require('express')
const morgan = require('morgan')
const app = expresss();
const mysql = require('mysql')
const myConnection = require('express-myconnection');
const { format } = require('morgan');
const {port, DB_HOST, DB_NAME, DB_USER, DB_PASS,DB_PORT} = require('./config')
//routes
const clientesRoutes = require('./routes/clientes')


//settings
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,"views"))

//middlewares
app.use(morgan('dev'))
app.use(expresss.static(path.join(__dirname, "views", "public")))
app.use(expresss.json())
app.use(expresss.urlencoded({extended:true}))

console.log("DB INFO ==================== ",DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);
app.use(myConnection(mysql,{
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASS,
    database:DB_NAME,
    port:DB_PORT
}))

app.use("/",clientesRoutes);

app.listen(port, () => {console.log("App running on port " ,port)})