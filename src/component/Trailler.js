import React from 'react'

const Trailler = ({movies, match}) => {

    const movie=movies.find(el=>el.name===match.params.name)

    return (
        <div>
            <h1>{movie.name}</h1>
            <iframe src ={movie.Trailler}></iframe>
            <h2>{movie.description}</h2>
        </div>
    )
}

export default Trailler
