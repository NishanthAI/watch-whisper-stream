
import { Video } from "@/types";
import VideoCard from "./VideoCard";

interface RecommendationSectionProps {
  videos: Video[];
  title?: string;
}

const RecommendationSection = ({ videos, title = "Recommended for You" }: RecommendationSectionProps) => {
  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
};

export default RecommendationSection;
