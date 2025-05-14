
import { Video, Category } from '../types';

export const categories: Category[] = [
  { id: 'all', name: 'All' },
  { id: 'action', name: 'Action' },
  { id: 'comedy', name: 'Comedy' },
  { id: 'drama', name: 'Drama' },
  { id: 'documentary', name: 'Documentary' },
  { id: 'sci-fi', name: 'Sci-Fi' },
];

export const videos: Video[] = [
  {
    id: '1',
    title: 'The Amazing Adventure',
    description: 'Follow the journey of explorers as they traverse uncharted territories in search of ancient artifacts.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    videoUrl: 'https://www.youtube.com/embed/YE7VzlLtp-4',
    duration: '12:34',
    views: 1243000,
    uploadDate: '2023-06-15',
    category: 'action',
    tags: ['adventure', 'exploration', 'discovery'],
    featured: true,
  },
  {
    id: '2',
    title: 'Laugh Out Loud',
    description: 'A hilarious comedy special that will have you rolling on the floor laughing.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    videoUrl: 'https://www.youtube.com/embed/YE7VzlLtp-4',
    duration: '23:45',
    views: 987000,
    uploadDate: '2023-08-03',
    category: 'comedy',
    tags: ['comedy', 'stand-up', 'humor'],
  },
  {
    id: '3',
    title: 'Emotional Journey',
    description: 'A touching drama about family relationships and personal growth.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    videoUrl: 'https://www.youtube.com/embed/YE7VzlLtp-4',
    duration: '1:45:22',
    views: 567000,
    uploadDate: '2023-07-22',
    category: 'drama',
    tags: ['drama', 'family', 'relationships'],
  },
  {
    id: '4',
    title: 'The World Within',
    description: 'An eye-opening documentary about microscopic life forms that exist all around us.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    videoUrl: 'https://www.youtube.com/embed/YE7VzlLtp-4',
    duration: '52:18',
    views: 456000,
    uploadDate: '2023-05-30',
    category: 'documentary',
    tags: ['documentary', 'science', 'nature'],
  },
  {
    id: '5',
    title: 'Beyond the Stars',
    description: 'A sci-fi thriller about humanity\'s first contact with extraterrestrial intelligence.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    videoUrl: 'https://www.youtube.com/embed/YE7VzlLtp-4',
    duration: '2:15:07',
    views: 789000,
    uploadDate: '2023-09-10',
    category: 'sci-fi',
    tags: ['sci-fi', 'space', 'aliens'],
    featured: true,
  },
  {
    id: '6',
    title: 'Comedy Night Live',
    description: 'A collection of the best stand-up comedy performances from rising stars.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    videoUrl: 'https://www.youtube.com/embed/YE7VzlLtp-4',
    duration: '45:12',
    views: 325000,
    uploadDate: '2023-10-05',
    category: 'comedy',
    tags: ['comedy', 'stand-up', 'live'],
  },
  {
    id: '7',
    title: 'Action Heroes',
    description: 'Non-stop action and thrilling stunts in this blockbuster hit.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    videoUrl: 'https://www.youtube.com/embed/YE7VzlLtp-4',
    duration: '1:58:36',
    views: 892000,
    uploadDate: '2023-04-18',
    category: 'action',
    tags: ['action', 'adventure', 'thriller'],
  },
  {
    id: '8',
    title: 'The Secret Life of Plants',
    description: 'Discover the fascinating world of plant communication and intelligence.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    videoUrl: 'https://www.youtube.com/embed/YE7VzlLtp-4',
    duration: '58:24',
    views: 412000,
    uploadDate: '2023-08-12',
    category: 'documentary',
    tags: ['documentary', 'nature', 'plants'],
  },
];

// Helper function to get random videos for recommendations
export const getRandomVideos = (count: number, excludeId?: string): Video[] => {
  const filteredVideos = excludeId 
    ? videos.filter(video => video.id !== excludeId)
    : videos;
  
  return [...filteredVideos]
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
};

// Helper function to get featured videos
export const getFeaturedVideos = (): Video[] => {
  return videos.filter(video => video.featured);
};

// Helper function to get videos by category
export const getVideosByCategory = (categoryId: string): Video[] => {
  if (categoryId === 'all') return videos;
  return videos.filter(video => video.category === categoryId);
};

// Helper function to get a video by id
export const getVideoById = (id: string): Video | undefined => {
  return videos.find(video => video.id === id);
};
