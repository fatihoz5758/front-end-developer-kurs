document.getElementById('mouseClick').addEventListener('click' , tarihYaz4)
document.getElementById('mouseClick').addEventListener('click' , tarihYaz)
document.getElementById('mouseClick').addEventListener('mouseover' , tarihYaz2)
document.getElementById('mouseClick').addEventListener('mouseout' , tarihYaz3)

function tarihYaz(){
    document.getElementById('demo1').innerHTML = Date();
}
function tarihYaz2(){
    document.getElementById('demo2').innerHTML = Date();
}
function tarihYaz3(){
    document.getElementById('demo3').innerHTML = Date();
}
function tarihYaz4(){
    alert(Date());
}


window.addEventListener( 'resize' , sayiYazdir)

function sayiYazdir(){
    let rasgeleSayi = Math.floor(Math.random()*100);
    document.getElementById('demo4').innerHTML = rasgeleSayi;
    
}

function addEventListenerSil(){
    window.removeEventListener('resize', sayiYazdir);
}

