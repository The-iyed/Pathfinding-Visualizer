"use client";
import React, { useState } from "react";
import { useAppContext } from "@/app/ActionContext";
import Node from '../Node/Node'
import start from "../../assets/images/start.png";
import end from "../../assets/images/finish.png";
import wall from "../../assets/images/wall.png";  
import Image from "next/image";


export default function ListNode() {
  const [isStart, setIsStart] = useState<string>('');
  const [isEnd, setIsEnd] = useState<string>('');
  const [isWall, setIsWall] = useState<string>('');
  const { currentElement, setCurrentElement } = useAppContext();  
  console.log(currentElement)
  const numRows = 15;
  const numColumns = 30;
  const grid = [];
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
      grid.push(
        <div id={`${i}-${j}`} key={`${i}-${j}`} className={`node ${i + "-" + j}`} onClick={(e)=>{
          setIsStart(`${i}-${j}`)
          setIsEnd(`${i}-${j}`)
          }}>
          {(isStart === `${i}-${j}`)? (currentElement == "Starting" && <Image src={start} alt="image"></Image>) || (currentElement == "Ending" && <Image src={end} alt="image"></Image>) : null}
        </div>
      );
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(30, 35px)",
        gap: "0px",
        border: "1px solid rgb(175, 216, 248)",
        cursor: "pointer",
      }}
    >
      {grid}
    </div>
  );
}




