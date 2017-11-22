
    $(window).scroll(function () {
      var wscroll = $(this).scrollTop();
       $('.logo').css({
          'transform' : 'translate(0px, '+ (wscroll * 1.2) + 'px)'
       });
        $('.back-bird').css({
          'transform' : 'translate(0px, ' + (-wscroll * .06) + 'px)'
       });
        $('.fort-bird').css({
          'transform' : 'translate(0px, '+ (-wscroll * 0.25) + 'px)' 
       });
        if (wscroll > ($('.cloth-pics figure').offset().top) - 380 ) {
             $('.cloth-pics figure').each(function (i) {
                 var settime = setTimeout (function () {
                   $('.cloth-pics figure').eq(i).addClass('down');  
                 },400 * (i+ 1));
             });
        } else if(wscroll < $('.cloth-pics').offset().top - $(window).height()) {
                 
                 $('.cloth-pics figure').each(function (i) {
                 var rtime = setTimeout (function () {
                   $('.cloth-pics figure').eq(i).removeClass('down');  
                 },160 * (i+ 1));
                 });
             }
        if (wscroll > $('.large-window').offset().top - $(window).height()) {
            
            $('.large-window').css({
               backgroundPositionY : (wscroll - $('.large-window').offset().top)
            });
            var apac = (wscroll - $('.large-window').offset().top  + 500) / (wscroll / 4);
            $('.large-window .overlay').css({
               opacity : apac
             });
            
        }
        /*if (wscroll > $('.plog-posts').offset().top - 300  )  {
            var offst = wscroll - $('.plog-posts').offset().top - $(window).height();
            $('.post-1').css({
               transform: 'translateX(' + offst +  'px)'  
            });
            $('.post-3').css({
               transform: 'translateX(' + offst +  'px)'  
            });
            window.console.log('window is scrollTop : ' + wscroll ,  'div offset top :' + $('.plog-posts').offset().top,'            :::' + offst );
        }  */
        if (wscroll > $('.plog-posts').offset().top - ($(window).height()  +600))  {
            var offst = Math.min(0, wscroll - $('.plog-posts').offset().top + $(window).height() - 300);
            $('.post-1').css({
               transform: 'translateX('+ offst +'px)'  
            });
            $('.post-3').css({
               transform: 'translateX(' +Math.abs(offst ) +'px)'  
            });
        } else {
           
        }
             
    });
