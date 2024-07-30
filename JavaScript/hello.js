//Arrow Function
/*var votingEligibility = () =>{
    age = 18
    if(age>=18){
        console.log("Eligible for voting");
    }
    else{
        console.log("Not Eligible for voting");

    }
}
votingEligibility()
//control statements
/*
var email= "info@rampex.in"
var pwd="123456"
var userTypingEmail= "info@rampex.in"
var userTypingPwd=""
if(userTypingEmail == email){
    if(userTypingPwd == pwd){
        console.log("Login Successful");
    }
    else{
        console.log("Password is wrong");
    }
}
else{
    console.log("Password is wrong");    
}
*/
//signup code
/*userName = "suji"
pwd = "suji@123"
cnfPwd ="suji@123"
if(userName){
    if(pwd){
        if(cnfPwd){
            if(pwd === cnfPwd){
                console.log("Signup Sucessful");
            }
            else{
                console.log("password does not match");
            }
        }
        else{
            console.log("Type your confirm password");
        }
    }
    else{
        console.log("Type your password");
    }
}
else{
    console.log("Type your username");
}*/
//for in loop
arr=[10,20,"hello",true];
/*for(ind in arr){
    console.log(ind);
}
//for of loop
for(ind of arr){
    console.log(ind);
}
arr.forEach((ind) =>{
    console.log(ind);
})
//destructuring operator
arr=[10,20,"ABC"]
var [a,b,d]=arr 
console.log(arr,a,b,d);
//spread operator
rollno=[10,20,30]
rollno=[10,20,30,40]
console.log(rollno);
//set timeout
console.log("set timeout example");
setTimeout(function(){
    console.log("Hello,SKCET");
},5000)
//set interval
console.log("Set interval");
setInterval(function(){
    console.log("Hello,SKCET\n welcome to setinterval")
},2000)

//callback
function formValidation(){
    console.log("form validation called");
}
function formValidationCompleted(){
    console.log("form validation compleded");
}
formValidation()
formValidationCompleted()
//Promise
function proBaseEg()
{
    let prom = new Promise((resolve)=>{
        setTimeout(() => {
            resolve("This is a base Eg")
        },1000);
    })
    console.log(prom.then((val)=>{
        console.log(val);
    }));
}
proBaseEg()*/
isLocationFound=(loc,time)=>{
    isLoc="SKCET";
    t=2000
    if(loc===isLoc && t<=time)
    {
        return true;
    }
    else
    {
        return false;
    }
};
function locationFinder()
{
    time=2000;
    loc="SKCET"
    return new Promise((locFound,locNotFound)=>{
        setTimeout(()=>{
            if(isLocationFound(loc,time)){
                locFound("Location Found");
            }
            else
            {
                locNotFound("Location Not Found");
            }
        },time);
        });
    }

locationFinder()
    .then((val)=>{
    console.log(val);
})
.catch((val)=>{
    console.log(val);
});