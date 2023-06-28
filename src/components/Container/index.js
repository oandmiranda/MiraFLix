import folhaCss from "./Container.module.css";

function Container({ children }) {
    return (
        <section className={folhaCss.container}>
            {children}
        </section>
    );
}

export default Container;