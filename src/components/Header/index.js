// Header component
import { Link } from "react-router-dom";
import Logo from "./favicon.png";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <Link to= "/">
            <div>   
                <img src={Logo} />
                <span>iraFlix</span>
            </div>    
            </Link>
            <nav>
                <Link to= "/">Home</Link>
                <Link to= "/search-category">Categorias</Link>
            </nav>
        </header>
    );
}

export default Header; 