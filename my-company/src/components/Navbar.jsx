import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    backgroundColor: 'navy',
    padding: '15px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
  };

  const linkStyle = {
    color: 'white',
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease'
  };

  const linkHoverStyle = {
    color: 'lightblue'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = linkStyle.color}>Home</Link>
      <Link to="/about" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = linkStyle.color}>About</Link>
      <Link to="/services" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = linkStyle.color}>Services</Link>
      <Link to="/contact" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = linkStyle.color}>Contact</Link>
    </nav>
  );
}

export default Navbar;
