function myFunction() {
    document.getElementById("demo").innerHTML = "Thanks for subcribing my beats";
}

let test = document.getElementById('job');
setInterval(()=>{
    if(test.innerText == 'I am Full Stack Developer'){
        test.innerText = 'I am Frontend Developer';
    }else if(test.innerText == 'I am Frontend Developer'){
        test.innerText = 'I am Backend Developer';
    }else if(test.innerText == 'I am Backend Developer'){
        test.innerText = 'I am Full Stack Developer';
    }else{
        test.innerText = 'I am Not Developer';
    }
},5000);