/*=========================================================================================
    File Name: stacked-bar.js
    Description: Chartisrt stacked bar chart
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.0
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/

// Stacked bar chart
// ------------------------------
$(window).on("load", function(){

     var stackedBar1 = new Chartist.Bar('#stacked-bar1', {
        labels: ['Q1','Q2','Q3','Q4','Q5', 'Q6'],
        series: [
        [4000, 10000, 7000, 5000, 11000, 12000],
        [10000, 4000, 7000, 9000, 3000, 2000]
        ]
    }, {
        stackBars: true,
        fullWidth: true,
        axisX: {
            showGrid: false,
        },
        axisY: {
            showGrid: false,
            showLabel: false,
            offset: 0
        },
        
    });
     stackedBar1.on('draw', function (data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 30px',
                x1: data.x1 + 0.001
            });
            
        }
        else if (data.type === 'label') {
            data.element.attr({
                y: 20
            })
        }
    });
     stackedBar1.on('created', function (data) {
        var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'stackedBarGradient',
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
        }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(253,99,107,1)'
        }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(253,99,107, 1)'
        });
        return defs;
    });
});