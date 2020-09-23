// stupid scroll
/*document.body.style.overflow='hidden';
var swidth=document.body.clientWidth;
document.body.style.overflow='scroll';
swidth-=document.body.clientWidth;
if(!swidth) swidth=document.body.offsetWidth-document.body.clientWidth;
document.body.style.overflow='';*/

// Validation & send
function ajax1(){
    var msg=$("#form-1").serialize();
    $.ajax({type:"POST", url:"./js/smartAjax.php", data:msg,
        success:function(data){
            $.closeModal();
            $("#modal-success .modal-in").html(data);
            setTimeout(function(){
                $('body').addClass('bodyModal blur');
                // $('html').css({'overflow':'hidden','padding-right':0});
                $('#modal-success').addClass('active');
            },300);
            setTimeout(function(){
                $.closeModal();
                $('.form_input').val('');
            },3700);
        },error:function(xhr,str){alert("Возникла ошибка!")}
    });
}

jQuery.fn.notExists=function(){return $(this).length==0}
$(document).ready(function(){
    $("#send-1").validation(
        $("#name-1").validate({
            test:"blank",
            invalid:function(){
                $(".error").remove();
                if($(this).nextAll(".error").notExists()){
                    $(this).after('<div class="error">Введите имя пользователя</div>');
                    $(this).nextAll(".error").delay(1500).fadeOut("slow");
                    setTimeout(function(){
                        $("#name-1").next(".error").remove();
                    },2100);
                }
            },valid:function(){
                $(this).nextAll(".error").remove();
                $("#send-1").validation(
                    $("#tel-1").validate({
                        test:"blank",
                        invalid:function(){
                            $(".error").remove();
                            if($(this).nextAll(".error").notExists()){
                                $(this).after('<div class="error">Введите номер телефона</div>');
                                $(this).nextAll(".error").delay(1500).fadeOut("slow");
                                setTimeout(function(){
                                    $("#tel-1").next(".error").remove();
                                },2100);
                            }
                        },valid:function(){$(this).nextAll(".error").remove();
                            $("#send-1").validation(
                                $("#mail-1").validate({
                                    test:"blank",
                                    invalid:function(){
                                        $(".error").remove();
                                        if($(this).nextAll(".error").notExists()){
                                            $(this).after('<div class="error" style="min-width: 240px">Введите адрес электронной почты</div>');
                                            $(this).nextAll(".error").delay(1500).fadeOut("slow");
                                            setTimeout(function(){
                                                $("#mail-1").next(".error").remove();
                                            },2100);
                                        }
                                    },valid:function(){$(this).nextAll(".error").remove()}
                                })
                            )}
                    })
                )
            }
        })
    );
});

function ajax21(){
    var msg=$("#form-21").serialize();
    $.ajax({type:"POST", url:"./js/smartAjax.php", data:msg,
        success:function(data){
            $.closeModal();
            $("#modal-success .modal-in").html(data);
            setTimeout(function(){
                $('body').addClass('bodyModal blur');
                // $('html').css({'overflow':'hidden','padding-right':0});
                $('#modal-success').addClass('active');
            },300);
            setTimeout(function(){
                $.closeModal();
                $('.form_input').val('');
            },3700);
        },error:function(xhr,str){alert("Возникла ошибка!")}
    });
}

jQuery.fn.notExists=function(){return $(this).length==0}
$(document).ready(function(){
    $("#send-2").validation(
        $("#name-2").validate({
            test:"blank",
            invalid:function(){
                $(".error").remove();
                if($(this).nextAll(".error").notExists()){
                    $(this).after('<div class="error">Введите имя пользователя</div>');
                    $(this).nextAll(".error").delay(1500).fadeOut("slow");
                    setTimeout(function(){
                        $("#name-2").next(".error").remove();
                    },2100);
                }
            },valid:function(){
                $(this).nextAll(".error").remove();
                $("#send-2").validation(
                    $("#tel-2").validate({
                        test:"blank",
                        invalid:function(){
                            $(".error").remove();
                            if($(this).nextAll(".error").notExists()){
                                $(this).after('<div class="error">Введите номер телефона</div>');
                                $(this).nextAll(".error").delay(1500).fadeOut("slow");
                                setTimeout(function(){
                                    $("#tel-2").next(".error").remove();
                                },2100);
                            }
                        },valid:function(){$(this).nextAll(".error").remove()}
                    })
                )
            }
        })
    );
});





