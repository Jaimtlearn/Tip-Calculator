const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/gettinginfo',(req,res)=>{
    // console.log(req.body)
    var total_amount = Number(req.body.total_amount)
    var tip = Number(req.body.tip)
    var n_person = Number(req.body.n_person)
    var total_and_tip = total_amount + total_amount * (tip/100)
    var tip_per_person = (total_and_tip - total_amount)/n_person
    var amount_per_person = total_and_tip / n_person
    console.log(`Tip Per Person ${tip_per_person.toFixed(2)} Amount Per Person ${amount_per_person.toFixed(2)} Total and Tip ${total_and_tip.toFixed(2)}`)
    // res.status(200).json(req.json(req.body))
    const values = {
        "Tip_per_person":tip_per_person.toFixed(2),
        "Amount_per_person":amount_per_person.toFixed(2),
        "Total_and_tip":total_and_tip.toFixed(2)
    }
    res.status(200).json(values)
})

app.listen('3456',()=>{
    console.log("Server is listening at port 3456")
})