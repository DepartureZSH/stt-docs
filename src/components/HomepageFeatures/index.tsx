import type {ReactNode} from 'react';
import styles from './styles.module.css';

const templateImage = require('@site/static/img/template.png').default;

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={styles.imageContainer}>
        <img
          className={styles.templateImage}
          src={templateImage}
          alt="午时智能教务系统节次模板设置界面"
        />
      </div>
    </section>
  );
}
