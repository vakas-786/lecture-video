import React from 'react'
import Instructor from '../Components/Instructor'

function AnimeContainer(props) {
    console.log(props)
    
    // let instructors = props.instructors.map(instructorObj => < instructor={instructorObj} />)
    return (
        <>
        <h1>Anime Container</h1>
            <Instructor instructor={props.instructor} />
            
        </>
    )
}

export default AnimeContainer