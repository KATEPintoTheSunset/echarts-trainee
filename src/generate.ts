import * as echarts from "echarts/core";

function generateData(count: number) {
    let date = new Date(2013, 0, 1);

    const categoryData = [];
    const valueData = [];
    let temp;

    function getRandom(min: number, max: number) {
        return (Math.random() * (max - min) + min).toFixed(1);
    }

    for (let i = 0; date.getFullYear() < count; ) {
        let month = date.getMonth();
        if (month === 11 || month === 0 || month === 1) {
            temp = getRandom(-15, -1);
        }
        if (
            month === 2 ||
            month === 3 ||
            month === 4 ||
            month === 8 ||
            month === 9 ||
            month === 10
        ) {
            temp = getRandom(0, 15);
        }
        if (month === 5 || month === 6 || month === 7) {
            temp = getRandom(16, 30);
        }
        categoryData.push(echarts.format.formatTime("yyyy-MM-dd", date, false));
        // valueData.push({value: temp, itemStyle: color});
        valueData.push(temp);
        date.setDate(date.getDate() + 1);
    }

    return {
        categoryData: categoryData,
        valueData: valueData,
    };
}

export const data = generateData(2024);