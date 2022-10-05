    $(document).ready(function(){
      /*menu*/
      $('header .header-one .box .drop-down-menu .drop-btn').on('click',function(){
        $('header .header-one .box .drop-down-menu .drop-btn i').toggleClass('fa-times')
        $('header .header-one .box .drop-down-menu .drop-content').toggleClass('active')
      
      })

/**login start*/
$('.header-one .container .box .login-btn').on('click',function(){
$('.login .box-container .box').animate({top:'50%'})
})

$('.login .box-container .box .close').on('click',function(){
  $('.login .box-container .box').animate({top:'-100%'})
})
/**login end */






  //home arrowscroll bottom
  $('.home .down').on('click',function(e){
    e.preventDefault();
     $('html,body').animate({ scrollTop: $('.footer').offset().top }, 'slow');

});


    //home arrowscroll bottom
    $('.home .down').on('click',function(e){
        e.preventDefault();
         $('html,body').animate({ scrollTop: $('.footer').offset().top }, 'slow');

    });

    //header nav ul a go to offset
    $('header .header-two nav ul a').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $('html,body').animate({scrollTop:$('#' + $(this).data('scroll')).offset().top -150 },'slow');
    }) 
    //header nav ul a go to offset



    //moon mode
    $('.header-two .icons #dark').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('fa-sun fa-moon');
        if($(this).hasClass('fa-sun')){
            $('body').addClass('dark')
        }else{
            $('body').removeClass('dark')

        }
    })
    //moon mode


})
  

/**partager input onclick */
$('.partager .box-container .row .box input').on('click',function(){
    $('.partager .overlay').show(400)
})
$('.partager .overlay').on('click',function(){
    $(this).hide(200)
})

$('.partager .overlay .modal').on('click',function(e){
   e.stopPropagation()
})

$('.partager .modal .close-box span').on('click',function(){
    $('.partager .overlay').hide(200)
 })

/**partager input onclick */




$(window).on('scroll load',function(){ //all this on scroll event


/*hide header one */
  $('#menu').removeClass('fa-times')
  $('header .header-two').removeClass('active')
  if($(window).scrollTop() > 68){
    $('header .header-two').addClass(('fixed'))
}
else
$('header .header-two').removeClass(('fixed'));

/*hide header one*/


  //header nav ul a addclass on scroll
  $('section').each(function(){
    if($(window).scrollTop() >= $(this).offset().top -100){
        var id =  $(this).attr('id');
        $('.nav  a').removeClass('active')
        $(`.nav  a[data-scroll=${id}]`).addClass('active')

    }
})
//header nav ul a addclass on scroll


/**arrow scroll-top */

  if($(window).scrollTop() >= parseInt($('.services').offset().top) ){
    $('.footer .scroll-top').fadeIn('slow')
}
else{
    $('.footer .scroll-top').fadeOut('slow')

}
/**arrow-scroll top */
})


/**arrow-scroll top onclick*/
$('.footer .scroll-top').on('click',function(){
  $('html,body').animate({scrollTop :0},'slow')

})
/**arrow-scroll top onclick*/








//services slide owlCarousel
$('.services .box-container').owlCarousel({
    items:2,
    autoplay:true,
    dots:false,
    autoplayHoverPause:true,
    autoPlaySpeed: 1000,
    loop:true,
    rtl: true,
    autoplayTimeout:3000,
    responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }

});



//scroll reveal
/*
var headingReveal ={
  distance:'150%',
  origin:'left',
  opacity:0.8,
  delay:500,
  duration:1000,
  scal:1
}

ScrollReveal.reveal('.heading',headingReveal)
*/

let headingReveal = ScrollReveal({
  distance :'5rem',
  duration :2000,
  delay:400
})

headingReveal.reveal('.heading',{origin:'left',interval:100})










//admin page
$(document).ready(function(){
  $('.login-admin .login-app .button-app button').on('click',function(){
    if($(".login-admin .login-app form div input.email").val() !='' 
      && $(".login-admin .login-app form div input.password").val() !=''
    )
        {
          $(this ).parent().parent().css('display','none')
          $('.post-comment').show()
    
        }else{
        

             $('.forgot p').html('Wrong password or email')


      }
    })
    
    
    
    $('#selectedFile').on('change',function(){
    /*  $('.textarea-upload-app textarea').val($(this).val())*/
      console.log($('#selectedFile').val())
    })






$('.navBar .admin-panel-btn').on('click',function(e){
e.preventDefault();
$('.login-admin').show(200)
})


$('.login-admin span.close').on('click',function(){
  $('.login-admin').hide(200)
})






$('.post-comment .info-textarea-box  .textarea-upload-app .upload #selectedFile ').on('change',function(e){


$('.post-comment .button-row .btn-app #add-post').on('click',function(){
  let url = URL.createObjectURL(e.target.files[0])
  let imgPost = document.createElement('img')
  imgPost.src=url
      $('.posts .posts-wrapper').append(()=>   `
      <div class='post'>
      <div class="user-info">
        <img src="https://cdn.dribbble.com/users/2178140/screenshots/14617092/media/3048ed8aefc1ec67f3a707dbfeed3ec6.png?compress=1&resize=400x300&vertical=top"/>
        <p>user name</p>
      </div>
        <div class="box-content-jquery">
        <p class='post-paraghraph'>${$('.post-comment .info-textarea-box  .textarea-upload-app textarea').val()}</p>
        </div>
        <div class="buttons">
        <a href="#"><button class="save">save <i class="fas fa-bookmark"></i></button></a>
        <a href="#"><button class="delete">delete <i class="fas fa-trash"></i></button></a>
        </div>
     </div>
      `)
      $(".post-paraghraph").css({'fontSize':'1.8rem','textAlign':'left','width':'80%'})
      $('.box-content-jquery').append(()=>imgPost)
   
    removePost()
})


})

 
//remove  post
function removePost(){
  $('.post ').on('click', '.delete', function(e) {
    e.preventDefault()
    $(this).parent().parent().parent().remove();
  });
}

removePost()
 





})

  //search
      $('.input-filter-post').on('change',function(event){
        event.target.value
        console.log(  event.target.value)
         // $(`.post-parghraph:contains(${event.target.value})`).parent().parent().show().siblings().hide()
          $(`.posts .post`).hide()
          $(`.posts .post `).has(`p:last:contains(${event.target.value})`).show()
  })


  $('.btn-filter a').on('click',function(e){
    e.preventDefault()
    $('.input-filter-post').click()
})



