import { useEffect, useState } from "react"
import { fetchNews } from "../services/newApi"
import NewsCard from "../components/NewsCard";
import NewsSkeleton from "../components/NewsSkeleton";
import Header from "../components/Header";


const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("All")
  const [visible, setVisible] = useState(6);
  const [newsBookmark, setNewsBookmark] = useState([]);
  const [view, setView] = useState("all");

  const categories = ["All", "AI", "Web Dev", "Startups"]


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

  useEffect(()=> {
  
    getNews();
  }, [])

  const filterArticles = category === "All" ? articles : articles.filter((article)=> article.title.toLowerCase().includes(category.toLowerCase()));


  // toggle bookmarks

  const toggleBookmarks = (article) => {
  let exists = newsBookmark.find((item)=>item.url === article.url);

  if(exists){
    setNewsBookmark((prev)=>prev.filter((item) => item.url !== article.url))
  }else {
    setNewsBookmark([...newsBookmark, article])
  }
  }
  

const displayNews = view === "bookmarks" ? newsBookmark : filterArticles;


  return (
    <div className="pb-20">

      <Header loading={loading} getNews={getNews} view={view} setView={setView} />
      {/* title */}
      <h1 className="text-center text-3xl font-medium text-slate-900">Tech News</h1>


{/* tabs */}
<div className="flex gap-2 justify-center mt-4 mb-3">
    {categories.map((cat)=>(
      <button key={cat} className="border border-slate-400 bg-slate-200 px-2 py-0.5 rounded-md cursor-pointer hover:bg-slate-300 transition-all" onClick={()=> setCategory(cat)}>
        {cat}
      </button>
    ))}
</div>




{/* skeleton loading */}
      {loading && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({length:6}).map((_, i) => (
            <NewsSkeleton key={i} />
          ))}
        </div>
      )}

{/* error */}
      {error && (
        <p>{error}</p>
      )}

{/* show news */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {filterArticles.length === 0 && (
          <div className="text-center">
            <p className="text-slate-500">No articles found.</p>
          </div>
        )}
        {displayNews.slice(0, visible).map((article, index) => (
          <NewsCard key={index} article={article} newsBookmark={newsBookmark} toggleBookmarks={toggleBookmarks}/>
        ))}
      </div>

        {!loading && !error && view==="bookmarks" && newsBookmark.length === 0 && (
          <div className="text-center text-slate-500">
            <p>No bookmarks yet.</p>
          </div>
        )}

      {/* load more button */}
      {visible < filterArticles.length && displayNews.length > 0 && (
        <div className="flex justify-center mt-4">
          <button onClick={()=>setVisible((prev) => prev + 6)} className="bg-slate-200 px-4 py-2 rounded-md cursor-pointer hover:bg-slate-300 transition-all duration-200">
            Load More
          </button>
        </div>
      )}
    </div>
    
  )
}

export default News