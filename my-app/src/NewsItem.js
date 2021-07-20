const NewsItem = ({title, description, url, urlToImage}) => {
  return (
    <div className="card-cont">
      <img src={urlToImage ? urlToImage : 'https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png'} alt={urlToImage} />
      <h3>
        <a  style={{
          color: '#000',
          textDecoration: 'none',
          textTransform: '',
          fontWeight: '770'
        }}
        ><i>{title}</i></a>
      </h3>
      <p style={{
        color: 'rgba(0,0,0,0.5)',
        fontWeight: '600'
      }} 
      ><i>{description}</i></p>
      <a style={{
        color: '#3CC0F9',
        cursor: 'pointer',
        fontSize: '0.7em',
        textDecoration: 'none',
        fontWeight: '650',
          cursor: 'pointer'

      }}
       href={url} target='_blank'>FULL ARTICLE</a>
    </div>
  )
}

export default NewsItem
