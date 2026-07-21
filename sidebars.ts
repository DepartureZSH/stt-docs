import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'user-guide/overview',
    'user-guide/quick-start',
    {
      type: 'category',
      label: '一、新手指南',
      collapsed: false,
      items: [
        'user-guide/accounts-organizations-projects',
        'user-guide/complete-workflow',
      ],
    },
    {
      type: 'category',
      label: '二、数据录入',
      collapsed: true,
      items: [
        'user-guide/schedule-settings',
        'user-guide/school-data',
        'user-guide/room-settings',
        'user-guide/course-plans',
        'user-guide/constraints',
        'user-guide/ai-agent',
      ],
    },
    {
      type: 'category',
      label: '三、排课输出',
      collapsed: true,
      items: [
        'user-guide/scheduling-results',
      ],
    },
    {
      type: 'category',
      label: '四、多人合作',
      collapsed: true,
      items: [
        'user-guide/administration',
      ],
    },
    {
      type: 'category',
      label: '五、帮助',
      items: ['user-guide/faq-glossary'],
    },
  ],
};

export default sidebars;
