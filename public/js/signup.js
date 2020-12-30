var username = document.getElementById("user");
var password = document.getElementById("pass");
var mail = document.getElementById("email");

var abc = document.getElementById("feedback");
function validate()
{

    if ( username.value.trim()==="")
    {
        // alert("user name can't be empty");
        abc.innerHTML="Name cannot be empty";
        abc.style.color="red";
        abc.style.display="block";
        return false;
       
    }

    else if(username.value.trim().length<4)
    {
        // alert("password is too short");
        abc.innerHTML="username should contain atleast 4 character,Try again";
        
    abc.style.color="red";
    abc.style.display="block";
        return false; 
    }




    var check=mail.value;
    var regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!regexp.test(check))
    {
    //    fb.textContent="valid";
    //    fb.style.color="Green";
    //    fb.style.visibility="visible";
    //    return true;
    abc.textContent="Invalid Email,Try again!"
    abc.style.color="red";
    abc.style.display="block";
    return false;
    }
    // var check=mail.value;
    // var regexp=
    // // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if(!regexp.test(check)){
    //     // abc.innerHTML="valid";
    //     // abc.style.color="green";                     //change to ! and remove the else part
    //     // abc.style.visibility="visible";
    //     // return true;
    //     abc.innerHTML="Invalid email";
    //     abc.style.color="Red";
    //     abc.style.visibility="visible";
    //     return false;

    
    // else
    // {
    //     // abc.innerHTML="Invalue";
    //     // abc.style.color="Red";
    //     // abc.style.visibility="visible";
    //     // return false;
    // }
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
        abc.innerHTML="Password should contain atleast 6 character,Try again";
        
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

