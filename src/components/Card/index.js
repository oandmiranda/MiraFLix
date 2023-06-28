
import { Link } from "react-router-dom";
import folhaEstilo from "./Card.module.css";

const Card = ({ id }) => {
    return (
        <section className={folhaEstilo.card}>
            <Link to={`/watch/${id}`}> 
                <img src= {`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} alt= "capa" />
            </Link>
        </section>
    );
}

export default Card;