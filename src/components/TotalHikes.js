import React from 'react'

const TotalHikes = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            
            <h1>{props.hikes.length}/52 Hikes</h1>
        </div>
    )
}

export default TotalHikes;