jQuery.fn.notExists=function(){return $(this).length==0}
$(document).ready(function(){
    $("#send-21").validation(
        $("#name-21").validate({
            test:"blank",
            invalid:function(){
                $(".error").remove();
                if($(this).nextAll(".error").notExists()){
                    $(this).after('<div class="error">Введите имя пользователя</div>');
                    $(this).nextAll(".error").delay(1500).fadeOut("slow");
                    setTimeout(function(){
                        $("#name-21").next(".error").remove();
                    },2100);
                }
            },valid:function(){
                $(this).nextAll(".error").remove();
                $("#send-21").validation(
                    $("#tel-21").validate({
                        test:"blank",
                        invalid:function(){
                            $(".error").remove();
                            if($(this).nextAll(".error").notExists()){
                                $(this).after('<div class="error">Введите номер телефона</div>');
                                $(this).nextAll(".error").delay(1500).fadeOut("slow");
                                setTimeout(function(){
                                    $("#tel-21").next(".error").remove();
                                },2100);
                            }
                        },valid:function(){$(this).nextAll(".error").remove()}
                    })
                )
            }
        })
    );
});


function ajax61(){
    var msg=$("#form-61").serialize();
    $.ajax({type:"POST", url:"./js/smartAjax.php", data:msg,
        success:function(data){
            $.closeModal();
            $("#modal-success .modal-in").html(data);
            setTimeout(function(){
                $('body').addClass('bodyModal blur');
                // $('html').css({'overflow':'hidden','padding-right':0});
                $('#modal-success').addClass('active');
            },300);
            setTimeout(function(){
                $.closeModal();
                $('.form_input').val('');
            },3700);
        },error:function(xhr,str){alert("Возникла ошибка!")}
    });
}

jQuery.fn.notExists=function(){return $(this).length==0}
$(document).ready(function(){
    $("#send-61").validation(
        $("#tel-61").validate({
            test:"blank",
            invalid:function(){
                $(".error").remove();
                if($(this).nextAll(".error").notExists()){
                    $(this).after('<div class="error">Введите номер телефона</div>');
                    $(this).nextAll(".error").delay(1500).fadeOut("slow");
                    setTimeout(function(){
                        $("#tel-61").next(".error").remove();
                    },2100);
                }
            },valid:function(){$(this).nextAll(".error").remove()}
        })
    );
});



$(function(){$('.form_input-tel').mask('+7(999) 999-99-99')});



// GetUtm
var namekey = ['utm_source','utm_medium','utm_campaign','type','source','added','block','pos','key','campaign','ad','phrase','utm_term','utm_content','network','placement','keyword'];
function parseGET(url){
    if(!url || url == '') url = decodeURI(document.location.search);
    if(url.indexOf('?') < 0) return Array();
    url = url.split('?');
    url = url[1];
    var GET = [], params = [], key = [];
    if(url.indexOf('#')!=-1){ url = url.substr(0,url.indexOf('#'))}
    if(url.indexOf('&') > -1){ params = url.split('&');} else {params[0] = url}
    for (r=0; r<params.length; r++){
        for (z=0; z<namekey.length; z++){
            if(params[r].indexOf(namekey[z]+'=') > -1){
                if(params[r].indexOf('=') > -1){
                    key = params[r].split('=');
                    GET[key[0]]=key[1];
                }
            }
        }
    }
    return (GET);
};

// AddUtm
function addUtm(){
    var $_GET = parseGET();
    for(z=0; z<namekey.length; z++){
        if($_GET[namekey[z]]){
            $('#form-1').append('<input name="'+namekey[z]+'" type="hidden" value="'+$_GET[namekey[z]]+'">');
            $('#form-2').append('<input name="'+namekey[z]+'" type="hidden" value="'+$_GET[namekey[z]]+'">');
        }
    }
}

