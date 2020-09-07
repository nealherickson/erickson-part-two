let rain = prompt("How many inches of rain fell?")
let inch = "*"
console.log(inch.repeat(parseInt(rain)))

let yield = 50
if(parseInt(rain) >= 20) {
    yield = yield * .9
} else if (parseInt(rain) < 10){
    yield = yield * .8
}
// console.log(yield)
let fertilizer = prompt("Did you use fertilizer?")
// console.log(fertilizer)

if(fertilizer == "no"){
    console.log("The yield should be "+yield.toFixed(2)+" bushels per acre.")

}else if(fertilizer == "yes"){
    var fert_type = prompt("Did you use premium or regular ferilizer?")
    if(fert_type == "premium"){
        yield = yield * 1.15
    } else if(fert_type == "regular"){
        yield = yield * 1.1
    }
    console.log("The yield should be "+yield.toFixed(2)+" bushels per acre.")
    }

   






