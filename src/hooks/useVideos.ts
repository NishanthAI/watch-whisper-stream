
import { useState, useEffect } from 'react';
import { 
  videos, 
  getRandomVideos, 
  getFeaturedVideos, 
  getVideosByCategory, 
  getVideoById 
} from '../data/videos';
import { Video } from '../types';

export function useVideos() {
  const [allVideos] = useState<Video[]>(videos);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>(videos);
  const [featuredVideos, setFeaturedVideos] = useState<Video[]>([]);
  const [recommendedVideos, setRecommendedVideos] = useState<Video[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Set featured videos
    setFeaturedVideos(getFeaturedVideos());
    
    // Set initial recommended videos
    setRecommendedVideos(getRandomVideos(4));
  }, []);

  useEffect(() => {
    // Update filtered videos when category changes
    setFilteredVideos(getVideosByCategory(selectedCategory));
  }, [selectedCategory]);

  const getVideo = (id: string): Video | undefined => {
    return getVideoById(id);
  };

  const getRecommendations = (videoId: string, count: number = 4): Video[] => {
    // In a real app, this would use AI/ML to suggest similar content
    // For now, we'll just get random videos excluding the current one
    return getRandomVideos(count, videoId);
  };

  const filterByCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return {
    allVideos,
    filteredVideos,
    featuredVideos,
    recommendedVideos,
    selectedCategory,
    getVideo,
    getRecommendations,
    filterByCategory
  };
}
