
var nav_collapse=document.querySelectorAll(".nav-collapse");

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

$(document).ready(function() {

    // $(".btn").click(function(){

    //     // $(".percobaan").slideToggle("slow");
    //     $(".percobaan").animate({

    //         // width:"70%",
    //         width:"toggle"

    //     },1000,"easeOutBounce");
    // });
    $(".btn").on("click",function(){

        $(".percobaan").fadeToggle(1000);
    });
});

































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