 $("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});
	

$('#daterange input').datetimepicker({
    format: 'MMM D, YYYY',
	useCurrent: false, //Important! See issue #1075
	minDate: new Date()

});
$("#daterange input#depart").on("dp.change", function (e) {
	$('#daterange input#return').data("DateTimePicker").minDate(e.date);
});
	$("#daterange input#return").on("dp.change", function (e) {
	$('#daterange input#depart').data("DateTimePicker").maxDate(e.date);
});

// Change the selector if needed
var $table = $('table.scroll'),
    $bodyCells = $table.find('tbody tr:first').children(),
    colWidth;

// Adjust the width of thead cells when window resizes
$(window).resize(function() {
    // Get the tbody columns width array
    colWidth = $bodyCells.map(function() {
        return $(this).width();
    }).get();
    
    // Set the width of thead columns
    $table.find('thead tr').children().each(function(i, v) {
        $(v).width(colWidth[i]);
    });    
}).resize(); // Trigger resize handler

$("[data-toggle=popover]").popover({
    html: true,
	trigger: 'hover', 
	content: function() {
          return $('#pop1').html();
        }
});

$.getScript('http://www.chartjs.org/assets/Chart.js',function(){
  
  var data = [{
        value: 75,
        color: "#33cc33"
    }, {
        value: 25,
        color: "#006666"
    }
	

    ]

    var options = {
        animation: true
    };

    //Get the context of the canvas element we want to select
    var c = $('#chart1');
    var ct = c.get(0).getContext('2d');
    var ctx = document.getElementById("chart1").getContext("2d");
    /*************************************************************************/
    myNewChart = new Chart(ct).Doughnut(data, options);
	
	
	var data = [{
        value: 20,
        color: "#33cc33"
    }, {
        value: 80,
        color: "#006666"
    }

    ]

    var options = {
        animation: true
    };

    //Get the context of the canvas element we want to select
    var c = $('#chart2');
    var ct = c.get(0).getContext('2d');
    var ctx = document.getElementById("chart2").getContext("2d");
    /*************************************************************************/
    myNewChart = new Chart(ct).Doughnut(data, options);

})
