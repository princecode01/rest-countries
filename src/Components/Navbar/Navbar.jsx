import React from 'react'

export default function Navbar({ toggleTheme, theme }) {

  return (
    <div className='Navbar py-1 mb-5'>
      <div className="container">
        <div className="navbar">
          <div className="head-line">
            <h4>Where in the world?</h4>
          </div>
          <div onClick={toggleTheme} className="dark-mode d-flex justify-content-center">
            {theme == 'light' ? <>
              <span><i className="fa-regular fa-moon"></i></span>
              <span className='ms-2'>Dark Mode</span>
            </> : <>
              <span><i className="fa-regular fa-sun"></i></span>
              <span className='ms-2'>Light Mode</span>
            </>}
          </div>
        </div>
      </div>
    </div>
  )
}
