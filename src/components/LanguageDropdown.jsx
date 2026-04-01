import { useEffect, useState } from "react";


const languages = ["All", "JavaScript", "Python", "TypeScript", "Rust", "Resource"];

const LanguageDropdown = ({language, setLanguage}) => {
    const [isOpen, setIsOpen] = useState(false);


    useEffect(()=>{
        const handleClickOutside = () => {
            setIsOpen(false);
        }

        if(isOpen){
            document.addEventListener("click", handleClickOutside)
        }

        return () => {
            document.removeEventListener("click", handleClickOutside)
        };

    }, [isOpen])

  return (
    <div className="relative w-40 z-10" onClick={(e)=>e.stopPropagation()}>
        {/* button */}
        <button onClick={()=>{setIsOpen(!isOpen) }} className="flex justify-between border border-slate-400 rounded-sm px-3 py-0.5 w-full cursor-pointer">
            {language}
            <span>▼</span>
        </button>


        {/* dropdown */}
        {isOpen && (
            <div className="bg-slate-300 absolute w-full flex flex-col gap-0.5">
                {languages.map(language => (
                    <div key={language} onClick={()=>{setLanguage(language); setIsOpen(false)}} className="hover:bg-slate-700 hover:text-slate-300 cursor-pointer pl-2">
                        {language}
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default LanguageDropdown