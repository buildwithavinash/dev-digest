const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const fetchNews = async (topic = "technology") => {
    const res = await fetch(`https://gnews.io/api/v4/top-headlines?topic=${topic}&lang=en&apikey=${API_KEY}`);

    if(!res.ok){
        throw new Error("Failed to fetch news");
    }

    const data = await res.json();
    return data.articles;
}