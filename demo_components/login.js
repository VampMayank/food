const server = require("./node/server")




//login form data fetch
var Namefield=document.getElementById('NameId');
var EmailField=document.getElementById('EmailId');
var PasswardField=document.getElementById('PasswardId');
var CPassField= document.getElementById('CPasswardId')
var form=document.getElementById('formcom');
var loginflag=document.getElementById('login')

//signup page data fetch

var SignuEmail=document.getElementById('EnteredEmail')
var SignupPassward=document.getElementById('EnteredPassward')
var signUpForm=document.getElementById('formcom1')

//credential storage
var usernames=[] 
var credentials={}
// usernames.push('test@gmail.com')
// credentials['test@gmail.com']=12345678;

//login form backend
if(loginflag){
form.addEventListener('submit', function(event){
    event.preventDefault();
    // console.log(Namefield.value)
    // console.log(EmailField.value)
    // console.log(PasswardField.value)
    // console.log(CPassField.value)
    if(usernames.includes(EmailField.value)){
        alert("User Exists");
        location.reload();
    }
    else if(PasswardField.value !=CPassField.value){
        alert("passward doesn't match");
        location.reload();
    }
    else{
        server.newentry(EmailField.value,PasswardField.value)
        alert("account created");
        // console.log(usernames);
        // credentials[EmailField.value]=PasswardField.value;
        // console.log(credentials)

    }
})

}

//signup page backend
else{
signUpForm.addEventListener('submit', function(event){
    event.preventDefault();
    var temp =  SignuEmail.value
    console.log(temp)
    if(credentials[temp]==SignupPassward.value){
        alert("Signup successfull");
    }
    else{
        alert('Wrong passward')
        console.log(SignupPassward.value)
        // location.reload();
    }
})
}