import { CanvasBoard } from "@/components/CanvasBoard";
import { ToolBar } from "@/components/ToolBar";

export default function Home() {

  return (
    <div className="relative  w-screen h-screen">
      <ToolBar />
      <CanvasBoard />
    </div>
  )
}
