import Row from '~/components/children/Row';
import styles from './Home.module.scss';
import clsx from 'clsx';
import requests from '~/Request';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/users').then(movie => {
            return movie.data
        }).then(movie => {
            setUsers(movie)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    console.log(users)

    return (
        <div>
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />

            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}

export default Home;
