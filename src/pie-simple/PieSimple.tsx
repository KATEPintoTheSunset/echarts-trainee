import React from "react";
import ReactECharts from "echarts-for-react";
import { data } from "../generate";

function PieSimple() {
    const option = {
        title: {
            text: "Percentage of cold and warm days over 10 years",
            subtext: "Fake Data",
            left: "center",
        },
        tooltip: {
            trigger: "item",
        },
        legend: {
            orient: "vertical",
            left: "left",
            top: "10%",
        },
        series: [
            {
                name: "Info",
                type: "pie",
                radius: "90%",
                top: "20%",
                data: checkTemperature(data.valueData),
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)",
                    },
                },
            },
        ],
    };

    function checkTemperature(array: (string | undefined)[]) {
        let veryCold = { value: 0, name: "Very Cold", itemStyle: { color: "steelBlue" } };
        let cold = { value: 0, name: "Cold", itemStyle: { color: "darkTurquoise" } };
        let cool = { value: 0, name: "Cool", itemStyle: { color: "lightGreen" } };
        let warm = { value: 0, name: "Warm", itemStyle: { color: "orange" } };
        let hot = { value: 0, name: "Hot", itemStyle: { color: "fireBrick" } };
        for (let i = 0; i <= array.length; i++) {
            let t: number = Number(array[i]);
            if (t <= -10) {
                veryCold.value++;
            } else if (t > -10 && t < 0) {
                cold.value++;
            } else if (t > 0 && t < 10) {
                cool.value++;
            } else if (t > 11 && t < 20) {
                warm.value++;
            } else if (t >= 20) {
                hot.value++;
            }
        }
        return [veryCold, cold, cool, warm, hot];
    }

    return <ReactECharts option={option} />;
}

export default PieSimple;
