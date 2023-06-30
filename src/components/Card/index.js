
import { Link } from "react-router-dom";
import folhaEstilo from "./CardPage2.module.css"; 

const Card = (props) => {
    return (
        <section className={folhaEstilo.card}>
            <Link to={`/watch/${props.id}`}> 
                <img src= {`https://i.ytimg.com/vi/${props.id}/mqdefault.jpg`} alt= "capa" />
            </Link>
        </section>
    );
}

export default Card;