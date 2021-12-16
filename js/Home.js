
var FadeDown=8;
var FadeDown1000=1;
  var FadeDown500=3;
  var FadeUp=1;
var FlipRight500=3;
var FlipLeft1000=3;
  var FadeUp500=2;
  var FadeRight1000=2;
var FadeRight500=2;
  var ZoomIn1000=1;
  var ZoomIn500=14;

var fade_down=document.querySelectorAll(".fade-down");

// console.log(fade_down);

  for(var i=0; i<FadeDown; i++) {

    fade_down[i].dataset.aos="fade-down";
    fade_down[i].dataset.aosDuration="1000";
  }

var fade_down_1000=document.querySelectorAll(".fade-down-1000");

// console.log(fade_down_1000);

  for(var i=0; i<FadeDown1000; i++) {

    fade_down_1000[i].dataset.aos="fade-down"
    fade_down_1000[i].dataset.aosDuration="1000"
    fade_down_1000[i].dataset.aosDelay="1000"
  }

var fade_down_500=document.querySelectorAll(".fade-down-500");

// console.log(fade_down_500);

  for(var i=0; i<FadeDown500; i++) {

    fade_down_500[i].dataset.aos="fade-down"
    fade_down_500[i].dataset.aosDuration="1000"
    fade_down_500[i].dataset.aosDelay="500"
  } 
  
var fade_up=document.querySelectorAll(".fade-up");

// console.log(fade_down);

  for(var i=0; i<FadeUp; i++) {

    fade_up[i].dataset.aos="fade-up"
    fade_up[i].dataset.aosDuration="1000"
  } 

var flip_right_500=document.querySelectorAll(".flip-right-500");

// console.log(flip_right_500);

  for(var i=0; i<FlipRight500; i++) {

    flip_right_500[i].dataset.aos="flip-right"
    flip_right_500[i].dataset.aosDuration="1000"
    flip_right_500[i].dataset.aosDelay="500"
  }

var fade_up_500=document.querySelectorAll(".fade-up-500");

// console.log(fade_up_500);

  for(var i=0; i<FadeUp500; i++) {

    fade_up_500[i].dataset.aos="fade-up"
    fade_up_500[i].dataset.aosDuration="1000"
    fade_up_500[i].dataset.aosDelay="500"
  }

var flip_left_1000=document.querySelectorAll(".flip-left-1000");

// console.log(flip_left_1000);

  for(var i=0; i<FlipLeft1000; i++) {

    flip_left_1000[i].dataset.aos="flip-left"
    flip_left_1000[i].dataset.aosDuration="1000"
    flip_left_1000[i].dataset.aosDelay="1000"
  }

var fade_right_1000=document.querySelectorAll(".fade-right-1000");

// console.log(fade_right_1000);

  for(var i=0; i<FadeRight1000; i++) {

    fade_right_1000[i].dataset.aos="fade-right"
    fade_right_1000[i].dataset.aosDuration="1000"
    fade_right_1000[i].dataset.aosDelay="1000"
  }

var fade_right_500=document.querySelectorAll(".fade-right-500");

// console.log(fade_right_500);

  for(var i=0; i<FadeRight500; i++) {

    fade_right_500[i].dataset.aos="fade-right"
    fade_right_500[i].dataset.aosDuration="1000"
    fade_right_500[i].dataset.aosDelay="500"
  }

var zoom_in_1000=document.querySelectorAll(".zoom-in-1000");

// console.log(zoom_in_1000);

  for(var i=0; i<ZoomIn1000; i++) {

    zoom_in_1000[i].dataset.aos="zoom-in"
    zoom_in_1000[i].dataset.aosDuration="1000"
    zoom_in_1000[i].dataset.aosDelay="1000"
  }

var zoom_in_500=document.querySelectorAll(".zoom-in-500");

// console.log(zoom_in_500);

  for(var i=0; i<ZoomIn500; i++) {

    zoom_in_500[i].dataset.aos="zoom-in";
    zoom_in_500[i].dataset.aosDuration="1000";
    zoom_in_500[i].dataset.aosDelay="500";
  }

var nav_collapse=document.querySelectorAll(".nav-collapse");
  var carousel_control_next=document.querySelector(".carousel-control-next");
  var carousel_control_prev=document.querySelector(".carousel-control-prev");
var col_alert=document.querySelector(".alert-attention .col-12");

var input_name,input_email,input_phone,input_company,input_budget,input_problem,form_company,form_register;
var array_name,array_email,array_phone,array_company,array_budget,form_name,form_email,form_phone;

