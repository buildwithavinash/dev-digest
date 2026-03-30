const SkeletonCard = () => {
  return (
    <div className="relative border border-slate-300 rounded-md p-2 animate-pulse mt-4 mb-2">
      
      {/* Top Row */}
      <div className="flex justify-between">
        
        {/* Repo Name */}
        <div className="flex-1 h-4 bg-slate-300 rounded mr-2"></div>

        {/* Stars */}
        <div className="h-4 w-12 bg-slate-300 rounded-sm"></div>
      </div>

      {/* Owner */}
      <div className="flex gap-1 items-center mt-2">
        
        {/* Avatar */}
        <div className="h-4 w-4 bg-slate-300 rounded-full"></div>

        {/* Username */}
        <div className="h-3 w-16 bg-slate-300 rounded"></div>
      </div>

      {/* Description */}
      <div className="mt-2 space-y-1">
        <div className="h-3 bg-slate-300 rounded w-full"></div>
        <div className="h-3 bg-slate-300 rounded w-5/6"></div>
      </div>

      {/* Language Tag */}
      <div className="mt-2">
        <div className="h-4 w-16 bg-slate-300 rounded-sm"></div>
      </div>

    </div>
  );
};

export default SkeletonCard;