const accountId=1234

/* this creates meomory having name accountId and will assign value 1234 to it CONST keyword will will not change its value even if you 
want to change it. If ypu try to do it err will occur

ex: accountId=2
console.log(accountId);
err will occur */

let accountEmail ="sbc@sdgmail.com"    //-> -> let is variable assignment operation means value for memory accountEmail can change again
var accountPassword = "12"             // -> -> var is also like above
accountCity = "Jaipur"            // -> -> Not right way to write but can write (its value can change like var)
let accountstate;                // -> -> value is not assign here so output will be UNDEFINED

accountEmail="abc@com"
accountPassword= "567"
accountCity= "Delhi"
console.table([accountId,accountEmail,accountPassword,accountCity,accountstate]);     // -> -> INSTEAD OF WRITING CONSOLE.LOG DIFFERENTLY FOR EACH VARIABLE WE USE CONSOLE.TABLE IT WILL PRINT ALL VARIABLES VALUE IN 1 TABLE IN USING THIS SINGLE STATEMENT ONLY

                                    


/*
1. To declare memory as constant there is only one way 
2. To declare it variable there are three diff options but use LET only becoz there is error occurs using var
    in var there is no info about the scope i.e{} if you use that variable name in diff places and if you changed one then
     all get changes becoz of no scope info it creates problem so USE LET
3. Dont take tension of ';' in javascript 
*/     

