import React from 'react'
import ReactDOM from 'react-dom/client'
import  './index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
