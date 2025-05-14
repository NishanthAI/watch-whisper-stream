
import { useEffect } from "react";
import { useVideos } from "@/hooks/useVideos";
import Navbar from "@/components/Navbar";
import FeaturedVideo from "@/components/FeaturedVideo";
import VideoGrid from "@/components/VideoGrid";

const Index = () => {
  const { featuredVideos, recommendedVideos, getRecommendations } = useVideos();
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  if (!featuredVideos.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Featured Video Hero */}
        <FeaturedVideo video={featuredVideos[0]} />
        
        {/* Recommended Videos */}
        <div className="container mx-auto px-4 py-8">
          <VideoGrid 
            videos={recommendedVideos} 
            title="Recommended For You" 
            description="Based on your watching history and preferences"
          />
          
          {/* More sections can be added here */}
          <VideoGrid 
            videos={getRecommendations("", 4)} 
            title="Popular This Week" 
          />
          
          <VideoGrid 
            videos={getRecommendations("", 4)} 
            title="New Releases" 
          />
        </div>
      </main>
      
      <footer className="bg-streaming-background border-t border-streaming-border py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-streaming-foreground/60 text-sm">
            <p>© 2025 WatchWhisper. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
