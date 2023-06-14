const { BlockList } = require("net")
const { resolve } = require("path")

function Evaluate(){
    const Total_Amount = document.getElementById("Total-Amount")
    const Drop_down = document.getElementById("Selection-box")
    const Total_Persons = document.getElementById("Total-Persons")
    const Output = document.getElementById("Output")

    const total_amount = Total_Amount.value
    const tip = Drop_down.value
    const n_person = Total_Persons.value
    // console.log(`Amount: ${total_amount} Tip: ${tip} Persons: ${n_person}`)
    const values = {
        "total_amount" : total_amount,
        "tip":tip,
        "n_person":n_person
    }
    axios.post('http://localhost:3456/gettinginfo',values).then((response)=>{
        Output.style.display="block"
        const ar1 = document.getElementById("Tip-per-person")
        const ar2 = document.getElementById("Amout-per-person")
        const ar3 = document.getElementById("TotalAndtip")
        ar1.innerHTML = response.data.Tip_per_person
        ar2.innerHTML = response.data.Amount_per_person
        ar3.innerHTML = response.data.Total_and_tip
    }).catch((err)=>{
        console.log(err)
    })
}