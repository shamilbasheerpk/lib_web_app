var username = document.getElementById("user");
var password = document.getElementById("pass");
// var mail = document.getElementById("email");

var abc = document.getElementById("feedback");
function validate()
{

    if ( username.value.trim()==="")
    {
        // alert("user name can't be empty");
        abc.innerHTML="User Name cannot be empty";
        abc.style.color="red";
        abc.style.display="block";
        return false;
       
    }

    else if(username.value.trim().length<4)
    {
        // alert("password is too short");
        abc.innerHTML="username should contain atleast 4 character,,<br>Try again";
        abc.style.color="red";
        abc.style.display="block";
        return false; 
    }


   else  if(password.value.trim() === "")
    {
        // alert(" Password cannot be empty ");
        abc.innerHTML="Password can't be empty";
        abc.style.color="red";
        abc.style.display="block";
        return false; 
    }
    else if(password.value.trim().length<6)
    {
        // alert("password is too short");
        abc.innerHTML="Password should contain atleast 6 character,,<br>Try again";
        abc.style.color="red";
        abc.style.display="block";
        return false; 
    }
    else{
        return true;
    }
    // else if(password.value.trim().length<6)
    // {
    //     alert(" tooo short ");
    //     // abc.innerHTML="tooo short password";
    //     return false; 
    // }
   
   
}

