/*=========================================================================================
    File Name: pie.js
    Description: Chartist simple pie chart
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.0
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/

// Pie chart
// ------------------------------
$(window).on("load", function(){

    var data = {
        series: [5, 3, 4]
    };

    var sum = function(a, b) {
        return a + b;
    };

    new Chartist.Pie('#pie-chart', data, {
        labelInterpolationFnc: function(value) {
            return Math.round(value / data.series.reduce(sum) * 100) + '%';
        }
    });
});