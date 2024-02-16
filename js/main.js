var usernameinput=document.getElementById('nameinput-register')
var emailinput=document.getElementById('emailinput-register')
var passwordinput=document.getElementById('passinput-register')
var emailinput_log=document.getElementById('emailinput-log')
var requiredinputs=document.getElementById('requiredinputs')
var passinput_log=document.getElementById('passinput-log')
var exist=document.getElementById('exist')
var username=localStorage.getItem('yourname')
 var user=[]
 if(localStorage.getItem('users')){
    user=JSON.parse(localStorage.getItem('users'))
 }
function signup(){
    inputsrequire()
    if(inputsvaliation()==true && isexist()==false){
         var obj={
            name:usernameinput.value,
            email:emailinput.value,
            password:passwordinput.value
        }
        user.push(obj)
        localStorage.setItem('users',JSON.stringify(user))
        var success=document.getElementById('success')
        success.classList.replace('d-none','d-block')
        location.href="index.html"
        
    }
    else{
        var wrong=document.getElementById('wrong')
        wrong.classList.replace('d-none','d-block')
        
    }
    
}
function validateusername(){
    var regex= /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/
    var alaretnameinput=document.getElementById('alaretnameinput')
    if (regex.test(usernameinput.value)==true && usernameinput.value!=""){
        usernameinput.classList.add('is-valid')
        usernameinput.classList.remove('is-invalid')
        alaretnameinput.classList.replace('d-block','d-none')
        return true
    }
    else{
        usernameinput.classList.add('is-invalid')
        usernameinput.classList.remove('is-valid')
        alaretnameinput.classList.replace('d-none','d-block')
        return false
    }
}
function validateemail(){
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var alaretemailinput=document.getElementById('alaretemailinput')
    if(regex.test(emailinput.value)==true && emailinput.value!=""){
    emailinput.classList.add('is-valid')
    emailinput.classList.remove('is-invalid')
    alaretemailinput.classList.replace('d-block','d-none')
         return true
    }
    else{
        emailinput.classList.add('is-invalid')
        emailinput.classList.remove('is-valid')
        alaretemailinput.classList.replace('d-none','d-block')
        return false
    }
}
function validatepassword(){
   var regex = /^[A-Z][A-Za-z0-9]{8,}$/;
   var alaretpassinput=document.getElementById('alaretpassinput')
   if(regex.test(passwordinput.value)==true && passwordinput.value!=""){
    passwordinput.classList.add('is-valid')
    passwordinput.classList.remove('is-invalid')
    alaretpassinput.classList.replace('d-block','d-none')
    return true
   }
   else{
    passwordinput.classList.add('is-invalid')
    passwordinput.classList.remove('is-valid')
    alaretpassinput.classList.replace('d-none','d-block')
    return false
   }
   
}
function inputsvaliation() {
    if(validateusername()&& validateemail() && validatepassword()){
        return true
    }
    else{
        return false
    }
}
function inputsrequire(){
  if  (usernameinput.value=="" || emailinput.value=="" || passwordinput.value ==""){
 requiredinputs.classList.replace('d-none','d-block')
  }
}
    function isexist(){
        for(i=0; i< user.length; i++){
            if(usernameinput.value.toLowerCase() == user[i].name.toLowerCase() || 
               emailinput.value.toLowerCase() == user[i].email.toLowerCase()){
                usernameinput.classList.remove('is-valid');
                emailinput.classList.remove('is-valid');
                exist.classList.replace('d-none','d-block');
                return true;
            }
        }
        return false; // No match found after checking all users
    }
    
function login(){
    inputsrequirelog()
    for(i=0; i< user.length; i++){
        if(emailinput_log.value.toLowerCase()==user[i].email.toLowerCase()
         && passinput_log.value.toLowerCase()==user[i].password.toLowerCase()){
        emailinput_log.classList.add('is-valid')
        passinput_log.classList.add('is-valid')
        emailinput_log.classList.remove('is-invalid')
        passinput_log.classList.remove('is-invalid')
        localStorage.setItem('yourname',user[i].name)
        location.href="home.html"
        }
        else{
            emailinput_log.classList.add('is-invalid')
            passinput_log.classList.add('is-invalid')
            emailinput_log.classList.remove('is-valid')
            passinput_log.classList.remove('is-valid')
            var errormsg=document.getElementById('errormsg')
            errormsg.classList.replace('d-none','d-block')
        }
    } 
   
}
function inputsrequirelog(){
    if(emailinput_log.value=="" || passinput_log.value==""){
        requiredinputs.classList.replace('d-none','d-block')
    }
}
function displaywelcome(){
    document.getElementById('display').innerHTML='welcome ' + username
}
function logout(){
    localStorage.removeItem('yourname')
   
}
