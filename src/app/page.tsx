"use client"
import { CanvasBoard } from "@/components/CanvasBoard";
import { ToolBar } from "@/components/ToolBar";
import { useState } from "react";

export default function Home() {
  const [tool, setTool] = useState<"pencil" | "eraser" | "circle" | "rectangle">("pencil");
  const handlePencilClick = () => setTool("pencil");
  const handleEraserClick = () => setTool("eraser");
  const handleCircleClick = () => setTool("circle");
  const handleRectangleClick = () => setTool("rectangle");


  return (
    <div className="relative  w-screen h-screen">
      <ToolBar tool={tool} onPencilClick={handlePencilClick} onEraserClick={handleEraserClick} onCircleClick={handleCircleClick} onRectangleClick={handleRectangleClick} />
      <CanvasBoard tool={tool} />
    </div>
  )
}