// if mobile devices function
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

// Modernizr - svg
!function(e,n,s){function o(e,n){return typeof e===n}function a(){var e,n,s,a,t,f,r;for(var c in l)if(l.hasOwnProperty(c)){if(e=[],n=l[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(s=0;s<n.options.aliases.length;s++)e.push(n.options.aliases[s].toLowerCase());for(a=o(n.fn,"function")?n.fn():n.fn,t=0;t<e.length;t++)f=e[t],r=f.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),i.push((a?"":"no-")+r.join("-"))}}function t(e){var n=r.className,s=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");n=n.replace(o,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(n+=" "+s+e.join(" "+s),c?r.className.baseVal=n:r.className=n)}var i=[],l=[],f={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var s=this;setTimeout(function(){n(s[e])},0)},addTest:function(e,n,s){l.push({name:e,fn:n,options:s})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr;var r=n.documentElement,c="svg"===r.nodeName.toLowerCase();Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),a(),t(i),delete f.addTest,delete f.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();e.Modernizr=Modernizr}(window,document);


// Function equalheight
!function(a){a.fn.innerEqualHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.innerHeight(b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).innerEqualHeights()})}(jQuery);
!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).height();c>b&&(b=c)}),c.height(b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);
// $('.about_ideology_item').innerEqualHeights();

