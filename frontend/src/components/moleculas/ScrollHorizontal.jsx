import * as HoverCard from '@radix-ui/react-hover-card';
import { Icon } from '@iconify/react';
import React from 'react'
import { useRef, useState } from 'react'
import styled from 'styled-components';
export const ScrollHorizontal = ({data}) => {
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
            {
                data?.map((e) => (
                    <HoverCard.Root key={e._id}>
                    <HoverCard.Trigger asChild>
                        <span className="hoverCardTrigger">
                        <Icon icon="material-symbols-light:meeting-room" className="infoIcon" />
                        <p>{e?.name}</p>
                        </span>
                    </HoverCard.Trigger>
                    <HoverCard.Portal>
                        <HoverCard.Content
                        sideOffset={5}
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            padding: '1rem',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            maxWidth: 240,
                        }}
                        >
                        <p style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                            <strong>Descripción:</strong> {e?.description || 'Sin descripción'}
                        </p>
                        </HoverCard.Content>
                    </HoverCard.Portal>
                    </HoverCard.Root>
                ))
            }
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