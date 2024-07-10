import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Index.jsx'
import Footer from './Components/Footer/Index.jsx'
import Portfolio from './Components/Portfolio/Index.jsx'

function App() {
  const [CurrentPage, SetCurrentPage] = useState('About');

  return(
    <div>
      <Header CurrentPage={CurrentPage} SetCurrentPage={SetCurrentPage} />
      <Portfolio CurrentPage={CurrentPage} SetCurrentPage={SetCurrentPage} />
      <Footer />
    </div>
  );
}

export default App