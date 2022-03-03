import React from 'react'

export function Header(props) {
    
    return (
        <>
            <header>
             <h1>{props.content[props.lang].header.heading}</h1>
             <a href='#'>{props.content[props.lang].header.link}</a>
            </header>
        </>
    )
}
