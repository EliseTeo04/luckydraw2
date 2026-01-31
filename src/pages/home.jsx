import React, { useRef, useState } from 'react';
import { Page, f7 } from 'framework7-react';

const ZOOM_DURATION_MS = 600; // 600ms zoom animation duration
const ZOOM_START_BEFORE_END_S = 2; // start zoom when this many seconds left

const HomePage = () => {
  const videoRef = useRef(null);
  const [isZooming, setIsZooming] = useState(false);
  const zoomTriggeredRef = useRef(false);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    }
  };

  const startZoomAndNavigate = () => {
    if (zoomTriggeredRef.current) return;
    zoomTriggeredRef.current = true;
    setIsZooming(true);
    setTimeout(() => {
      f7.views.main.router.navigate('/luckydraw');
    }, ZOOM_DURATION_MS);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    if (video.currentTime >= video.duration - ZOOM_START_BEFORE_END_S) {
      startZoomAndNavigate();
    }
  };

  return (
    <Page name="home-page" pageContent={false}>
      <div className={`home-fullscreen ${isZooming ? 'home-fullscreen--zoom' : ''}`}>
        <video
          ref={videoRef}
          src="/images/test.mp4"
          muted
          playsInline
          className="home-fullscreen__video"
          onClick={() => {handleVideoClick()}}
          onTimeUpdate={handleTimeUpdate}
          onEnded={startZoomAndNavigate}
        />
      </div>
    </Page>
  );
};

export default HomePage;