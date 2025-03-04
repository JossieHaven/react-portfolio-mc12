
function NavTabs({ currentPage, handlePageChange }) {
    return (
     
      <ul className="nav nav-tabs">
        <h1>Jossie Haven</h1>
        <li className="nav-item" >
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
  
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            <h2>Home</h2>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
  
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
  
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
     
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item" >
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}
  
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            <a>Resume</a>
          </a>
        </li>
      </ul>
    );
  }
  
  export default NavTabs;
  