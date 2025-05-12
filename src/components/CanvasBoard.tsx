"use client"
import React, { useEffect, useRef } from "react";

interface toolProps {
    tool: "pencil" | "eraser" | "circle" | "rectangle"
}
//startung point of circle when the user mouse odwn
//randius is the ending point (calculate using distance formula)
//
export const CanvasBoard = ({ tool }: toolProps) => {
    const CanvasRef = useRef<null | HTMLCanvasElement>(null);
    const DrawingRef = useRef(false);
    //persist ctx in whole component
    //2d drawing context
    const ctxRef = useRef<null | CanvasRenderingContext2D>(null);


    useEffect(() => {
        const canvas = CanvasRef.current;
        if (canvas) {
            const width = window.innerWidth;
            const height = window.innerHeight;

            canvas.width = width;
            canvas.height = height;


            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.lineWidth = 4;
                ctx.strokeStyle = tool === "eraser" ? "white" : "black";
                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctxRef.current = ctx;
            }

        }

    }, [tool]);

    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        DrawingRef.current = true;
        //correct position of the canvas
        const rect = CanvasRef.current!.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (!ctxRef.current || !CanvasRef.current) {
            console.log("no 2d drawing context");
            return;
        }

        if (tool === "pencil") {
            ctxRef.current?.beginPath();
            //move the pen/pointer
            ctxRef.current?.moveTo(x, y);

        }
        else if (tool === "circle") {
            ctxRef.current.beginPath()

        }

    }
    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        //correct position of the canvas
        const rect = CanvasRef.current!.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (DrawingRef.current === true) {
            if (tool === "pencil") {
                //draw a line from current position to x anf y
                ctxRef.current?.lineTo(x, y);

                //actually render the linee
                ctxRef.current?.stroke();

            } else if (tool === "circle") {
                ctxRef.current?.arc(x, y, 50, 0, 2 * Math.PI);
                ctxRef.current?.stroke();

            }


        }
    }
    const handleMouseUp = () => {
        ctxRef.current?.closePath();

        DrawingRef.current = false;

    }

    return <canvas className="absolute touch-none z-10 top-0 left-0" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} ref={CanvasRef}></canvas>
}