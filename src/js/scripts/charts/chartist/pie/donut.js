/*=========================================================================================
    File Name: Donut.js
    Description: Chartist donut chart
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.0
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/

// Donut chart
// ------------------------------
$(window).on("load", function () {

    var gradientChart = new Chartist.Pie('#donut-gradient-chart', {
        series: [100],
        labels: ['iOS']
    }, {
            donut: true,
            labelInterpolationFnc: function (value) {
                return '$2k';
            },
            donutSolid: true,
            total: 100,
            donutWidth: 10,
        });

    gradientChart.on('draw', function (data) {
        if (data.type === 'label') {
            if (data.index === 0) {
                data.element.attr({
                    dx: data.element.root().width() / 2,
                    dy: data.element.root().height() / 2
                });
            } else {
                data.element.remove();
            }
        }
    });

    // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
    gradientChart.on('created', function (data) {
        var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'donutGradient1',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
        }).elem('stop', {
            offset: '0%',
            'stop-color': 'rgba(253,99,107,1)'
        }).parent().elem('stop', {
            offset: '95%',
            'stop-color': 'rgba(253,99,107, 0.3)'
        });
        return defs;


    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var gradientChart1 = new Chartist.Pie('#donut-gradient-chart1', {
        series: [100],
        labels: ['iOS']
    }, {
            donut: true,
            labelInterpolationFnc: function (value) {
                return '$2k';
            },
            donutSolid: true,
            total: 100,
            donutWidth: 10,
        });

    gradientChart1.on('draw', function (data) {
        if (data.type === 'label') {
            if (data.index === 0) {
                data.element.attr({
                    dx: data.element.root().width() / 2,
                    dy: data.element.root().height() / 2
                });
            } else {
                data.element.remove();
            }
        }
    });

    // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
    gradientChart1.on('created', function (data) {
        var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'donutGradient2',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
        }).elem('stop', {
            offset: '0%',
            'stop-color': 'rgba(105,103,206,1)'
        }).parent().elem('stop', {
            offset: '95%',
            'stop-color': 'rgba(105,103,206, 0.3)'
        });
        return defs;


    });



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var gradientChart2 = new Chartist.Pie('#donut-gradient-chart2', {
        series: [100],
        labels: ['iOS']
    }, {
            donut: true,
            labelInterpolationFnc: function (value) {
                return '$2k';
            },
            donutSolid: true,
            total: 100,
            donutWidth: 10,
        });

    gradientChart2.on('draw', function (data) {
        if (data.type === 'label') {
            if (data.index === 0) {
                data.element.attr({
                    dx: data.element.root().width() / 2,
                    dy: data.element.root().height() / 2
                });
            } else {
                data.element.remove();
            }
        }
    });

    // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
    gradientChart2.on('created', function (data) {
        var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'donutGradient3',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
        }).elem('stop', {
            offset: '0%',
            'stop-color': 'rgba(25,175,208,1)'
        }).parent().elem('stop', {
            offset: '95%',
            'stop-color': 'rgba(25,175,208, 0.3)'
        });
        return defs;


    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var gradientChart3 = new Chartist.Pie('#donut-gradient-chart3', {
        series: [100],
        labels: ['iOS']
    }, {
            donut: true,
            labelInterpolationFnc: function (value) {
                return '\ue9c9';
            },
            donutSolid: true,
            total: 100,
            donutWidth: 10,
        });

    gradientChart3.on('draw', function (data) {
        if (data.type === 'label') {
            if (data.index === 0) {
                data.element.attr({
                    dx: data.element.root().width() / 2,
                    dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                    class: 'ct-label',
                    'font-family': 'feather'
                });
            } else {
                data.element.remove();
            }
        }
    });

    // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
    gradientChart3.on('created', function (data) {
        var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'donutGradient4',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
        }).elem('stop', {
            offset: '0%',
            'stop-color': 'rgba(253,99,107,1)'
        }).parent().elem('stop', {
            offset: '95%',
            'stop-color': 'rgba(253,99,107, 0.3)'
        });
        return defs;


    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var gradientChart4 = new Chartist.Pie('#donut-gradient-chart4', {
        series: [100],
        labels: ['iOS']
    }, {
            donut: true,
            labelInterpolationFnc: function (value) {
                return '\ue9e7';
            },
            donutSolid: true,
            total: 100,
            donutWidth: 10,
        });

    gradientChart4.on('draw', function (data) {
        if (data.type === 'label') {
            if (data.index === 0) {
                data.element.attr({
                    dx: data.element.root().width() / 2,
                    dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                    class: 'ct-label',
                    'font-family': 'feather'
                });
            } else {
                data.element.remove();
            }
        }
    });

    // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
    gradientChart4.on('created', function (data) {
        var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'donutGradient5',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
        }).elem('stop', {
            offset: '0%',
            'stop-color': 'rgba(105,103,206,1)'
        }).parent().elem('stop', {
            offset: '95%',
            'stop-color': 'rgba(105,103,206, 0.3)'
        });
        return defs;


    });



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var gradientChart5 = new Chartist.Pie('#donut-gradient-chart5', {
        series: [100],
        labels: ['iOS']
    }, {
            donut: true,
            labelInterpolationFnc: function (value) {
                return '\ue964';
            },
            donutSolid: true,
            total: 100,
            donutWidth: 10,
        });

    gradientChart5.on('draw', function (data) {
        if (data.type === 'label') {
            if (data.index === 0) {
                data.element.attr({
                    dx: data.element.root().width() / 2,
                    dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                    class: 'ct-label',
                    'font-family': 'feather'
                });
            } else {
                data.element.remove();
            }
        }
    });

    // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
    gradientChart5.on('created', function (data) {
        var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'donutGradient6',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
        }).elem('stop', {
            offset: '0%',
            'stop-color': 'rgba(25,175,208,1)'
        }).parent().elem('stop', {
            offset: '95%',
            'stop-color': 'rgba(25,175,208, 0.3)'
        });
        return defs;


    });

});