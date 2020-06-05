 /*global console , alert , prompt , amount*/

 
var input1        = document.getElementById('input1'),
    input2        = document.getElementById('input2'),
    textA         = document.getElementById('textA'),
    Message       = document.getElementsByClassName('textAreaMessage'),
    btn           = document.getElementById('btnInp'),
    passwordInp   = document.getElementById('passwordInp'),
    welcomeMass   = document.getElementById('welcome_message'),
    minutes       = document.getElementById('minutes_input'),
    secound       = 0,
    time          = document.getElementById('time'),
    countdown,
    downloadLink  = document.getElementById('download_link'),
    month         = document.getElementById('month'),
    months        = ["January","February","March" ,"April","May","June","July","August","September","October" ,"November" ,"December"],
    years         = document.getElementById('years'),
    inputPackets  = document.getElementById('inputPackets'),
    myImage       = document.getElementById('myImage'),
    printArea    = document.getElementById('print-area'),
    btnprint     = document.getElementById('btn-print');

minutes.value = 0;


input1.onchange=function(){
    input2.value = input1.value;
};

textA.onchange =function(){
    Message[0].innerHTML = textA.value;
};

btn.onclick=function(){
    if(passwordInp.type == 'password')
    {
        passwordInp.setAttribute('type','text');
    }
    else
    {
        passwordInp.setAttribute('type','password');
    }
    
};

welcomeMass.textContent='changed by javascript';

function startCountDown()
{
    countdown = setInterval(function(){
        count();
    },1000);
}


function count(){
    if(secound===0 & minutes.value!=0)
    {
        minutes.value--;
        secound=59;
    }
    if(secound<10)
    {
        time.innerHTML = minutes.value + ":0" + secound;
    }
    else if( minutes.value<10)
    {
        time.innerHTML = "0" + minutes.value + ":" + secound;
    }

    if(secound===0 & minutes.value==0)
    {
        time.innerHTML = minutes.value + "0:0" + secound;
        downloadLink.innerHTML = "<a href='http://google.com' >" + "Downlod Link" + "</a>";
        return 0;
    }
    time.innerHTML = minutes.value + ":" + secound;
    secound--;
}


for( var i=2020 ; i>1980 ; i--){
    years.innerHTML += "<option>" +  i +"</option>" ;
}

for( var i=0 ; i<12 ; i++){
    month.innerHTML += "<option>" + months[i] +"</option>" ;
}

month.onchange = years.onchange =function(){
    inputPackets.value = month.value + "/" + years.value;
}

function changeImage(){
    if(myImage.src=='http://placehold.it/300/fff')
    {
        myImage.setAttribute('src' , 'http://placehold.it/200/000');
    }
    else
    {
        myImage.setAttribute('src' , 'http://placehold.it/300/fff');
    }
    
}

btnprint.onclick = function(){
    page = document.body.innerHTML ;
    document.body.innerHTML = printArea.innerHTML;
    window.print();
};