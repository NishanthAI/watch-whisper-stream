
import { useEffect } from "react";
import { useVideos } from "@/hooks/useVideos";
import Navbar from "@/components/Navbar";
import VideoGrid from "@/components/VideoGrid";
import CategoryFilter from "@/components/CategoryFilter";

const Browse = () => {
  const { filteredVideos, selectedCategory, filterByCategory } = useVideos();
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Reset filter to 'all' when page loads
    filterByCategory('all');
  }, [filterByCategory]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-6">Browse Videos</h1>
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              onChange={filterByCategory} 
            />
          </div>
          
          {filteredVideos.length > 0 ? (
            <VideoGrid videos={filteredVideos} />
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-streaming-foreground/70">No videos found for this category.</p>
            </div>
          )}
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

export default Browse;
