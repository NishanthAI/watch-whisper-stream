
import { Link } from "react-router-dom";
import { Video } from "@/types";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface FeaturedVideoProps {
  video: Video;
}

const FeaturedVideo = ({ video }: FeaturedVideoProps) => {
  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden group">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-t from-streaming-background to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-streaming-background to-transparent z-10"></div>
      <img
        src={video.thumbnailUrl}
        alt={video.title}
        className="object-cover w-full h-full filter brightness-75 transition-transform duration-10000 group-hover:scale-105"
      />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-lg space-y-5">
            <div className="inline-block px-3 py-1 bg-streaming-primary/20 backdrop-blur-md border border-streaming-primary/30 rounded-full text-xs font-medium text-streaming-primary">
              Featured
            </div>
            <h1 className="text-3xl md:text-5xl font-bold video-title-gradient">
              {video.title}
            </h1>
            <p className="text-streaming-foreground/80 text-sm md:text-base line-clamp-3">
              {video.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild className="bg-streaming-primary hover:bg-streaming-primary/90">
                <Link to={`/watch/${video.id}`}>
                  <Play size={16} className="mr-2" /> Watch Now
                </Link>
              </Button>
              <Button variant="outline" className="border-streaming-border bg-streaming-background/50 backdrop-blur-sm text-streaming-foreground hover:bg-streaming-muted">
                <Link to={`/watch/${video.id}`}>
                  More Info
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideo;
