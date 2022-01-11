
var nav_collapse=document.querySelectorAll(".nav-collapse");
var line_menu=document.querySelectorAll(".navbar-text .line-navbar-menu");
var name_menu;

function NavCollapse () {

    for (var i=0; i<2; i++) {

        if(nav_collapse[i].hasAttribute("style")==false) {

            nav_collapse[i].setAttribute("style","left: 0px");

        } else {

            nav_collapse[i].removeAttribute("style");
        }
    }
}

var Navbar_Toggler=document.querySelector('button.navbar-toggler');
Navbar_Toggler.addEventListener("click",NavCollapse);

function NAVBAR_LG_MOUSEOVER(e) {

    name_menu=e.target.innerHTML.split("<div")[0].split("\n")[1].trim();
    
    if (name_menu=="Services") {

        line_menu[1].setAttribute("style","width: 100%");

    } else if (name_menu=="Project") {

        line_menu[2].setAttribute("style","width: 100%");

    } else if (name_menu=="Career") {

        line_menu[3].setAttribute("style","width: 100%")

    } else {

        if (name_menu=="Contact Us") {

            line_menu[4].setAttribute("style","width: 100%")
        }
    } 
}

function NAVBAR_LG_MOUSEOUT(e) {

    if (name_menu=="Services") {

        line_menu[1].removeAttribute("style")

    } else if (name_menu=="Project") {

        line_menu[2].removeAttribute("style")

    } else if (name_menu=="Career") {

        line_menu[3].removeAttribute("style")

    } else {

        if (name_menu=="Contact Us") {

            line_menu[4].removeAttribute("style")
        }                
    } 
}

var nav_button_lg=document.querySelectorAll(".navbar-expand .navbar-text");

  for(var i=0; i<nav_button_lg.length; i++) {

      nav_button_lg[i].addEventListener("mouseover",NAVBAR_LG_MOUSEOVER);
  }  

  for(var i=0; i<nav_button_lg.length; i++) {

      nav_button_lg[i].addEventListener("mouseout",NAVBAR_LG_MOUSEOUT);
  }    


































// $(document).ready(function(){

//     $(".latihan div:first").css("color","white");
//     $(".latihan div:last").css("color","white");
//     $(".latihan div:contains('Hanan umur 5 tahun')").css("color","salmon");
//     var tag=$(".latihan div:empty");
//     tag.text("Kosong");
//     tag.css("background-color","darkred")
//     var tag_1=$(".latihan div:has(.test-5.font-italic)");
//     tag_1.css("color","darkgrey")
//     var nilai_input;
//     $(".btn-primary.btn").click(function(){

//         nilai_input=$("input[type='text']").val();
//         console.log(nilai_input);
//         $("div.isi-input").text(nilai_input);
//     });

//     $("div.latihan-1").prepend("<div class='testing-empat'>Percobaan-4</div>");
//     $("div.latihan-1").prepend("Percobaan-4");
//     $(".latihan-1 div").wrapAll("<div class='font-italic'/>");
//     $("div.latihan-1 div.testing-empat").unwrap();
//     $(".latihan-1 [class^='testing']").replaceWith("<div class='testing-dua'>Percobaan-7</div>");
//     $(".latihan-1 .testing-dua:first").addClass("testing-first")
//     var boolean_class=$(".latihan-1 .testing-dua:last").hasClass("testing-last");
//     $("button.navbar-toggler").click(function(){

//         $(".latihan-1").toggleClass("text-light");
//         $(".latihan-1").addClass("text-primary");
//     });

//     if(boolean_class==false) {

//         $(".latihan-1 .testing-dua:last").addClass("testing-last")
//     }

//     if($(".latihan-1 [class^='testing']:last").hasClass("testing-dua")==true) {

//         $(".latihan-1 [class^='testing']:last").removeClass("testing-dua");
//     }

//     $(".testing-dua:eq(2)").toggleClass("testing-middle");
//     $(".latihan-1 .testing-dua:eq(1)").attr("id","test-middle");
//     $(".latihan-1 #test-middle").removeAttr("class","testing-dua");
//     $(".latihan-1 .testing-middle").before("<div class='test-1'>Percobaan-10</div>");

//         $(".navbar .karir").click(function(){

//             $("html").scrollTop(1000);
//             var posisi_gambar=$(".container .img-thumbnail").position();
//             console.log(posisi_gambar);
//         });

//         var lebar_gambar=$(".container .img-thumbnail").offset();
//         $(".container .img-thumbnail").offset("left","100");
//         console.log(lebar_gambar.top);

//     $(".container .img-thumbnail").error(function(){

//         $(".latihan .test-3").text("Gambar tidak ditemukan");
//     });

//     $(".container .img-thumbnail").error("Gambar tidak ditemukan");    
//     $(".latihan-1.text-light").remove(); 
//     var tag_2=$(".latihan-1.text-light:empty");
//     tag_2.text("Kosong");
//     $("")
//     console.log($(".latihan-1 div:first").text());
// });

// tag.style.color="blue";
// var tag_js=document.querySelector(".latihan .test-2");
// tag_js.style.color="blue";