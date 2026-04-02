const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const fetchNews = async (category = "technology") => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`);

    if(!res.ok){
        throw new Error("Failed to fetch news");
    }

    const data = await res.json();
    return data.articles;
}