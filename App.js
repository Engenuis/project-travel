import React from 'react';
import NavBar from './components/NavBar'
import Main from './components/Main'
import data from './data'

export default function App() {
    const list = data.map((item) => {
        return(
            <Main 
                key={item.id}
                {...item}
            />
        )
    })
    
    return(
        <div className='container'>
          <NavBar />
          <main>
            {list}
          </main>
        </div>
    );
}