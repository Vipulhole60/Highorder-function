let cl = console.log;


// HIgh order function >> A function which accepts another function as a parameter/argument 
// Callback function >>  A function which is passed as a parameter/argument inside another function
  // para >> it will gives us each  and every elements of array one by one 
// let ages = [10, 25, 64, 65, 54, 89, 32, 15];

// let dobuleages = [];

// for (let i = 0; i < ages.length; i++){
// //     cl(ages[i] * 2)
// dobuleages.push(ages[i] * 2)
//  }
//  cl(dobuleages);

// ages.forEach(function(age){
//   dobuleages.push(age * 2)
// })
// cl(dobuleages);

// ages.forEach((age) => {
//     dobuleages.push(age * 2)
// })
// cl(dobuleages);

// ages.forEach(age => dobuleages.push(age *2 ))
// cl(dobuleages);


//  1 map array
// Use case of map method 
// you have given a array 
// you have create a new array from given array 
// you have to apply same functionality on each and every element of given array 
// it returns new array 
// length of new array === length of given new array (always)


let oldyear = [54, 56, 46, 48, 48, 26, 35, 57];

// let oldyears = oldyear.map(function(old){
//     return old * 2
// })
// cl(oldyears);

// let oldyears = oldyear.map((old) => {
//      return old * 2
// })
// cl(oldyears)

let oldyears = oldyear.map(old => old * 2)
cl(oldyears);


//  square roots 

// let num = [55, 89, 19, 45, 47, 12, 54];

//  let numbers = []; 


// for(let i = 0; i < num.length; i++){
//     numbers.push(Math.sqrt(num[i]))
// }
// cl(numbers);

// num.forEach(function(number){
//     numbers.push(Math.sqrt(number))
// })                
// cl(numbers);

// num.forEach((number) => {
//   numbers.push(Math.sqrt(number))
// })
// cl(numbers);

// num.forEach(number => numbers.push(Math.sqrt(number)))
// cl(numbers);




// 1 example

let run = [44, 51, 55, 15, 94, 65, 24, 75, 89,];

doubleruns = [];

for(i = 0; i < run.length; i++){
doubleruns.push(run[i] * 2)
}
cl(doubleruns);

// run.forEach(function(runs){
//   doubleruns.push(runs * 2)
// })
// cl(doubleruns);

// run.forEach((runs)=>{
//   doubleruns.push(runs * 2)
// })
// cl(doubleruns);

run.forEach(runs => doubleruns.push(runs * 2))
cl(doubleruns);

// map function 

let gol = [5, 18, 578, 19, 61, 369];

// let tgols = gol.map(function(gols){
//   return gols * 2
// })
// cl(tgols);

// togls = gol.map((gols) => {
//   return gols * 2
// })
// cl(togls);

togls = gol.map(gols => gols * 2)
cl(togls);


// let companies = [
//   { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//   { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//   { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//   { name: "Company Four", category: " ", start: 1989, end: 2010 },
//   { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//   { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//   { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//   { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//   { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];

//  companiesname = [];
   // for loop
// for(let i = 0; i < companies.length; i++){
//   companiesname.push(companies[i].name)
// }
// cl(companiesname);

  //  // for each 
  //  companies.forEach(function(comp){
  //   companiesname.push(comp.name)
  //  })
  //  cl(companiesname);

  // companies.forEach((comp)=>{
  //   companiesname.push(comp.name)
  // })   
  // cl(companiesname);

  // companies.forEach(comp => companiesname.push(comp.name))
  // cl(companiesname);

  // let companiesname = companies.map(function(comp){
  //    return comp.name
  // })
  // cl(companiesname);
  
  // let  companiesname = companies.map(comp => comp.name)
  // cl(companiesname);

  // [{compName : "company one ", start : 1982}, {compName : "comany name"}]
  let comanystart = [];
//  for(i = 0;  i < companies.length; i++){
//    comanystart.push({
//     compname : companies[i].name,
//     start : companies[i].start
//    })
//  }
// cl(comanystart);

// companies.forEach(function (comp){
//     comanystart.push({
//       compname : comp.name,
//       start : comp.start
//   })
// })
// cl(companies);

// comanystart = companies.map(function(comp){
//   return{
//     compname : comp.name,
//     start : comp.start
//   }
// })
// cl(comanystart);

// comanystart = companies.map(comp  => {
// return{
//   compname : comp.name,
//   start : comp.start
// }
// })
// cl(comanystart);

let companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: " ", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

let compduaration = [];
// for(let i = 0; i < companies.length; i++){
//   compduaration.push({
//     compname : companies[i].name,
//     duration : companies[i].end - companies[i].start
//   })
// } 
// cl(compduaration);

// companies.forEach(function(comp){
// compduaration.push({
//   compname : comp.name,
//   duration : comp.end - comp.start
//  })
// })
// cl(compduaration);

companies.forEach(comp => compduaration.push({
  compname : comp.name,
  duration : comp.end - comp.start
}))

cl(compduaration);

// compduaration = companies.map(comp => {
//   return {
//     compname : comp.name,
//     duration : comp.end - comp.start
//   }
// })
// cl(compduaration);


// for(let i=0; i<companies.length; i++){
//     compDuration.push({
//         CompName : companies[i].name,
//         Duration : companies[i].end - companies[i].start
//     })
// }

// companies.forEach(function(ele){
//     compDuration.push({
//         StartName : ele.name,
//         Duration : ele.end - ele.start
//     })
// })

// companies.forEach(ele => compDuration.push({
//     compName : ele.name,
//     Duration : ele.end - ele.start 
// }))

// compDuration = companies.map(function(ele){
//     return {
//         compName : ele.name,
//         Duration : ele.end - ele.start
//     }
// })