var value_class="alert alert-danger text-center alert-dismissible fade show";
  var error_1="Pastikan anda telah mengisi semua";
    var error_2="Pastikan data telah terisi dengan benar";

var alpha_numeric_1=["0","1","2","3","4","5","6","7","8","9"];
var alpha_numeric_2=["\"","\'","<",">",",","?","/","~","`","!","#","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]","\\","|",":",";"];

var warning_name=document.querySelectorAll(".form-group .warning-name");
  var warning_email=document.querySelectorAll(".form-group .warning-email");
  var warning_phone=document.querySelectorAll(".form-group .warning-phone");
  var warning_alpha=document.querySelectorAll(".form-group .warning-alpha");
var warning_company=document.querySelectorAll(".form-group .warning-company");

var shadow_img_lg=document.getElementById("nav-service");
  var boolean_nav_prev=false;
var attribute_nav_prev;

function NavCollapse () {

    for (var i=0; i<2; i++) {

        if(nav_collapse[i].hasAttribute("style")==false) {

            nav_collapse[i].setAttribute("style","left: 0px");

        } else {

            nav_collapse[i].removeAttribute("style");
        }
    }
}

function CAROUSEL_OVER () {

    if(carousel_control_next.hasAttribute("style")==false) {

        if(carousel_control_prev.hasAttribute("style")==false) {

            carousel_control_next.setAttribute("style","right: 0px");
            carousel_control_prev.setAttribute("style","left: 0px");
        }
    }
}

function CAROUSEL_OUT () {

    if(carousel_control_next.hasAttribute("style")==true) {

        if(carousel_control_prev.hasAttribute("style")==true) {

            carousel_control_next.removeAttribute("style");
            carousel_control_prev.removeAttribute("style");
        }
    } 
}

function array_name_function (e) {

    if(alpha_numeric_1.includes(e)==true) {

        return false;

    }  else {

        if (alpha_numeric_2.includes(e)==true) {

            return false;

        } else {

            if(e==".") {

                return false;

            } else {

                if(e=="@") {

                    return false;

                } else {

                    return true;
                }
            }
        }
    }
}

function array_email_function (e) {

    if(e==" ") {

        return false;

    } else {

        if(alpha_numeric_2.includes(e)==true) {

            return false;

        } else {

            return true;
        }
    }
}

function array_phone_function (e) {

    if (alpha_numeric_1.includes(e)==true) {

        return true;

    } else {

        return false;
    }
}

function array_company_function (e) {

    if(alpha_numeric_1.includes(e)==true) {

        return false;

    }  else {

        if (alpha_numeric_2.includes(e)==true) {

            return false;

        } else {

            if(e=="@") {

                return false;

            } else {

                return true;
            }
        }
    }
}

function filter_function (e) {

    if(e==" ") {

        return false;

    }  else {

        return true;
    }
}

