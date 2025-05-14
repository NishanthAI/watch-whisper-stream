
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVideos } from "@/hooks/useVideos";
import { Video } from "@/types";
import Navbar from "@/components/Navbar";
import VideoPlayer from "@/components/VideoPlayer";
import RecommendationSection from "@/components/RecommendationSection";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

const Watch = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { getVideo, getRecommendations } = useVideos();
  const [video, setVideo] = useState<Video | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<Video[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!id) {
      navigate("/");
      return;
    }

    const videoData = getVideo(id);
    if (videoData) {
      setVideo(videoData);
      setRelatedVideos(getRecommendations(id, 4));
    } else {
      toast({
        title: "Video not found",
        description: "The requested video could not be found.",
        variant: "destructive",
      });
      navigate("/");
    }
  }, [id, getVideo, getRecommendations, navigate, toast]);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Video Player */}
              <VideoPlayer video={video} />
              
              {/* Video Info */}
              <div className="mt-4 space-y-4">
                <h1 className="text-2xl font-bold">{video.title}</h1>
                
                <div className="flex flex-wrap items-center gap-2 text-streaming-foreground/70 text-sm">
                  <span>{video.views.toLocaleString()} views</span>
                  <span>•</span>
                  <span>{video.uploadDate}</span>
                  <span>•</span>
                  <span>{video.duration}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {video.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-streaming-muted/50 hover:bg-streaming-muted border-streaming-border">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-streaming-foreground/80 mt-4 pb-4 border-b border-streaming-border">
                  {video.description}
                </p>
              </div>
            </div>
            
            {/* Recommendations */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold mb-4">Up Next</h2>
              <div className="space-y-4">
                {relatedVideos.map((relatedVideo) => (
                  <VideoCard key={relatedVideo.id} video={relatedVideo} />
                ))}
              </div>
            </div>
          </div>
          
          {/* More Recommendations */}
          <RecommendationSection 
            videos={getRecommendations(id, 8)} 
            title="You May Also Like" 
          />
        </div>
      </main>
      
      <footer className="bg-streaming-background border-t border-streaming-border py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-streaming-foreground/60 text-sm">
            <p>© 2025 WatchWhisper. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Watch;
