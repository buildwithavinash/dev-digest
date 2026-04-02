import { useEffect, useState } from "react"
import { fetchNews } from "../services/newApi"


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
    <div>
      <h1>Tech News</h1>

      {loading && (
        <p>Loading...</p>
      )}

      {error && (
        <p>{error}</p>
      )}

      <div>
        {articles.slice(0, 10).map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.source.name}</p>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default News