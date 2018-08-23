$(document).ready(function() {
  $('#youtube-video').magnificPopup({
      type:'iframe',iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', 

  patterns: {
    youtube: {
      index: 'youtube.com/', 
      id: 'v=', 
      src: 'http://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
    },
    vimeo: {
      index: 'vimeo.com/',
      id: '/',
      src: '//player.vimeo.com/video/%id%?autoplay=1'
    },
    gmaps: {
      index: '//maps.google.',
      src: '%id%&output=embed'
    }
  },

  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
}

  });
    $('.skillbar').skillBars({

  // number start
  from: 0,       

  // number end 
  to: false,      

  // animation speed
  speed: 1000,   

  // how often the element should be up<a href="https://www.jqueryscript.net/time-clock/">date</a>d
  interval: 100,    

  // the number of decimal places to show
  decimals: 0,      

  // callback method for every time the element is updated,
  onUpdate: null,   

  // callback method for when the element finishes updating
  onComplete: null,   

  // CSS classes
  classes:{
    skillBarBar : '.skillbar-bar',
    skillBarPercent : '.skill-bar-percent',
  }
  
});
    $('.number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    //mixitup
   var mixer = mixitup('.protfolio-content');
    //protfolio magnific popup
     $('.image-link').magnificPopup({type:'image'});
    //owl carousel js
     $('.owl-carousel').owlCarousel({
                    loop:true,
                    margin:10,
                    nav:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:3
                        },
                        1000:{
                            items:5
                        }
                    }
                })
});