function validation_form_md (e) {

    e.preventDefault();

    form_register=document.querySelector("form.form-md")

      input_name=document.getElementById("full-name");
      input_email=document.getElementById("email-address");
        input_phone=document.getElementById("phone-number");
        input_company=document.getElementById("company-name");
      input_budget=document.getElementById("nominal-budget");
      input_problem=document.getElementById("company-problem");

        var sign_alert="<div class=\"position-relative\" style=\"top: 5px;\">\n&times\n</div>";
        var button_alert=`<button type=\"button\" class=\"close\" onclick=\"Button_Dismissible(event)\" data-dismiss=\"alert\">\n${sign_alert}\n</button>`;

      if (input_name.value=="") {

          col_alert.setAttribute("style","top: 15px; opacity: 1");
          col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_1}\n${button_alert}\n</div>\n`;
          input_name.focus();
          input_name.setAttribute("class","form-control border-danger");

      } else if (input_email.value=="") {

          col_alert.setAttribute("style","top: 15px; opacity: 1");
          col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_1}\n${button_alert}\n</div>\n`;
          input_email.focus();
          input_email.setAttribute("class","form-control border-danger");

      } else if (input_phone.value=="") {

          col_alert.setAttribute("style","top: 15px; opacity: 1");
          col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_1}\n${button_alert}\n</div>\n`;
          input_phone.focus();
          input_phone.setAttribute("class","form-control border-danger");

      } else if (input_company.value=="") {

          col_alert.setAttribute("style","top: 15px; opacity: 1");
          col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_1}\n${button_alert}\n</div>\n`;
          input_company.focus();
          input_company.setAttribute("class","form-control border-danger");

      } else if(input_budget.value=="-") {

          col_alert.setAttribute("style","top: 15px; opacity: 1");
          col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_1}\n${button_alert}\n</div>\n`;
          input_budget.focus();
          input_budget.setAttribute("class","form-control border-danger");

      } else if (input_problem.value=="") {

          col_alert.setAttribute("style","top: 15px; opacity: 1");
          col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_1}\n${button_alert}\n</div>\n`;
          input_problem.focus();
          input_problem.setAttribute("class","form-control border-danger");

      } else {

          array_name=input_name.value.split("");
          array_email=input_email.value.split("");
            array_phone=input_phone.value.split("");
            array_company=input_company.value.split("");

            if(array_name.every(array_name_function)==false) {

                col_alert.setAttribute("style","top: 15px; opacity: 1");
                col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_2}\n${button_alert}\n</div>\n`;
                input_name.focus();
                input_name.setAttribute("class","form-control border-danger");

            } else {

                if(array_email.every(array_email_function)==false) {

                    col_alert.setAttribute("style","top: 15px; opacity: 1");
                    col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_2}\n${button_alert}\n</div>\n`;
                    input_email.focus();
                    input_email.setAttribute("class","form-control border-danger");

                } else {

                    if(array_email.includes("@")==false) {

                        col_alert.setAttribute("style","top: 15px; opacity: 1");
                        col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_2}\n${button_alert}\n</div>\n`;
                        input_email.focus();
                        input_email.setAttribute("class","form-control border-danger");

                    } else {

                        if(array_phone.every(array_phone_function)==false) {

                            col_alert.setAttribute("style","top: 15px; opacity: 1");
                            col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_2}\n${button_alert}\n</div>\n`;
                            input_phone.focus();
                            input_phone.setAttribute("class","form-control border-danger");

                        } else {

                            if(array_company.every(array_company_function)==false) {

                                col_alert.setAttribute("style","top: 15px; opacity: 1");
                                col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_2}\n${button_alert}\n</div>\n`;
                                input_company.focus();
                                input_company.setAttribute("class","form-control border-danger");

                            } else {

                                form_name=document.getElementById("full-name");
                                form_email=document.getElementById("email-address");
                                  form_phone=document.getElementById("phone-number");
                                  form_company=document.getElementById("company-name");

                                // form_register.submit();
                                location.href="index.html";
                            }
                        }
                    }
                }
            } 
      }
}

function validation_form_xs (e) {

    e.preventDefault();

    var form_register=document.querySelector("form.form-sm");

      input_name=document.getElementById("input-name");
      input_email=document.getElementById("input-email");
        input_phone=document.getElementById("input-phone");
        input_company=document.getElementById("input-company");
      input_budget=document.getElementById("input-budget");
      input_problem=document.getElementById("input-problem");

        var sign_alert="<div class=\"position-relative\" style=\"top: 3px;\">\n&times\n</div>";
        var button_alert=`<button type=\"button\" class=\"close\" onclick=\"Button_Dismissible(event)\" data-dismiss=\"alert\">\n${sign_alert}\n</button>`;

      if (input_name.value=="") {

          col_alert.setAttribute("style","top: 15px; opacity: 1");
          col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_1}\n${button_alert}\n</div>\n`;
          input_name.focus();
          input_name.setAttribute("class","form-control border-danger");

      } else if (input_phone.value=="") {

          col_alert.setAttribute("style","top: 15px; opacity: 1");
          col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_1}\n${button_alert}\n</div>\n`;
          input_email.focus();
          input_email.setAttribute("class","form-control border-danger");

      } else if (input_email.value=="") {

          col_alert.setAttribute("style","top: 15px; opacity: 1");
          col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_1}\n${button_alert}\n</div>\n`;
          input_phone.focus();
          input_phone.setAttribute("class","form-control border-danger");

      } else if (input_company.value=="") {

          col_alert.setAttribute("style","top: 15px; opacity: 1");
          col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_1}\n${button_alert}\n</div>\n`;
          input_company.focus();
          input_company.setAttribute("class","form-control border-danger");

      } else if(input_budget.value=="-") {

          col_alert.setAttribute("style","top: 15px; opacity: 1");
          col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_1}\n${button_alert}\n</div>\n`;
          input_budget.focus();
          input_budget.setAttribute("class","form-control border-danger");

      } else if (input_problem.value=="") {

          col_alert.setAttribute("style","top: 15px; opacity: 1");
          col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_1}\n${button_alert}\n</div>\n`;      
          input_problem.focus();
          input_problem.setAttribute("class","form-control border-danger");

      } else {

          array_name=input_name.value.split("");
          array_email=input_email.value.split("");
            array_phone=input_phone.value.split("");
          array_company=input_company.value.split("");
          array_budget=input_budget.value.split("");

            if(array_name.every(array_name_function)==false) {

                col_alert.setAttribute("style","top: 15px; opacity: 1");
                col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_2}\n${button_alert}\n</div>\n`;
                input_name.focus();
                input_name.setAttribute("class","form-control border-danger");

            } else {

                if(array_phone.every(array_phone_function)==false) {

                    col_alert.setAttribute("style","top: 15px; opacity: 1");
                    col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_2}\n${button_alert}\n</div>\n`;
                    input_phone.focus();
                    input_phone.setAttribute("class","form-control border-danger");

                } else {

                    if(array_email.every(array_email_function)==false) {

                        col_alert.setAttribute("style","top: 15px; opacity: 1");
                        col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_2}\n${button_alert}\n</div>\n`;
                        input_email.focus();
                        input_email.setAttribute("class","form-control border-danger");

                    } else {

                        if(array_email.includes("@")==false) {

                            col_alert.setAttribute("style","top: 15px; opacity: 1");
                            col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_2}\n${button_alert}\n</div>\n`;
                            input_email.focus();
                            input_email.setAttribute("class","form-control border-danger");

                        } else {

                            if(array_company.every(array_company_function)==false) {

                                col_alert.setAttribute("style","top: 15px; opacity: 1");
                                col_alert.innerHTML=`\n<div class=\"${value_class}\">\n${error_2}\n${button_alert}\n</div>\n`;
                                input_company.focus();
                                input_company.setAttribute("class","form-control border-danger");

                            } else {

                                form_name=document.getElementById("input-name");
                                form_email=document.getElementById("input-email");
                                  form_phone=document.getElementById("input-phone");
                                  form_company=document.getElementById("input-company");

                                // form_register.submit();
                                location.href="index.html";
                            }
                        }
                    }
                }
            } 
      }
}

