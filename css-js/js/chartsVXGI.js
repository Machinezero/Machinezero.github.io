$(function(){
    AmCharts.makeChart("camera",
        {
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "theme": "dark",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "title": "Static Camera",
                    "type": "column",
                    "valueField": "column-1"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-2",
                    "title": "Dynamic Camera",
                    "type": "column",
                    "valueAxis": "ValueAxis-2",
                    "valueField": "column-2"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "Frames per Second (FPS)"
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": "Static vs Dynamic Camera (without VXGI)"
                }
            ],
            "dataProvider": [
                {
                    "category": "Sponza",
                    "column-1": "100",
                    "column-2": "100"
                },
                {
                    "category": "Ponte de Lima 3D",
                    "column-1": "71",
                    "column-2": "70"
                },
                {
                    "category": "Rungholt",
                    "column-1": "19",
                    "column-2": "19"
                }
            ]
        }
    );

    AmCharts.makeChart("cameravxgi",
        {
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "theme": "dark",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "title": "Static Camera",
                    "type": "column",
                    "valueField": "column-1"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-2",
                    "title": "Dynamic Camera",
                    "type": "column",
                    "valueAxis": "ValueAxis-2",
                    "valueField": "column-2"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "Frames per Second (FPS)",
                    "minimum": 0
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": "Static vs Dynamic Camera (with VXGI)"
                }
            ],
            "dataProvider": [
                {
                    "category": "Sponza",
                    "column-1": "54",
                    "column-2": "47"
                },
                {
                    "category": "Ponte de Lima 3D",
                    "column-1": "51",
                    "column-2": "40"
                },
                {
                    "category": "Rungholt",
                    "column-1": "18",
                    "column-2": "12"
                }
            ]
        }
    );

    AmCharts.makeChart("speedupcam",
        {
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "theme": "dark",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "title": "Static Camera",
                    "type": "column",
                    "valueField": "column-1"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-2",
                    "title": "Dynamic Camera",
                    "type": "column",
                    "valueAxis": "ValueAxis-2",
                    "valueField": "column-2"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "Speedup (%)",
                    "minimum": 0

                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": "SpeedUp Camera Benchmark (With VXGI vs Without VXGI)"
                }
            ],
            "dataProvider": [
                {
                    "category": "Sponza",
                    "column-1": "0.54",
                    "column-2": "0.47"
                },
                {
                    "category": "Ponte Lima 3D",
                    "column-1": "0.719",
                    "column-2": "0.571"
                },
                {
                    "category": "Rungholt",
                    "column-1": "0.947",
                    "column-2": "0.632"
                }
            ]
        }
    );

    AmCharts.makeChart("light",
        {
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "theme": "dark",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "title": "Static Light",
                    "type": "column",
                    "valueField": "static"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-2",
                    "title": "Dynamic Light",
                    "type": "column",
                    "valueAxis": "ValueAxis-1",
                    "valueField": "dynamic"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "FPS",
                    "title": "Frames per Second (FPS)",
                    "minimum": 0
                },
                {
                    "id": "ValueAxis-2",
                    "position": "right",
                    "gridAlpha": 0,
                    "title": "Axis title"
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Light",
                    "size": 15,
                    "text": "Dynamic vs Static Light  (without VXGI)"
                }
            ],
            "dataProvider": [
                {
                    "category": "Sponza",
                    "static": "100",
                    "dynamic": "98"
                },
                {
                    "category": "Ponte de Lima 3D",
                    "static": "70",
                    "dynamic": "68"
                },
                {
                    "category": "Rungholt",
                    "static": "20",
                    "dynamic": "19"
                }
            ]
        }
    );

    AmCharts.makeChart("lightvxgi",
        {
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "theme": "dark",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "title": "Static Light",
                    "type": "column",
                    "valueField": "static"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-2",
                    "title": "Dynamic Light",
                    "type": "column",
                    "valueAxis": "ValueAxis-1",
                    "valueField": "dynamic"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "FPS",
                    "title": "Frames per Second (FPS)",
                    "minimum": 0                            
                },
                {
                    "id": "ValueAxis-2",
                    "position": "right",
                    "gridAlpha": 0,
                    "title": "Axis title"
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Light",
                    "size": 15,
                    "text": "Dynamic vs Static Light  (with VXGI)"
                }
            ],
            "dataProvider": [
                {
                    "category": "Sponza",
                    "static": "54",
                    "dynamic": "35"
                },
                {
                    "category": "Ponte de Lima 3D",
                    "static": "51",
                    "dynamic": "23"
                },
                {
                    "category": "Rungholt",
                    "static": "17",
                    "dynamic": "6"
                }
            ]
        }
    );

    AmCharts.makeChart("speeduplight",
        {
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "theme": "dark",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "title": "Static Light",
                    "type": "column",
                    "valueField": "column-1"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-2",
                    "title": "Dynamic Light",
                    "type": "column",
                    "valueAxis": "ValueAxis-2",
                    "valueField": "column-2"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "Speedup (%)",
                    "minimum": 0
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": "SpeedUp Light Benchmark (With VXGI vs Without VXGI)"
                }
            ],
            "dataProvider": [
                {
                    "category": "Sponza",
                    "column-1": "0.54",
                    "column-2": "0.357"
                },
                {
                    "category": "Ponte Lima 3D",
                    "column-1": "0.729",
                    "column-2": "0.338"
                },
                {
                    "category": "Rungholt",
                    "column-1": "0.85",
                    "column-2": "0.316"
                }
            ]
        }
    );

    AmCharts.makeChart("sl",
        {
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "theme": "dark",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "title": "With VXGI",
                    "type": "column",
                    "valueField": "column-1"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-2",
                    "title": "Without VXGI",
                    "type": "column",
                    "valueAxis": "ValueAxis-2",
                    "valueField": "column-2"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "axisFrequency": 0,
                    "axisTitleOffset": 0,
                    "id": "ValueAxis-1",
                    "maximum": 1,
                    "minimum": 0,
                    "title": "Speedup (%)",
                    "titleFontSize": 12
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": "Camera Speedup (Dynamic/Static)"
                }
            ],
            "dataProvider": [
                {
                    "category": "Sponza",
                    "column-1": "0.87",
                    "column-2": "1"
                },
                {
                    "category": "Ponte de Lima 3D",
                    "column-1": "0.784",
                    "column-2": "0.99"
                },
                {
                    "category": "Rungholt",
                    "column-1": "0.667",
                    "column-2": "1"
                }
            ]
        }
    );

    AmCharts.makeChart("spl",
        {
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "theme": "dark",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "title": "With VXGI",
                    "type": "column",
                    "valueField": "column-1"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-2",
                    "title": "Without VXGI",
                    "type": "column",
                    "valueAxis": "ValueAxis-2",
                    "valueField": "column-2"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "axisFrequency": 0,
                    "axisTitleOffset": 0,
                    "id": "ValueAxis-1",
                    "maximum": 1,
                    "minimum": 0,
                    "title": "Speedup (%)",
                    "titleFontSize": 12
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": "Light Speedup (Dynamic/Static)"
                }
            ],
            "dataProvider": [
                {
                    "category": "Sponza",
                    "column-1": "0.648",
                    "column-2": "0.98"
                },
                {
                    "category": "Ponte de Lima 3D",
                    "column-1": "0.45",
                    "column-2": "0.97"
                },
                {
                    "category": "Rungholt",
                    "column-1": "0.353",
                    "column-2": "0.95"
                }
            ]
        }
    );
    AmCharts.makeChart("chartPL_3D",
        {
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "theme": "dark",
            "categoryAxis": {
                "gridPosition": "start",
                "labelOffset": 1,
                "title": "Clipmap Size"
            },
            "trendLines": [],
            "graphs": [
                {
                    "alphaField": "R",
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "bullet": "round",
                    "bulletField": "R",
                    "bulletSizeField": "R",
                    "closeField": "R",
                    "colorField": "R",
                    "customBulletField": "R",
                    "customMarker": "",
                    "dashLengthField": "R",
                    "descriptionField": "R",
                    "errorField": "R",
                    "fillColorsField": "R",
                    "gapField": "R",
                    "highField": "R",
                    "id": "AmGraph-1",
                    "labelColorField": "R",
                    "lineColorField": "R",
                    "lowField": "R",
                    "openField": "R",
                    "patternField": "R",
                    "title": "Graphics Card Dedicated Memory",
                    "valueField": "Graphics Card",
                    "xField": "R",
                    "yField": "R"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "bullet": "square",
                    "id": "AmGraph-2",
                    "title": "Random-Access Memory (RAM)",
                    "valueField": "RAM"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "Memory Used (MBs)"
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "labelWidth": 0,
                "rollOverGraphAlpha": 0,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": "Ponte de Lima 3D - 3 Voxel Directions"
                }
            ],
            "dataProvider": [
                {
                    "category": "16 (57 FPS)",
                    "Graphics Card": "388",
                    "RAM": "9"
                },
                {
                    "category": "32 (55 FPS)",
                    "Graphics Card": "391",
                    "RAM": "9"
                },
                {
                    "category": "64 (54 FPS)",
                    "Graphics Card": "430",
                    "RAM": "9"
                },
                {
                    "category": "128 (52 FPS)",
                    "Graphics Card": "712",
                    "RAM": "10"
                },
                {
                    "category": "256 (51 FPS)",
                    "Graphics Card": "1611",
                    "RAM": "666"
                }
            ]
        }
    );
    AmCharts.makeChart("chartPL_6D",
        {
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "theme": "dark",
            "categoryAxis": {
                "gridPosition": "start",
                "labelOffset": 1,
                "title": "Clipmap Size"
            },
            "trendLines": [],
            "graphs": [
                {
                    "alphaField": "R",
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "bullet": "round",
                    "bulletField": "R",
                    "bulletSizeField": "R",
                    "closeField": "R",
                    "colorField": "R",
                    "customBulletField": "R",
                    "customMarker": "",
                    "dashLengthField": "R",
                    "descriptionField": "R",
                    "errorField": "R",
                    "fillColorsField": "R",
                    "gapField": "R",
                    "highField": "R",
                    "id": "AmGraph-1",
                    "labelColorField": "R",
                    "lineColorField": "R",
                    "lowField": "R",
                    "openField": "R",
                    "patternField": "R",
                    "title": "graph 1",
                    "valueField": "Graphics Card",
                    "xField": "R",
                    "yField": "R"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "id": "AmGraph-2",
                    "title": "graph 2",
                    "valueField": "RAM"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "Memory Used (MBs)"
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "labelText": "Graphics Card Dedicated Memory",
                "labelWidth": 0,
                "rollOverGraphAlpha": 0,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "",
                    "size": 15,
                    "text": "Ponte de Lima 3D - 6 Voxel Directions"
                }
            ],
            "dataProvider": [
                {
                    "category": "16 (56 FPS)",
                    "Graphics Card": "388",
                    "RAM": "9"
                },
                {
                    "category": "32 (54 FPS)",
                    "Graphics Card": "393",
                    "RAM": "9"
                },
                {
                    "category": "64 (53 FPS)",
                    "Graphics Card": "461",
                    "RAM": "9"
                },
                {
                    "category": "128 (50 FPS)",
                    "Graphics Card": "928",
                    "RAM": "10"
                },
                {
                    "category": "256 (46 FPS)",
                    "Graphics Card": "1905",
                    "RAM": "2084"
                }
            ]
        }
    );
    AmCharts.makeChart("chartR_3D",
        {
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "theme": "dark",
            "categoryAxis": {
                "gridPosition": "start",
                "labelOffset": 1,
                "title": "Clipmap Size"
            },
            "trendLines": [],
            "graphs": [
                {
                    "alphaField": "R",
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "bullet": "round",
                    "bulletField": "R",
                    "bulletSizeField": "R",
                    "closeField": "R",
                    "colorField": "R",
                    "customBulletField": "R",
                    "customMarker": "",
                    "dashLengthField": "R",
                    "descriptionField": "R",
                    "errorField": "R",
                    "fillColorsField": "R",
                    "gapField": "R",
                    "highField": "R",
                    "id": "AmGraph-1",
                    "labelColorField": "R",
                    "lineColorField": "R",
                    "lowField": "R",
                    "openField": "R",
                    "patternField": "R",
                    "title": "Graphics Card Dedicated Memory",
                    "valueField": "Graphics Card",
                    "xField": "R",
                    "yField": "R"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "bullet": "square",
                    "id": "AmGraph-2",
                    "title": "Random-Access Memory (RAM)",
                    "valueField": "RAM"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "Memory Used (MBs)"
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "labelWidth": 0,
                "rollOverGraphAlpha": 0,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": "Rungholt - 3 Voxel Directions"
                }
            ],
            "dataProvider": [
                {
                    "category": "16 (19 FPS)",
                    "Graphics Card": "967",
                    "RAM": "7"
                },
                {
                    "category": "32 (19 FPS)",
                    "Graphics Card": "970",
                    "RAM": "7"
                },
                {
                    "category": "64 (19 FPS)",
                    "Graphics Card": "1009",
                    "RAM": "7"
                },
                {
                    "category": "128 (18 FPS)",
                    "Graphics Card": "1291",
                    "RAM": "7"
                },
                {
                    "category": "256 (8 FPS)",
                    "Graphics Card": "1988",
                    "RAM": "849"
                }
            ]
        }
    );
    AmCharts.makeChart("chartR_6D",
        {
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "theme": "dark",
            "categoryAxis": {
                "gridPosition": "start",
                "labelOffset": 1,
                "title": "Clipmap Size"
            },
            "trendLines": [],
            "graphs": [
                {
                    "alphaField": "R",
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "bullet": "round",
                    "bulletField": "R",
                    "bulletSizeField": "R",
                    "closeField": "R",
                    "colorField": "R",
                    "customBulletField": "R",
                    "customMarker": "",
                    "dashLengthField": "R",
                    "descriptionField": "R",
                    "errorField": "R",
                    "fillColorsField": "R",
                    "gapField": "R",
                    "highField": "R",
                    "id": "AmGraph-1",
                    "labelColorField": "R",
                    "lineColorField": "R",
                    "lowField": "R",
                    "openField": "R",
                    "patternField": "R",
                    "title": "Graphics Card Dedicated Memory",
                    "valueField": "Graphics Card",
                    "xField": "R",
                    "yField": "R"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "bullet": "square",
                    "id": "AmGraph-2",
                    "title": "Random-Access Memory (RAM)",
                    "valueField": "RAM"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "Memory Used (MBs)"
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "labelWidth": 0,
                "rollOverGraphAlpha": 0,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": "Rungholt - 6 Voxel Directions"
                }
            ],
            "dataProvider": [
                {
                    "category": "16 (19 FPS)",
                    "Graphics Card": "967",
                    "RAM": "7"
                },
                {
                    "category": "32 (19 FPS)",
                    "Graphics Card": "972",
                    "RAM": "7"
                },
                {
                    "category": "64 (19 FPS)",
                    "Graphics Card": "1037",
                    "RAM": "8"
                },
                {
                    "category": "128 (18 FPS)",
                    "Graphics Card": "1508",
                    "RAM": "9"
                },
                {
                    "category": "256 (5 FPS)",
                    "Graphics Card": "1936",
                    "RAM": "2611"
                }
            ]
        }
    );
    AmCharts.makeChart("chartCone_SEM",
        {
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "theme": "dark",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "title": "Sparsity 1",
                    "type": "column",
                    "valueField": "column-1"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-4",
                    "title": "Sparsity 4",
                    "type": "column",
                    "valueField": "column-2"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "Frames Per Second"
                },
                {
                    "id": "ValueAxis-2",
                    "position": "right",
                    "gridAlpha": 0,
                    "title": "Axis title"
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": "Without Cone Rotation"
                }
            ],
            "dataProvider": [
                {
                    "category": "8 Cones",
                    "column-1": "24",
                    "column-2": "49"
                },
                {
                    "category": "16 Cones",
                    "column-1": "12",
                    "column-2": "41"
                },
                {
                    "category": "32 Cones",
                    "column-1": "5",
                    "column-2": "29"
                },
                {
                    "category": "64 Cones",
                    "column-1": "2",
                    "column-2": "17"
                }
            ]
        }
    );
    AmCharts.makeChart("chartCone_COM",
        {
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "theme": "dark",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "title": "Sparsity 1",
                    "type": "column",
                    "valueField": "column-1"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-4",
                    "title": "Sparsity 4",
                    "type": "column",
                    "valueField": "column-2"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "Frames Per Second"
                },
                {
                    "id": "ValueAxis-2",
                    "position": "right",
                    "gridAlpha": 0,
                    "title": "Axis title"
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": "With Cone Rotation"
                }
            ],
            "dataProvider": [
                {
                    "category": "8 Cones",
                    "column-1": "24",
                    "column-2": "45"
                },
                {
                    "category": "16 Cones",
                    "column-1": "12",
                    "column-2": "37"
                },
                {
                    "category": "32 Cones",
                    "column-1": "5",
                    "column-2": "26"
                },
                {
                    "category": "64 Cones",
                    "column-1": "2",
                    "column-2": "15"
                }
            ]
        }
    );
});