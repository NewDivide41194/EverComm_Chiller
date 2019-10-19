import React from 'react'
import * as Colors from '../assets/everCommColors'
import { Link } from 'react-router-dom'

export const EvercommLabel = (props) => {
    const { style, className, text, bold, color,noFullWidth,fontSize } = props
    const defaultStyle = {
        width: `${noFullWidth===undefined? '100%':''}`, fontWeight: `${bold === undefined ? 'normal' : 'bold'}`,
        color: `${color === undefined ? Colors.text2 : color}`, fontSize: `${fontSize === undefined ? '14px' : `${fontSize}`}`,
    }
    const userStyle = style === undefined ? {} : style
    return (
        <label
            style={{ ...defaultStyle, ...userStyle }}
            className={className}
        >{text}</label>
    )
}

export const EverCommValueText = (props) => {
    const { style, className, text, light, fontSize, gray,noFullWidth } = props
    const defaultStyle = {
        width: `${noFullWidth===undefined? '100%':''}`, fontWeight: `${light === undefined ? 'bold' : 'normal'}`,
        color: `${gray === undefined ? Colors.text1 : Colors.text2}`, fontSize: `${fontSize === undefined ? '13px' : `${fontSize}`}`,        
    }
    const userStyle = style === undefined ? {} : style
    return (
        <label
            style={{ ...defaultStyle, ...userStyle }}
            className={className}
        >{text}</label>
    )
}

export const EverCommLink = (props) => {
    const { style,className, text, fontSize, color, to } = props
    const defaultStyle = {
        color: `${color === undefined ? Colors.text1 : color}`, fontSize: `${fontSize === undefined ? '14px' : `${fontSize}`}`,
        textDecoration: 'none'
    }
    const userStyle = style === undefined ? {} : style
    return (
        <Link
            to={to}
            style={{ ...defaultStyle, ...userStyle }}
            className={className}
        >{text === undefined ? null : text}</Link>
    )
}
