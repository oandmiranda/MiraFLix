import Card from "../Card";
import style from "./VideoList.module.css";

const VideoList = ({videos, textoCabecalho}) => {

    let heading = textoCabecalho;
    const qtdVideos = videos.length;
    if (qtdVideos > 0) {
        const expressao = qtdVideos > 1 ? 'Filmes' : 'Filme';
        heading = `${qtdVideos} ${expressao}`;
    }

    return (
        <>
            <section className={style.videos}>
                <h3>{heading}</h3>
                <div>
                    { videos.map((video) => <Card id={video.id} key={video.id} />) }
                </div>
            </section>
        </>
    );
}

export default VideoList;