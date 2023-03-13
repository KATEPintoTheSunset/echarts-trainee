import React from "react";
import ReactECharts from "echarts-for-react";
import { data } from "../generate";

function BarLarge() {
    const option = {
        title: {
            text: "10 years temperature",
            left: 20,
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: false,
                },
                saveAsImage: {
                    pixelRatio: 2,
                },
            },
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        grid: {
            bottom: 90,
        },
        dataZoom: [
            {
                type: "inside",
            },
            {
                type: "slider",
            },
        ],
        xAxis: {
            data: data.categoryData,
            silent: false,
            splitLine: {
                show: false,
            },
            splitArea: {
                show: false,
            },
        },
        yAxis: {
            splitArea: {
                show: false,
            },
        },
        series: [
            {
                type: "bar",
                data: data.valueData.map((_t) => {
                    let numberTemp: number = 0;
                    if (typeof _t === "string") {
                        numberTemp = parseInt(_t);
                    }
                    const barValueOptions = {
                        value: _t,
                        itemStyle: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: fillTemperatureBar(numberTemp),
                            },
                        },
                    };
                    return barValueOptions;
                }),
                large: true,
                itemStyle: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: "fireBrick",
                            },
                            {
                                offset: 0.25,
                                color: "orange",
                            },
                            {
                                offset: 0.5,
                                color: "lightGreen",
                            },
                            {
                                offset: 0.75,
                                color: "darkTurquoise",
                            },
                            {
                                offset: 1,
                                color: "steelBlue",
                            },
                        ],
                    },
                },
            },
        ],
    };

    function fillTemperatureBar(temp: number) {
        const gradientArray = [
            {
                offset: 0,
                color: "lightGreen",
            },
            {
                offset: 0.25,
                color: "orange",
            },
            {
                offset: 0.5,
                color: "fireBrick",
            },
            {
                offset: 0.75,
                color: "darkTurquoise",
            },
            {
                offset: 1,
                color: "steelBlue",
            },
        ];

        const offsetsNegativeTemperature = [0, temp * 0.25, temp * 0.5, temp * 0.75, temp];
        const offsetsTemperature = [temp, temp * 0.75, temp * 0.5, temp * 0.25, 0];

        offsetsTemperature.map((_t, index) => {
            let subTemp = 0;
            if (_t >= 0) {
                subTemp = Math.floor(_t / 10);
                switch (subTemp) {
                    case 0: {
                        gradientArray[index].color = "lightGreen";
                        break;
                    }
                    case 1: {
                        gradientArray[index].color = "orange";
                        break;
                    }
                    case 2: {
                        gradientArray[index].color = "fireBrick";
                        break;
                    }
                    // case -1: {
                    //     gradientArray[index].color = "fireBrick";
                    //     break;
                    // }
                    // case -2: {
                    //     gradientArray[index].color = "fireBrick";
                    //     break;
                    // }
                }
            }
            // else {
            //     subTemp = Math.ceil(_t / 10);
            //     switch (subTemp) {
            //         case 0: {
            //             gradientArray[index].color = "lightGreen";
            //             break;
            //         }
            //         // case 1: {
            //         //     gradientArray[index].color = "orange";
            //         //     break;
            //         // }
            //         // case 2: {
            //         //     gradientArray[index].color = "fireBrick";
            //         //     break;
            //         // }
            //         case -1: {
            //             gradientArray[index].color = "darkTurquoise";
            //             break;
            //         }
            //         case -2: {
            //             gradientArray[index].color = "steelBlue";
            //             break;
            //         }
            //     }
            // }
        });

        offsetsNegativeTemperature.map((_t, index) => {
            let subTemp = 0;
            if (_t < 0) {
                subTemp = Math.ceil(_t / 10);
                switch (subTemp) {
                    case 0: {
                        gradientArray[index].color = "lightGreen";
                        break;
                    }
                    // case 1: {
                    //     gradientArray[index].color = "orange";
                    //     break;
                    // }
                    // case 2: {
                    //     gradientArray[index].color = "fireBrick";
                    //     break;
                    // }
                    case -1: {
                        gradientArray[index].color = "darkTurquoise";
                        break;
                    }
                    case -2: {
                        gradientArray[index].color = "steelBlue";
                        break;
                    }
                }
            }
        });
        return gradientArray;
    }
    return <ReactECharts option={option} />;
}

export default BarLarge;
