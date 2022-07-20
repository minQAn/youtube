import React from 'react';
import styles from './render_videos.module.css';
import VideoDetail from '../video_detail/video_detail';
import VideoList from '../video_list/video_list';

const RenderVideos = ({ videos, selectedVideo, selectVideo }) => (
  <section className={styles.content}>
    {selectedVideo && (
      <div className={styles.detail}>
        {<VideoDetail video={selectedVideo} />}
      </div>
    )}
    <div className={`${styles.list} ${selectedVideo ? styles.withDetail : ''}`}>
      <VideoList
        videos={videos}
        onVideoClick={selectVideo}
        display={selectedVideo ? 'list' : 'grid'}
      />
    </div>
  </section>
);

export default RenderVideos;
