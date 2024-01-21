import React from 'react';
import { Suspense } from 'react';
import './home.css'
import { Navbar,Header,About, Footer, Aftermovie} from '../index'
const Highlight = React.lazy(()=>import('./Highlights/Highlight'))

const Home = () => {
  return (
    <div>
    <div className='App'>
    <div className='fest__pageA'>
      <Navbar/>
      <Header/>
    </div>
      <About/>
      <Suspense fallback={<p>This is loading</p>}>
        <Highlight />
      </Suspense>
      <Aftermovie/>
     <Footer/>
   </div>
    </div>
  )
}

export default Home;
