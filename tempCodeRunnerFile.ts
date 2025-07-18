const temperature:string = String(prompt("Enter the temperature "))
// let convert:number
// let result:string
// type Temperature = {
//     value: number,
//     type: string
// }
// function convertTemperature(value:string):void {
//     value = value.trim();
//     const part = value.split(" ")
//     if(part.length !== 2) {
//         throw new Error("Your value is invalid. Try like this: 103 C or 32 F")
//     }
//     let temp:Temperature = {
//         value:Number(part[0]),
//         type:part[1]
//     }
// if(isNaN(Number(temp.value)) || temp.type !== "C" && temp.type !== "F"){
//     throw new Error("Your value is invalid. Try like this: 103 C or 32 F")
// }
// else if(temp.type === "C") {
//     convert = (temp.value * 9 / 5) + 32
//     result = "F" 
// }
//     else {
//         convert = ((temp.value - 32) * 5) / 9
//         result = "C"
//     }
// }
// try{
// convertTemperature(temperature)
// console.log(`Temperature is equal: ${convert.toFixed(1)} ${result}`)
// }
// catch(error:any) {
//     console.error(error.message)
// }