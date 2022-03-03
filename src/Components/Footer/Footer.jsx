import React from 'react'

export function Footer(props) {
    

    return (
        <>
            <footer>
            <h1>{props.content[props.lang].footer}</h1>
            </footer>
        </>
    )
}
