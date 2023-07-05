var moon=document.getElementById("moon");
const header=document.getElementById("header");
var menu=document.getElementById("menu");
var image=document.getElementById("image");
var list_items=document.getElementById("list_items");
var about_box=document.getElementById("about_box");
var glipmses_box=document.getElementById("about_box");
var contact_box=document.getElementById("glimpses_box");
var benefits=document.getElementsByClassName("benefits");
var gokul=document.getElementById("gokul");
var yaswanth=document.getElementById("yaswanth");
var contact_box=document.getElementById("contact_box");
var contact_head=document.getElementById("contact_head");
var paras=document.getElementById("paras");
var incentives=document.getElementsByClassName("incentives");
var card=document.getElementsByClassName("card");
var responsiblities=document.getElementById("responsiblities");
var heading=document.getElementsByClassName("heading");
var p=document.getElementsByTagName("p");
var h=document.getElementsByClassName("h");
var span=document.getElementsByTagName("span");
var a=document.getElementsByTagName("i");
var register=document.getElementsByClassName("register");
var sign=document.getElementById("sign");
var follow=document.getElementsByClassName("follow");
var web=document.getElementsByClassName("web");
var static=document.getElementsByClassName("static");
var FAQS_box=document.getElementById("FAQS_box");
var question=document.getElementsByClassName("question");
var chatbot_button=document.getElementById("chatbot-button");
var number=document.getElementsByClassName("number");



