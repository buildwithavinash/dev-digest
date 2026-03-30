import React, { useEffect, useState } from 'react'
import { formatNumber } from '../utils/numberFormat';

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
                console.log(data);
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

        {!loading && !error && (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-4'>
                {repos.slice(0, 10).map((repo)=> (
                    <div key={repo.id} className='relative border border-slate-300 rounded-md p-2'>
                        <div className='flex justify-between'>

                        <a target='_blank' href={repo.html_url} className='flex-1 inline-block  hover:underline transition-all duration-200 text-wrap'>{repo.name}</a>
                        <span className='flex gap-0.5 text-nowrap bg-slate-200 px-1 text-xs py-0.5 rounded-sm self-start'>⭐ {formatNumber(repo.stargazers_count)}</span>
                        </div>

                        <div className='flex gap-1 items-center mt-2'>
                        <img src={repo.owner.avatar_url} alt={repo.owner.login} className='h-4 w-4 rounded-full' />
                        <a href={repo.owner.html_url} className='text-xs'>{repo.owner.login}</a>
                        </div>

                        <p className=' line-clamp-2 text-slate-600 mt-2'>{repo.description}</p>
                        

                        <div className='mt-2'>
                            <span className='border border-slate-300 bg-slate-200 px-1 py-0.5 rounded-sm text-xs items-center justify-start'> {repo.language ? repo.language : "Resource"}</span>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default Github