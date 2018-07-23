/*=========================================================================================
    File Name: vertical-bar.js
    Description: Chartist vertical bar chart
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.0
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/

// Vertical bar chart
// ------------------------------
$(window).on("load", function () {

    var verticalBar = new Chartist.Bar('#vertical-bar', {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
        series: [
            [8000, 12000, 14000, 13000, 9000],
        ]
    }, {
            axisY: {
                labelInterpolationFnc: function (value) {
                    return (value / 1000) + 'k';
                },
                scaleMinSpace: 50,
            },
            axisX: {
                showGrid: false
            },
            plugins: [
                Chartist.plugins.tooltip({
                    appendToBody: true
                })
            ]
        });
    verticalBar.on('draw', function (data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 30px',
                y1: 350,
                x1: data.x1 + 0.001
            });
            data.group.append(new Chartist.Svg('circle', {
                cx: data.x2,
                cy: data.y2,
                r: 15
            }, 'ct-slice-pie'));
        }
    });
    verticalBar.on('created', function (data) {
        var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'barGradient2',
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
        }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(253,99,107,1)'
        }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(253,99,107, 0.6)'
        });
        return defs;
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////

    new Chartist.Bar('#vertical-bar1', {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
        series: [
            [8000, 12000, 14000, 13000, 9000],
        ]
    }, {
            axisY: {
                labelInterpolationFnc: function (value) {
                    return (value / 1000) + 'k';
                },
                scaleMinSpace: 50,
            },
            axisX: {
                showGrid: false
            },
            plugins: [
                Chartist.plugins.tooltip({
                    appendToBody: true
                })
            ]
        }).on('draw', function (data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 30px'
                });
                data.group.append(new Chartist.Svg('circle', {
                    cx: data.x2,
                    cy: data.y2,
                    r: 15
                }, 'ct-slice-pie'));
            }
        });

    /////////////////////////////////////////////////////////////////////////////////////////////////

    var verticalBar2 = new Chartist.Bar('#vertical-bar2', {
        labels: ['Q1','Q1','Q1','Q1','Q1','Q1', 'Q2','Q2','Q2','Q2','Q2','Q2', 'Q3','Q3','Q3','Q3','Q3','Q3', 'Q4', 'Q4', 'Q4', 'Q4', 'Q4', 'Q4'],
        series: [
            [2000, 1000, 3000, 5000, 7000, 4000, 8000, 6000, 12000, 14000, 11000, 9000, 7000, 4000, 8000, 12000, 13000, 11000, 7000, 4000, 3000, 2000, 1000, 2000],
        ]
    }, {
            axisY: {
                labelInterpolationFnc: function (value) {
                    return (value / 1000) + 'k';
                },
                scaleMinSpace: 50,
            },
            axisX: {
                showGrid: false,
                labelInterpolationFnc: function (value, index) {
                    return index % 6 === 0 ? value : null;
                }
            },
            plugins: [
                Chartist.plugins.tooltip({
                    appendToBody: true
                })
            ]
        });
    verticalBar2.on('draw', function (data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 10px',
                y1: 350,
                x1: data.x1 + 0.001
            });
            data.group.append(new Chartist.Svg('circle', {
                cx: data.x2,
                cy: data.y2,
                r: 5
            }, 'ct-slice-pie'));
        }
    });
    verticalBar2.on('created', function (data) {
        var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'barGradient1',
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
        }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(253,99,107,1)'
        }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(253,99,107, 0.6)'
        });
        return defs;
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////

    var verticalBar3 = new Chartist.Bar('#vertical-bar3', {
        labels: ['Q1','Q1','Q1','Q1','Q1','Q1', 'Q2','Q2','Q2','Q2','Q2','Q2', 'Q3','Q3','Q3','Q3','Q3','Q3', 'Q4', 'Q4', 'Q4', 'Q4', 'Q4', 'Q4'],
        series: [
            [2000, 1000, 3000, 5000, 7000, 4000, 8000, 6000, 12000, 14000, 11000, 9000, 7000, 4000, 8000, 12000, 13000, 11000, 7000, 4000, 3000, 2000, 1000, 2000],
        ]
    }, {
            axisY: {
                labelInterpolationFnc: function (value) {
                    return (value / 1000) + 'k';
                },
                scaleMinSpace: 50,
            },
            axisX: {
                showGrid: false,
                labelInterpolationFnc: function (value, index) {
                    return index % 6 === 0 ? value : null;
                }
            },
            plugins: [
                Chartist.plugins.tooltip({
                    appendToBody: true
                })
            ]
        });
    verticalBar3.on('draw', function (data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 15px',
                y1: 350,
                x1: data.x1 + 0.001
            });
            data.group.append(new Chartist.Svg('circle', {
                cx: data.x2,
                cy: data.y2,
                r: 7.5
            }, 'ct-slice-pie'));
        }
    });
    verticalBar3.on('created', function (data) {
        var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'barGradient3',
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
        }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(132, 60, 247,1)'
        }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(56, 184, 242, 1)'
        });
        return defs;
    });

    
 

});