'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [task, setTask] = useState([ 
    {
      id:1, name: 'Task 1', status: 1,
    },
    {
      id:2, name: 'Task 2', status: 1,
    },
    {
      id:3, name: 'Task 3', status: 1,
    },
    {
      id:4, name: 'Task 4', status: 1,
    },
    {
      id:5, name: 'Task 5', status: 1,
    },
    {
      id:6, name: 'Task 6', status: 1,
    },
    {
      id:7, name: 'Task 7', status: 2,
    }]); 

  const [color, setColor] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      if(color >=3){
        setColor(1)
      } else {
        setColor(color + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [color]);

  return (
    <main className="flex min-h-screen h-full w-full">
      <div className="flex flex-1 w-[50%] bg-white flex-col justify-evenly items-center">
        <div className={"w-24 h-24 rounded-full " + (color === 1 ? "bg-green-500":"bg-gray-400")} ></div>
        <div className={"w-24 h-24 rounded-full " + (color === 2 ? "bg-yellow-500":"bg-gray-400")}></div>
        <div className={"w-24 h-24 rounded-full " + (color === 3 ? "bg-red-500":"bg-gray-400")}></div>
      </div>
      <div className="flex flex-1 w-[50%] bg-gray-300 flex-col justify-evenly items-center">
        <div className="flex flex-row gap-1 w-full h-[50%] bg-gray-300 p-2">
        {task.filter(progress => progress.status === 1).map(filteredTask => (
          <div className="flex-2 w-20 h-20 bg-white rounded p-2">
          <span className="font-black text-black ">{filteredTask.name}</span>
          <button className="bg-cyan-400 p-2 rounded">Selesai</button>
        </div>
        ))}
          
        </div>
        <div className="w-full h-[50%] bg-gray-400 rounded">
        {task.filter(progress => progress.status === 2).map(filteredTask => (
          <div className="flex-2 w-20 h-20 bg-white rounded p-2">
          <span className="font-black text-black ">{filteredTask.name}</span>
          <button className="bg-cyan-400 p-2 rounded">Undo</button>
        </div>
        ))}
        </div>
        
      </div>

      
    </main>
  );
}
