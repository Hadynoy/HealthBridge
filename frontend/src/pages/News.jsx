import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [video, setVideo] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [videoThumbnail, setVideoThumbnail] = useState("https://via.placeholder.com/600x400");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = 'eec7269d3d144f1e8adc880c8c17fdd4';
  const API_URL = `https://newsapi.org/v2/everything?q=health&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch articles');
        const data = await response.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

    setVideo({
      title: "How to Maintain a Healthy Lifestyle",
      embedUrl: "https://www.youtube.com/embed/Cg_GW7yhq20",
      description: "Watch this video to learn more about how to live a healthy and active lifestyle.",
      thumbnail: "https://via.placeholder.com/600x400",
    });
  }, []);

  const handleWatchNow = () => {
    setShowVideo(true);
    setVideoThumbnail("");
  };

  return (
    <div className="pt-6 pb-12 px-4  -mt-4">


      <motion.div
        className="text-center text-2xl text-gray-700 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-semibold tracking-wide">HEALTH <span className="text-purple-600">NEWS</span></p>
      </motion.div>


      <motion.div
        className="my-8 flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
          <div className="h-[250px] bg-gray-300 relative">
            {!showVideo ? (
              <img
                src={videoThumbnail}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
            ) : (
              <iframe
                className="w-full h-full"
                src={video.embedUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            {!showVideo && (
              <motion.button
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold"
                onClick={handleWatchNow}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                aria-label="Watch health lifestyle video"
              >
                Watch Now
              </motion.button>
            )}
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-xl text-gray-800 leading-snug">{video?.title || "Loading..."}</h3>
            <p className="text-sm text-gray-700 mt-2 leading-relaxed">{video?.description || "Loading video description..."}</p>
          </div>
        </div>
      </motion.div>


      <motion.div
        className="my-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold text-center mb-6 tracking-wide">Recent Articles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-center col-span-full">Loading articles...</p>
          ) : error ? (
            <p className="text-red-500 text-center col-span-full">{error}</p>
          ) : (
            articles.map((article, index) => (
              <motion.article
                key={index}
                className="border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <img
                  src={article.urlToImage || 'https://via.placeholder.com/400x250'}
                  alt={article.title}
                  className="w-full h-[150px] object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg text-gray-800 leading-snug">{article.title}</h4>
                  <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                    {article.description || "No description available"}
                  </p>
                  <a
                    className="mt-4 inline-block text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Read full article"
                  >
                    Read Full Article →
                  </a>
                </div>
              </motion.article>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default News;