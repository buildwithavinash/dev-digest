import RepoCard from "./RepoCard"

const RepoList = ({filteredRepo, bookmarks, toggleBookmark}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-4'>
                {filteredRepo.map((repo)=> (
                    <RepoCard key={repo.id} repo={repo} bookmarks={bookmarks} toggleBookmark={toggleBookmark}/>
                ))}
            </div>
  )
}

export default RepoList