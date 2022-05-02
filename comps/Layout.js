import Footer from "./Footer";
import Navbar from "./Navbar";
import { birds } from '../db/birds.js'

const Layout = ({ children }) => {
    return ( 
        <div className="grid-container">
            <Navbar />
            { children }
            <Footer/>
        </div>
     );
}
 
export default Layout;