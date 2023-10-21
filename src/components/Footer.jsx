
import "../styles/Footer.css"
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <h2>This is Footer</h2>
            <p>All rights reserved to DeVab {year} </p>
        </footer>
    );
};

export default Footer;