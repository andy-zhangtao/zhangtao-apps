import Markdoc from '@markdoc/markdoc';
import config from './markdoc.config';

// 组件映射
const components = {
  Callout: () => import('../components/markdoc/Callout.astro'),
  Badge: () => import('../components/markdoc/Badge.astro'),
  Highlight: () => import('../components/markdoc/Highlight.astro'),
  Heading: () => import('../components/markdoc/Heading.astro'),
  Paragraph: () => import('../components/markdoc/Paragraph.astro'),
  List: () => import('../components/markdoc/List.astro'),
  ListItem: () => import('../components/markdoc/ListItem.astro'),
  CodeBlock: () => import('../components/markdoc/CodeBlock.astro'),
};

export function parseMarkdoc(content: string) {
  const ast = Markdoc.parse(content);
  const transformed = Markdoc.transform(ast, config);
  return transformed;
}

export function renderMarkdoc(content: string) {
  const transformed = parseMarkdoc(content);
  return Markdoc.renderers.html(transformed);
}

export { components };