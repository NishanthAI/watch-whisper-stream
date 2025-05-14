
export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  views: number;
  uploadDate: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
}
