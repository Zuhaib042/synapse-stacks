function NavBar() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const active = (p) => page === p ? 'active' : undefined;

  return (
    <nav>
      <a href="index.html" className="nav-logo">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="34" height="34" rx="8" fill="#1C1914"/>
          <path d="M17 9l8.5 4.25L17 17.5 8.5 13.25z" fill="white"/>
          <path d="M8.5 17.5l8.5 4.25 8.5-4.25" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M8.5 21.75l8.5 4.25 8.5-4.25" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        <span className="nav-logo-text">SynapseStacks</span>
      </a>
      <ul className="nav-links">
        <li><a href="index.html" className={active('index.html')}>Home</a></li>
        <li><a href="services.html" className={active('services.html')}>Services</a></li>
        <li><a href="about.html" className={active('about.html')}>About</a></li>
        <li><a href="index.html#consultation" className="nav-cta">Schedule a Consultation</a></li>
      </ul>
    </nav>
  );
}

ReactDOM.createRoot(document.getElementById('nav-root')).render(<NavBar />);
