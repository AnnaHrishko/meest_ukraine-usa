$('.instruction-part').not('.instruction-part.wrap1').fadeOut(0)
$('.sec-instruction__inner__instruction-navigation ul li').click(function(){
  let index = $(this).attr('instruction-tag')
  $('.instruction-part').fadeOut(0)
  $('.wrap' + index).fadeIn(200)
  $('.sec-instruction__inner__instruction-navigation ul li').removeClass('active')
  $(this).addClass('active')
  return false
})

// $('.country-select').select2({
//     // Set template for results and selection
//     templateResult: flagTemplate,
//     templateSelection: flagTemplate,
//     // Set placeholder text
//     placeholder: 'Сountry',
//     // Load country list from https://restcountries.com
//     ajax: {
//       url: generateUrl,
//       cache: 250,
//       dataType: "json",
//       processResults: function(data) {      
//         return {
//           results: data
//             .map(x => ({id: x.cca2.toLowerCase(), text: x.name.common}))
//             .sort((a, b) => ('' + a.text).localeCompare(b.text))
//         };
//       }
//     }
// });

$('.faq-wrapper .content').hide();
$('.faq-wrapper .accordion-sec').click(function() {
  $(this).toggleClass('active')
  $('.faq-wrapper .accordion-sec').not(this).removeClass('active')
  $('.faq-wrapper .accordion-sec').not(this).find('.content').slideUp()
  $(this).find('.content').slideToggle()
  return false;
});

if ($(".our_news_swiper").length > 0){
    $(document).ready(function(){
      const swiper = new Swiper('.our_news_swiper', {
    // Optional parameters
    
    loop: false,
    rewind: true,
    slidesPerView: 3.2,
    spaceBetween: 30,
    autoplay: true,
    
    // If we need pagination
    pagination: {
     el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
    },
    pagination: {
     el: ".swiper-pagination",
     type: "fraction",
    },
    scrollbar: {
     el: '.swiper-scrollbar',
     draggable: true,
    },
    breakpoints: {
     // when window width is >= 320px
     320: {
       slidesPerView: 1.2,
       spaceBetween: 15,
     },
     991: {
       slidesPerView: 3.5,
       spaceBetween: 30,
     },
    }
    
    });
    })
}