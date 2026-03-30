import { useState } from 'react'
import Sidebar from './components/Sidebar';
import BottomBar from './components/BottomBar';
import News from './pages/News';
import Github from './pages/Github';

const App = () => {
  const [activeTab, setActiveTab] = useState("news");
  return (
    <div className='min-h-screen flex bg-slate-100 text-slate-900'>
      {/* sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* main content */}
      <div className='flex-1 p-4'>
        {activeTab === "news" ? (
          <News />
        ) : (
          <Github />
        )}
      </div>

      {/* bottom nav (mobile) */}
      <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

export default App