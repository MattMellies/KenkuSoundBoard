import styles from "./button.module.scss";

const Button = (props) => {
    return (
        <button className={styles.soundButton}>
            {props.buttonText}
        </button>
    )
}

export default Button;