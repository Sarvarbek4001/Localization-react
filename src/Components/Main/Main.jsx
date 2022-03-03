import React from 'react'

export function Main(props) {
    
    return (
        <>
            <main>
            <h1>{props.content[props.lang].main}</h1>
            </main>
        </>
    )
}
