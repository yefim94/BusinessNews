const Header = () => {
  return (
    <div className="nav" style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1em 2em 0em 2em',
      position: 'sticky',
      top: '0',
      left: '0',
      backgroundColor: '#fff',
      zIndex: '100',
      width: 'auto'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}> 
       <h1 style={{
          color: '#6AD3F3',
          marginRight: '0.3em',
          fontSize: '3em',
          fontWeight: '650'
       }}>B</h1>
       <h4 style={{
          color: '#6AD3F3',
          fontSize: '1.3em',
          fontWeight: '650'
       }}>BUSINESSNEWS</h4>
      </div>
      <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
    }}>
        <div className='flag-obj' style={{
          padding: '0.3em',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img src='https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg' title='us-based-news' />
        </div>
      </div>
    </div>
  )
}

export default Header