function blur_input (e) {

  var sign_alert_sm="<div class=\"position-relative\" style=\"top: 3px;\">\n&times\n</div>";
    var sign_alert_md="<div class=\"position-relative\" style=\"top: 5px;\">\n&times\n</div>";
    var button_alert_sm=`<button type=\"button\" class=\"close\" onclick=\"Button_Dismissible(event)\" data-dismiss=\"alert\">\n${sign_alert_sm}\n</button>`;
  var button_alert_md=`<button type=\"button\" class=\"close\" onclick=\"Button_Dismissible(event)\" data-dismiss=\"alert\">\n${sign_alert_md}\n</button>`;

    if (e.target.value=="") {

        e.target.setAttribute("class","form-control border-danger");

    } else {

        if (e.target.name=="full_name") {

            let value_array=e.target.value.split("");

            if(value_array.every(array_name_function)==false) {

                if(e.target.id=="input-name") {

                    e.target.setAttribute("class","form-control border-danger");
                    warning_name[1].setAttribute("class","font-warning d-inline warning-name");

                } else {

                    e.target.setAttribute("class","form-control border-danger");
                    warning_name[0].setAttribute("class","font-warning d-inline warning-name");
                }

            } else {

                if(e.target.id=="input-name") {

                    e.target.setAttribute("class","form-control border-success");
                    warning_name[1].setAttribute("class","font-warning d-none warning-name");

                } else {

                    e.target.setAttribute("class","form-control border-success");
                    warning_name[0].setAttribute("class","font-warning d-none warning-name");
                }                                          
            }

        } else if (e.target.name=="email_address") {

            let value_array=e.target.value.split("");
            
            if(value_array.every(array_email_function)==false) {

                if(e.target.id=="input-email") {

                    e.target.setAttribute("class","form-control border-danger");
                    warning_email[1].setAttribute("class","font-warning d-inline warning-email");

                } else {

                    e.target.setAttribute("class","form-control border-danger");
                    warning_email[0].setAttribute("class","font-warning d-inline warning-email");
                }                

            } else {

                if(value_array.includes("@")==false) {

                    if(e.target.id=="input-email") {

                        e.target.setAttribute("class","form-control border-danger");
                        warning_email[1].setAttribute("class","font-warning d-none warning-email");                        
                        warning_alpha[1].setAttribute("class","font-warning d-inline warning-alpha");

                    } else {

                        e.target.setAttribute("class","form-control border-danger");
                        warning_email[0].setAttribute("class","font-warning d-none warning-email");
                        warning_alpha[0].setAttribute("class","font-warning d-inline warning-alpha");
                    }

                } else {

                    if(e.target.id=="input-email") {

                        e.target.setAttribute("class","form-control border-success");
                        warning_email[1].setAttribute("class","font-warning d-none warning-email");                        
                        warning_alpha[1].setAttribute("class","font-warning d-none warning-alpha");

                    } else {

                        e.target.setAttribute("class","form-control border-success");
                        warning_email[0].setAttribute("class","font-warning d-none warning-email");
                        warning_alpha[0].setAttribute("class","font-warning d-none warning-alpha");
                    }                                  
                }            
            }            

        } else if (e.target.name=="phone_number") {

            let value_array=e.target.value.split("");

            if(value_array.every(array_phone_function)==false) {

                if(e.target.id=="input-phone") {

                    e.target.setAttribute("class","form-control border-danger");
                    warning_phone[1].setAttribute("class","font-warning d-inline warning-phone");

                } else {

                    e.target.setAttribute("class","form-control border-danger");
                    warning_phone[0].setAttribute("class","font-warning d-inline warning-phone");
                }

            } else {

                if(e.target.id=="input-phone") {

                    e.target.setAttribute("class","form-control border-success");
                    warning_phone[1].setAttribute("class","font-warning d-none warning-phone");

                } else {

                    e.target.setAttribute("class","form-control border-success");
                    warning_phone[0].setAttribute("class","font-warning d-none warning-phone");
                }              
            }

        } else if (e.target.name=="company_name") {

            let value_array=e.target.value.split("");

            if(value_array.every(array_company_function)==false) {

                if(e.target.id=="input-company") {

                    e.target.setAttribute("class","form-control border-danger");
                    warning_company[1].setAttribute("class","font-warning d-inline warning-company");

                } else {

                    e.target.setAttribute("class","form-control border-danger");
                    warning_company[0].setAttribute("class","font-warning d-inline warning-company");
                }

            } else {

                if(e.target.id=="input-company") {

                    e.target.setAttribute("class","form-control border-success");
                    warning_company[1].setAttribute("class","font-warning d-none warning-company");

                } else {

                    e.target.setAttribute("class","form-control border-success");
                    warning_company[0].setAttribute("class","font-warning d-none warning-company");
                }                
            }

        } else {

            e.target.setAttribute("class","form-control border-success");        
        }
    }
}

