const Footer = () => {
    const yearNow = new Date().getFullYear();
    return ( 
        <footer className="site-footer">
            <p>Copyright {yearNow} Sigma Simple.</p>
        </footer>
     );
}
 
export default Footer;