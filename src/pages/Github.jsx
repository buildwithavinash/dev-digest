import { useEffect, useState } from 'react'
import SkeletonCard from '../components/SkeletonCard';
import RepoList from '../components/RepoList';

const Github = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

    

  return (
    <div className='pb-20'>
        <h1 className='text-center text-3xl font-medium'>Trending Repos</h1>
        
        {loading && (
            <div>
                {Array.from({length:6}).map((_, i)=>(
                  <SkeletonCard key={i} />  
                ))}
            </div>
        )}
        {error && (
            <p>Error: {error}</p>
        )}
        {!loading && !error && <RepoList repos={repos.slice(0, 10)}/>}
    </div>
  )
}

export default Github