function blur_select (e) {

    if (e.target.value=="-") {

        e.target.setAttribute("class","form-control border-danger");

    } else {

        e.target.setAttribute("class","form-control border-success");
    }
}

function Button_Dismissible () {

    if(col_alert.hasAttribute("style")==true) {

        col_alert.removeAttribute("style");
    }
}

function IMG_FRAME_OVER (e) {

    shadow_img_lg.setAttribute("style","width: 335px; transition-timing-function: ease");
}

function IMG_FRAME_OUT (e) {

    shadow_img_lg.setAttribute("style","transition-timing-function: ease");
}

function IMG_REASON_OVER (e) {

    VanillaTilt.init(e.target,{max: 25,speed: 300});
}

function NAVBAR_BUTTON_LG (e) {

    if(boolean_nav_prev==false) {

        e.target.setAttribute("style","color: #808080; border-bottom: #ffffff solid 1px;");
        attribute_nav_prev=e.target;
        boolean_nav_prev=e.target.hasAttribute("style");

        if (e.target.innerHTML=="Services") {

            $(document).ready(function(){

                $("html").scrollTop(1115.5);
            });

        } else {

            if(e.target.innerHTML=="Project") {

                $(document).ready(function(){

                    $("html").scrollTop(1730.5);
                });                
            }
        }

    } else {

        attribute_nav_prev.removeAttribute("style");
        e.target.setAttribute("style","color: #808080; border-bottom: #ffffff solid 1px;");
        attribute_nav_prev=e.target;
        boolean_nav_prev=e.target.hasAttribute("style");

        if (e.target.innerHTML=="Services") {

            $(document).ready(function(){

                $("html").scrollTop(1115.5);
            });

        } else {

            if(e.target.innerHTML=="Project") {

                $(document).ready(function(){

                    $("html").scrollTop(1730.5);
                });                
            }
        }
    }  
}

