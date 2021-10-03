import styles from './Button.module.css'
import Link from 'next/link'

const Button = ({ text, textColor = 'white', background = 'var(--blue)', margin = 0, route="/" }) => (
    <Link href={route}>
        <div className={styles.Button} style={{ color: textColor, background: background, marginTop: margin }}>
            {text}
        </div>
    </Link>
)

export default Button