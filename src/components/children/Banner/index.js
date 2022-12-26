import axios from '~/axios';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import requests from '~/Request';
import styles from './Banner.module.scss';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }

        fetchData();
    }, []);

    const truncate = (string, n) => {
        if (string) {
            return string.length > n ? string.substr(0, n - 1) + '...' : string;
        }
    };

    return (
        <div
            className={clsx(styles.banner)}
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: 'center center',
            }}
        >
            <div className={clsx(styles.banner__contents)}>
                <h1 className={clsx(styles.banner__title)}>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className={clsx(styles.banner__buttons)}>
                    <button className={clsx(styles.banner__button)}>Xem</button>
                    <button className={clsx(styles.banner__button)}>Danh sách của tôi</button>
                </div>
                <h1 className={clsx(styles.banner__description)}>{truncate(movie?.overview, 150)}</h1>
            </div>

            <div className={clsx(styles.banner__fadeBottom)}></div>
        </div>
    );
}

export default Banner;
