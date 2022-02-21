function Confirm(){
    var body=document.getElementById('body')
    console.log(body.style.background)
    if(body.style.background==="white"){
        body.style.background="black"
        body.style.color="red"
    }
    else{
        body.style.background="white"
        body.style.color="blue"

    }

}