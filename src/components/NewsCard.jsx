import { formatPublishedTime } from "../utils/time"

const NewsCard = ({article}) => {
  return (
    <a href={article.url} className="block border border-slate-500 rounded-md overflow-hidden">
        {/* image */}

        {article.urlToImage ? (
            <img src={article.urlToImage} alt={article.title} className="h-40 w-full object-cover"/>
        ) : (
            <div>
                No image available
            </div>
        )}

        {/* content */}

        <div className="p-2">
            {/* title */}
            <h2 className="text-slate-900 line-clamp-2">{article.title}</h2>

            {/* meta */}
            <div className="b flex gap-1 justify-end text-slate-700 text-xs">
                <span>{article.source.name}</span>- 
            <span>{formatPublishedTime(article.publishedAt)}</span>
            </div>

            {/* description */}
            <p className="text-slate-800 text-sm line-clamp-2">{article.description || "No description available"}</p>
        </div>
    </a>
  )
}

export default NewsCard