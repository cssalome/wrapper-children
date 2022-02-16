import Footer from './Footer'
import Header from './Header'
import './Layout.css'

const Layout = ({ children }) => {
  return(
    <div className='layout'>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout;