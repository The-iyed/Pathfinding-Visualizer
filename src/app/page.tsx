"use client";
import ListNode from "@/components/ListNode/ListNode";
import start from "../assets/images/start.png";
import end from "../assets/images/finish.png"
import wall from "../assets/images/wall.png"
import Image from "next/image";
import { useAppContext } from "./ActionContext";

export default function Home() {
  const { currentElement, setCurrentElement } = useAppContext();  return (
    <main>
      <nav className="header">Pathfinding Visualizer</nav>
      <h2>Pick Up Your Elements</h2>
      {/* {currentElement && <h2>Your Choosing A  :  {currentElement}  Element ....</h2>} */}
      <div className="options">
        <div className="option" onClick={()=>{setCurrentElement('Starting')}}>
          <Image src={start} alt="image"></Image>
        </div>
        <div className="option" onClick={()=>{setCurrentElement('Ending')}}>
          <Image src={end} alt="image"></Image>
        </div>
        <div className="option" onClick={()=>{setCurrentElement('Wall')}}>
          <Image src={wall} alt="image"></Image>
        </div>
      </div>
      <button className="button">Submit</button>
      <div className="node-grid">
        <ListNode />
      </div>
    </main>
  );
}
