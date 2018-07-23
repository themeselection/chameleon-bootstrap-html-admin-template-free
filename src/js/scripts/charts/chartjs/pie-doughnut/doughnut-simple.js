/*=========================================================================================
    File Name: doughnut.js
    Description: Chartjs simple doughnut chart
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.0
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/

// Doughnut chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#simple-doughnut-chart");

    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
    };

    // Chart Data
    var chartData = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [{
            label: "My First dataset",
            data: [65, 35, 24, 45, 85],
            backgroundColor: ['#666EE8', '#28D094', '#FF4961','#1E9FF2', '#FF9149'],
        }]
    };

    var config = {
        type: 'doughnut',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var doughnutSimpleChart = new Chart(ctx, config);

});