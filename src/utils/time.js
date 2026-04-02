export const getTimeAgo = (timestamp) => {
    if(!timestamp) return;

    const seconds = Math.floor((Date.now()-timestamp) / 1000);

    if(seconds < 60) return `${seconds}s ago`;

    const minutes = Math.floor(seconds / 60);
    if(minutes < 60) return `${minutes}m ago`;

    const hours = Math.floor(minutes/60);
    return `${hours}h ago`;
}

export const formatPublishedTime = (dateString) => {
  const time = new Date(dateString);
  const seconds = Math.floor((Date.now() - time) / 1000);

  if (seconds < 60) return `${seconds}s ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;

  const hours = Math.floor(minutes / 60);
  return `${hours}h ago`;
};