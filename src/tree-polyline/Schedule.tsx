import ReactECharts from "echarts-for-react";

interface StandardComponentProps {
    name?: string;
    children: object[];
}

export function Schedule({ data, newPosition }: any) {
    const onChartClick = (params: any) => {
        params.event.event.preventDefault();
        newPosition(params.treeAncestors.slice(1));
    };

    const onEvents = {
        contextmenu: onChartClick,
    };

    const option = {
        tooltip: {
            trigger: "item",
            triggerOn: "mousemove",
        },
        series: [
            {
                type: "tree",
                id: 0,
                name: "tree1",
                data: [data],

                top: "10%",
                left: "8%",
                bottom: "22%",
                right: "20%",

                symbolSize: 7,

                edgeShape: "polyline",
                edgeForkPosition: "63%",
                initialTreeDepth: 3,

                lineStyle: {
                    width: 2,
                },

                label: {
                    backgroundColor: "#fff",
                    position: "left",
                    verticalAlign: "middle",
                    align: "right",
                },

                leaves: {
                    label: {
                        position: "right",
                        verticalAlign: "middle",
                        align: "left",
                    },
                },

                emphasis: {
                    focus: "descendant",
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750,
            },
        ],
    };

    return <ReactECharts option={option} onEvents={onEvents} />;
}
