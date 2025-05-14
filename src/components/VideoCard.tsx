
import { Link } from "react-router-dom";
import { Video } from "@/types";
import { Card, CardContent } from "@/components/ui/card";

interface VideoCardProps {
  video: Video;
  featured?: boolean;
}

const formatViews = (views: number): string => {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M views`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K views`;
  }
  return `${views} views`;
};

const VideoCard = ({ video, featured = false }: VideoCardProps) => {
  return (
    <Link to={`/watch/${video.id}`}>
      <Card className="overflow-hidden border-streaming-border bg-streaming-muted/50 backdrop-blur-sm video-card-hover">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-2 right-2 bg-streaming-background/80 text-xs font-medium px-1.5 py-0.5 rounded">
            {video.duration}
          </div>
        </div>
        <CardContent className="p-3">
          <h3 className={`font-semibold mb-1 line-clamp-2 ${featured ? 'text-lg' : 'text-base'}`}>
            {video.title}
          </h3>
          <div className="flex items-center justify-between text-xs text-streaming-foreground/70">
            <span>{formatViews(video.views)}</span>
            <span>{video.uploadDate}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VideoCard;
