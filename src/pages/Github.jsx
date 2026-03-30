import { useEffect, useState } from 'react'
import RepoCard from '../components/RepoCard';

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

    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }

    if(error){
        return (
            <h1>Error: {error}</h1>
        )
    }

  return (
    <div className='pb-20'>
        <h1 className='text-center text-3xl font-medium'>Trending Repos</h1>

        {!loading && !error && <RepoCard repos={repos.slice(0, 10)}/>}
    </div>
  )
}

export default Github