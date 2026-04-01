import { useEffect, useState } from 'react'
import SkeletonCard from '../components/SkeletonCard';
import RepoList from '../components/RepoList';
import LanguageDropdown from '../components/LanguageDropdown';

const Github = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [language, setLanguage] = useState("All");
    const [bookmarks, setBookmarsk] = useState([]);

    // fetch bookmarks
    useEffect(()=> {
       const saved = localStorage.getItem("bookmarks");

       if(saved){
        setBookmarsk(JSON.parse(saved))
       }
    }, [])

    // save bookmarks to local storage
    useEffect(()=>{
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }, [bookmarks])


    // fetch repos
    useEffect(()=>{
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

        fetchRepo();
    }, [])

    const filteredRepo = language === "All" ? repos : repos.filter((repo)=>repo.language === language);

    
    

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

        {/* error */}
        {error && (
            <p>Error: {error}</p>
        )}

        {/* filter */}
        <div className='flex justify-end mt-4'>
        <LanguageDropdown language={language} setLanguage={setLanguage} />
        </div>

        {/* show repo list */}
        {!loading && !error && <RepoList filteredRepo={filteredRepo.slice(0, 10)}/>}
    </div>
  )
}

export default Github