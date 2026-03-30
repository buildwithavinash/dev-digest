
const Sidebar = ({activeTab, setActiveTab}) => {
  return (
    <>
    
    {/* sidebar (Desktop) */}
      <div className='hidden md:flex flex-col w-60 bg-gray-800 p-4'>
        <button onClick={()=>setActiveTab("news")} className={`p-3 cursor-pointer rounded-lg mb-2 ${activeTab === "news" ? "bg-blue-500" : "bg-gray-700"}`}>
          News
        </button>

        <button onClick={()=>setActiveTab("github")} className={`p-3 cursor-pointer rounded-lg mb-2 ${activeTab === "github" ? "bg-blue-500" : "bg-gray-700"}`}>
          Github
        </button>
      </div>
      </>
  )
}

export default Sidebar