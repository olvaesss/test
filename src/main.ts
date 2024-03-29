import express from "express";
import dashboard from './routes/dashboard'
import departments from "./routes/departments";
import employees from "./routes/employees";
import department from "./routes/department";
import employee from "./routes/employee";


const app = express()

const PORT = process.env.EXPRESS_PORT||4000
app.use('/dashboard', dashboard)
app.use('/worker', employee)
app.use('/workers', employees)
app.use('/department', department)
app.use('/departments', departments)

app.listen(PORT, ()=>{console.log(`Server works at: http://localhost:${PORT}`)})