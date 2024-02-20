//generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let  i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() *16)];

        
    }
    return color;
}

let intervalID
    const startChangingColor = function(){
if(!intervalID){ //checking for numm conditions
    
    intervalID= setInterval(changeBgColor,1000)
}
        function changeBgColor (){
            document.body.style.backgroundColor = randomColor();
        }
    }
    const stopChangingColor = function(){
        clearInterval(intervalID);
        intervalID = null; //dereferencing
    };
document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)