import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const templateImage = require('@site/static/img/template.png').default;

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={styles.intro}>
        <p className={styles.kicker}>一条完整的工作路径</p>
        <Heading as="h2">把复杂排课拆成可检查的步骤</Heading>
        <p>
          手册覆盖账号与机构、课表模板、学校数据、课程计划、约束配置、排课运行和结果校验。每一步都说明完成标准与常见问题。
        </p>
        <Link to="/docs" className={styles.textLink}>
          浏览文档目录 <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.templateImage}
          src={templateImage}
          alt="时奕智能教务系统节次模板设置界面"
        />
      </div>
      <div className={styles.workflow} aria-label="排课流程">
        <span>准备数据</span>
        <span>配置规则</span>
        <span>运行排课</span>
        <span>校验导出</span>
      </div>
    </section>
  );
}
