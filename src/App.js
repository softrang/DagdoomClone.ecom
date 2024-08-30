import React from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Page1 from './Component/Page1'
import Page2 from './Component/Page2'
import Page3 from './Component/Page3'
import Page4 from './Component/Page4'
import { DetaProvider } from './Context/ShareDeta'

const App = () => {
  return (
    <div className='App '>
      <DetaProvider>  
      <Header/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Footer/>
      </DetaProvider>
    </div>
  )
}

export default App
