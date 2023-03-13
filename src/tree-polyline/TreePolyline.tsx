import React, { useRef, useState } from "react";
import { Schedule } from "./Schedule";

interface StandardComponentProps {
    name?: string;
    lvl: number;
    children: StandardComponentProps[];
}

function TreePolyline() {
    // let position: [...[number, number][]] = [[0, 0]];
    let position: StandardComponentProps[];
    let [data, setData] = useState<StandardComponentProps>({
        name: "",
        lvl: 1,
        children: [],
    });

    const inputText = useRef<HTMLInputElement>(null);

    function newPosition(array: StandardComponentProps[]) {
        position = array;
    }

    function adding(text: any, dataObj: StandardComponentProps = data) {
        if (data.name !== "") {
            if (position.length === 1 && data.name === position[0].name) {
                setData({
                    ...data,
                    children: [...data.children, { name: text, lvl: 2, children: [] }],
                });
                return;
            }
            test: for (let i = 0; i < dataObj.children.length; i++) {
                for (let j = 0; j < position.length; j++) {
                    if (dataObj.children[i].name === position[j].name) {
                        adding(text, dataObj.children[i]);
                        if (position[j].name === position[position.length - 1].name) {
                            dataObj.children[i].children.push({
                                name: text,
                                lvl: dataObj.children[i].lvl + 1,
                                children: [],
                            });
                            setData({
                                ...data,
                                children: [...data.children],
                            });
                            return;
                        }
                        break test;
                    }
                }
            }
        } else {
            setData({ name: text, lvl: 1, children: [] });
            return;
        }

        // for (let i = 0; i < currentNode.children.length; i++) {
        //     if (currentNode.name === positionName) {
        //         console.log(text, currentNode.name, i);
        //         break;
        //     }
        //     console.log(i);
        //     adding(text, currentNode.children[i]);
        // }
    }

    // function adding(text: any) {
    //     function toPosition() {
    //         for (let i = 0; i < position.length; i++) {}
    //     }

    //     if (data.name !== "") {
    //         setData({
    //             ...data,
    //             children: [...data.children, { name: text, lvl: 2, children: [] }],
    //         });
    //     } else {
    //         setData({ name: text, lvl: 1, children: [] });
    //     }
    // }

    // function checking(
    //     newPosition: boolean = false,
    //     array: StandardComponentProps[],
    //     dataObj: StandardComponentProps = data
    // ) {
    //     if (newPosition) {
    //         console.log("New");
    //         position = [[0, 0]];
    //     }
    //     console.log(array);
    //     for (let i = 0; i < dataObj.children.length; i++) {
    //         for (let j = i + 1; j < array.length; j++) {
    //             console.log(dataObj.children[i].name, array[j].name);
    //             if (dataObj.children[i].name === array[j].name) {
    //                 position = [...position, [j, i]];
    //                 console.log(position, true, [j, i]);
    //                 checking(false, array, dataObj.children[i]);
    //                 return;
    //             }
    //         }
    //     }
    // }

    return (
        <div>
            <input type="text" placeholder="Text" ref={inputText} />
            <button
                onClick={() => {
                    adding(inputText.current?.value);
                }}
            >
                Add
            </button>
            <Schedule data={data} newPosition={newPosition} />
        </div>
    );
}
export default TreePolyline;
