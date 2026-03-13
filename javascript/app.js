// // console.log
// console.log('I am alive...!');
// console.log('Hello Brother...!');
// let a = 10;
// let b = 5;
// console.log('Sum is : ',a+b);

// //Template Litrals
// let item = 34;
// let totalExpense = 50;
// console.log(`You have saved ${totalExpense - item}`);

// //conditions statements
// let age = 17;
// if(age <18){
//     console.log(`You cant vote`);
// }else{
//     console.log(`You can vote`);
// }

// //logical operator
// let answer = true;
// console.log(`${!answer}`);

// //Switch case 
// let day = 0;
// switch(day){
//     case 1 : console.log(`monday`)
//     break;
//     case 2 : console.log(`tuesday`)
//     break;
//     case 3 : console.log(`wednesday`)
//     break;
//     case 4 : console.log(`thursday`)
//     break;
//     case 5 : console.log(`friday`)
//     break;
//     case 6 : console.log(`saturday`)
//     break;
//     case 7 : console.log(`sunday`)
//     break;
//     default: console.error(`${day}`);
// }

// //Strings method
// let word = "      lov e    ";

// //Strings methods
// /*trim() slice() replace() repeat()*/ 

// //Arrays
// let nums = [2,3,4,5,6];
// console.log(nums)

// //2D Array
// let mulArr = [['x',null,'o'],[null,'x',null],['o',null,'x']];
// console.log(`${mulArr}`)

// //Loops
// //for loop
// for(let i = 0; i<=15 ; i++){
//     if(i%2 !== 0){
//         console.log(i);
//     }
// }
// for(let i = 0; i<=15 ; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// //nested loops
// for (let index1 = 0; index1 < 4; index1++) {
//         console.log(`for ${index1} value is :`)
//     for (let index2 = 0; index2 < 4; index2++) {
//         console.log(`${index2}`)
// }
// }


// let fruits = [['apple','mango'],['banana','grapes'],['orange','pineapple']]
// for(let i = 0; i<=fruits.length-1; i++){
//     for(let j = 0; j<=fruits[i].length-1; j++){
//     console.log(`${fruits[i][j]}`)
// }
// }
// console.warn('here we go....')
// //for-of loops
// for(fruit of fruits){
//     for( item of fruit){
//         console.log(item)
//     }
// }

// //Questions
// // let prac = [1,2,3,4,5,6,2,3];
// // let req = parseInt(prompt('enter the element you want to delete from array'));
// // for( let i = 0; i<= prac.length-1; i++){
// //     if(req === prac[i]){
// //         prac.splice(i,1);
// //         console.log(`deleted successsfully`)
// //         console.log(prac);
        
// //     }
// // }

// let req = prompt('enter the number')
// let totalSum = 0;
// for(let i = 0; i<=req.length-1; i++){
//     totalSum = parseInt(req[i])+totalSum;
// }
// console.log(totalSum);

// const post ={
//     username : "yogesh chouhan",
//     content : "travel toward heven",
//     likes : 143,
//     reports : 5,
//     tags : ["apna@college","@delta"]
// }

// // Object of objects 
// const classInfo = {
//     aman : {
//         sub : "hindi",
//         marks : 89
//     },
//     sunil : {
//         sub : "marathi",
//         marks : 43
//     },
//     priti : {
//         sub : "english",
//         marks : 94
//     }
// }

// console.log(classInfo.priti.sub)

// // Arrays of objects
// const clgInfo = [
//     {name : "aman", age : 21},
//     {name : "kaman", age : 24},
//     {name : "raman", age : 29}
// ]

// gussing game 

//Functions 
// function print(){
//     console.log(`Twinkle Twinkle little Star`);
// }

// print();

// function  rollDice (){
//     let value = Math.floor((Math.random() * 6)+1);
//     console.log(value); 
// }

// rollDice();

// function namePrint(name,age){
//     console.log(name,age);
// }

// namePrint("sachine",29);
// namePrint("Aniket",27);
// namePrint("Rahul",35);
// namePrint("Madhuri",32);

// function calSum(a,b,c){
//     return (a+b+c)/3;
// }

// console.log(calSum(2,3,4));
// console.log(calSum(3,4,5));
// console.log(calSum(4,5,6));

// console.log(`----------------------------`);

// function printTable(n){
//     for(let i = n ;i<=n*10; i=i+n){
//         console.log(i);
//     }
// }

// printTable(5);

// console.log(`----------------------------`);

// function strConcat(arr){
//     let finalWord = " ";
//     for (let st of arr) {
//         finalWord+=st;
//         finalWord+="_";
//     }
//     return finalWord;
// }
// let arr = ["suman","sandeep","ranjit","vishal"];
// console.log(strConcat(arr));

// function largeEle(n){
//     let arr = [1,2,3,4,5,6,7,8,9,10];
//     for(let i = 0 ;i <= arr.length; i++){
//         if (arr[i] >n) {
//             return arr[i];
//         }
//     }
//     return -1;
// }

// console.log(largeEle(2));

// function uniqEle(str){
//     let ourStr = " ";
//     for (let chars of str) {
//         if (!ourStr.includes(chars)) {
//             ourStr+=chars;
//         } 
//     }
//     return ourStr;
// }

// console.log(uniqEle("abcdabcdefgggh"));
    

