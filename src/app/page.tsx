"use client";
import ListNode from "@/components/ListNode/ListNode";
import start from "../assets/images/start.png";
import end from "../assets/images/finish.png"
import wall from "../assets/images/wall.png"
import cross from "../assets/images/cross.png"
import Image from "next/image";
import { useAppContext } from "./ActionContext";

export default function Home() {
  const { currentElement, setCurrentElement } = useAppContext();
    return (
    <main>
      <nav className="header">Pathfinding Visualizer</nav>
      <h2>Pick Up Your Elements</h2>
      <div className="options">
        <div className="option" style={{border:currentElement == 'start' ? '4px solid green' : ''}} onClick={()=>{setCurrentElement('start')}}>
          <Image src={start} alt="image"></Image>
        </div>
        <div className="option" style={{border:currentElement == 'end' ? '4px solid green' : ''}} onClick={()=>{setCurrentElement('end')}}>
          <Image src={end} alt="image"></Image>
        </div>
        <div className="option" style={{border:currentElement == 'wall' ? '4px solid green' : ''}} onClick={()=>{setCurrentElement('wall')}}>
          <Image src={wall} alt="image"></Image>
        </div>
        <div className="option" style={{border:currentElement == 'cross' ? '4px solid green' : ''}} onClick={()=>{setCurrentElement('cross')}}>
          <Image src={cross} alt="image"></Image>
        </div>
      </div>
      <div className="node-grid">
        <ListNode />
      </div>
    </main>
  );
}
