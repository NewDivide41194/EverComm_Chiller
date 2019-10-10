import React from 'react'
import * as Colors from '../assets/everCommColors'
import {Link} from 'react-router-dom'

export const EvercommLabel = (props) => {
    const { style, className, text, bold, color } = props
    const defaultStyle = {
        width: '100%', fontWeight: `${bold === undefined ? 'normal' : 'bold'}`,
        color: `${color === undefined ? Colors.text2 : color}`, fontSize: '14px'
    }
    const userStyle = style === undefined ? {} : style
    return (
        <label
            style={{ ...defaultStyle, ...userStyle }}
            className={className}
        >{text}</label>
    )
}

export const ValueText = (props) => {
    const { style, className, text, bold, fontSize, color } = props
    const defaultStyle = {
        width: '100%', fontWeight: `${bold === undefined ? 'bold' : 'normal'}`,
        color: `${color === undefined ? Colors.text1 : color}`, fontSize: `${fontSize === undefined ? '12px' : `${fontSize}`}`
    }
    const userStyle = style === undefined ? {} : style
    return (
        <label
            style={{ ...defaultStyle, ...userStyle }}
            className={className}
        >{text}</label>
    )
}

export const EverCommLink =(props)=>{
    const { style,  text,  fontSize, color,to } = props
    const defaultStyle = {        
        color: `${color === undefined ? Colors.text1 : color}`, fontSize: `${fontSize === undefined ? '14px' : `${fontSize}`}`, 
        textDecoration:'none'
    }
    const userStyle = style === undefined ? {} : style
    return (
        <Link
            to={to}
            style={{ ...defaultStyle, ...userStyle }}
        >{text===undefined?null:text}</Link>
    )
}
