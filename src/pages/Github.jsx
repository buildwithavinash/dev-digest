import { useEffect, useState } from 'react'
import SkeletonCard from '../components/SkeletonCard';
import RepoList from '../components/RepoList';
import LanguageDropdown from '../components/LanguageDropdown';
import { getTimeAgo } from '../utils/time';

const Github = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [language, setLanguage] = useState("All");
    const [bookmarks, setBookmarks] = useState([]);
    const [lastUpdate, setLastUpdated] = useState(null);
     const [, forceUpdate] = useState(0);
    const [view, setView] = useState("all");


    // fetch bookmarks
    useEffect(()=> {
       const saved = localStorage.getItem("bookmarks");

       if(saved){
        setBookmarks(JSON.parse(saved))
       }
    }, [])

    // save bookmarks to local storage
    useEffect(()=>{
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }, [bookmarks])


    // fetching from api
    const fetchRepo = async () =>{
            try {
                setLoading(true)
                const res = await fetch("https://api.github.com/search/repositories?q=stars:>1&sort=stars");
                const data = await res.json();
                setRepos(data.items)
            }catch(err){
                setError(err)
                console.error(err)
            }finally{
                setLoading(false)
            }
        }
    // fetch repos
    useEffect(()=>{
        fetchRepo();
        setLastUpdated(Date.now())
    }, [])

    const filteredRepo = language === "All" ? repos : repos.filter((repo)=>repo.language === language);

    
    // adding/deleting bookmarks
    const toggleBookmark = (repo) => {
        const exists = bookmarks.find((bk)=> bk.id === repo.id);

        if(exists){
            setBookmarks((bookmarks) => bookmarks.filter((bk)=>bk.id !== repo.id))
        }else {
            setBookmarks((bookmarks) => [...bookmarks, repo])
        }
    }

   
// update timer
useEffect(() => {
  const interval = setInterval(() => {
    forceUpdate((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);


const displayRepos = view === "bookmarks" ? bookmarks : filteredRepo;

  return (
    <div className='pb-20'>
        <h1 className='text-center text-3xl font-medium'>Trending Repos</h1>
        
        {/* skeleton loading */}
        {loading && (
            <div>
                {Array.from({length:6}).map((_, i)=>(
                  <SkeletonCard key={i} />  
                ))}
            </div>
        )}

{/* refresh button */}

<div>
    <button onClick={()=>{if(!loading) fetchRepo(); }}><i class="ri-refresh-line"></i></button>
    <button onClick={()=>setView((prev) => prev === "all" ? "bookmarks" : "all")} className=''>
        {view === "bookmarks" ? (<i class="ri-arrow-go-back-line"></i>) : (<i class="ri-bookmark-3-fill"></i>)}
    </button>
</div>
        {/* time ago */}
        <div className='text-xs'>
            <span>Last Updated: {getTimeAgo(lastUpdate)}</span>
        </div>

        {/* error */}
        {error && (
            <p>Error: {error}</p>
        )}

        {/* filter */}
        <div className='flex justify-end mt-4'>
        <LanguageDropdown language={language} setLanguage={setLanguage} />
        </div>

        {/* show repo list */}
        {!loading && !error && <RepoList repos={displayRepos.slice(0, 10)} bookmarks={bookmarks} toggleBookmark={toggleBookmark}/>}

        {/* bookmarks error state */}
        {!loading && !error && displayRepos.length === 0 && (
            <p className='text-center text-slate-500 mt-10'>
                No bookmarks yet.
            </p>
        )}
    </div>
  )
}

export default Github