moon.addEventListener("click", function change(){
    var body=document.body;
            if (body.classList.contains("dark")){
                body.classList.remove("dark");
                body.classList.add("sun");
                image.style.backgroundColor="white";
                header.style.backgroundColor="#F7F8FC";
                header.style.color="black";
                menu.style.color="black";
                moon.innerHTML="<i class='bx bx-moon'></i>";
                moon.style.color="black";
                moon.style.fontSize="50px";
                about_box.style.backgroundColor="#f7f8fc";
                about_box.style.border="2px solid #f7f8fc";
                FAQS_box.style.backgroundColor="#f7f8fc";
                FAQS_box.style.border="2px solid #f7f8fc";
                glimpses_box.style.backgroundColor="#f7f8fc";
                glimpses_box.style.border="2px solid #f7f8fc";
                paras.style.color="white";
                contact_box.style.backgroundColor="#f7f8fc";
                contact_box.style.border="2px solid #f7f8fc";
                contact_head.style.backgroundColor="#f7f8fc";
                contact_head.style.border="2px solid #f7f8fc";
                gokul.style.backgroundColor="#f7f8fc";
                gokul.style.border="2px solid #f7f8fc";
                yaswanth.style.backgroundColor="#f7f8fc";
                yaswanth.style.border="2px solid #f7f8fc";
                for(let i=0;i<benefits.length;i++){
                    benefits[i].style.backgroundColor="#f7f8fc";
                    benefits[i].style.border="2px solid #f7f8fc";
                };
                for(let i=0;i<incentives.length;i++){
                    incentives[i].style.backgroundColor="#f7f8fc";
                    incentives[i].style.border="2px solid #f7f8fc";
                };
                for(let i=0;i<card.length;i++){
                    card[i].style.backgroundColor="#f7f8fc";
                };
                for(let i=0;i<web.length;i++){
                    web[i].style.color="black";
                };
                for(let i=0;i<static.length;i++){
                    static[i].style.color="black";
                };
                responsiblities.style.backgroundColor="#f7f8fc";
                responsiblities.style.border="2px solid #f7f8fc";
                for(let i=0;i<heading.length;i++){
                    heading[i].style.color="red";
                };
                for(let i=0;i<p.length;i++){
                    p[i].style.color="black";
                };
                for(let i=0;i<h.length;i++){
                    h[i].style.color="red";
                };
                for(let i=0;i<span.length;i++){
                    span[i].style.color="red";
                };
                for(let i=0;i<a.length;i++){
                    a[i].style.color="black";
                };
                for(let i=0;i<register.length;i++){
                register[i].style.backgroundColor="red";
                register[i].style.color="white";
                    register[i].style.border="2px solid red";
                };
                sign.style.color="black";
                sign.style.border="2px solid red";
               for(let i=0;i<follow.length;i++){
                    follow[i].style.color="black";
                }; 
                for(let i=0;i<question.length;i++){
                    question[i].style.color="black";
                }; 
                for(let i=0;i<number.length;i++){
                    number[i].style.color="red";
                };  
                
                
            }else {
                body.classList.remove("sun");
                body.classList.add("dark");
                image.style.backgroundColor="#323946";
                header.style.backgroundColor="black";
                header.style.color="white";
                menu.style.color="white";
                moon.innerHTML="<i class='bx bx-sun'></i>";
                moon.style.color="white";
                moon.style.fontSize="50px";
                about_box.style.backgroundColor="#1f242d";
                about_box.style.border="2px solid #1f242d";
                FAQS_box.style.backgroundColor="#1f242d";
                FAQS_box.style.border="2px solid #1f242d";
                glimpses_box.style.backgroundColor="#1f242d";
                glimpses_box.style.border="2px solid #1f242d";
                paras.style.color="white";
                contact_box.style.backgroundColor="#1f242d";
                contact_box.style.border="2px solid #1f242d";
                contact_head.style.backgroundColor="#1f242d";
                contact_head.style.border="2px solid #1f242d";
                gokul.style.backgroundColor="#323946";
                gokul.style.border="2px solid #323946";
                yaswanth.style.backgroundColor="#323946";
                yaswanth.style.border="2px solid #323946";
                for(let i=0;i<benefits.length;i++){
                    benefits[i].style.backgroundColor="#1f242d";
                    benefits[i].style.border="2px solid #1f242d";
                };
                for(let i=0;i<incentives.length;i++){
                    incentives[i].style.backgroundColor="#1f242d";
                    incentives[i].style.border="2px solid #1f242d";
                };
                for(let i=0;i<card.length;i++){
                    card[i].style.backgroundColor="#1f242d";
                };
                for(let i=0;i<web.length;i++){
                    web[i].style.color="white";
                };
                for(let i=0;i<static.length;i++){
                    static[i].style.color="white";
                };
                responsiblities.style.backgroundColor="#1f242d";
                responsiblities.style.border="2px solid #1f242d";
                for(let i=0;i<heading.length;i++){
                    heading[i].style.color="yellow";
                };
                for(let i=0;i<p.length;i++){
                    p[i].style.color="white";
                };
                for(let i=0;i<h.length;i++){
                    h[i].style.color="yellow";
                };
                for(let i=0;i<span.length;i++){
                    span[i].style.color="yellow";
                };
                for(let i=0;i<a.length;i++){
                    a[i].style.color="white";
                };
                for(let i=0;i<register.length;i++){
                register[i].style.backgroundColor="yellow";
                register[i].style.color="black";
                    register[i].style.border="2px solid yellow";
                };
                sign.style.color="black";
                sign.style.border="2px solid yellow";
               for(let i=0;i<follow.length;i++){
                    follow[i].style.color="white";
                }; 
               for(let i=0;i<question.length;i++){
                    question[i].style.color="white";
                };  
                for(let i=0;i<number.length;i++){
                    number[i].style.color="yellow";
                };  
                
            }
});
menu.addEventListener("click", function nav(){
    list_items.style.display="inline";
        var body=document.body;
    menu.innerHTML="<i class='bx bx-x'></i>";
    if(menu.innerHTML="<i class='bx bx-x'></i>"){
        menu.addEventListener("click",function close(){
            list_items.style.display="none";
            menu.innerHTML="<i class='bx bx-menu-alt-right'></i>";
        });
    }
});
var media_items=document.getElementsByClassName("media_items");
chatbot_button.addEventListener("click",function swag(){
    for(let i=0;i<media_items.length;i++){
    media_items[i].style.display="inline";
    }
    
});
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
var faq = document.getElementsByClassName("question");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
    function toggleText(card) {
      var description = card.getElementsByClassName('description')[0];
      description.classList.toggle('hidden-text');
      description.classList.toggle('show-text');
    }
    