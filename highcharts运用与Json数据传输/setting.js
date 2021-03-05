var createChart1 = function(url) {

    $(document).ready(function() {

        var arr = new Array;

        $.getJSON(url, function(data) {
            var dataList = data.selectedData;
            console.log(dataList);
            chart.series[0].setData(dataList);
            chart2.series[0].setData(dataList);


            for (var i = 0; i < dataList.length; i++) {
                dataTotal = dataList[i].y + dataTotal;
            }

            console.log(dataTotal);

            var newDataTotal = function(newData) {
                dataTotal = 0;
                for (var i = 0; i < newData.length; i++) {
                    dataTotal = newData[i].y + dataTotal;
                }
            };

            // 测试按钮

            father.addEventListener('click', function(e) {
                if (e.target.id == "one") {
                    var newData = dataList.slice(0, 1);
                    chart.series[0].setData(newData);
                    chart2.series[0].setData(newData);

                    newDataTotal(newData);
                    console.log(dataTotal);
                } else if (e.target.id == "two") {
                    var newData = dataList.slice(0, 2);
                    chart.series[0].setData(newData);
                    chart2.series[0].setData(newData);

                    newDataTotal(newData);
                    console.log(dataTotal);

                } else if (e.target.id == "thr") {
                    var newData = dataList.slice(0, 3);
                    chart.series[0].setData(newData);
                    chart2.series[0].setData(newData);

                    newDataTotal(newData);
                    console.log(dataTotal);
                }
                chart.redraw();
                chart2.redraw();

            }, false);

            $(data.xVaribles).each(function(index, value) {

                arr.push(value['item']);
                chart.xAxis[0].setCategories(arr);
                chart2.xAxis[0].setCategories(arr);

            });

        });



        var dataTotal = 0;



        var father = document.getElementById('father');


        Highcharts.setOptions({ //必须在初始化前设置
            colors: ['#1C9399']
        });

        Highcharts.setOptions({ //取消初始动画
            plotOptions: {
                series: {
                    animation: false
                }
            }
        });


        var chart = Highcharts.chart('container', {
            chart: {
                type: 'bar',
                // 设定固定距离对应重绘元素
                marginLeft: 90,
                marginRight: 0,
                // padding: 0,
                animation: false
            },
            title: {
                text: ''
            },
            tooltip: {
                enabled: false
            },
            xAxis: {
                lineColor: '#D2D2D2',
                endOnTick: false,
                title: {
                    text: ' '
                },
                lineWidth: 1
            },
            yAxis: {
                // width: 85,
                max: 53,
                min: 0.01,
                lineWidth: 1,

                endOnTick: false,
                startOnTick: false,
                lineColor: '#D2D2D2',
                tickColor: '#D2D2D2',
                title: {
                    text: ' '
                },
                labels: {
                    style: {
                        "fontSize": "12px"
                    }
                },
                tickPositions: [0, 50],
                allowDecimals: true,
                gridLineDashStyle: 'Dot',
                tickWidth: 2,
                tickLength: -3
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    },

                    dataLabels: {
                        enabled: true,
                        align: 'left',
                        color: '#404040',
                        inside: false,
                        useHTML: true,
                        x: 3,
                        className: 'percentage',
                        formatter: function() {
                            return Math.round(this.y / dataTotal * 100) + "%"; //返回百分比和个数
                        }
                    },

                }
            },
            series: [{
                colorByPoint: true
            }]
        }, function(chart) {
            chart.renderer.rect(84, 0, 10, 10).attr({
                fill: '#D2D2D2'
            }).add();
            chart.renderer.text('构成', 61, 9).css({
                fontSize: '10px',
                color: '#404040'
            }).add();
            // chart.renderer.rect(655, 500, 10, 10).attr({
            //     fill: '#D2D2D2'
            // }).add();
            // chart.renderer.text('数量', 645, 523).css({
            //     fontSize: '10px',
            //     color: '#404040'
            // }).add();
            chart.renderer.text('0', 77, 515).css({
                fontSize: '12px',
                color: '#404040'
            }).add();
            chart.renderer.rect(89, 504, 1, 1).css({
                fill: '#D2D2D2'
            }).add();
            // 格式化表格设定
            chart.update({
                xAxis: {
                    labels: {
                        y: 5,
                        x: -5,
                        style: {
                            color: '#404040',
                            fontSize: 12 + 'px',
                            marginLeft: 10 + 'px'
                        }
                    }
                },
                yAxis: {
                    endOnTick: false,

                    lineColor: '#D2D2D2',
                    tickColor: '#D2D2D2',
                    showEmpty: false,
                    showFirstLabel: true,
                    // 不能清除第一个tick的显示，用startOnTick: false, min: 0.01 来清除
                    labels: {
                        style: {
                            color: '#404040'
                        }
                    }
                },
                gridLineColor: '#D2D2D2',
                plotOptions: {
                    series: {
                        animation: false,
                        pointWidth: 16,
                        dataLabels: {
                            style: {
                                fontSize: 12 + 'px',
                            }
                        }
                    }
                }
            })
        });




        var chart2 = Highcharts.chart('container2', {
            chart: {
                type: 'bar',
                // width: '20%',
                // 设定固定距离对应重绘元素
                marginLeft: '0',
                padding: 0,
                // width: 500,
                animation: false
            },
            title: {
                text: ''
            },
            tooltip: {
                enabled: false
            },
            xAxis: {
                lineWidth: 0,
                lineColor: '#D2D2D2',
                endOnTick: false,
                visible: false,
                title: {
                    text: ' '
                }
            },
            yAxis: {
                width: '655',
                // ceiling: 750,
                max: 840,
                min: 50.1,
                lineWidth: 1,
                maxPadding: 0.9,
                endOnTick: false,
                startOnTick: false,
                tickPixelInterval: 70,
                tickInterval: null,

                lineColor: '#D2D2D2',
                tickColor: '#D2D2D2',
                title: {
                    text: ' '
                },
                labels: {
                    style: {
                        "fontSize": "12px"
                    }
                },
                tickPositions: [50, 150, 250, 350, 450, 550, 650, 750],
                allowDecimals: true,
                gridLineDashStyle: 'Dot',
                tickWidth: 2,
                tickLength: -3
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        align: 'left',
                        color: '#404040',
                        inside: false,
                        useHTML: true,
                        x: 3,
                        className: 'percentage',
                        formatter: function() {
                            if (this.y < 50) {
                                return "";
                            }
                            return Math.round(this.y / dataTotal * 100) + "%"; //返回百分比和个数
                        }
                    },
                }
            },
            series: [{
                // data: dataList,
                colorByPoint: true
            }]
        }, function(chart) {
            // chart.styledMode = true;
            // chart.renderer.rect(74, 0, 10, 10).attr({
            //     fill: '#D2D2D2'
            // }).add();
            // chart.renderer.text('构成', 51, 9).css({
            //     fontSize: '10px',
            //     color: '#404040'
            // }).add();
            chart.renderer.rect(655, 500, 10, 10).attr({
                fill: '#D2D2D2'
            }).add();
            chart.renderer.text('数量', 645, 523).css({
                fontSize: '10px',
                color: '#404040'
            }).add();
            // chart.renderer.text('0', 67, 515).css({
            //     fontSize: '12px',
            //     color: '#404040'
            // }).add();
            chart.renderer.rect(79, 504, 1, 1).css({
                fill: '#D2D2D2'
            }).add();
            // 格式化表格设定
            chart.update({
                xAxis: {
                    labels: {
                        y: 5,
                        x: -5,
                        style: {
                            color: '#404040',
                            fontSize: 12 + 'px',
                            marginLeft: 10 + 'px'
                        }
                    }
                },
                yAxis: {
                    tickPixelInterval: 70,
                    tickInterval: null,
                    lineColor: '#D2D2D2',
                    tickColor: '#D2D2D2',
                    showEmpty: false,
                    showFirstLabel: true,
                    // 不能清除第一个tick的显示，用startOnTick: false, min: 0.01 来清除
                    labels: {
                        style: {
                            color: '#404040'
                        }
                    }
                },
                gridLineColor: '#D2D2D2',
                plotOptions: {
                    series: {
                        animation: false,

                        pointWidth: 16,
                        dataLabels: {
                            style: {
                                fontSize: 12 + 'px',
                            }
                        }
                    }
                }
            })
        })
    });
}