

interface toolbarProps {
    tool: "pencil" | "eraser" | "circle" | "rectangle";
    onPencilClick: () => void;
    onEraserClick: () => void;
    onCircleClick: () => void;
    onRectangleClick: () => void;
}
export const ToolBar = ({ tool, onPencilClick, onEraserClick, onCircleClick, onRectangleClick }: toolbarProps) => {
    const buttonBase =
        "p-3 m-2 rounded-lg transition-all duration-200 shadow-md text-xl";
    // const EraserImage = <img src={Eraser}></img>

    return (
        <div className={`absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-black/80 rounded-xl px-4 py-2 flex gap-4`}>
            <button className={`${buttonBase} ${tool === "pencil"
                ? "bg-amber-500 text-black"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`} onClick={onPencilClick}>✏️</button>
            <button className={` ${buttonBase} ${tool === "eraser"
                ? "bg-amber-500 text-black"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`} onClick={onEraserClick}>🧹</button>
            <button className={`${buttonBase} ${tool === "circle"
                ? "bg-amber-500 text-black"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`} onClick={onCircleClick}>⭕</button>
            <button className={`${buttonBase} ${tool === "rectangle"
                ? "bg-amber-500 text-black"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`} onClick={onRectangleClick}>⬜</button>

        </div>

    )

}