import React from 'react'

const EverCommButton = (props) => {
    const { onClick,style,className, text, type } = props
    const defaultStyle = {
        width:'100%',height:'60px',background:'red', outline:'none',
        boxShadow:'none',color:'yellow',fontSize:'18px'
    }
    const userStyle=style===undefined?{}:style
    return (
        <button
        onClick={onClick}
        type={type===undefined?'button':type}
        style={{...defaultStyle,...userStyle}}
        className={`btn btn-block ${className} text-light`}
        >{text}</button>
    )
}
export default EverCommButton