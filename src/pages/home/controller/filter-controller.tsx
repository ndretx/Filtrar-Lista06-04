

const MovieTable = ({movies}) =>{
    return(
        <div className=" movieTable">
            {movies.map((movie) =>(
                <div className=" movie" key={movie}
            ))}
        </div>
    )
}

export default MovieTable;