import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import LoadingSpinner from './components/loading_spinner/loading_spinner';
import RenderVideos from './components/render_videos/render_videos';
import SearchHeader from './components/search_header/search_header';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const selectVideo = useCallback((video) => {
    setSelectedVideo(video);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  const search = useCallback(
    (query) => {
      setSelectedVideo(null); // to go back to the list grid
      setIsLoading(true); // to show loading spinner
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
          setIsLoading(false);
        })
        .catch((e) => {
          setErrorMessage('Failed to fetch video list');
          setIsLoading(false);
        });
    },
    [youtube]
  );

  useEffect(() => {
    setIsLoading(true);
    youtube
      .mostPopular() //
      .then((videos) => {
        setVideos(videos);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage('Failed to fetch video list');
        setIsLoading(false);
      });
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <RenderVideos
          videos={videos}
          selectedVideo={selectedVideo}
          selectVideo={selectVideo}
        />
      )}

      {errorMessage && <h1>{errorMessage}</h1>}
    </div>
  );
}

export default App;
