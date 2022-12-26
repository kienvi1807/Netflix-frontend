import axios from "~/axios";
import clsx from "clsx";
import { useEffect, useState } from "react";
import styles from './Row.module.scss'

function Row({title, fetchUrl, isLargeRow}) {

    const [movies, setMovies] = useState([])

    const baseUrl = 'https://image.tmdb.org/t/p/original/'

    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(fetchUrl)

            setMovies(request.data.results)

            return request
        }

        fetchData()
    }, [])

    return ( 
        <div className={clsx(styles.row)}>
            <h2>{title}</h2>

            <div className={clsx(styles.row__posters)}>
                {movies.map(movie => {
                    return (
                        <img
                            key = {movie.id}
                            src = {`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt = {movie.name}
                            className = {clsx(styles.row__poster, isLargeRow && styles.row__posterLarge)}
                        />
                    )
                })}
            </div>
        </div>
     );
}

export default Row;