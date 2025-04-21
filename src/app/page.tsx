"use client"
import { CanvasBoard } from "@/components/CanvasBoard";
import { ToolBar } from "@/components/ToolBar";
import { useState } from "react";

export default function Home() {
  const [tool, setTool] = useState<"pencil" | "eraser">("pencil");

  return (
    <div className="relative  w-screen h-screen">
      <ToolBar setTool={setTool} tool={tool} />
      <CanvasBoard tool={tool} />
    </div>
  )
}
