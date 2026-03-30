
const RepoList = ({repos}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-4'>
                {repos.slice(0, 10).map((repo)=> (
                    <RepoCard key={repo.id} repo={repo}/>
                ))}
            </div>
  )
}

export default RepoList