function NAVBAR_BUTTON_SM (e) {

    // console.log($(".section-showoff .percobaan").offset());

    if(boolean_nav_prev==false) {

        e.target.setAttribute("style","color: darkred");
        attribute_nav_prev=e.target;
        boolean_nav_prev=e.target.hasAttribute("style");

            $(document).ready(function(){

                console.log($(".section-service .percobaan-1").offset());
                console.log($(".section-showoff .percobaan-2").offset());
            });        

        if(e.target.id=="menu-service-md") {

            $(document).ready(function(){

                $("html").scrollTop(950);
            });

        } else if (e.target.id=="menu-project-md") {

            $(document).ready(function(){

                $("html").scrollTop(1570);
            });            

        } else if (e.target.id=="menu-service-sm") {

            $(document).ready(function(){


            });            

        } else if (e.target.id=="menu-project-sm") {

            $(document).ready(function(){


            });                        

        } else if (e.target.id=="menu-service-xs") {

            $(document).ready(function(){

                $("html").scrollTop(970);
            });                        

        } else {

            if(e.target.id=="menu-project-xs") {

                $(document).ready(function(){

                    $("html").scrollTop(1970);
                });
            }
        }

    } else {

        attribute_nav_prev.removeAttribute("style");
        e.target.setAttribute("style","color: darkred");
        attribute_nav_prev=e.target;
        boolean_nav_prev=e.target.hasAttribute("style");

            $(document).ready(function(){

                console.log($(".section-service .percobaan-1").offset());
                console.log($(".section-showoff .percobaan-2").offset());
            });        

        if(e.target.id=="menu-service-md") {

            $(document).ready(function(){

                $("html").scrollTop(950);
            });

        } else if (e.target.id=="menu-project-md") {

            $(document).ready(function(){

                $("html").scrollTop(1570);
            });            

        } else if (e.target.id=="menu-service-sm") {

            $(document).ready(function(){


            });            

        } else if (e.target.id=="menu-project-sm") {

            $(document).ready(function(){


            });                        

        } else if (e.target.id=="menu-service-xs") {

            $(document).ready(function(){

                $("html").scrollTop(970);
            });                        

        } else {

            if(e.target.id=="menu-project-xs") {

                $(document).ready(function(){

                    $("html").scrollTop(1970);
                });
            }
        }
    }  
}

var Navbar_Toggler=document.querySelector('button.navbar-toggler');
Navbar_Toggler.addEventListener("click",NavCollapse);

var carousel=document.querySelector(".carousel-header .carousel");
carousel.addEventListener("mouseover",CAROUSEL_OVER);
carousel.addEventListener("mouseout",CAROUSEL_OUT);

var submit_md=document.querySelector(".d-md-inline [type='submit']");
submit_md.addEventListener("click",validation_form_md);

var submit_sm=document.querySelector(".d-md-none [type='submit']");
submit_sm.addEventListener("click",validation_form_xs);

var img_reason=document.querySelector(".content-picture .d-lg-inline.img-fluid");
img_reason.addEventListener("mouseover",IMG_REASON_OVER);

var img_frame=document.querySelector(".content-picture .picture-tilt");
img_frame.addEventListener("mouseover",IMG_FRAME_OVER);
img_frame.addEventListener("mouseout",IMG_FRAME_OUT);

var input_form=document.querySelectorAll("[action='Form_Nadha.php'] .form-control");

  for(var i=0; i<10; i++) {

      input_form[i].addEventListener("blur",blur_input);
  }

var select_form=document.querySelectorAll("[action='Form_Nadha.php'] .custom-select");

  for(var i=0; i<2; i++) {

      select_form[i].addEventListener("blur",blur_select);
  }

var nav_button_lg=document.querySelectorAll(".navbar-expand .navbar-text");

  for(var i=0; i<nav_button_lg.length; i++) {

      nav_button_lg[i].addEventListener("click",NAVBAR_BUTTON_LG);
  }

var nav_button_sm=document.querySelectorAll(".nav-collapse .navbar-text");

  for(var i=0; i<nav_button_sm.length; i++) {

      nav_button_sm[i].addEventListener("click",NAVBAR_BUTTON_SM);
  }

// $(".navbar .karir").click(function(){

//     $("html").scrollTop(1000);
//     var posisi_gambar=$(".container .img-thumbnail").position();
//     console.log(posisi_gambar);
// });

// $(".nav-collapse .karir").click(function(){

//     $("html").scrollTop(1000);
//     var posisi_gambar=$(".container .img-thumbnail").position();
//     console.log(posisi_gambar);
// });