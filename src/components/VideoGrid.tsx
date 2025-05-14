
import { Video } from "@/types";
import VideoCard from "./VideoCard";

interface VideoGridProps {
  videos: Video[];
  title?: string;
  description?: string;
}

const VideoGrid = ({ videos, title, description }: VideoGridProps) => {
  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <section className="py-8">
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          {description && <p className="text-streaming-foreground/70 text-sm">{description}</p>}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
