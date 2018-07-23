/*=========================================================================================
    File Name: card-advanced.js
    Description: intialize advance card advanced
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.0
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/
(function(window, document, $) {
    'use strict';



      /*************************************************
    *               Project Stats               *
    *************************************************/

   var barOptions = {
    axisY: {
      low: 0,
      high: 20,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
        showLabel: true,
        showGrid: false,
      },
      fullWidth: true,
  };
  
  
  var lineOptions = {
    axisX: {
      showLabel: false,
      showGrid: false,
      
    },
    axisY: {
      showLabel: false,
      showGrid: false,
      low: 0,
      high: 20,
      offset: 0
    },
    lineSmooth: Chartist.Interpolation.simple({
        divisor: 2
    }),
    plugins: [
        Chartist.plugins.tooltip({
            appendToBody: false,
            pointClass: 'ct-point'
        })
    ],
    fullWidth: true
  };
  
  var ProjectStatsBar = new Chartist.Bar('#progress-stats-bar-chart', {
    labels: ['Mon', 'Tue', 'Wex', 'Thu', 'Fri','Sat','Sun'],
    series: [
      [18,20,14, 18,20, 15,18]
    ]
  }, barOptions);

  ProjectStatsBar.on('draw', function (data) {
    if (data.type === 'bar') {
        data.element.attr({
            style: 'stroke-width: 25px'               
        });
        
    }
});
  
  
var ProjectStatsLine = new Chartist.Line('#progress-stats-line-chart', {
    series: [         
      [10,15,7,12,3,16]
    ]
  }, lineOptions);

  ProjectStatsLine.on('created', function (data) {
    var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
    defs.elem('linearGradient', {
        id: 'lineLinearStats',
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 0
    }).elem('stop', {
        offset: '0%',
        'stop-color': 'rgba(168,120,244,0.1)'
    }).parent().elem('stop', {
        offset: '10%',
        'stop-color': 'rgba(168,120,244,1)'
    }).parent().elem('stop', {
        offset: '80%',
        'stop-color': 'rgba(255,108,147, 1)'
    }).parent().elem('stop', {
        offset: '98%',
        'stop-color': 'rgba(255,108,147, 0.1)'
    });

    return defs;


}).on('draw', function (data) {
    var circleRadius = 5;
    if (data.type === 'point') {
        var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            'ct:value': data.y,
            r: circleRadius,
            class: data.value.y === 15 ? 'ct-point ct-point-circle' : 'ct-point ct-point-circle-transperent'
        });
        data.element.replace(circle);
    }        
});

////////////////////////////////////////////////////////////////////////////////

var ProjectStatsBar1 = new Chartist.Bar('#progress-stats-bar-chart1', {
    labels: ['Mon', 'Tue', 'Wex', 'Thu', 'Fri','Sat','Sun'],
    series: [
      [20,17,14, 18,20, 15,18]
    ]
  }, barOptions);

  ProjectStatsBar1.on('draw', function (data) {
    if (data.type === 'bar') {
        data.element.attr({
            style: 'stroke-width: 25px'               
        });
        
    }
});
  
  
var ProjectStatsLine1 = new Chartist.Line('#progress-stats-line-chart1', {
    series: [         
      [3,12,7,15,7,13]
    ]
  }, lineOptions);

  ProjectStatsLine1.on('created', function (data) {
    var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
    defs.elem('linearGradient', {
        id: 'lineLinearStats1',
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 0
    }).elem('stop', {
        offset: '0%',
        'stop-color': 'rgba(0,230,175,0.1)'
    }).parent().elem('stop', {
        offset: '10%',
        'stop-color': 'rgba(0,230,175,1)'
    }).parent().elem('stop', {
        offset: '80%',
        'stop-color': 'rgba(0,206,249, 1)'
    }).parent().elem('stop', {
        offset: '98%',
        'stop-color': 'rgba(0,206,249, 0.1)'
    });

    return defs;


}).on('draw', function (data) {
    var circleRadius = 5;
    if (data.type === 'point') {
        var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            'ct:value': data.y,
            r: circleRadius,
            class: data.value.y === 15 ? 'ct-point ct-point-circle' : 'ct-point ct-point-circle-transperent'
        });
        data.element.replace(circle);
    }        
});

////////////////////////////////////////////////////////////////////////////////

