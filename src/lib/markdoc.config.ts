import Markdoc from '@markdoc/markdoc';

// 自定义标签配置
const callout = {
  render: 'callout',
  attributes: {
    type: {
      type: String,
      default: 'info',
      matches: ['info', 'warning', 'error', 'success']
    },
    title: {
      type: String
    }
  }
};

const badge = {
  render: 'badge',
  attributes: {
    variant: {
      type: String,
      default: 'default',
      matches: ['default', 'success', 'warning', 'error']
    }
  }
};

const highlight = {
  render: 'highlight',
  attributes: {
    color: {
      type: String,
      default: 'blue'
    }
  }
};

// Markdoc 配置
export const config = {
  tags: {
    callout,
    badge,
    highlight
  }
};

export default config;