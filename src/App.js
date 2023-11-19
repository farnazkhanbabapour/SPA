import React from 'react'
import Header from './components/Header'
import { useRoutes } from 'react-router-dom'
import routes from './components/routes'






export default function App() {
  let router= useRoutes(routes)
  return (
    <div>
      <Header />
      {router}




      {/* <Routes>
  
        <Route path='/cources' element={<Cources/>}/>
        <Route path='/cource/:courceId' element={<MainCource/>}/>
        <Route path='/About/*' element={<About/>}>
          <Route path='setting' element={<h1 style={{textAlign:"center", color:"red"}}>Setting Page</h1>}/>
          <Route path='Dashboard' element={<h1 style={{textAlign:"center", color:"red"}}>Dashboard Page</h1>}/>
        </Route>

      </Routes> */}

    </div>
  )
}
