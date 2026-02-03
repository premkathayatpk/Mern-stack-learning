import { useRef, useState } from "react";
import banner_video from "../../assets/banner_video.mp4";
import { MdOutlineSlowMotionVideo, MdPauseCircleOutline } from "react-icons/md";

const ServiceBanner = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // ⬅ paused by default

  const handleVideoToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative w-full h-152 overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={banner_video} type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 mt-70 ml-30 flex flex-col gap-4 text-white p-10 w-209.25">
        <h1 className="text-[49px] font-bold">Dine With Us</h1>
        <p className="text-[20px]">
          Enjoy our momos in the comfort of your own home with our delivery
          services
        </p>

        <button
          onClick={handleVideoToggle}
          className="bg-[#0C6967] w-55 text-[16px] text-white px-8 py-4 rounded-3xl flex items-center gap-x-2"
        >
          {isPlaying ? (
            <MdPauseCircleOutline size={26} />
          ) : (
            <MdOutlineSlowMotionVideo size={26} />
          )}
          {isPlaying ? "Pause Video" : "Watch the Video"}
        </button>
      </div>
    </section>
  );
};

export default ServiceBanner;
