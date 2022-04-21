import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

export async function transformMarkdown(markdown: string | null | undefined): Promise<string> {
  if (!markdown) return '';

  const result = await unified().use(remarkParse).use(remarkHtml).process(markdown);
  return result.toString('utf-8');
}
