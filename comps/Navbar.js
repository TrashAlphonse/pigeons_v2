import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { motion } from 'framer-motion'


const Navbar = () => {

    const hoverEffect = {
        scale: [1, 1.4, 1.2],
        rotate: [0, 10, -10, 0],
        transition: {
          duration: .2
        }
    }

    return ( 
        <header className={styles.header}>
        <nav className={styles.nav}>
            <p className={styles.heading}>Pigeonsss</p>
            <Link href="/"><motion.a className={styles.link} whileHover={hoverEffect}>Home</motion.a></Link>
            <Link href="/about"><motion.a className={styles.link} whileHover={hoverEffect}>Curious facts</motion.a></Link>
        </nav>
        </header>
     );
}
 
export default Navbar;