import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Icon } from "@iconify/react/dist/iconify.js";

export const CommentIcon = ({ hasComment }) => {
    const [currentIcon, setCurrentIcon] = useState(hasComment ? 'solar:chat-round-line-duotone' : 'fluent:chat-20-regular');

    useEffect(() => {
        setCurrentIcon(hasComment ? 'fluent:chat-20-regular' : 'solar:chat-round-line-duotone');
    }, [hasComment]);

    return (
        <Wrapper>
            <Icon icon={currentIcon} className='Icon'/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: inline-block;
    .Icon {
        font-size: 30px;
    }
`