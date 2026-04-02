import { useEffect, useState } from "react"
import { fetchNews } from "../services/newApi"
import NewsCard from "../components/NewsCard";
import NewsSkeleton from "../components/NewsSkeleton";


const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("All")
  const [visible, setVisible] = useState(6);

  const categories = ["All", "AI", "Web Dev", "Startups"]

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

  const filterArticles = category === "All" ? articles : articles.filter((article)=> article.title.toLowerCase().includes(category.toLowerCase()));

  console.log(articles);
  return (
    <div className="pb-20">
      <h1 className="text-center text-3xl font-medium text-slate-900">Tech News</h1>


{/* tabs */}

<div className="flex gap-2 justify-center my-8">
    {categories.map((cat)=>(
      <button className="border border-slate-400 bg-slate-200 px-2 py-0.5 rounded-md cursor-pointer hover:bg-slate-300 transition-all" onClick={()=> setCategory(cat)}>
        {cat}
      </button>
    ))}
</div>



      {loading && (
        <div className="mt-4">
          {Array.from({length:6}).map((_, i) => (
            <NewsSkeleton key={i} />
          ))}
        </div>
      )}

      {error && (
        <p>{error}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {filterArticles.length === 0 && (
          <div className="text-center">
            <p className="text-slate-500">No articles found.</p>
          </div>
        )}
        {filterArticles.slice(0, visible).map((article, index) => (
          <NewsCard key={index} article={article}/>
        ))}
      </div>


      {/* load more button */}
      {visible < filterArticles.length && (
        <div className="flex justify-center mt-4">
          <button onClick={()=>setVisible((prev) => prev + 6)} className="bg-slate-200 px-4 py-2 rounded-md cursor-pointer">
            Load More
          </button>
        </div>
      )}
    </div>
    
  )
}

export default News