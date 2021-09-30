/* import MobileNavigation from './MobileNavigation' */
import Footer from './Footer'
import Header from './Header'
/* import { useState, Fragment, useRef, useEffect } from 'react' */
/* import { motion } from 'framer-motion'
import { useRouter } from 'next/router' */




const Layout = ({ children }) => {

  /* const loadInitialAnim = useRef(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = useRef('/')
  const {asPath} = useRouter() */
  /* 
    useEffect(() => {
      loadInitialAnim.current = false
    }, [])
  
    useEffect(() => {
        if(currentPath !== asPath) {
          setMobileMenuOpen(false)
        }
    }, [asPath]) */


  /* const toggleMobileNav = () => {
      setMobileMenuOpen(!mobileMenuOpen)
  }
*/
  return (

 
      <div className="wrapper">
      <Header />
      {/* <MobileNavigation show={mobileMenuOpen} toggleSidebar={toggleMobileNav} /> */}
      {children}
      <Footer />
      </div>
 

  )
}

export default Layout
