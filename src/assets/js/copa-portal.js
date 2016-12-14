// Global variables
var htmlUserMenu = '';
var labelTitleReserve = '';

$(document).ready(function(){

	// Apply CSS styles to the selectors
	$('#homepage_panels select').styledSelect();

	// Hide the minor passengers dropdowns
	$('#group_pax_minors').hide();
	
	// Hide the promo code dropdown
	$('#controls_promo_code .group_input').hide();
	
	// Read the document's language and localize to that language
	var theLanguage = $('html').attr('lang');
	localizeLabels(theLanguage);
	
	// Close all panels if the user clicks anywhere
	// while they are visible
	$('html').click(function() {
		if ($('#selector_user .panel').is(':visible')) closeUserSelectorPanel();
		if ($('#selector_storefront .panel').is(':visible')) closeStorefrontSelectorPanel();
	});
	
	// Except when the user clicks inside one of the panels
	$('.selector').click(function(event) {
		event.stopPropagation();
	});
	
	// Show the minor passengers dropdown when the link is clicked
	$('#lnk_show_pax_minors a').click(function() {
		$('#lnk_show_pax_minors').hide();
		$('#group_pax_minors').show();		
	});
	
	// Show the promo codes dropdown when the link is clicked
	$('#lnk_show_promo_code a').click(function() {
			$('#lnk_show_promo_code').hide();
			$('#controls_promo_code .group_input').show();
	});

	// Selector panel - Your account	
	$('#btn_your_account').click(function(){
		if ($('#selector_user .panel').is(':visible')) {
			closeUserSelectorPanel();
		} else {
			openUserSelectorPanel();
			if ($('#selector_storefront .panel').is(':visible')) closeStorefrontSelectorPanel();
		}
	});
	
	// Selector panel - Change storefront
	$('#btn_locale').click(function(){
		if ($('#selector_storefront .panel').is(':visible')) {
			closeStorefrontSelectorPanel();
		} else {
			openStorefrontSelectorPanel();
			if ($('#selector_user .panel').is(':visible')) closeUserSelectorPanel();
		}
	});

	// Clear input field labels
  $('input[type=text]').focus(function(){ 
    if($(this).val() == $(this).attr('defaultValue'))
    {
      $(this).val('');
    }
  });
	
	// Set the initial position of the fat nav
	
	// Only activate if the user is not editing the page
	if (!$('body').hasClass('editing')) {
	
		var heightContent = $('header').height() + $('#nav_main').height() + $('#main_wrapper').height();
		var heightNav_fat = $('#nav_fat').height();
		
		if( $(window).height() > heightContent + 80) {
			$('#nav_fat').css({position: 'static', bottom: '0px'});
		} else {
			$('#nav_fat').css({position: 'fixed', bottom: ((heightNav_fat - 30) * -1)});
		}
		
		$('body').css({height: heightContent + heightNav_fat });
	}
		
	// Handle the alert box's close button
	$('#btn_close_panel').click(function() {
		$('#alertbox').slideUp('fast');
	});
	
	// Homepage tabs
	var $homepageTabs = $('#nav_main>ul>li.tab');
	
	$homepageTabs.click(function() {
		$homepageTabs.removeClass('selected');
		$(this).addClass('selected');
		
		var index = $homepageTabs.index($(this));
		$('#homepage_panels>div').hide().eq(index).show();
	});
	
	// Homepage reservation subtabs
	var $subtabsReserve = $('#homepage_panels>#panel_reserve>nav>ul>li.tab');
	
	$subtabsReserve.click(function() {
		$subtabsReserve.removeClass('selected');
		$(this).addClass('selected');
		
			var index = $subtabsReserve.index($(this));
			$('#homepage_panels>#panel_reserve>div').hide().eq(index).show();
	});
	
	// Homepage flifo subtabs
	var $subtabsFlifo = $('#homepage_panels>#panel_flifo>nav>ul>li.tab');
	
	$subtabsFlifo.click(function() {
		$subtabsFlifo.removeClass('selected');
		$(this).addClass('selected');
		
			var index = $subtabsFlifo.index($(this));
			$('#homepage_panels>#panel_flifo>div').hide().eq(index).show();
	});
	
	// User has clicked on the origin/destination input fields while the panel
	// is collapsed, so expand it
	$('#subpanel_reserve_flights.inactive').click(function() {
		$('#subpanel_reserve_flights').removeClass('inactive');
		$('#subpanel_reserve_flights h1').text(labelTitleReserve);
	});
	
	// The user is editing, so expand booking widget
	if ($('body').hasClass('editing')) {
		$('#subpanel_reserve_flights').removeClass('inactive');
		$('#subpanel_reserve_flights h1').text(labelTitleReserve);
	}

	// User has entered an invalid character in a name input field
	$("input.name").keyup(function() {
    var input = $(this),
    text = input.val().replace(/[^a-zA-Z0-9-_\s]/g, "");
    if(/ñ/.test(text)) {
        text = text.replace(/ñ/g, "n");
        // logic to notify user of replacement
    }
    input.val(text);
	});
	
	var tabName = gup();
	
	if( tabName != null ) {
		loadTab(tabName);
	}
});