compDuration = companies.map(ele => (
    {
        compName: ele.name,
        Duration: ele.end - ele.start
    }
))
cl(compDuration);

// let categoryInfo = [] = companies.map(ele => (
//     {
//         compName : ele.name,
//         category : ele.category
//     }
// )) 
// cl(categoryInfo)

// let categoryInfo = [];
// companies.forEach(ele => categoryInfo.unshift({
//     compName : ele.name,
//     category : ele.category
// }))
// cl(categoryInfo)

// filter  >> return array
// you have a given array and atleast one condition
// you have to create new array of elements (of given array), who pass/satisfy the given condition
// length of new array is may or may not be equal of given array

ages = [10, 21, 30, 41, 50, 61, 70, 81, 90];
let adultAges = [];

// for(let i=0; i<ages.length; i++){
//     if(ages[i] >= 18){
//         adultAges.push(ages[i])
//     }
// }

// ages.forEach(ele => {
//    if(ele >= 18){
//      adultAges.push(ele)
//    }
// })

// using filter method
// adultAges = ages.filter(function (age){
//     if(age >= 18){
//         return true   
//     }else{
//         return false
//     }
// })

// adultAges = ages.filter(function (age) {
//     return (age >= 18)
// })

adultAges = ages.filter(age => age >= 18)
cl(adultAges)

// using companies array
let compRetail = []
// for(let i = 0; i<companies.length; i++){
//     if(companies[i].category.toLowerCase().trim() === 'retail'){
//         compRetail.push(companies[i])
//     }
// }

// companies.forEach(function(ele){
//     if(ele.category.toLowerCase().trim() === 'retail'){
//         compRetail.push(ele)
//     }
// })

// companies.forEach(ele => {
//     if(ele.category.toLowerCase().trim() === 'retail'){
//         compRetail.push(ele)
//     }
// })

// compRetail = companies.filter(ele => {
//     return ele.category.toLowerCase().trim() === 'retail'
// })

compRetail = companies.filter(ele => ele.category.toLowerCase().trim() === 'retail')
cl(compRetail);

// condition based duration of company
let compAtLeast10 = []
// for (let i = 0; i < companies.length; i++) {
//     if (companies[i].end - companies[i].start >= 10) {
//         compAtLeast10.push({
//             compName : companies[i].name,
//             category : companies[i].category
//         })
//     }
// }
//  companies.forEach(ele => {
//      if(ele.end - ele.start >= 10){
//          compAtLeast10.push({
//             compName : ele.name,
//             category : ele.category
//          })
//      }
//  })
//  cl(compAtLeast10)

compAtLeast10 = companies.filter(ele => ele.end - ele.start >= 10).map(ele => ({ CompName: ele.name, category: ele.category }))
cl(compAtLeast10)

//  the companies, who started in between 1980 to 1989
// [{compName: 'Company One', lifeSpend: '1981 2003'}] 
let comp80s = [];
// for(let i=0; i<companies.length; i++){
//     if(companies[i].start >= 1980 && companies[i].start <= 1989){
//         comp80s.push({
//             compName : companies[i].name,
//             Duration : `${companies[i].start} ${companies[i].end}`
//         })
//     }
// }

// companies.forEach(ele => {
//     if (ele.start >= 1980 && ele.start <= 1989) {
//         comp80s.push({
//             compName: ele.name,
//             Duration: ele.end - ele.start`
//         })
//     }
// })
comp80s = companies.filter(ele => (ele.start >= 1980 && ele.start <= 1989)).map(ele => ({compName : ele.name, Duration : ele.end - ele.start }))
cl(comp80s)

let compFinance = [];
// for(let i = 0; i < companies.length; i++){
//     if(companies[i].category.toLowerCase().trim() === 'finance'){
//         compFinance.push({
//             compName : companies[i].name,
//             LifeSpend : `${companies[i].start} - ${companies[i].end}`,
//         })
//     }
// }
// companies.forEach(ele => {
//     if(ele.category.toLowerCase().trim() === 'finance'){
//         compFinance.push({
//             compName : ele.name,
//             lifeSpend : `${ele.start} - ${ele.end}`
//         })
//     }
// })
compFinance = companies.filter(ele => ele.category.toLowerCase().trim() ==='finance').map(ele => ({CompName : ele.name, lifeSpend : `${ele.start} - ${ele.end}`}))
cl(compFinance)

// FIND()  >> return object
// you have given a array and one condition
// and we have to find object which is passed in given condition

companies = [
    { name: "Company One", id: "1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: "2", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: "3", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: "4", category: "RetAil", start: 1989, end: 2010 },
    { name: "Company Five", id: "5", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: "6", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: "7", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: "8", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: "9", category: " retail ", start: 1981, end: 1989 }
];

let givenId = 4
let getObj;
// companies.forEach(comp => {
//     if(Number(comp.id) === givenId){
//         getObj = comp;
//     }
// })

// find()    >>if conditon get fullfill then find() method stop the execution
// filter()  >>if conditon get fullfill then also filter() method get itrate till end
getObj = companies.find(comp => {    // find method is used to find the condition 
    return +comp.id === givenId
})
cl(getObj)

// reduce()
ages = [10, 21, 30, 41, 50, 61, 70, 81, 90];

totalAges = 0;
// ages.forEach(age => {
//     totalAges += age
// })

totalAges = ages.reduce((accum, nxtVal) => accum = accum + nxtVal)
cl(totalAges)

let mulAges = ages.reduce((mul, nextVal) => mul *= nextVal)
cl(mulAges)

let compDur = companies.reduce((accu, dur) => {
    accu.push({
        compName: dur.name,
        Duration: dur.end - dur.start
    })
    return accu
}, [])
cl(compDur)

let compAge = companies.reduce((age, next) => {
    return age += next.end - next.start
}, 0)
cl(compAge)