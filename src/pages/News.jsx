import { useEffect, useState } from "react"
import { fetchNews } from "../services/newApi"
import NewsCard from "../components/NewsCard";


const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=> {
    const getNews = async () => {
      try {
        setLoading(true);
        const data = await fetchNews();
        setArticles(data)
      }catch(err) {
        setError(err.message);
      }finally {
        setLoading(false);
      }
    }

    
    getNews();
  }, [])

  console.log(articles);
  return (
    <div className="pb-20">
      <h1 className="text-center text-3xl font-medium text-slate-900">Tech News</h1>

      {loading && (
        <p>Loading...</p>
      )}

      {error && (
        <p>{error}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {articles.slice(0, 10).map((article, index) => (
          <NewsCard key={index} article={article}/>
        ))}
      </div>
    </div>
    
  )
}

export default News