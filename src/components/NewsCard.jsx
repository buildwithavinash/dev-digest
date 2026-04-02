import { formatPublishedTime } from "../utils/time"

const NewsCard = ({article, newsBookmark, toggleBookmarks}) => {
    const isBookmarked = newsBookmark.some((item) => item.url === article.url);
  return (
    <a href={article.url} target="_blank" className="relative block border border-slate-300 rounded-md overflow-hidden hover:shadow-xl transition-all duration-200">


    {/* bookmark button */}
    <div onClick={(e)=> {e.stopPropagation()}} className="absolute top-1 right-2 bg-slate-800/60 px-2 py-1 rounded-md text-slate-300 z-10 cursor-pointer">
    <button onClick={(e)=>{toggleBookmarks(article); e.preventDefault(); e.stopPropagation()}} className="h-full w-full cursor-pointer">
        {isBookmarked ? (<i class="ri-bookmark-fill"></i>) : (<i class="ri-bookmark-line"></i>)}
    </button>
    </div>

        {/* image */}

        {article.urlToImage ? (
            <div className="relative h-40 w-full">

            <img src={article.urlToImage} alt={article.title} className="h-full w-full object-cover"/>
            
            </div>
        ) : (
            <div className="h-40 w-full flex justify-center items-center text-slate-500">
                No image available
            </div>
        )}


{/* meta */}
            <div className="flex gap-1 justify-end text-slate-700 text-xs bottom-1 right-1 mt-1 pr-2">
                <span>{article.source.name}</span>- 
            <span>{formatPublishedTime(article.publishedAt)}</span>
            </div>
        {/* content */}

        <div className="p-2">
            {/* title */}
            <h2 className="text-slate-900 line-clamp-2 leading-tight mb-2">{article.title}</h2>

            

            {/* description */}
            <p className="text-slate-800 text-sm line-clamp-2 leading-tight">{article.description || "No description available"}</p>
        </div>
    </a>
  )
}

export default NewsCard