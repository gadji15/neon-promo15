export interface Post {
  id: string;
  title: string;
  date: string;
  reading: string;
  category: 'EXCLUSIF' | 'GUIDE' | 'ALERTE';
  excerpt: string;
  img: string;
  slug: string;
}