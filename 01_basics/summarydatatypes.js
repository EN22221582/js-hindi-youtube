// MAINLY DATA TYPES gets catagorized in 2 types ....

// PRIMIIVE 
// 7 types=> String Number,Boolean,null,undefined ,Symbol, BigInt

//REFERENCE (Non primitive)
//Array, Objects ,Functions

//Data gets categorized into types based on HOW DATA GETS STORE AND HOW THEY GETS ACCESS BASED ON THIS DATA GETS CATOGORIES
//DIFF BETN PRIMITIVE AND NON PRIMITIVE
//PRIMITIVE ==> CALL BY VALUE .....in this value gets copied
//non primitive ==> call by reference .... in this reference of variable' meomory is given means where is this variable store...here value not get copy directly reference is given
// JAVASCRIPT IS DYNAMICALLY TYPED LANGUAGE 

let score="abs";  //=> here in js there is no need to define type of variable like other languages... String str here simply let variable_name
 
//=> here in js gets automatically assign data types i.e here in score we didnt define data type of score but js automatically will assign string as datatype to score... HENCE DYNAMICALLY TYPED LANGUAGE

let num=10;             //=> number
let number=10.05;        //=> number ...in js nondata type like float double ..this value treated as number
let isLoggedIn=true;     //=> boolean
let bigint=2222887667894n  //=> BigInt (note n attached at last)
let temp=null;             //=>null
let marks;                 //=> undefined ... you can use this as also(let marks=undefined)
let s1=Symbol('123');
let s2=Symbol('123');
console.log(s1==s2);      //=> false ....becoz although we assign same value to s1 & s2 but due to symbol return value doesnt match....symbol is use to make value unique ...due to symbol bot s1 & s2 are unique


let arr=["marvel","pepper","thor"];    //=>array

let myobj={
    name:"ishwari",             //=> object
    age:19,
}

let myFunction=function(){      //=>function
    console.log("Hello");
}

console.log(typeof score);     //=> string
console.log(typeof num);        //=> numbder
console.log(typeof number);     //=>number
console.log(typeof isLoggedIn);  //=> boolean
console.log(typeof bigint);      //=> bigint
console.log(typeof temp);        //object    *******IMP FOR INTERVIEW*******  DATA TYPE OF NULL : OBJECT
console.log(typeof marks);        //=> undefined
console.log(typeof s1);           //=>symbol
console.log(typeof arr);          //=> object
console.log(typeof myobj);        //=> object
console.log(typeof myFunction);   //function

///***************************************************************************************************************************///
  
//Stack ( for Primitive) => whenever stack meomory get used means that you get copy of variable that you defined ....call by value
// Heap (for Non primitive) => when object gets defined in heap means you get reference of object .... call by reference (Note: if you make change that change occurs in original value)

let myname="priyanka"   //=> string (primitive data type) hence ...stack
let anothername=myname   //=> we take copy of value from myname
console.log(anothername);   //=> priyanka

anothername="chaiaurcode"
console.log(anothername);   //=> chaiaurcode

// here we took reference from myname for anothername but when we change the anothername original value of myname will not get change only value of other name will get change 
// bcoz here we use stack here copy of vaiue gets assign whenever we take reference from original value ..original value will get assign but when we change value for copy then that change will be only for that particular meomery original memory's value will not get change
//look book 5 1st page



let myinfo={
    name:"shashwat" ,           //=> object .. NON PRIMITIVE ... hence HEAP
    age:20                      //=> myinfo will gets assign in heap meomory
}

// In HEAP reference of memory is given for assignment value to other variables
// IN HEAP whenever change is there , change occurs in original value 

console.log(myinfo.age);    //=> 20

let myinformation=myinfo    //=> here reference taken from myinfo object ie from original heap meomory
console.log(myinformation.age);  //=>20

//now lets change age value and see where changes occurs

myinformation.age=18

console.log(myinformation.age);    //=> 18
console.log(myinfo.age);           //=> 18

// when we changes myinformation data myinfo data (original data ) also gets changes
// in heap meomory changes occurs in originaldata becoz for myinformation we tookreference from myinfo if myinformation value gets change myinfo(original data) will obviously gets change 

// for diagram of stack heap look book 5 page 1





