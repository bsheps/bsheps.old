let mainPic = document.getElementById('mainPic');

let resetNameButton = document.getElementById('reset-name-button');

resetNameButton.onclick = function(){
    setUserName();
}

mainPic.onclick = function(){
    let name = localStorage.getItem('name');
    console.log('name: ', name);
    if(!name || name === 'null' || name === ''){
        setUserName();
    }else{
       alert('Hai, ' + name + '! ♥️ ♥️ ♥️'); 
    }
}

setInterval(mainPicSwap,1000);

function mainPicSwap () {
    let mySrc = mainPic.getAttribute('src');
    if(mySrc === 'images/pixelSmiles.png'){
        mainPic.setAttribute('src', 'images/pixelatedComputer.png');
    }else if(mySrc === 'images/pixelatedComputer.png'){
        mainPic.setAttribute('src', 'images/pixelSmiles.png');
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName && myName === null){
        setUserName();
    }else{
       localStorage.setItem('name', myName); 
    }
  }