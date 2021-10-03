import styles from './Button.module.css'

const Button = ({text, textColor = 'white', background='var(--blue)', margin=0}) => (
    <div className={styles.Button} style={{color: textColor, background: background, marginTop:margin}}>
        {text}
    </div>
)

export default Button