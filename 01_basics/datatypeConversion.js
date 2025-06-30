let score=33                  //here we know that data type is number but sometime we dont know then we can find it using typeof method Both give below typeof methods are valid you can use any of one
console.log(typeof score)
console.log(typeof(score));

let s="33"
let valueIntNumber=Number(s)    //=> here conversion occurs. we converted string to number and store in valueIntNumber. look we write Number 1st letter is capital
console.log(typeof valueIntNumber)   //=> output : number

let sc="33ah"      //=> but now if we try to convert it in number then its data type will get convert but value will not get convert beacuse this cant get converted to number(Not like "33" => there in string there was pure number but here not like that)
let num=Number(sc)
console.log(typeof num);  //=> o/p is number
console.log(num);         // o/p : NaN (NOT A NUMBER) it is also kind of data type 

let a=null;
let b=undefined;
let c=Number(a);
let d=Number(b);
console.log(c);     //  o/p: 0
console.log(d);     //  o/p:NaN

let e=true;
let f=false;

let gh=Number(e);
console.log(gh)     // o/p: 1

let hg=Number(f)
console.log(hg);    // o/p:0

let as="ship"
let sa=Number(as)
console.log(sa);    //   o/p:NaN    (beacause from string cant get number.... Its data type will get converted to number but from string we cant get actual value)


// when we try to convert into number
//"33"  => 33
//"33ad" => NaN
// true => 1 ; false=> 0

let isLoggedIn=1
let booleanLoggedIn=Boolean(isLoggedIn)
console.log(booleanLoggedIn);     // o/p: true

let st="ish"
let mm=Boolean(st)
console.log(mm);      //=> true

let n=null
let nn=Boolean(n)
console.log(nn);     //=> false

// ***covert to boolean:****  
//1 => true , 0=> false
//null=> false
//"ish"=>true

let numb=33
let name=String(numb);
console.log(typeof name);  //=> string
console.log(name);    //=> "33"

// YOU WILL USE THIS CONVERSION LOGIC IN JAVASCRIPT PROJECT . BECOZ SOMETIMES BROWSER GIVES STRING AND YOU HAVE TO CONVERT IT INTO NUMBER ETC..

///////*********************************************END OF CONVERSIONS****************************************************/////////


//**********************************************OPERATIONS*************************************************************** ////////////////

let value=3
let negVal=-value
console.log(negVal);  // => -3

//console.log(2+2);   //=>4
//console.log(2-2);   //=>0
//console.log(2*2);   //=>4
//console.log(2/2);   //=>1
//console.log(2%2);   //=>0
//console.log(2**3);  //=>8  (2 to the power 3)

let str1="ishwari"
let str2="thakre"
let str=str1+str2
console.log(str);    //=> ishwari thakre

console.log("1" + 2);   //=> 12  (not 3)
console.log(1 + "2");   //=>12   (not 3)
console.log("1" + "2");   //=> 12 (normal 2 strings add)
console.log("1" + 2 + 2);  //=> 122
console.log(1 + 2 + "2");  //32

// you might confused in last 2 but all these are according to documentation rule
//But do not write all above it is bad way to write code. Mixing of string + number

//console.log(3+4*5%3)  => donot write like this bad way to write code give proper paranthesis for calculations. Like((3+4)*5%3)...

console.log(true)     //  => obvisously ..true
console.log(+true);   // => 1   beoz true is boolean . But it bad way to write code you make code complex
//console.log(true+);   //=>error
console.log(+"");    //=> 0  but not do this tricky conversions

let num1,num2,num3
num1=num2=num3=2+2   //=> dont use tricky assign method like this . there are different easy ways to assignment . which are readable quickly

let counter=100
console.log(counter++);  //=>100.....postfixoperator ... 1st val get printed then incremented
counter++
console.log(counter);  //=>102  ... becoz in postfix it becomes 101 after printing and in just above step it becomes 102 due to increment
console.log(++counter);  //=>103 .... prefixoperator  ... fisrt increment val then print it




