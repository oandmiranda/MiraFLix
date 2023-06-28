import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./NotFound.module.css"
import imageErro from "./erro404.png"

export default function NotFound() {
    return (
        <>
        <Header />
            <div className={styles.container}>
                <h2>Ops! Algo deu errado! Essa página não existe.</h2>
                <img src={imageErro} alt="Página não encontrada"/>
            </div>
        <Footer />
        </>
    );
}