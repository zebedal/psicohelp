import Container from "./UI/Container"
import styles from './MarcarConsulta.module.css'
import Button from "./UI/Button"

const MarcarConsulta = props => (
    <div className={styles.wrapper}>
        <Container>
            <div className={styles.flex}>
                <div>
                    <h2><span>Marque já a sua consulta!</span> Ligue: 932 736 037</h2>
                    <strong style={{ color: 'white', fontWeight: 100 }}>Somos um grupo de profissionais com experiência alargada em psicologia e saúde</strong>
                </div>
            
                <Button text="Marcar consulta" background="var(--purple)" margin={30}/>
            </div>
        </Container>
    </div>
)

export default MarcarConsulta