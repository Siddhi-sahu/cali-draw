
interface toolbarProps {
    tool: "pencil" | "eraser";
    setTool: any
    // setTool: (x: string) => void;
    // onSelect: any
}
export const ToolBar = ({ setTool, tool }: toolbarProps) => {

    return (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-black/80  rounded-xl px-4 py-2 flex gap-2">
            <button className={` p-2 m-2`} onClick={() => {
                setTool("pencil");

            }}>✏️</button>
            <button className={`p-2 m-2`} onClick={() => {
                setTool("eraser");

                console.log("eraser clicked")
            }}>⬜</button>
            {/* <button></button>
            <button></button> */}

        </div>

    )

}