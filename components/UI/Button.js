import styles from './Button.module.css'

const Button = ({text, textColor = 'white', background='var(--blue)'}) => (
    <div className={styles.Button} style={{color: textColor, background: background}}>
        {text}
    </div>
)

export default Button