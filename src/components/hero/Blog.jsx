import React, { useRef, useState, useEffect } from 'react';

const videos = {
  video: 'src/assets/video/video.mp4',
  play: 'src/assets/video/play.png',
  pause: 'src/assets/video/pause.png'
}

const Blog = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); 

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const statsData = [
    {
      icon: 'src/assets/video/img1.png', 
      number: 385,
      label: 'Happy Customers'
    },
    {
      icon: 'src/assets/video/img2.png', 
      number: 842,
      label: 'Houses Cleaned'
    },
    {
      icon: 'src/assets/video/img3.png', 
      number: 489,
      label: 'Awards Received'
    },
    {
      icon: 'src/assets/video/img4.png', 
      number: 1344,
      label: 'Glass Cleaned'
    }
  ];

  return (
    <div className='w-full'>
      <div className="relative">
        <video
          className="w-full h-full object-cover"
          ref={videoRef}
          muted
          src={videos.video}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <button className="bg-transparent hover:bg-gray-200 text-gray-900 font-bold py-2 px-4 rounded" onClick={handlePlayPause}>
            <img src={isPlaying ? videos.pause : videos.play} alt="Play/Pause" className="w-10 h-10" />
          </button>
          <p className="text-xs text-white">Cleaning Your Worries Away</p>
          <p className="text-base md:text-2xl mt-1 font-bold">Need Help With Cleaning?</p>
          <button className="text-xs bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded mt-4">
            Request Call Back
          </button>
        </div>
      </div>
      {/* shadow */}
      <div className="shadow container bg-white w-auto py-6 md:mx-10 lg:mx-20 mb-8">
        <div className="flex flex-col w-auto md:flex-row">
          {statsData.map((stat, index) => (
            <div key={index} className="w-auto flex items-center gap-4 p-4">
              <img src={stat.icon} alt={stat.label} className="w-12 h-12" />
              <div className='flex flex-col'>
                <h2 className="text-xl lg:text-2xl font-bold">{stat.number}</h2>
                <p className="text-xs lg:text-base font-medium text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;