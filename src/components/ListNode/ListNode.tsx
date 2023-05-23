"use client";
import React from "react";
import { useAppContext } from "@/app/ActionContext";
import start from "../../assets/images/start.png";
import end from "../../assets/images/finish.png";
import wall from "../../assets/images/wall.png";
import Image from "next/image";import { filterArray } from "@/utils/filterArray";
import { findShortestPath } from "@/utils/findPath";
import { transformArray } from "@/utils/transform";


export default function ListNode() {
  const { currentElement , setResult , result} = useAppContext();
  const { object, setObject } = useAppContext();
  const numRows = 15;
  const numColumns = 30;
  const grid = [];
  console.log(result)
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
      grid.push(
        //@ts-ignore
        <div
          id={`${i}-${j}`}
          key={`${i}-${j}`}
          className={`node ${i + "-" + j}`}
          onClick={(e) => {
            //@ts-ignore
            let newObject = {
              //@ts-ignore
              position:e.target.id,
              status:currentElement
            }
            let finalObject = [...object,newObject]
            //@ts-ignore
            setObject(filterArray(finalObject))
          }}
        >
         
          {result != null && result.length !=0 && result.map((el)=>{
            if (el.position == `${i}-${j}`)  return <div style={{width:'33px',height:'33px',backgroundColor:'rgb(255, 254, 106)',position:'absolute',zIndex:'-1'}}></div>
          })}
         
          {object.map((el) => {
            if (el.position == `${i}-${j}` && el.status == "start")
              return <Image src={start} alt="image"></Image>;
            if (el.position == `${i}-${j}` && el.status == "end")
              return <Image src={end} alt="image"></Image>;
            if (el.position == `${i}-${j}` && el.status == "wall")
              return <Image src={wall} alt="image"></Image>;
          })}
        </div>
      );
    }
  }

  return (
    <>
   
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
    
    <button className="button" onClick={()=>{setResult(findShortestPath(transformArray(object)) || [])}}>Submit</button>
    <button className="reset" onClick={()=>{
      setResult([])
      setObject([])
      }}>Clear</button>
    </>
   
  );
}
