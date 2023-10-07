 //First picture
 let slideno=1;
 //Show 1st picture
 showpics(slideno);

 function plusDivs(n){
     showpics(slideno+=n);
 }

 function showpics(n)
 {
     let slides=document.getElementsByClassName("mySlides");
     if(n>slides.length)
     {
         slideno=1;
     }

     if(n<1)
     {
         slideno=slides.length;
     }

     for(let i=0;i<slides.length;i++)
     {
         slides[i].style.display="none";
     }

     slides[slideno-1].style.display="block";
 }

 const obj=
 [
     {
         title:"Quiz Game",
         a:"This project is based on quiz <br> game. In this web base quiz <br> game u can answer different <br> types of questions in different <br> sections! <br><br>Technologies used: <br> Frontend: <br> Html Css Javscript Bootstrap <br> Backend:<br>Php MySqli"
     },  

     {
         title:"GPA Calculator",
         a:"This project is about GPA calculator system <br> which is used in every university in Pakistan... <br> You can try this project as I have <br> provide link below! <br><br> Technologies used: <br> Frontend: <br> Html Css Javscript Bootstrap"
     },

     {
         title:"To-do list app",
         a:"This project is about to-do list app.<br> A (to-do list) is a simple yet effective tool <br> used to organize tasks. <br> I have provided link below so you <br> can use this! <br><br> Technologies used: <br> Frontend: <br> Html Css Javscript Bootstrap <br> Backend:<br>Php MySqli"
     }
 ]

 let count=0;

 function load(){
        document.getElementById("title").innerHTML=obj[count].title;
        document.getElementById("main3").innerHTML=obj[count].a;
     }
     
     load();
     
     function next(){
     count++;
     if(count<obj.length)
     {
         load();
     }

     else if(count>=obj.length)
     {
         count=0;
         document.getElementById("main3").innerHTML=obj[count].title;
         document.getElementById("main3").innerHTML=obj[count].a;
         load();
     }

 }
 
 function prev() {
 count--;

 if (count < 0 ) {
     count = obj.length-1;
 }

 load();
}


 var btn1=document.getElementById("btn1");
 var btn2=document.getElementById("btn2");

 btn1.addEventListener("click",next);
 btn2.addEventListener("click",prev);

 function chose(c)
 {
     if(c=='fb')
     {
         window.location.assign("https://www.facebook.com/profile.php?id=100054770956620&mibextid=ZbWKwL")
     }

     if(c=='ln')
     {
         window.location.assign("https://www.linkedin.com/in/haseeb-khan-32934b261")
     }

     if(c=='git')
     {
         window.location.assign("https://github.com/haseebkhanak/haseebkhanak.git")
     }
 }

 var typed = {
 strings: ["","Web developer","Full stack developer","Web designer"],
 typeSpeed: 60, // Increase typing speed
 backSpeed: 30, // Increase backspacing speed
 // startDelay: 1000,
 // backDelay: 1000,
 loop: true
}

var element=new Typed("#p11",typed);