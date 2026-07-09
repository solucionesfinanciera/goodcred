import styles from '../page.module.css';

export default function Beneficios() {
  return (
    <section className={styles.beneficios}>
      <h2>¿Por qué elegir FINANZAS SURE?</h2>

      <p>
        Más rápido, más simple y con atención personalizada.
      </p>

      <div className={styles.gridBeneficios}>
        <div className={styles.itemBeneficio}>
          <div className={styles.iconoBeneficio}>⚡</div>

          <h3>Respuesta rápida</h3>

          <p>
            Analizamos tu cheque y te enviamos una propuesta en el menor tiempo posible.
          </p>
        </div>

        <div className={styles.itemBeneficio}>
          <div className={styles.iconoBeneficio}>💰</div>

          <h3>Tasas competitivas</h3>

          <p>
            Trabajamos con condiciones transparentes y acordes al mercado.
          </p>
        </div>

        <div className={styles.itemBeneficio}>
          <div className={styles.iconoBeneficio}>🔒</div>

          <h3>Operaciones seguras</h3>

          <p>
            Toda la información se procesa de forma confidencial y segura.
          </p>
        </div>

        <div className={styles.itemBeneficio}>
          <div className={styles.iconoBeneficio}>🤝</div>

          <h3>Atención personalizada</h3>

          <p>
            Te acompañamos durante todo el proceso hasta concretar la operación.
          </p>
        </div>
      </div>
    </section>
  );
}