import { Link } from "react-router-dom";
import styles from "./ReadmeContainer.module.css";

export default function ReadmeContainer() {

    return (
        <section className={styles.container}>
            <div className={styles.blocoh1}>
                <h1>MiraFlix</h1>
                <p>Este projeto tem o objetivo de praticar conceitos básicos do React e foi realizado para fins didáticos. A base do código está orientada a Props e Childrens.</p>
            </div>

            <div className={styles.bloco}>
                <h3>Funcionalidades:</h3>
                <p>
                    Esta aplicação tem o front inspirado no streaming e organiza os pseudo-filmes em duas páginas! Uma é a Home com todos os vídeos listados e a outra está dividida por categorias. Cada vídeo tem o seu próprio ID que é extraído de um JSON mocado!
                    Os itens são filtrados pelo ID e posteriormente mapeados para serem organizados em um container de categoria. <br />
                    Cada categoria está organizada pela lib de carrossel que exibe os cards já filtrados e organizados. Após o clique no Card o usuário é encaminhado para uma página "/watch/id" com o vídeo linkado ao YouTube simulando o streaming.
                </p>
            </div>

            <div className={styles.bloco}>
                <h3>Tecnologias e Conceitos:</h3>
                <ul>
                    <li><strong>React:</strong> Aplicação feita a partir do "create react app".</li>
                    <li><strong>React Router Dom:</strong> Biblioteca utilizada para estabelecer as rotas entre as páginas Home, Categorias e Readme.</li>
                    <li><strong>React Slick:</strong> Biblioteca utilizada para aplicação do Carrossel.</li>
                    <li><strong>CSS Modules:</strong> Estilização via escopo local e exportação.</li>
                    
                </ul>
            </div>

            <div className={styles.bloco}>
                <h3>Futuras implementações:</h3>
                <ul>
                    <li>Implementação da lógica para realização de busca dos filmes no Input de pesquisa.</li>
                    <li>Correção sutil no estado "hover" dos cards quando recebem zoom e correções de responsividade.</li>
                    <li>Melhorias gerais na estilização.</li>
                </ul>
            </div>

            <div className={styles.bloco}>
                <h3>Status:</h3>
                <p>
                    Em andamento.
                </p>
            </div>
        </section>
    )
}