import NewsItem from './NewsItem.js'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const NewsList = () => {
  const [articles, setArticles] = useState([
  ])

  useEffect(() => {
    var element = document.querySelector(".grid-cont");
    element.style.opacity = 1;
    const tech = 'technology';
    const Business = 'business';
    const Science = 'science';
    const Math = 'math';
    async function getArticles () {
      try {
        const data = await Axios.get(`
        https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=100&apiKey=99f1cfc40e1c4a3d9cf9d38b62104b39
      `);
      setArticles(data.data.articles)
      }
      catch(error) {
        console.log(error);
      }
    }
    getArticles()
  }, [])

  return (
    <div className="grid-cont" style={{position: 'relative'}}> 
     
      {articles.map(({title, description, url, urlToImage}) => 
        <NewsItem 
        key={Math.random() * 90}
        title={title}
        description={description}
        url={url}
        urlToImage={urlToImage}
        />
      )}
    </div>
  )
}

export default NewsList
