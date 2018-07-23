/*=========================================================================================
    File Name: column-stacked.js
    Description: Chartjs column stacked chart
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.0
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/

// Column stacked chart
// ------------------------------
$(window).on("load", function(){

    // Get the context of the Chart canvas element we want to select
    var ctx = $("#column-stacked");

    // Chart Options
    var chartOptions = {
        title:{
            display:false,
            text:"Chart.js Column Chart - Stacked"
        },
        tooltips: {
            mode: 'label'
        },
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
        scales: {
            xAxes: [{
                stacked: true,
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                }
            }],
            yAxes: [{
                stacked: true,
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                }
            }]
        }
    };

    // Chart Data
    var chartData = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [{
            label: "2016",
            data: [65, 59, 80, 81, 56],
            backgroundColor: "#1E9FF2",
            hoverBackgroundColor: "rgba(30,159,242,.9)",
            borderColor: "transparent"
        }, {
            label: "2017",
            data: [28, 48, 40, 19, 86],
            backgroundColor: "#FF4961",
            hoverBackgroundColor: "rgba(255,73,97,.9)",
            borderColor: "transparent"
        },
        {
            label: "2018",
            data: [80, 25, 16, 36, 67],
            backgroundColor: "#28D094",
            hoverBackgroundColor: "rgba(40,208,148,.9)",
            borderColor: "transparent"
        }]
    };

    var config = {
        type: 'bar',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var lineChart = new Chart(ctx, config);

});