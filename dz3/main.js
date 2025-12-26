// function calculator(num1 = 0,num2 = 0,Sign = "+"){
//     try {
//         switch (Sign){
//             case "+":{
//                 alert(`${num1} + ${num2} = ${num1 + num2}`)
//                 break
//             }
//             case "-":{
//                 alert(`${num1} - ${num2} = ${num1 - num2}`)
//                 break
//             }
//             case "*":{
//                 alert(`${num1} * ${num2} = ${num1 * num2}`)
//                 break
//             }
//             case "/":{
//                 alert(`${num1} / ${num2} = ${num1 / num2}`)
//                 break
//             }
//         }
//     }
//     catch(error){
//         alert("Ошибка")
//     }
// }
// number1 = Number(prompt("Введите число: "))
// number2 = Number(prompt("Введите число: "))
// sign = prompt("Введите знак: ")
// calculator(number1,number2,sign)


// function  MultiplicationTable(number){
// for (let i = 1;i <=10;i++){
//     console.log(`${number} * ${i} = ${number * i}`)
// }
// }

// num = Number(prompt("Введите число:"))
// MultiplicationTable(num)

// function taim(hour = 0,minutes = 0,seconds = 0){
//     return ((hour * 60) *60) + (minutes * 60) + seconds
// }
// ho = Number(prompt("Введите часы"))
// min = Number(prompt("Введите минуты"))
// sec = Number(prompt("Введите секунды"))

// console.log(taim(ho,min,sec))

// function taim(hour = 0,minutes = 0,seconds = 0){
//     if (hour === 0 && minutes === 0 && seconds == 0){
//         alert(`00:00:00`)
//     }
//    else if (hour == 0){
//         alert(`00:${minutes}:${seconds}`)
//     }
//     else if (minutes === 0){
//         alert(`${hour}:00:${seconds}`)
//     }
//     else if (seconds === 0){
//         alert(`${hour}:${minutes}:00`)
//     }
//     else{
//     alert(`${hour}:${minutes}:${seconds}`)
//     }
// }
// ho = Number(prompt("Введите часы"))
// min = Number(prompt("Введите минуты"))
// sec = Number(prompt("Введите секунды"))
// taim(ho,min,sec)

// function magical(num0,num1,num2){
//    mag0 = String(num0)
//    mag1 = String(num1)
//    mag2 = String(num2)
//     number = Number(mag0 + mag1 + mag2)
//     console.log(number)
// }


// number0 = Number(prompt("Введите первое число"))
// number1 = Number(prompt("Введите второе число"))
// number2 = Number(prompt("Введите третье число"))

// magical(number0,number1,number2)

// function larger(num0,num1){
//     if(num0 < num1){
//         return -1;
//     }
//     else if (num0 > num1){
//         return 1;
//     }
//     else{
//         return 0
//     }
// }
// number0 = Number(prompt("Введите первое число"))
// number1 = Number(prompt("Введите второе число"))
// console.log(larger(number0,number1))

// function weatherForecast(city = "Светлоград",weather = "Хорошая погода"){
//     alert(`Город: ${city},погода: ${weather}`)
// }
// city = prompt("Введите город")
// weather = prompt("Введите погоду")
// weatherForecast(city,weather)