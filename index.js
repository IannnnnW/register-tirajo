let surname = document.querySelector("#surname-index")
let firstname = document.querySelector("#firstname-index")
let email = document.querySelector("#email")
let phoneNumber  = document.querySelector("#phone")
let position = document.querySelector("#position")
let role = document.querySelector("#role")
let password = document.querySelector("#password")

let btn0 = document.querySelector("#index")
btn0.addEventListener("click",()=>{
    handleRegister()
})

phoneNumber.addEventListener('keyup',checkNumber)
function checkNumber(){
    var p = document.querySelector(".tel-check")
    if(phoneNumber.value.length!==10){
        p.style.display="block"
    }
    else{
        p.style.display="none"
    }
}
function handleRegister(){
    number = phoneNumber.value.substr(1,9)
    const numberFormat = "+256"+number
    const obj = {
        firstName:firstname.value,
        lastName:surname.value,
        email:email.value,
        password:password.value,
        phoneNumber:numberFormat,
        position:position.value,
        role:role.value
    }
    url= "http://api.tirajo.website/v1/users/"
    fetch(url,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-type":"Application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })

    .then(res=>{
        return res.json()
    })
    .then(data=>{
        console.log(data);
//         window.location.href = 'father.html'

    })
}

window.addEventListener('load',()=>{
    fetch("http://api.tirajo.website/login",{
        method:"POST",
        body:JSON.stringify({
            email:"admin@api.com",
            password:"Tirajo#1."
        }),
        headers:{
            "Content-type":"Application/json",
        }
    })

    .then(res=>{
        return res.json()
    })
    .then(data=>{
        console.log(data.token);
        localStorage.setItem("token",data.token)
    })
})
