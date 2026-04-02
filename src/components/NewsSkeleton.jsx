

const NewsSkeleton = () => {
  return (
    <div className='border border-slate-300 rounded-md overflow-hidden animate-pulse'>
        {/* image */}
        <div className='w-full h-40 mb-2'>
            <div className="w-full h-full bg-slate-300"></div>
        </div>

         {/* meta */}
            <div className='flex gap-2 justify-end items-center pr-2'>
                <span className="w-10 h-3 bg-slate-300 rounded"></span>
                <span className="w-10 h-3 bg-slate-300 rounded"></span>

            </div>

        {/* content */}
        <div className='p-3'>

            {/* title */}
            <div className='h-4 w-3/4 mb-2 bg-slate-300 rounded'></div>
            <div className='h-4 w-3/4 mb-2 bg-slate-300 rounded'></div>

            {/* description */}

            <div className='h-3 bg-slate-300 rounded w-full mb-1'></div>
            <div className='h-3 bg-slate-300 rounded w-5/6'></div>

           
        </div>
    </div>
  )
}

export default NewsSkeleton