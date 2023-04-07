import { Container, Movie, MovieList } from "./components";
import { useState, useEffect } from "react";
import { API_KEY } from "../../config/api_key";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/api_url";
import { SearchBar } from "./style";






export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState<any[]>([])
    const image_path = "https://image.tmdb.org/t/p/w500"



    useEffect(() => {
        //Consumir a api
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [])
    const handleSearchTermChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        if (event.target.value.length >= 3) {
            const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${event.target.value}`;
                                                                    //?//                     
            const response = await axios.get(url);
            setMovies(response.data.results);
        } else {
            setMovies([]);
        }
    };


    return (
        <Container>
            <h1>Movies</h1>
            <SearchBar>
                <input type="text" placeholder="Search movies..." value={searchTerm} onChange={handleSearchTermChange} />
            </SearchBar>
            <MovieList>
                {
                    movies.map(movie => {
                        return (
                            <Movie>
                                <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></Link>
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })
                }
            </MovieList>
        </Container>
    );
}