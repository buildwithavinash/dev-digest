import React from 'react'

const BottomBar = ({activeTab, setActiveTab}) => {
  return (
    <>
    <div className='fixed h-15 bottom-0 left-0 right-0 bg-gray-800 flex  justify-around p-3 md:hidden'>
        <button onClick={()=>setActiveTab("news")} className={`${activeTab === "news" ? "bg-blue-400" : ""} cursor-pointer w-full rounded-md text-slate-100`}>
          News
        </button>

        <button onClick={()=>setActiveTab("github")} className={`${activeTab === "github" ? "bg-blue-400" : ""} cursor-pointer w-full rounded-md text-slate-100`}>
          Github
        </button>
      </div>
    </>
  )
}

export default BottomBar