import React from 'react'

export const EverCommButton = (props) => {
    const { onClick,style,className, text, type,height,fontSize } = props
    const defaultStyle = {
        width:'100%',height:`${height===undefined?'60px':`${height}`}`,background: 'linear-gradient(90deg,#144e9e,#1fa9ff)', outline:'none',
        boxShadow:'none',color:'white',fontSize:`${fontSize===undefined?'18px':`${fontSize}`}`,type:`${type}`
    }
    const userStyle=style===undefined?{}:style
    return (
        <button
        onClick={onClick}
        type={'button'}
        style={{...defaultStyle,...userStyle}}
        className={`btn ${className} text-light`}
        >{text}</button>
    )
}

    