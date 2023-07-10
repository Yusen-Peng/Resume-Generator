import React from 'react'

const headers = (props) =>{
    return (
        <div className='App-section'>
            <h1>{props.sectionNum}: {props.sectionName}</h1>
        </div>
    )
}

export default headers