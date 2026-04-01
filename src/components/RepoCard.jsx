import { formatNumber } from "../utils/numberFormat";

const RepoCard = ({ repo, bookmarks, toggleBookmark }) => {

  const isBookmarked = bookmarks.some((bk)=>bk.id === repo.id)

  return (
    <div className="relative border border-slate-300 rounded-md p-2">
      <div className="flex justify-between">
        <a
          target="_blank"
          href={repo.html_url}
          className="flex-1 inline-block  hover:underline transition-all duration-200 text-wrap"
        >
          {repo.name}
        </a>
        <span className="flex gap-0.5 text-nowrap bg-slate-200 px-1 text-xs py-0.5 rounded-sm self-start">
          ⭐ {formatNumber(repo.stargazers_count)}
        </span>
      </div>

      <div className="flex gap-1 items-center mt-2">
        <img
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
          className="h-4 w-4 rounded-full"
        />
        <a href={repo.owner.html_url} className="text-xs">
          {repo.owner.login}
        </a>
      </div>

      <p className=" line-clamp-2 text-slate-600 mt-2">{repo.description}</p>

      <div className="mt-2">
        <span className="border border-slate-300 bg-slate-200 px-1 py-0.5 rounded-sm text-xs items-center justify-start">
          {" "}
          {repo.language ? repo.language : "Resource"}
        </span>
      </div>

      <div className="absolute bottom-1 right-1">
        <button onClick={(e)=>{toggleBookmark(repo); e.stopPropagation(); }}>
          {isBookmarked ? (<i class="ri-bookmark-fill"></i>) : (<i class="ri-bookmark-line"></i>)}
          
        </button>
      </div>
    </div>
  );
};

export default RepoCard;
