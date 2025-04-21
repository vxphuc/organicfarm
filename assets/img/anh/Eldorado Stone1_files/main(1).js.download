// Main JS
// jQuery(function($) {
// 	$('.dropdown').on('mouseover', function(){
//     	$(this).addClass('show');
//     	$('.dropdown-menu').addClass('show');
//     	$('.dropdown-toggle').attr('aria-expanded', 'true');
//
// 	});
// 	$('.dropdown').on('mouseout', function(){
//     	$(this).removeClass('show');
//     	$('.dropdown-menu').removeClass('show');
//     	$('.dropdown-toggle').attr('aria-expanded', 'false');
// 	});
//
//
// });
var WINDOW_WIDTH;
var BREAK_POINT = 992;

jQuery(function($) {

    /** Set window width onload */
    WINDOW_WIDTH = $(window).width(); // Returns width of browser viewport
    /** Set window width if the browser is resized */
    $(window).resize(function () {
        WINDOW_WIDTH = $(window).width(); // Returns width of browser viewport
    });
	if (WINDOW_WIDTH >= BREAK_POINT) {
    	$('#nav-main a.nav-link.dropdown-toggle').click(function() {
        	location.href = this.href;
    	});
	}
    /** Dropdown menu on mouseenter */
    $("#nav-main .nav-item.dropdown").on('mouseenter', function () {
        console.log("mouseenter");
        if (WINDOW_WIDTH >= BREAK_POINT) {
            // Open up the dropdown
            $(this).addClass('show'); // add the class show to the li parent
            $(this).children('.nav-link').removeAttr('data-toggle'); // remove the data-toggle attribute so we can click and follow link
            $(this).children('.dropdown-menu').addClass('show'); // add the class show to the dropdown div sibling
        }
    });
    /** Dropdown menu on mouseleave */
    $("#nav-main .nav-item.dropdown").on('mouseleave', function () {
        console.log("mouseleave");
        if (WINDOW_WIDTH >= BREAK_POINT) {
            // Close the dropdown
            $(this).removeClass('show'); // add the class show to the li parent
            $(this).children('.nav-link').attr('data-toggle', 'dropdown'); // remove the data-toggle attribute so we can click and follow link
            $(this).children('.dropdown-menu').removeClass('show'); // add the class show to the dropdown div sibling
        }
    });
});
var swiper = new Swiper(".swiper-gallery", {
	slidesPerView: 1.4,
	spaceBetween: 34,
	centeredSlides: false,
	centeredSlidesBounds: true,
	loop: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
    	768: {
      	slidesPerView: 2.4,
      	spaceBetween: 34
    	},
    	1024: {
      	slidesPerView: 3.4,
      	spaceBetween: 34
    	}
	}
	// pagination: {
	// 	el: ".swiper-pagination",
	// 	clickable: true,
	// },
});
var swiper = new Swiper(".swiper-products", {
	slidesPerView: 1.4,
	spaceBetween: 34,
	centeredSlides: true,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		},		//  loopFillGroupWithBlank: true,
	breakpoints: {
    768: {
      slidesPerView: 2.4,
      spaceBetween: 34
    },
    1024: {
      slidesPerView: 3.4,
      spaceBetween: 34
    },
    1200: {
      slidesPerView: 4.4,
      spaceBetween: 34
    }
  }
});





document.addEventListener("DOMContentLoaded", function(){


	/////// Prevent closing from click inside dropdown
	document.querySelectorAll('.dropdown-menu').forEach(function(element){
		element.addEventListener('click', function (e) {
		  e.stopPropagation();
		});
	})



	// make it as accordion for smaller screens
	if (window.innerWidth < 992) {

		// close all inner dropdowns when parent is closed
		document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
			everydropdown.addEventListener('hidden.bs.dropdown', function () {
				// after dropdown is hidden, then find all submenus
				  this.querySelectorAll('.submenu').forEach(function(everysubmenu){
				  	// hide every submenu as well
				  	everysubmenu.style.display = 'none';
				  });
			})
		});

		document.querySelectorAll('.dropdown-menu a').forEach(function(element){
			element.addEventListener('click', function (e) {

			  	let nextEl = this.nextElementSibling;
			  	if(nextEl && nextEl.classList.contains('submenu')) {
			  		// prevent opening link if link needs to open dropdown
			  		e.preventDefault();
			  		console.log(nextEl);
			  		if(nextEl.style.display == 'block'){
			  			nextEl.style.display = 'none';
			  		} else {
			  			nextEl.style.display = 'block';
			  		}

			  	}
			});
		})
	}
	// end if innerWidth

});
// DOMContentLoaded  end
