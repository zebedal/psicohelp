import styles from './Services.module.css'

const Services = props => (
    <div className={styles.flex}>

        <div className={styles.serviceBox} >
            <h2>Para Crianças</h2>
            <p>Dispomos de diversos serviços direcionados aos mais pequenos no âmbito da psicoterapia.</p>
            <ul>
                <li>Bullying</li>
                <li>Depressão</li>
                <li>Distúrbios</li>
                <li>Ansiedade</li>
            </ul>
        </div>

        <div className={styles.serviceBox}>
            <h2>Para Adultos</h2>
            <p>Dispomos de diversos serviços direcionados aos adultos e sua família no âmbito da psicoterapia.</p>
            <ul>
                <li>Fobias</li>
                <li>Depressão</li>
                <li>Stress pós-traumático</li>
                <li>Problemas relacionados com o trabalho </li>
            </ul>
        </div>

        <div className={styles.serviceBox}>
            <h2>Para Casais</h2>
            <p>Dispomos de diversos serviços direcionados a casais de todas as idades no âmbito da psicoterapia.</p>
            <ul>
                <li>Conflitos conjugais e familiares</li>
                <li>Depressão</li>
                <li>Conflitos relacionais</li>
                <li>Distúrbios alimentares </li>
            </ul>
        </div>

    </div>
)

export default Services