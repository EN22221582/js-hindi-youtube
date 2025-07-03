//console.log(2>1);     -->true 
//console.log(2>=1);    -->true
//console.log(2<1);     -->false
//console.log(2==1);    -->false
//console.log(2!=1);    -->true

console.log("2">1);  //-->true . here javasccript converts string 2 to number 2 hence result is true.. But this is wrong way ..always compare variable or values having same data type(TYPESCRIPT RULE)
console.log("02">1); //--> true ...but it is also wrong way due to diff data type comparision
console.log("-2">1); //->false... like above two's 

//same problem here for null and undefined .... wrong comparision gives unpredictable result. so compare same datatype value
// in wrong comparision for some comparision result give as NaN for other true or false ...unpredictabele ... avoid this type of comparision(diff datatype)
console.log(null>0);   //--> false...here may be like that(0>0)
console.log(null==0);  //-->false
console.log(null>=0);  //--> true....unpredictable ...here null is converted to 0.. but null means not 0 null means empty

//here advantage in undefined i.e for all false result
console.log(undefined==0); //-->false
console.log(undefined>0);  //-->false
console.log(undefined<0);  //-->false

//'===' => strict equality check . Here both datatypes and value gets check
console.log("2"===2);   //--> false... Becoz value is same 2 but datatype are diffrnt (string & number)
//'=='  => in this there is no strict check it compares only number not data type




