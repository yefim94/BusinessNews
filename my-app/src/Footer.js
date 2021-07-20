import React, { useState } from "react";
import axios from "axios";
const Footer = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleSuggestion = (e) => {
    e.preventDefault()
    alert('thanks for the feedback! - yefim');
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xnqlbggg",
      data: new FormData(form)
    })

  }
  return (
    <div className='footer-cont' style={{paddingTop: '2em', borderTop: '2px solid #85D2EF'}}>
      <div style={{
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       border: `1px solid rgba(0,0,0,0.2)`,
       padding: '0.4em',
       borderRadius: '10px',
       width: '30px',
       height: '30px'
      }}>
        <h6 style={{
          fontSize: '30px',
          color: '#85D2EF',
          fontWeight: '650',
        }}>B</h6>
      </div>
      <div className='obje' style={{
        marginTop: '1.6em',
        borderRadius: '10px',
          backgroundColor: '#85D2EF',
          padding: '1em 2em 1em 2em',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <div className='ico'>
          <h6 className='hei' style={{
            color: '#fff',
            fontSize: '30px'
          }}>Have any Suggestions?</h6>
        </div>
        <form className='de' action="https://formspree.io/f/xnqlbggg"
  method="POST" onSubmit={handleSuggestion} style={{width: '400px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <input className='inp' type='text' placeholder='type to shoot email' style={{
              border: 'none',
              padding: '1em',
              borderRadius: '10px',
              width: '900px'
              }} 
              
              />
          <button className='btn' type='submit' style={{border: 'none',  color: '#85D2EF',
          backgroundColor:'transparent',
                position: 'absolute',
                right: '0',
                marginRight: '1em'}}>
          <i className="fas fa-paper-plane" style={{
               
              }}></i>
          </button>
        </form>
      </div>
     <div style={{marginTop:'2em'}}>
     Website made by Yefim Blokh - <a href='https://github.com/yefim94'>Github</a>
      <a style={{marginLeft: '10px'}}
      href='https://dribbble.com/YefimBlokh'>Dribbble</a>
     </div>
    </div>
  )
}

export default Footer
