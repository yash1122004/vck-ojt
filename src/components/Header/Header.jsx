import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <nav>
               <Link to="/home">home</Link>
               <Link to="/about">about</Link>
            </nav>
        </header>
    )
}
export default Header;