/****   Document ready   ****/
$(document).ready(function(){

// Глобальные переменные
    var winH = $(window).height();



// Promo
    $(function(){
        $('.promo').addClass('animation');
        // Смена даты
        // возвращает последний день текущего месяца
        var year = new Date().getFullYear();
        var month = new Date().getMonth();
        var day = (new Date(year,month+1,0)).getDate();

        switch (month){
            case 0:month = 'января';break
            case 1:month = 'февраля';break
            case 2:month = 'марта';break
            case 3:month = 'апреля';break
            case 4:month = 'мая';break
            case 5:month = 'июня';break
            case 6:month = 'июля';break
            case 7:month = 'августа';break
            case 8:month = 'сентября';break
            case 9:month = 'октября';break
            case 10:month = 'ноября';break
            case 11:month = 'декабря';break
            case 12:month = 'января';break
        }
        $('.promo_form_note_date-day').text(day);
        $('.promo_form_note_date-month').text(month);
    });




// Parallax
    $(function(){
        $('.parallax').each(function(index,item){
            var yPos = ($(item).offset().top - 0 ) / $(item).data('speed'),
                coords = '50% ' + yPos + 'px';
            $(item).css({
                'background-attachment':'fixed',
                'background-position':coords
            });
        });
    });





// Calc
    $(function(){
        if($('#calc').length){
            $('.calc_step_bt-start').on('click',function(){
                $('.calc_step').removeClass('active');
                $('.calc_step-' + $(this).attr('data-step')).addClass('active');

                var body = $.browser.webkit ? $('body') : $('html');
                // event.preventDefault();
                body.animate({scrollTop:$('#calc').offset().top+100},500);

                return false;
            });

            $('.calc_step_bt-arrow').on('click',function(){
                $('.calc_step').removeClass('active');
                $('.calc_step-' + $(this).attr('data-step')).addClass('active');

                var body = $.browser.webkit ? $('body') : $('html');
                // event.preventDefault();
                body.animate({scrollTop:$('#calc').offset().top+100},500);

                return false;
            });

            $('.calc_step_bt-add').on('click',function(){
                $('.calc_step-1_options-w').append('<ul class="calc_step-1_options"> <li class="calc_step-1_option"> <label class="calc_step-1_option_label" for="calc_option-1">Длина, мм</label> <p class="calc_step-1_option_input-w"><input class="calc_step-1_option_input" id="calc_option-1" name="calc_option-1" value="" placeholder="22 000">  <li class="calc_step-1_option">  <label class="calc_step-1_option_label" for="calc_option-2">Ширина, мм</label>  <p class="calc_step-1_option_input-w"><input class="calc_step-1_option_input" id="calc_option-2" name="calc_option-2" value="" placeholder="22 000">  </ul>');
                // $('.calc_step').removeClass('active');
                // $('.calc_step-' + $(this).attr('data-step')).addClass('active');

                // var body = $.browser.webkit ? $('body') : $('html');
                // // event.preventDefault();
                // body.animate({scrollTop:$('#calc').offset().top+100},500);

                return false;
            });
            $('.calc_step-1_option_input').change(function(){
                $(this).val($(this).val().toString().replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g,"$1 "));
                // var controlInput2=$('#calc_param-2_control_input-2').val();
                // if(controlInput2>200){
                // 	controlInput2=200;
                // 	$('#calc_param-2_control_input-2').val(controlInput2);
                // }
                // if(controlInput2<1){
                // 	controlInput2=1;
                // 	$('#calc_param-2_control_input-2').val(controlInput2);
                // }
                // $('#calc_param-1_control-1').slider('value',controlInput2);
                // $('#calc_form_param2').val($('#calc_param-2_control_input-2').val());

                // c = $('#js-calculator_controller-1').slider('value')*12;
                // p = $('#js-calculator_controller-2').slider('value');
                // // result = -1 * b/(Math.pow(1+b,c)-1)*(-(p*Math.pow(1+b,c)));
                // result = (p * 10.5 / 12) / (1 - Math.pow((1 + 10.5 /12),(1 - c)));
                // $('#cf1').val($('#js-calculator_controller-1').slider('value'));
                // $('#cf2').val($('#js-calculator_controller-2').slider('value'));
                // $('#cf3').val(Math.round(result).toString().replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g," $1"));
                // $('#js-calculator_field-3').text(Math.round(result).toString().replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g," $1"));
            });
            // ввод только цифр
            $('.calc_step-1_option_input').keypress(function(event){
                var key,keyChar;
                if(!event) var event=window.event;
                if(event.keyCode) key=event.keyCode;
                else if(event.which) key=event.which;
                if(key==null||key==0||key==8||key==13||key==9||key==46||key==37||key==39) return true;
                keyChar=String.fromCharCode(key);
                if(!/\d/.test(keyChar))	return false;
            });







            // var slider = new Swiper('.calc_slider',{
            // 	slidesPerView:1
            // 	,spaceBetween:0
            // 	,simulateTouch:false
            // 	,loop:true
            // 	,prevButton:'.calc_step_bt_arrow-left'
            // 	,nextButton:'.calc_step_bt_arrow-right'
            // });
        }
    });




// Contact
    $('.contact_item').innerEqualHeights();






// modal здесь присвоение названий формы в модальном окне через переменные вида "дата-мсенд"
    $('.order').live('click',function(){
        $.openModal();
        $('.modal-1').addClass('active');
        $('.modal-1_header').html($(this).attr('data-mHeader'));
        $('#send-1').val($(this).attr('data-mSend'));
        $('#formName').val($(this).attr('data-mFormName'));
        return false;
    });

    $('.order.order-1').live('click',function(){
        $.openModal();
        $('.modal-11').addClass('active');
        $('.modal-2_header').html($(this).attr('data-mHeader'));
        $('#send-2').val($(this).attr('data-mSend'));
        $('#formName').val($(this).attr('data-mFormName'));
        return false;
    });






// modal in example
    $('.order-example').live('click',function(){
        $.openModal();
        $('.modal-' + $(this).attr('data-modal')).addClass('active');
        return false;
    });


// функция закрытия модального окна по клику на фон
    $('.modal').on('click',function(e){
        if($(e.target).hasClass('modal')){
            $.closeModal();
            return false;
        }
    });
// функция закрытия модального окна по клику на крестик
    $('.modal_close').on('click',function(){
        $.closeModal();
        return false;
    });

// функция открытия модального окна
    $.openModal = function(){
        $('.modal').removeClass('active');
        $('body').addClass('bodyModal blur');
        // $('html').css({'overflow':'hidden','padding-right':0});
        return false;
    };

// функция закрытия модального окна
    $.closeModal = function(){
        $('.modal').removeClass('active');
        $('body').removeClass('bodyModal blur');
        // $('html').css({'overflow':'auto'});
        setTimeout(function(){
            $('html').css({'overflow':'auto','padding-right':0});
        },180);
        return false;
    };















// Yandex maps & tabs
//
//     $(function(){
//         ymaps.ready(init);
//         var contactMap,modalContactMap;
//         // var contactsMark1,contactsMark2,contactsMark3,contactsMark4,contactsMark5;
//         function init(){
//             contactMap = new ymaps.Map('contact_map',{
//                 center:[55.810076, 37.509083],
//                 zoom:16,
//                 controls:[]
//             });
//             contactMap.behaviors.disable('scrollZoom');
//             // contactMap.behaviors.disable('drag');
//             contactMap.controls.add('zoomControl',{
//                 // size:'large',
//                 position:{
//                     top:20,
//                     right:20
//                 }
//             });
//             contactMap.geoObjects.add(new ymaps.Placemark([55.810076, 37.509083],{
//                 balloonContent:'ООО "ЭЛКОД"'
//             },{
//                 // preset:'islands#dotIcon',
//                 // iconColor:'#00b0f5'
//
//                 iconLayout:'default#image',
//                 // iconImageHref:'img/contact-map-icon.png',
//                 //iconImageHref:'img/contact-map-icon.png',
//                 //iconImageHref:'img/contact-map-icon.svg',
//                 //iconImageSize:[50,70]
//                 //,iconImageOffset:[-25,-70]// Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
//             }));
//
//             contactMap.geoObjects.add(new ymaps.Placemark([55.810076, 37.509083],{
//                     balloonContent:'ООО "ЭЛКОД"'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));
//             contactMap.geoObjects.add(new ymaps.Placemark([55.897983,36.930206],{
//                     balloonContent:'ФасадКерамика - завод'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));
//             contactMap.geoObjects.add(new ymaps.Placemark([55.870779, 37.441350],{
//                     balloonContent:'Дилер в г.Москва'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));
//             contactMap.geoObjects.add(new ymaps.Placemark([59.902686, 30.337275],{
//                     balloonContent:'Филиал в г.Санкт-Петербург'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));
//             contactMap.geoObjects.add(new ymaps.Placemark([55.888881, 37.428163],{
//                     balloonContent:'Дилер в г.Химки'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));
//             contactMap.geoObjects.add(new ymaps.Placemark([47.276579, 39.690309],{
//                     balloonContent:'Дилер в г.Ростов-на-Дону'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));
//             contactMap.geoObjects.add(new ymaps.Placemark([56.863552, 35.943535],{
//                     balloonContent:'Дилер в г.Тверь'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));
//             contactMap.geoObjects.add(new ymaps.Placemark([43.167326, 131.935629],{
//                     balloonContent:'Дилер в г.Владивосток'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));
//             contactMap.geoObjects.add(new ymaps.Placemark([44.951063, 34.103237],{
//                     balloonContent:'Дилер в Крыму'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));
//             contactMap.geoObjects.add(new ymaps.Placemark([59.742784, 29.883504],{
//                     balloonContent:'Завод в г.Санкт-Петербург'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));
//             contactMap.geoObjects.add(new ymaps.Placemark([56.757697, 60.752964],{
//                     balloonContent:'Дилер в г.Екатеринбург'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));
//             contactMap.geoObjects.add(new ymaps.Placemark([57.173430, 65.508447],{
//                     balloonContent:'Дилер в г.Тюмень'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));
//             contactMap.geoObjects.add(new ymaps.Placemark([61.238172, 73.493410],{
//                     balloonContent:'Дилер в г.Сургут'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));
//             contactMap.geoObjects.add(new ymaps.Placemark([55.774538, 49.189930],{
//                     balloonContent:'Дилер в г.Казань'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));
//             contactMap.geoObjects.add(new ymaps.Placemark([51.764403, 36.133394],{
//                     balloonContent:'Дилер в г.Курск'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));
//             contactMap.geoObjects.add(new ymaps.Placemark([51.687025, 39.153611],{
//                     balloonContent:'Дилер в г.Воронеж'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));
//             contactMap.geoObjects.add(new ymaps.Placemark([45.034419, 39.065252],{
//                     balloonContent:'Дилер в г.Краснодар'
//                 }
//                 //,{iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]}
//             ));

            // Modal Contact Map
            // modalContactMap = new ymaps.Map('modal-contact_map',{
            //     center:[55.810076, 37.509083],
            //     zoom:14,
            //     controls:[]
            // });
            // modalContactMap.behaviors.disable('scrollZoom');
            // modalContactMap.controls.add('zoomControl',{
            //     position:{
            //         top:20,
            //         right:20
            //     }
            // });
            //modalContactMap.geoObjects.add(new ymaps.Placemark([55.897983,36.930206],{
            //    balloonContent:'ФасадКерамика – Адрес производства'
            //},{
            //    iconLayout:'default#image',iconImageHref:'img/contact-map-icon.png',iconImageHref:'img/contact-map-icon.svg',iconImageSize:[50,70],iconImageOffset:[-25,-70]
            //}));


    //
    //     $('.contact_item').on('click',function(){
    //         $('.contact_item').removeClass('active');
    //         $(this).addClass('active');
    //
    //         // $('.contact_content_tab').removeClass('contact_content_tab-active')
    //         // $('#contact_content_tab-'+$(this).attr('data-index')).addClass('contact_content_tab-active');
    //
    //         if($(this).attr('data-adr')==1)
    //         {
    //             contactMap.setCenter([55.810076, 37.509083]);
    //         }
    //         else
    //         if($(this).attr('data-adr')==2){
    //             contactMap.setCenter([55.897983,36.930206]);
    //
    //         }
    //         else
    //         if($(this).attr('data-adr')==3){
    //             contactMap.setCenter([55.870779, 37.441350]);
    //
    //         }
    //         else
    //         if($(this).attr('data-adr')==4){
    //             contactMap.setCenter([59.902686, 30.337275]);
    //
    //         }
    //         else
    //         if($(this).attr('data-adr')==5){
    //             contactMap.setCenter([55.888881, 37.428163]);
    //
    //         }
    //         else
    //         if($(this).attr('data-adr')==6){
    //             contactMap.setCenter([47.276579, 39.690309]);
    //
    //         }
    //         else
    //         if($(this).attr('data-adr')==7){
    //             contactMap.setCenter([56.863552, 35.943535]);
    //
    //         }
    //         else
    //         if($(this).attr('data-adr')==8){
    //             contactMap.setCenter([43.167326, 131.935629]);
    //
    //         }
    //         else
    //         if($(this).attr('data-adr')==9){
    //             contactMap.setCenter([44.951063, 34.103237]);
    //
    //         }
    //         else
    //         if($(this).attr('data-adr')==10){
    //             contactMap.setCenter([59.742784, 29.883504]);
    //
    //         }
    //         else
    //         if($(this).attr('data-adr')==11){
    //             contactMap.setCenter([56.757697, 60.752964]);
    //
    //         }
    //         else
    //         if($(this).attr('data-adr')==12){
    //             contactMap.setCenter([57.173430, 65.508447]);
    //
    //         }
    //         else
    //         if($(this).attr('data-adr')==13){
    //             contactMap.setCenter([61.238172, 73.493410]);
    //
    //         }
    //         else
    //         if($(this).attr('data-adr')==14){
    //             contactMap.setCenter([55.774538, 49.189930]);
    //
    //         }
    //         else
    //         if($(this).attr('data-adr')==15){
    //             contactMap.setCenter([51.764403, 36.133394]);
    //
    //         }
    //         else
    //         if($(this).attr('data-adr')==16){
    //             contactMap.setCenter([51.687025, 39.153611]);
    //
    //         }
    //         else
    //         if($(this).attr('data-adr')==17){
    //             contactMap.setCenter([45.034419, 39.065252]);
    //
    //         }
    //         return false;
    //     });
    // });
    //
    //






});// </ Document ready>