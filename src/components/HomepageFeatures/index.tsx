import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const flowImage = require('@site/static/img/flow.png').default;
const templateImage = require('@site/static/img/template.png').default;
const schoolDataImage = require('@site/static/screenshot/学校数据.png').default;
const coursePlanImage = require('@site/static/screenshot/课程计划.png').default;
const constraintConfigImage = require('@site/static/screenshot/约束配置.png').default;
const candidateScheduleImage = require('@site/static/screenshot/候选课表.png').default;
const finalScheduleImage = require('@site/static/screenshot/最终课表.png').default;

type Feature = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  ai?: boolean;
  image?: string;
  imageAlt?: string;
  placeholder?: string;
  reverse?: boolean;
};

const features: Feature[] = [
  {
    eyebrow: '01 · 课表导出模板',
    title: '先把最终交付格式定义清楚',
    description:
      '创建或修改课表导出模板，按学校实际使用习惯配置表头、节次、字段与单元格内容。模板可在平台或机构内复用，减少每学期重复配置。',
    points: ['支持平台 / 机构共享模板复用', '支持自定义导出字段与版式', '支持 AI 快速录入与配置'],
    ai: true,
    image: templateImage,
    imageAlt: '时奕教务系统课表导出模板配置界面',
  },
  {
    eyebrow: '02 · 基础数据',
    title: '教师、班级、教室、科目统一维护',
    description:
      '基础教务数据在机构内共享。新学期创建项目后可直接复用既有数据，仅维护本学期发生变化的部分。',
    points: ['机构内所有项目共享', '集中维护，减少重复录入', '支持 AI 快速录入'],
    ai: true,
    image: schoolDataImage,
    imageAlt: '时奕教务系统基础数据管理界面',
    reverse: true,
  },
  {
    eyebrow: '03 · 课程计划',
    title: '把“这学期要上什么课”配置完整',
    description:
      '按班级、科目与教师配置课程计划，形成排课算法需要执行的教学任务，为后续约束配置与自动排课提供明确输入。',
    points: ['按班级维护课程安排', '统一管理学期教学任务', '支持 AI 快速录入'],
    ai: true,
    image: coursePlanImage,
    imageAlt: '时奕教务系统课程计划配置界面',
  },
  {
    eyebrow: '04 · 约束配置',
    title: '把学校真实排课规则交给系统',
    description:
      '配置教师时间、教室容量、课程冲突、连续上课等排课约束，将教务人员的经验规则转化为算法可执行的条件。',
    points: ['集中配置排课规则', '支持多类硬约束与软约束', '支持 AI 快速录入'],
    ai: true,
    image: constraintConfigImage,
    imageAlt: '时奕教务系统约束配置界面',
    reverse: true,
  },
  {
    eyebrow: '05 · 自研排课算法',
    title: '一次运行，生成可继续调整的候选课表',
    description:
      '基于已经配置的课程计划与约束运行排课算法，自动生成候选课表，让教务人员从“从零排课”转为“审核与优化结果”。',
    points: ['自研排课算法', '自动处理复杂约束关系', '生成候选课表供后续选择与微调'],
    placeholder: '排课运行 / 候选课表界面截图',
    image: candidateScheduleImage,
    imageAlt: '时奕教务系统候选课表界面',
  },
  {
    eyebrow: '06 · 微调与导出',
    title: '保留人工判断，把结果交付出去',
    description:
      '在候选课表基础上进行人工微调，完成最终确认后，按照既定导出模板生成 Excel，衔接学校现有教务工作方式。',
    points: ['支持人工微调候选课表', '按模板生成最终课表', '一键导出 Excel'],
    placeholder: '课表微调 / Excel 导出界面截图',
    image: finalScheduleImage,
    imageAlt: '时奕教务系统最终课表界面',
    reverse: true,
  },
];

function ScreenshotPlaceholder({label}: {label: string}) {
  return (
    <div className={styles.screenshotPlaceholder} role="img" aria-label={label}>
      <div className={styles.placeholderIcon} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p>{label}</p>
      <small>后续替换为实际产品截图</small>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={styles.intro}>
        <p className={styles.kicker}>一条完整的工作路径</p>
        <Heading as="h2">把复杂排课拆成可检查的步骤</Heading>
        <p>
          从机构数据、课程计划和约束配置，到算法排课、人工微调与 Excel 导出，
          时奕教务系统把一个学期的排课任务组织成清晰、可复用、可检查的工作流。
        </p>
        <div className={styles.introActions}>
          <Link to="/docs" className={styles.primaryLink}>
            浏览使用文档 <span aria-hidden="true">→</span>
          </Link>
          <span className={styles.introNote}>AI 快速录入贯穿关键配置环节</span>
        </div>
      </div>

      <div className={styles.flowFrame}>
        <img
          className={styles.flowImage}
          src={flowImage}
          alt="时奕教务系统排课完整工作流程"
        />
      </div>

      {/* <div className={styles.sectionLead}>
        <p className={styles.kicker}>从配置到交付</p>
        <Heading as="h2">每一步都有明确输入，也都有明确结果</Heading>
        <p>
          日常排课不需要在多个表格与工具之间反复切换。围绕一个项目，完成本学期需要的配置，然后进入自动排课与结果处理。
        </p>
      </div> */}

      <div className={styles.featureList}>
        {features.map((feature) => (
          <article
            key={feature.eyebrow}
            className={`${styles.featureRow} ${feature.reverse ? styles.reverse : ''}`}
          >
            <div className={styles.featureCopy}>
              <div className={styles.featureMeta}>
                <span className={styles.featureEyebrow}>{feature.eyebrow}</span>
                {feature.ai && <span className={styles.aiBadge}>✦ AI 快速录入</span>}
              </div>
              <Heading as="h3">{feature.title}</Heading>
              <p>{feature.description}</p>
              <ul>
                {feature.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className={styles.featureVisual}>
              {feature.image ? (
                <a
                  className={styles.screenshotLink}
                  href={feature.image}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`查看${feature.imageAlt ?? '产品界面截图'}原图`}
                >
                  <img
                    className={styles.productScreenshot}
                    src={feature.image}
                    alt={feature.imageAlt}
                    loading="lazy"
                  />
                  <span className={styles.zoomHint}>查看原图 ↗</span>
                </a>
              ) : (
                <ScreenshotPlaceholder label={feature.placeholder ?? '产品界面截图'} />
              )}
            </div>
          </article>
        ))}
      </div>

      <div className={styles.aiSection}>
        <div className={styles.aiGlow} aria-hidden="true" />
        <div className={styles.aiCopy}>
          <span className={styles.aiPill}>AI 辅助配置</span>
          <Heading as="h2">让录入更快，但流程仍然可控</Heading>
          <p>
            课表模板、基础数据、课程计划和约束都支持 AI 快速录入。AI 负责降低录入成本，
            实际排课流程、数据与结果仍然保持清晰可检查。
          </p>
          <Link to="/docs" className={styles.textLink}>
            查看 AI 辅助使用方式 <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className={styles.aiGrid} aria-label="AI 快速录入支持范围">
          <span>课表导出模板</span>
          <span>教师 / 班级 / 教室 / 科目</span>
          <span>课程计划</span>
          <span>排课约束</span>
        </div>
      </div>

      <div className={styles.finalCta}>
        <div>
          <p className={styles.kicker}>开始使用</p>
          <Heading as="h2">从第一个排课项目开始</Heading>
          <p>按照文档逐步完成机构数据、课程计划、约束配置、排课与导出。</p>
        </div>
        <Link to="/docs" className={styles.ctaButton}>
          进入文档 <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
