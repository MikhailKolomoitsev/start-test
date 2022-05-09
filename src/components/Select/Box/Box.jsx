import React, { useState } from 'react'
import './Box.scss'

const Box = () => {
    const [hovered, setHovered] = useState(true)

    return (
        <div
            onMouseOver={() => {
                setHovered(prev=>!prev)
            }}
            className={`box-wrapper ${hovered ? 'hovered' : ''}`}></div>
    )
}

export default Box