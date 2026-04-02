
const HeaderGithub = ({loading, fetchRepo, setView, view}) => {
  return (
    <div>
        <div className="flex justify-between border-b pb-2 border-slate-300 mb-4">
        <div>
        <h2 className="text-2xl font-semibold">DevDigest</h2>
        </div>

        {/* show bookmarks and refresh button */}
<div className='flex gap-2 text-xl justify-end pr-2'>
    <button onClick={()=>{if(!loading) fetchRepo(); }} className='cursor-pointer'><i class="ri-refresh-line"></i></button>
    <button onClick={()=>setView((prev) => prev === "all" ? "bookmarks" : "all")} className='cursor-pointer'>
        {view === "bookmarks" ? (<i class="ri-arrow-go-back-line"></i>) : (<i class="ri-bookmark-3-fill"></i>)}
    </button>
</div>
    </div>
    </div>
  )
}

export default HeaderGithub