/*=========================================================================================
    File Name: area.js
    Description: Chartist line chart with area
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.0
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/

// Line chart with area
// ------------------------------
$(window).on("load", function () {

    var areaGradientChart = new Chartist.Line('#areaGradient', {
       
        labels: [1, 2, 3, 4, 5, 6, 7],
        series: [
            [20, 180, 125, 40, 80, 50, 20],
            [75, 120, 50, 80, 130, 60, 120],
            [110, 50, 70, 20, 90, 150, 0]
        ]
    }, {
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            fullWidth: true,
            showArea: true,
            chartPadding: {
                right: 25
            },
           
            axisX: {
                showGrid: false
            },
            axisY: {               
                scaleMinSpace: 40
            },
            plugins: [
                Chartist.plugins.tooltip({                   
                    appendToBody: true,
                    pointClass: 'ct-point-circle'
                  })
              ],
            low: 0,
            onlyInteger: true,
        });
  
       
        areaGradientChart.on('draw', function (data) {       
        var circleRadius = 9;
        if (data.type === 'point') {
            var circle = new Chartist.Svg('circle', {
                cx: data.x,
                cy: data.y,
                'ct:value': data.value.y,
                r: circleRadius,
                class: data.value.y === 180 || data.value.y === 150 ? 'ct-point-circle' : 'ct-point-circle-transperent'
            });
            data.element.replace(circle);
        }
        if (data.type === 'line' || data.type == 'area') {
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