$(window).load(function() {

	// Set up the Carousel

	$('#widget_promos .carousel .slides').carouFredSel({
		prev: '#prev2',
		next: '#next2',
		align: 'left',
		padding: 0,
		auto: {
			pauseDuration: 6000,
			onAfter: function() {
					$('.banner.group2 img').asynchImageLoader({ timeout: 0, effect: 'fadeIn', speed: 2000 })
				}
			},
		scroll: 3,
		width: 950,
		items: {
			width: 305,
		//	height: '30%',	//	optionally resize item-height
			visible: {
				min: 3,
				max: 3
				}
			},
		onCreate: function() {
			$('.banner.group1 img').each(function(i) {
				$(this).jail({
            timeout: 2000,
            effect: 'fadeIn',
            speed: 2000
				})
      })
		}
	});
	
});

// The user has resized the window, put the fat nav in the right place

$(window).resize(function(){

	var heightContent = $('header').height() + $('#nav_main').height() + $('#main_wrapper').height();
	var heightNav_fat = $('#nav_fat').height();
	
	// Only activate if the user is not editing the page
	if (!$('body').hasClass('editing')) {
		if ( $(window).height() < heightContent + 70 ) {
			if( $(window).scrollTop() < heightContent - $(window).height() + 80) {
				$('#nav_fat').css({position: 'fixed', bottom: ((heightNav_fat - 30) * -1)});
			} else {
				$('#nav_fat').css({position: 'static', bottom: '0px'});
			}
		} else {
			$('#nav_fat').css({position: 'static', bottom: '0px'});
		}
	}
});

// The user has scrolled the window, put the fat nav in the right place

$(window).scroll(function(){
	
	var heightContent = $('header').height() + $('#nav_main').height() + $('#main_wrapper').height();
	var heightNav_fat = $('#nav_fat').height();

	// Only activate if the user is not editing the page
	if (!$('body').hasClass('editing')) {	
		if ( $(window).height() < heightContent + 70 ) {
			if( $(window).scrollTop() < heightContent - $(window).height() + 80) {
				$('#nav_fat').css({position: 'fixed', bottom: ((heightNav_fat - 30) * -1)});
			} else {
				$('#nav_fat').css({position: 'static', bottom: '0px'});
			}
		} else {
			$('#nav_fat').css({position: 'static', bottom: '0px'});
		}
	}
});

function loadTab( tabName ) {
	var selectedId = "#tab_" + tabName;
	var linkName = selectedId + " a";
	
	// deal with second-level tabs under flifo
	if ( 
		(tabName == 'flightstatus') ||  
		(tabName == 'itineraries') ||
		(tabName == 'baggage') ||
		(tabName == 'destinations')
		) {
			$('#tab_flifo a').trigger('click');
		}
	
	$(linkName).trigger('click');
}

// Show the alert box
function showAlertBox(className, headline, body) {
	// Set the class
	$('#alertbox').addClass(className);
	// Set the headline
	$('#alert_headline').html(headline);
	// Set the body
	$('#alert_body').html(body);
	// Show the headline
	$('#alertbox').slideDown('slow');
}

function showInputError(inputFields, headline, body) {
	var inputField = "";
	for (i in inputFields) {
		inputField = "#" + inputFields[i];
		$(inputField).addClass('error');
	}
	showAlertBox('error', headline, body);
}

// Open the user selector panel
function openUserSelectorPanel() {
		$('#selector_user .panel').slideDown('fast');
		$('#selector_user .btn').css('background-position', '0 -30px');
		panelUserOpen = true;
}

// Close the user selector panel
function closeUserSelectorPanel() {
		$('#selector_user .panel').slideUp('fast');
		$('#selector_user .btn').css('background-position', '0 0');
		panelUserOpen = false;
}

// Open the storefront selector panel
function openStorefrontSelectorPanel() {
		$('#selector_storefront .panel').slideDown('fast');
		$('#selector_storefront .btn').css('background-position', '0 -30px');
}

// Close the storefront selector panel
function closeStorefrontSelectorPanel() {
		$('#selector_storefront .panel').slideUp('fast');
		$('#selector_storefront .btn').css('background-position', '0 0');
}

// Changes caused by having the user log in
function loginUser(username, miles) {
	$('#btn_your_account').html( username + ' <span>(' + miles + ')</span>');
	$('#selector_user .panel .margin').html(userMenu);
}

// Set label variables depending on the user's language
function localizeLabels(lang) {
	
	if (lang == 'es') {
		userMenu = '<ul><li><a href="#">Sus viajes</a></li><li><a href="#">Vea su cuenta MileagePlus</a></li><li><a href="#">Utilizar sus millas MileagePlus</a></li><li><a href="#">Cambios a su perfil</a></li><li><a href="#">Salir del sistema</a></li></ul>';
		labelTitleReserve = 'Reserve';
	}
	
	if (lang == 'en') {
		userMenu = '<ul><li><a href="#">Your trips</a></li><li><a href="#">See your MileagePlus account</a></li><li><a href="#">Use your MileagePlus miles</a></li><li><a href="#">Change your profile</a></li><li><a href="#">Log out</a></li></ul>';		
	 	labelTitleReserve = 'Book';
	}
	
	if (lang == 'pt') {
		userMenu = '<ul><li><a href="#">Sus viajes</a></li><li><a href="#">Vea su cuenta MileagePlus</a></li><li><a href="#">Utilizar sus millas MileagePlus</a></li><li><a href="#">Cambios a su perfil</a></li><li><a href="#">Salir del sistema</a></li></ul>';
		labelTitleReserve = 'Reserve';
	}
}

// Get URL parameter

function gup() {

	// get the current URL and split it so we can get the tab name
	var str = window.location.href;
	var results = str.split("#");
	
	// return the results
  if( results.length < 2 )
    return "";
  else
    return results[1];
}