// function vowelCount(str){
//     let count = 0;
//         for (let i = 0; i< str.length; i++) {
//             if (
//                 (str.charAt(i) == 'a')||
//                 (str.charAt(i) == 'e')||
//                 (str.charAt(i) == 'i')||
//                 (str.charAt(i) == 'o')||
//                 (str.charAt(i) == 'u')
//             )
//             {
//                 count++;
//             } 
//         }
//         return count
//     }

// console.log(vowelCount("abcdaqwertyuiopbcdefgwfqiufw"));


// //THIS keyword in js
// const student = {
//     name: "yogesh",
//     age: 22,
//     average (){
//         console.log(this.name,this.age);
//     }
// }

// const square = n => n*n;
// console.log(square(4));


// /*
// forEach -> iterate though each ele.
// map -> same but store them in diff array of same size
// filter -> create condition for adding the ele in new array
// Every -> return true if all true and false if one of them is false
// Some -> same as earlier
// reduce -> have 2 value (accumulator,element) the value of accumulator is passed to the next ele
// */

// let array = [2,-3,3,1,2,1,44,5,3,22,666,3];
// let largestNum = array.reduce((max,ele)=>{
//     if(max<ele){
//        return ele;
//     }else{
//         return max;
//     }
// });

// console.log(largestNum);

// //Arrow Vs Normal
// const studentInfo = {
//     name: "Aman",
//     marks : 21,
//     prop : this,
//     getName(){
//         console.log(this)
//         return this.name;
//     },
//     getMarks:()=>{
//         console.log(this)
//         return this.marks;
//     }
// };

// // console.log(studentInfo.getName())
// // console.log(studentInfo.getMarks())
// // console.log(studentInfo.prop)
// //console.log(...studentInfo)

// function rest(...args){
//    return args.reduce((add,ele)=>{
//         return add + ele;
//     })
// }

// console.log(rest(1,2,4,3,2,1,5,7));

// // Destructuring
// let racers = ["tony","bruce","thor"]
// let [strong,weak] = racers

// console.log(strong,weak)

// let tonyStark = {
//     name:"iron man",
//     age:34,
// }

// //{key search : variable} = object name;
// let {name:Hero_ka_naam, age:Hero_ki_age, address:Pata="burhanpur"} = tonyStark;
// console.log(Hero_ka_naam,Hero_ki_age,Pata)



// //questions
// let arrr = [1,2,3];
// let que1 = arrr.reduce((acc,ele)=>{
//     return acc+(ele*ele);
// })
// console.log(que1);

/*
function saveDB(data){
    return new Promise((resolve,reject)=>{
        let spd = Math.floor((Math.random()*10)+1);
        if(spd > 4){
            resolve("Data Saved");
        }else{
            reject("Data Failure");
        }
    });
}

saveDB("yogesh").then(()=>{
    console.log("data 1");
    return saveDB("Tilak");
}).then(()=>{
    console.log("done again");
    return saveDB("Jyoti");
}).then(()=>{
    console.log("Done One more time");
})
.catch(()=>{
    console.log("failure in doing so")
})
*/

// saveDB("yogesh").then(()=>{
//     console.log("Data 1 is stored in the Db")
//     saveDB("Prem").then(()=>{
//         console.log("Data 2 is stored in the Db");
//         saveDB("Aniket").then(()=>{
//             console.log("Data 3 is stored in the Db");
//             saveDB("Pawan").then(()=>{
//                 console.log("Data 4 is stored in the Db")
//             })
//         })
//     })
// })
// .catch(()=>{
//     console.log("Something went wrong due to internet connection")
// })

let url = "https://catfact.ninja/fact";

// fetch(url).then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data);
//     console.log(data.fact);
// })


// async function factOfTheDay(){
//     try{
//         //1
//         await fetch(url).then((res)=>{
//             return res.json();
//         }).then((data)=>{
//             console.log(data.fact);
//         }).catch((err)=>{
//             console.log('Something went wrong...!')
//         })
//         //2
//         await fetch(url).then((res)=>{
//             return res.json();
//         }).then((data)=>{
//             console.log(data.fact);
//         }).catch((err)=>{
//             console.log('Something went wrong...!')
//         })
//         //3
//         await fetch(url).then((res)=>{
//             return res.json();
//         }).then((data)=>{
//             console.log(data.fact);
//         }).catch((err)=>{
//             console.log('Something went wrong...!')
//         })
//     }catch(err){
//         console.error(err);
//     }
//     console.log("hi");
//     console.log("hello");
//     console.log("hey....!");
// }

// async function factOfTheDay(){
//     await axios.get(url).then((res)=>{
//         // console.log(res);
//         // console.log(res.data.fact);
//         return res;
//     }).then((result)=>{
//         //console.log(result.data)
//         return result.data;
//     }).then((hmmm)=>{
//         console.log(hmmm.fact)
//     })
// }
async function factOfTheDay(){
    try{
        await axios.get(url).then((res1)=>{
        console.log(res1);
        console.log(res1.data);
        console.log(res1.data.fact);
    })

        await axios.get(url).then((res2)=>{
        console.log(res2);
        console.log(res2.data);
        console.log(res2.data.fact);
    })

        await axios.get(url).then((res3)=>{
        console.log(res3);
        console.log(res3.data);
        console.log(res3.data.fact);
    }).catch((err)=>{
        console.error("Maa ka Bhosda AAG")
    })
    }catch(err){
        console.log(err);
    }
}