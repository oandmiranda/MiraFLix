
import styles from "./Category.module.css";
import videos from "../../json/videos.json";

export const categories = [
    'Ação',
    'Comédia',
    'Ficção',
    'Séries',
    'Drama'
  ];
  
export function filterCategory(id) {
    return videos.filter((video) => video.category === categories[id] );
  }
  

function Category({category, children}) {
    return (
        <section className= {styles.category}>
            <h2>{category}</h2>
            <div>
                {children}
            </div>
        </section>
    );
}

export default Category;