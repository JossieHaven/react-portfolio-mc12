import { useState } from 'react';
import NavTabs from './Navigation';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />; 
    }
    if (currentPage === 'Resume') {
      return <Resume />; 
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />; 
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

    
      <main className="mx-3">{renderPage()}</main>

      <Footer/>
    </div>

  );

}
