"use client"
import { useEffect, useRef } from "react"

export const CanvasBoard = () => {
    const CanvasRef = useRef<null | HTMLCanvasElement>(null);
    const DrawingRef = useRef(false);
    //persist ctx in whole component
    //2d drawing context
    const ctxRef = useRef<null | CanvasRenderingContext2D>(null);

    //correctcoordiantes

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
                ctx.strokeStyle = "black";
                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctxRef.current = ctx;
            }

        }

    }, []);

    const handleMouseDown = (e: any) => {
        console.log('mousedownactivated')
        DrawingRef.current = true;
        ctxRef.current?.beginPath();

        //correct position of the canvas
        const rect = CanvasRef.current!.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        //move the pen/pointer
        ctxRef.current?.moveTo(x, y);
    }
    const handleMouseMove = (e: any) => {
        console.log('mousemoveactivated')

        console.log('Mouse position:', e.clientX, e.clientY);
        //correct position of the canvas
        const rect = CanvasRef.current!.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (DrawingRef.current === true) {

            //draw a line from current position to x anf y
            ctxRef.current?.lineTo(x, y);

            //actually render the linee
            ctxRef.current?.stroke();
        }
    }
    const handleMouseUp = () => {
        console.log('mouseupactivated');
        ctxRef.current?.closePath();

        DrawingRef.current = false;

    }

    return <canvas className="absolute touch-none z-10 top-0 left-0" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} ref={CanvasRef}></canvas>
}