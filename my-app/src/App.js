import './index.css'
import NewsList from './NewsList.js'
import Header from './Header'
import Footer from './Footer'
function App() {
  return (
    <div className="cont">
     <Header />
     <div style={{
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'space-between',
       margin: '0 auto',
      width: '80%'
     }}>
     <div style={{
          fontSize: '35px',
          marginRight: '0.3em',
      
        }}>
          🌤
        </div>
        <h6 
          style={{color: 'rgb(0, 0, 0)', fontSize: '1.3em', transform: `translateY('2px')`}}
        ><i>{new Date().toLocaleString('en-US', {
          weekday : 'long'
        })}, </i> 
          <span style={{color: 'rgba(0, 0, 0, 0.5)'}}> 
          <i>{new Date().toLocaleString('en-US', {
          month : 'long'
        })} </i> 

        <i>{new Date().getDate()}</i></span> 
        </h6>
     </div>
     <NewsList />
     <Footer />
    </div>
  )
}

export default App;

