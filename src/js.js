$(document).ready(function () {





  console.log("%c ~>Mohamed Magdy","color:red;font-size:2rem;font-weight:bold");
    console.log("%c ~>https://www.fb.com/mpd2019","color:red;font-size:1rem;font-weight:bold");





$("svg.svg-inline--fa.fa-snapchat-ghost.fa-w-16").click(function () { 

  $("p.ssch,label.x-x").css("display","block");
});


$("label.x-x").click(function () { $("p.ssch,label.x-x").css("display","none");});




    $(window).scroll(function(){
		if ($(this).scrollTop() > 50) 
		{
            $("header").css({height:"60px",transition:"all .5s ease-in-out"});
            $("header a img").css({height:"50px",transition:"all .5s ease-in-out"});
		} 
		else 
		{
            $("header").css("height","100px");
            $("header a img").css("height","90px");
		}
    });
    


    var stys = {
        backgroundColor : "#7c1d3d"
      };

    $('span.s1').click(function () {

        $(this).css(stys);
$('.minns1').css("display","block");
$('.minns2,.minns3').css("display","none");

$('span.s3,span.s2').css("backgroundColor","#555");

    });


    $('span.s2').click(function () {
        $(this).css(stys);

        $('.minns2').css("display","block");
        $('.minns1,.minns3').css("display","none");
        
        $('span.s3,span.s1').css("backgroundColor","#555");

            });

            $('span.s3').click(function () {

$(this).css(stys);
                $('.minns3').css("display","block");
                $('.minns2,.minns1').css("display","none");
                $('span.s1,span.s2').css("backgroundColor","#555");

                
                    });

$('h3.openwhatsapp').click(function () {$(".whatsapp-form2").toggle(300);});
                      



$(".send_form").click(function () {


  var walink = 'https://web.whatsapp.com/send', 
  phone = '9660581707474', 
  text_yes = 'تم ارسال الطلب', 
  text_no = 'املأ جميع النماذج ثم انقر فوق إرسال.',
  wal_textarea = $('#wa_textarea').val(); 
    /* Smartphone Support */ 
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { 
      var w
      alink = 'whatsapp://send'; 
      } 


      if("" != wal_textarea){ 
     
        /* Call Input Form */ 
       var  iwal_textarea = $("#wa_textarea").val(); 
        
       /* Final Whatsapp URL */ 
       var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + '%0A%0A' + wal_textarea + '%0A'; 
        
       /* Whatsapp Window Open */ 
       window.open(blanter_whatsapp); 
       
       document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>'; 
       } else { 
       document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>'; 
       } 
       }); 









});