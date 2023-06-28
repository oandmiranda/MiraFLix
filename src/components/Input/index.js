import style from "./Input.module.css";

function Input() {
    return (
        <form className={style.input}>
        <input 
            type="text"
            placeholder="Pesquisar"
         />
        </form>
    );
}

export default Input;

