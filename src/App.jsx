import React, { useState } from 'react'

const App = () => {
  const [activeTab, setActiveTab] = useState("news");
  return (
    <div className='min-h-screen flex bg-slate-100 text-slate-900'>
      {/* sidebar (Desktop) */}
      <div className='hidden md:flex flex-col w-60 bg-gray-800 p-4'>
        <button onClick={()=>setActiveTab("news")} className={`p-3 cursor-pointer rounded-lg mb-2 ${activeTab === "news" ? "bg-blue-500" : "bg-gray-700"}`}>
          News
        </button>

        <button onClick={()=>setActiveTab("github")} className={`p-3 cursor-pointer rounded-lg mb-2 ${activeTab === "github" ? "bg-blue-500" : "bg-gray-700"}`}>
          Github
        </button>
      </div>

      {/* main content */}
      <div className='flex-1 p-4'>
        {activeTab === "news" ? (
          <h1>News</h1>
        ) : (
          <h1>Github</h1>
        )}
      </div>

      {/* bottom nav (mobile) */}
      <div className='fixed bottom-0 left-0 right-0 bg-gray-800 flex  justify-around p-3 md:hidden'>
        <button onClick={()=>setActiveTab("news")} className={activeTab === "news" ? "text-blue-400" : ""}>
          News
        </button>

        <button onClick={()=>setActiveTab("github")} className={activeTab === "github" ? "text-blue-400" : ""}>
          Github
        </button>
      </div>
    </div>
  )
}

export default App