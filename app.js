var hrs;
var min;
var secs;
var hours=document.getElementById('minu');
var mins=document.getElementById('sec');
var sec=document.getElementById('msec');
var pm=document.getElementById("PM");
var day=document.getElementById("days");
var dte=document.getElementById("dte");
var mon=document.getElementById("mon");
var year=document.getElementById("yea");
var interval;
var now=new Date();
var seecs=now.getSeconds();
var hors=now.getHours();
var min=now.getMinutes();
var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months=["January","Feburary","March","April","May","June","July","August","September","October","Novemeber","December"];
var today=now.getDay();
var todaydate=now.getDate();
var Month=now.getMonth();
var YEAR=now.getFullYear();
function timer()
{
    
start();
}
function Seconds()
{
seecs++
sec.innerHTML=seecs;
mins.innerHTML=min;
hours.innerHTML=hors;
day.innerHTML=week[today];
if(todaydate==1 || todaydate==21 || todaydate==31)
{
    dte.innerHTML=todaydate+"<sup>st</sup>";
}
else if(todaydate==2 || todaydate==22)
{
    dte.innerHTML=todaydate+"<sup>nd</sup>";
}
else if(todaydate==3 || todaydate==23)
{
    dte.innerHTML=todaydate+"<sup>rd</sup>";
}
else
{
    dte.innerHTML=todaydate+"<sup>th</sup>";
}
mon.innerHTML=months[Month];
year.innerHTML=YEAR;
if(seecs==60)
{
    seecs=0;
    min++;
}
if(min==60)
{
    min=0;
    hors++;
}
if(hors>12)
{
    pm.innerHTML="PM";
}
else
{
    pm.innerHTML="AM";
}
}
function start()
{
interval=setInterval(Seconds,1000);
}
