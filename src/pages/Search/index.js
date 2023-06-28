import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input"
import style from "./Search.module.css";
import VideoList from "../../components/VideoList";
import videos from "../../json/videos.json";

export default function Search() {
    return (
        <>
        <Header />
        <Banner />
        <Container>
        <Input />
            <section className={style.search}>
                <VideoList videos={videos}/>
            </section>
        </Container>
        <Footer />
        </>   
    )
}