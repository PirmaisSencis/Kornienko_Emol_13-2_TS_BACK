import promptSync from 'prompt-sync';
const prompt = promptSync();
// TASK 1
const email:string = String(prompt("Enter your email "))
const password:string = String(prompt("Enter your password "))
const birthdayYear:string = String(prompt("Enter your year of birthday "))
const date = new Date()
type User = {
    userEmail:string,
    userPassword:string,
    userBirthdayYear:string
}
function checkEmptyness(variable:string | number):void{
    if (!variable) {
        throw new Error("Your variables are empty or invalid")
    }
}
function checkVariablelength(variable:string,min:number,max:number):void{
    if(variable.length < min || variable.length > max) {
        throw new Error("Your variable is too short or too long. Try out enter in diapason of 8-16(for password)")
    }
}
function symbolIncluded(variable:string, firstSymbol:string=".", secondSymbol:string="@"):void {
    const regularEmail = /^[^@.\s][^@\s]*@[^@.\s]+(\.[^@.\s]+)+$/;
    if(!variable.includes(firstSymbol) || !variable.includes(secondSymbol)){
        throw new Error("Your email don't includes symbol '@' or '.' ")
    }
    else if(!regularEmail.test(variable)) {
        throw new Error("Your email was typed wrongly ")
    }
}
function checkContext(variable:string):void {
    if(variable.split('').every(letter => letter === variable[0])) {
        throw new Error("Your password can't consist only one letter or symbol")
    }
}
function checkAge(variable:string,now:string):void {
const age = parseInt(now) - parseInt(variable);
    if (age < 17 || age > 100) {
        throw new Error("Your age is now allowed")
}
}


try{
checkEmptyness(email)
checkEmptyness(password)
checkEmptyness(birthdayYear)
checkVariablelength(email, 8 , 40)
checkVariablelength(password, 8 , 16)
symbolIncluded(email)
checkContext(password)
checkAge(birthdayYear, date.getFullYear().toString())
const user:User = {
userEmail:email,
userPassword:password,
userBirthdayYear:birthdayYear
}
console.log(user)
}
catch (error: any) {
    console.error(error.message);
}

// TASK 2

// const userName:string = String(prompt("Enter your name ")).trim()
// const userPhoneNumber:string = String(prompt("Enter your phone number ")).trim()
// const userPostIndex:string = String(prompt("Enter your post index "))
// const userPayment:string = String(prompt("Enter the type of payment ")).trim().toLowerCase()
// type Order = {
//     name:string,
//     phoneNumber:string,
//     postIndex:string,
//     payment:string
// }

// function nameValidation(name:string):void {
//     if(name.length < 2 || name.length > 50){
//         throw new Error("Your name wrought wrongly ")
//     }
// }
// function phoneNumberValidation(phoneNumber:string):void {
//     if(!/^\+\d{10,13}$/.test(phoneNumber)){
//         throw new Error("Your phone number is invalid. ")
//     }
// }

// function postIndexValidation(postIndex:string):void {
//   if(!/^\d{5}$/.test(postIndex)){
//     throw new Error("Your post index is wrong ")
//   }
// }
// function paymentMethodValidation(method:string):string {
//   if (method === "card" || method === "paypal" || method === "cash") {
//     return method
// }
// else {
//     return null
// }
// }

// try {
// checkEmptyness(userName)
// checkEmptyness(userPhoneNumber)
// checkEmptyness(userPostIndex)
// checkEmptyness(userPayment)
// nameValidation(userName)
// phoneNumberValidation(userPhoneNumber)
// postIndexValidation(userPostIndex)
// paymentMethodValidation(userPayment)
// const order:Order = {
//     name:userName,
//     phoneNumber:userPhoneNumber,
//     postIndex:userPostIndex,
//     payment:userPayment
// }
// console.log(order)
// }
// catch(error:any){
//     console.error(error.message)
// }




// TASK 3

// const userName:string = String(prompt("Enter your name "))
// const userEmail:string = String(prompt("Enter your email "))
// const userMark:number = Number(prompt("Enter your mark "))
// const userCommentText:string = String(prompt("Enter the text of comment "))
// type Review = {
//     name:string,
//     email:string,
//     mark:number,
//     commentText:string

// }
// function checkContext(variable:string | number):void {
//     if(variable === userName){
//         if(variable.length < 3 || variable.length > 20){
//             throw new Error("Your name is too short or too long. Check it again")

//         }
//     }
//     else if(variable === userEmail){
//         const emailRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if(!emailRegular.test(variable)){
//             throw new Error("Your email is wrong. Rewrite it")
//         }
//     }
//     else if(variable === userMark){
//         if(userMark <1 || userMark > 6) {
//             throw new Error("Your rate is invalid. Try to input mark from 1 to 5")
//         }
//     }
//     else if(variable === userCommentText) {
//         if(userCommentText.length < 1 || userCommentText.length > 300)
//             throw new Error("Your comment is to short or too long. Try in this diapason 1-300")
//     }
// }
// try{
// checkEmptyness(userName)
// checkEmptyness(userEmail)
// checkEmptyness(userEmail)
// checkEmptyness(userCommentText)
// if (isNaN(userMark)){
//     throw new error("Your rate is invalid")
// }
// checkContext(userName)
// checkContext(userEmail)
// checkContext(userMark)
// checkContext(userCommentText)
// const review:Review = {
// name:userName,
// email:userEmail,
// mark:userMark,
// commentText:userCommentText
// }
// console.log(review)
// }

// catch(error:any) {
//     console.error(error.message)
// }


//lvl 3 
//TASK 4 updated ^.^


    
// const temperature:string = String(prompt("Enter the temperature "))
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
