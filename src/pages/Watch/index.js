
import styles from "./Watch.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import { useParams } from "react-router-dom";
import videos from "../../json/videos.json"
import NotFound from "../NotFound";

function Watch() { 
const params = useParams();
const video = videos.find((video) => video.id === params.id);
if (!video) { return <NotFound /> }

    return (
        <>
        <Header />
            <Container>
                <div className= {styles.watch}>
                <iframe 
                    width="800" 
                    height="480" 
                    src={`https://www.youtube.com/embed/${video.id}`} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
                </div>
            </Container>
        <Footer />
        </>
    );
}

export function Log({value}) {
    console.log({value});
}

export default Watch;