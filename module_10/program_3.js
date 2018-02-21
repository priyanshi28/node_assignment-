function check_email(str)
{
var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(email.test(str))
{  
console.log("Hurrah !! you have enterd a valid mail");  
}  
else  
{  
console.log("please !!! enter valid email address");  
}
}

check_email('priyanshiawasthi28@gmail.com');

