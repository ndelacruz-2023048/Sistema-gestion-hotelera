import React from 'react'
import { useRef, useState } from 'react'
import styled from 'styled-components';
export const ScrollHorizontal = () => {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };
    return (
        <Container ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove} className="containerspan">

            <span>hola</span>
            <span>hola</span>
            <span>hola</span>
            <span>hola</span>
            <span>hola</span>
            <span>hola</span>
            <span>hola</span>
            <span>hola</span>
            <span>hola</span>
            <span>hola</span>
            <span>hola</span>
            <span>hola</span>
            <span>hola</span>
            <span>hola</span>
            <span>hola</span>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    overflow-x: scroll;
    gap: 10px;
    
    &::-webkit-scrollbar {
        display: none;
    }
    
    span {
        background: ${({ theme }) => theme.bgd};
        padding: 10px 20px;
        border-radius: 10px;
        white-space: nowrap;
        flex-shrink: 0;
        user-select: none;
        cursor: pointer;
        
        &:hover {
            opacity: 0.8;
        }
    }
    
`