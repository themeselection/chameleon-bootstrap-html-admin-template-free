/*=========================================================================================
    File Name: line.js
    Description: Chartist simple line chart
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.0
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/

// Line chart
// ------------------------------
$(window).on("load", function () {

    new Chartist.Line('#line-chart', {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
        ]
    }, {
            fullWidth: true,
            chartPadding: {
                right: 40
            },
            plugins: [
                Chartist.plugins.tooltip({
                    appendToBody: true
                })
            ]
        });


    ////////////////////////////////////////////////////////////////////////////////

    var lineGradientChart = new Chartist.Line('#gradient-line-chart', {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
            [90, 325, 225, 600, 200],
            [590, 90, 300, 150, 500]
        ]
    }, {
            low: 0,
            fullWidth: true,
            onlyInteger: true,
            axisY: {
                low: 0,
                scaleMinSpace: 50,
            },
            axisX: {
                showGrid: false
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            plugins: [
                Chartist.plugins.tooltip({                   
                    appendToBody: true,
                    pointClass: 'ct-point-circle'
                  })
              ]

        });
    lineGradientChart.on('created', function (data) {
        var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'linear6',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
        }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(45,121,255,0.7)'
        }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(249,81,255, 0.7)'
        });

        defs.elem('linearGradient', {
            id: 'linear7',
            x1: 0,
            y1: 1,
            x2: 1,
            y2: 0
        }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(247,214,142,1)'
        }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(248,120,131, 1)'
        });

        return defs;


    }).on('draw', function (data) {
        var circleRadius = 10;
        if (data.type === 'point') {
            var circle = new Chartist.Svg('circle', {
                cx: data.x,
                cy: data.y,
                'ct:value': data.y,
                r: circleRadius,
                class: data.value.y === 600 ? 'ct-point-circle' : 'ct-point-circle-transperent'
            });
            data.element.replace(circle);
        }
        if (data.type === 'line') {
            data.element.animate({
                d: {
                    begin: 1000,
                    dur: 1000,
                    from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                    to: data.path.clone().stringify(),
                    easing: Chartist.Svg.Easing.easeOutQuint
                }
            });
        }
    });



    ////////////////////////////////////////////////////////////////////////////////

    var lineGradientChart1 = new Chartist.Line('#gradient-line-chart1', {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
            [125, 175, 125, 200, 175, 275, 260],
            [175, 225, 140, 230, 140, 225, 210]
        ]
    }, {
            low: 100,
            fullWidth: true,
            onlyInteger: true,
            axisY: {
                low: 0,
                scaleMinSpace: 50,
            },
            axisX: {
                showGrid: false
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            plugins: [
                Chartist.plugins.tooltip({                   
                    appendToBody: true,
                    pointClass: 'ct-point-circle-transperent'
                  })
              ]
        });
    lineGradientChart1.on('created', function (data) {
        var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'lineLinear1',
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 0
        }).elem('stop', {
            offset: '0%',
            'stop-color': 'rgba(250,116,137,0.1)'
        }).parent().elem('stop', {
            offset: '10%',
            'stop-color': 'rgba(250,116,137,1)'
        }).parent().elem('stop', {
            offset: '80%',
            'stop-color': 'rgba(173,86,241, 1)'
        }).parent().elem('stop', {
            offset: '98%',
            'stop-color': 'rgba(173,86,241, 0.1)'
        });

        return defs;


    }).on('draw', function (data) {
        var circleRadius = 10;
        if (data.type === 'point') {
            var circle = new Chartist.Svg('circle', {
                cx: data.x,
                cy: data.y,
                'ct:value': data.y,
                r: circleRadius,
                class: 'ct-point-circle-transperent'
            });
            data.element.replace(circle);
        }
        if (data.type === 'line') {
            data.element.animate({
                d: {
                    begin: 1000,
                    dur: 1000,
                    from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                    to: data.path.clone().stringify(),
                    easing: Chartist.Svg.Easing.easeOutQuint
                }
            });
        }
    });

});