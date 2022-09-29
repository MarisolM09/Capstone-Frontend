import React from 'react'

const TotalHikes = (props) => {
    return (
        <div className="total-hikes" style={{ textAlign: 'center' }}>
            
            <h1>{props.hikes.length} / 52 Hikes</h1>
        </div>
    )
}

export default TotalHikes;