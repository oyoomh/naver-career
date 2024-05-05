

$('#header .language-area > .link').click(function (e) {
  e.preventDefault();
  $('#header .language-area').toggleClass('active');
})
/**
 * 
 * 사이드메뉴
 * 
 */

$('#sideNav .language-list .item').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
})

$('.btn-menu').click(function () {
  $(this).toggleClass('close');
  $('body').toggleClass('hidden');

  if ($('.side-nav').hasClass('show')) {
    $('.side-nav').removeClass('show').find('.has-child').removeClass('active');

  } else {
    $('.side-nav').addClass('show');
  }
})

$('#sideNav .has-child .tit').click(function (e) {
  e.preventDefault()
  $(this).parent().toggleClass('active');
})
/**
 * 
 * search-map
 * 
 */

$('.map-close').click(function () {
  $('.search-map, body').removeClass('active hidden');
  $('.btn-search').attr('aria-expanded', 'false');
});

$('.btn-search').click(function () {
  $('.search-map').toggleClass('active');
  $('body').toggleClass('hidden');
  $(this).attr('aria-expanded', 'true');

  if ($('.search-map').hasClass('active')) {
    $('.search-map .active').removeClass('active');
    
  }
});


$('.search-map .has-child').click(function () {
  $(this).toggleClass('active').siblings().toggleClass('active');
})



$('.chk.all').click(function() {
  var tabName = $(this).data('parent');
  var checkboxes = $(tabName).find('.depth3 input[type="checkbox"]');
  
  if ($(this).find('input').prop('checked') === true) {
    checkboxes.prop('checked', true);
  } else {
    checkboxes.prop('checked', false);
  }
});


$('.btn-filter').click(function () {
  $('input[type="checkbox"]').prop('checked', false);
});

/**
 * 
 * gnb
 * 
 */

$("#gnb .has-child").hover(function () {
  $('#header').css('--height', "182px");
  $(this).find('.depth2').addClass('on');
}, function () {
  $('#header').css('--height', 0);
  $(this).find('.depth2').removeClass('on');
})

const visualSlide = new Swiper('.visual-slide', {
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },

})

$('select').change(function () {
  $(this).css('color', '#000');
})

const cateSlide = new Swiper('.people-slide', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 1.1,
    }
  }
})

const benefitsSlide = new Swiper('.benefits-slide', {
  spaceBetween: 30,
  slidesPerView: 1,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
})

$('#footer .btn-site').click(function () {
  $('.site-area').toggleClass('active');
  
})
toggleLayer('.btn-site');
toggleLayer('.language-area > .link');

function toggleLayer(targetBtn) {
  const $targetBtn = $(targetBtn);

  $targetBtn.click(function () {
    const isExpanded = $targetBtn.attr('aria-expanded') === 'true';
    $targetBtn.attr('aria-expanded', String(!isExpanded));
  });
}