var ProjectStatsBar2 = new Chartist.Bar('#progress-stats-bar-chart2', {
    labels: ['Mon', 'Tue', 'Wex', 'Thu', 'Fri','Sat','Sun'],
    series: [
      [20,17,14, 18,15, 20,18]
    ]
  }, barOptions);

  ProjectStatsBar2.on('draw', function (data) {
    if (data.type === 'bar') {
        data.element.attr({
            style: 'stroke-width: 25px'               
        });
        
    }
});
  
  
var ProjectStatsLine2 = new Chartist.Line('#progress-stats-line-chart2', {
    series: [         
      [16,3,10,5,15,10]
    ]
  }, lineOptions);

  ProjectStatsLine2.on('created', function (data) {
    var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
    defs.elem('linearGradient', {
        id: 'lineLinearStats2',
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 0
    }).elem('stop', {
        offset: '0%',
        'stop-color': 'rgba(50, 202, 254,0.1)'
    }).parent().elem('stop', {
        offset: '10%',
        'stop-color': 'rgba(50, 202, 254,1)'
    }).parent().elem('stop', {
        offset: '80%',
        'stop-color': 'rgba(159, 120, 255, 1)'
    }).parent().elem('stop', {
        offset: '98%',
        'stop-color': 'rgba(159, 120, 255, 0.1)'
    });

    return defs;


}).on('draw', function (data) {
    var circleRadius = 5;
    if (data.type === 'point') {
        var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            'ct:value': data.y,
            r: circleRadius,
            class: data.value.y === 15 ? 'ct-point ct-point-circle' : 'ct-point ct-point-circle-transperent'
        });
        data.element.replace(circle);
    }        
});

    /*************************************************
           *               Statistics donut               *
           *************************************************/
    
          var statisticsDonutChart = new Chartist.Pie('#statistics-donut-chart', {
            series: [100],
            labels: ['iOS']
        }, {
                donut: true,
                labelInterpolationFnc: function (value) {
                    return '\ue915';
                },
                donutSolid: true,
                total: 100,
                donutWidth: 5,
            });
    
            statisticsDonutChart.on('draw', function (data) {
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
    
        statisticsDonutChart.on('created', function (data) {
            var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
            defs.elem('linearGradient', {
                id: 'donutGradient2',
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

 /*************************************************
    *               New Customers Stats               *
    *************************************************/

   var newCustomers = new Chartist.Pie('#new-customers', {
    series: [100],
    labels: ['iOS']
}, {
        donut: true,
        labelInterpolationFnc: function (value) {
            return '\ue9d7';
        },
        donutSolid: true,
        total: 100,
        donutWidth: 10,
    });

    newCustomers.on('draw', function (data) {
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

newCustomers.on('created', function (data) {
    var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
    defs.elem('linearGradient', {
        id: 'donutGradient5',
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

/*************************************************
    *              New Projects Stats               *
    *************************************************/

   var newProjects = new Chartist.Pie('#new-projects', {
    series: [100],
    labels: ['iOS']
}, {
        donut: true,
        labelInterpolationFnc: function (value) {
            return '\ue901';
        },
        donutSolid: true,
        total: 100,
        donutWidth: 10,
    });

    newProjects.on('draw', function (data) {
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

newProjects.on('created', function (data) {
    var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
    defs.elem('linearGradient', {
        id: 'donutGradient6',
        x1: 0,
        y1: 1,
        x2: 0,
        y2: 0
    }).elem('stop', {
        offset: '0%',
        'stop-color': 'rgba(40,175,208,1)'
    }).parent().elem('stop', {
        offset: '95%',
        'stop-color': 'rgba(40,175,208, 0.3)'
    });
    return defs;


});

/*************************************************
    *              Tasks Completed Stats               *
    *************************************************/

   var tasksCompleted = new Chartist.Pie('#tasks-completed', {
    series: [100],
    labels: ['iOS']
}, {
        donut: true,
        labelInterpolationFnc: function (value) {
            return '\ue96a';
        },
        donutSolid: true,
        total: 100,
        donutWidth: 10,
    });

    tasksCompleted.on('draw', function (data) {
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
tasksCompleted.on('created', function (data) {
    var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
    defs.elem('linearGradient', {
        id: 'donutGradient7',
        x1: 0,
        y1: 1,
        x2: 0,
        y2: 0
    }).elem('stop', {
        offset: '0%',
        'stop-color': 'rgba(253,185,1,1)'
    }).parent().elem('stop', {
        offset: '95%',
        'stop-color': 'rgba(253,185,1, 0.3)'
    });
    return defs;


});

  /*****************************************************
    *               checkbox             *
    *****************************************************/
if($('.chk-task').length){
    $('.chk-task').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
    });
}


    // Chat scrollbar
    if($('.chats').length > 0){
        $('.chats').perfectScrollbar({
            theme:"dark"
        });
    }


})(window, document, jQuery);