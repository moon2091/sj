import { useState, useEffect } from 'react';

// Mock Data for Facebook Reels
const MOCK_REELS = [
  {
    id: 'fb_reel_1',
    type: 'facebook',
    title: 'Studio Life: Editing Marathon',
    description: 'When the deadline is tomorrow and the render bar is at 99%. #StudioLife #Editing #Filmmaking',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?q=80&w=1000&auto=format&fit=crop',
    url: 'https://www.facebook.com/studiojunctionbd/videos/123456789' // Placeholder URL
  },
  {
    id: 'fb_reel_2',
    type: 'facebook',
    title: 'Lighting Setup Speedrun',
    description: 'Setting up a 3-point lighting system in under 60 seconds. Can we do it? Watch to find out!',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
    url: 'https://www.facebook.com/studiojunctionbd/videos/987654321' // Placeholder URL
  },
  {
    id: 'fb_reel_3',
    type: 'facebook',
    title: 'Color Grading Magic',
    description: 'Transforming flat log footage into a cinematic masterpiece. The power of color grading explained simply.',
    thumbnail: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1000&auto=format&fit=crop',
    url: 'https://www.facebook.com/studiojunctionbd/videos/456789123' // Placeholder URL
  },
  {
    id: 'fb_reel_4',
    type: 'facebook',
    title: 'Gear Haul: New Cameras!',
    description: 'Unboxing our latest cinema cameras. Ready to shoot some 8K goodness for our next project.',
    thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop',
    url: 'https://www.facebook.com/studiojunctionbd/videos/789123456' // Placeholder URL
  }
];

const useFacebookReels = () => {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // In a real implementation, this would fetch from Graph API
    // Since we don't have a backend or valid access token, we simulate a fetch
    const fetchReels = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1200));
        setReels(MOCK_REELS);
      } catch (err) {
        console.error("Error fetching Facebook Reels:", err);
        setError("Failed to load Facebook Reels");
      } finally {
        setLoading(false);
      }
    };

    fetchReels();
  }, []);

  return { reels, loading, error };
};

export default useFacebookReels;