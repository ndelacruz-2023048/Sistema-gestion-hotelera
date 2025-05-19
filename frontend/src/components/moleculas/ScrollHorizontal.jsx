import { Icon } from '@iconify/react';
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

            <span>
                <Icon icon="material-symbols-light:meeting-room" className="infoIcon"/>
                <p>1 Dormitorio y una Sala</p>
            </span>
            <span>
                <Icon icon="famicons:bed" className="infoIcon"/>
                <p>Cama, sofa, mesa, etc.</p>
            </span>
            <span>
                <Icon icon="mdi:tv" className="infoIcon"/>
                <p>TV, Refrigerador, Cafetera, AC</p>
            </span>
            <span>
                <Icon icon="solar:bath-bold" className="infoIcon"/>
                <p>Retrete, Ducha</p>
            </span>
            <span>
                <Icon icon="material-symbols:wifi" className="infoIcon"/>
                <p>Gratis</p>
            </span>
            <span>
                <Icon icon="mdi:food" className="infoIcon"/>
                <p>Servicio al Dormitorio</p>
            </span>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    max-width: 95%;
    overflow-x: auto;
    gap: 10px;
    margin-left: 20px;
    margin-right: 20px;
    color: ${({ theme }) => theme.color};
    
    &::-webkit-scrollbar {
        display: none;
    }
    
    span {
        background: ${({ theme }) => theme.bgd};
        display: flex;
        align-items: center;
        padding: 2px 10px;
        border-radius: 15px;
        white-space: nowrap;
        flex-shrink: 0;
        user-select: none;
        cursor: pointer;
        
        &:hover {
            opacity: 0.8;
        }

        p{
            font-size: 12px;
        }

        .infoIcon{
            font-size: 20px;
        }
    }
    
`