jQuery(document).ready(function( $ ) {

	// Menu settings
  var initgnMenu = new gnMenu(document.getElementById('gn-menu'));

  // Carousel
  $('.carousel').carousel({
    interval: 5500
  })

	// Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 30
        }, 1500, 'easeInOutExpo');
        initgnMenu._closeMenu();
      }
    }
  });

  // Charts
  if($('#canvas').length) {

		var doughnutData = [{
        value: 80,
        color: "#3bc492"
      },
      {
        value: 20,
        color: "#ecf0f1"
      }
    ];
    var myDoughnut = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(doughnutData);
	};

	if($('#canvas1').length) {
		var doughnutData = [{
				value: 60,
				color: "#3bc492"
			},
			{
				value: 40,
				color: "#ecf0f1"
			}
		];
		var myDoughnut = new Chart(document.getElementById("canvas1").getContext("2d")).Doughnut(doughnutData);
	}

	if($('#canvas2').length) {
		var doughnutData = [{
				value: 55,
				color: "#3bc492"
			},
			{
				value: 45,
				color: "#ecf0f1"
			}
		];
		var myDoughnut = new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(doughnutData);
	}

});
