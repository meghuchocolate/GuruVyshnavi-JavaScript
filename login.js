function myFunction() {
	var uname=document.getElementById("t1").value;
	var pwd= document.getElementById("t2").value;			
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
	var letters = /^[A-Za-z]+$/;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(uname=='')
    {
        alert('Please enter the user name.');
    }
    else if(!letters.test(uname))
    {
        alert('User name field required only alphabet characters');
    }
    else if(pwd=='')
    {
        alert('Please enter Password');
    }
    else if(!pwd_expression.test(pwd))
    {
        alert ('Wrong password');
    }
    else if(document.getElementById("t2").value.length < 6)
    {
        alert ('Password minimum length is 6');
    }
    else if(document.getElementById("t2").value.length > 12)
    {
        alert ('Password max length is 12');
    }
    else
    {				                            
           window.location = "http://www.vishnu.edu.in"; 
    }
}