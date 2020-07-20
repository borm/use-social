import assert from 'assert';
import stringify from 'utils/stringify';
import share from 'share';

type Options = {
  /** The url-encoded title value that you wish you use. */
  title?: string;
  /** The url-encoded description that you wish you use. */
  summary?: string;
  /** The url-encoded source of the content (e.g. your website or application name) */
  source?: string;
};

export function link(url: string, { title, summary, source }: Options) {
  assert(url, 'linkedin.url');
  return `https://linkedin.com/shareArticle${stringify({
    url,
    mini: 'true',
    title,
    summary,
    source,
  })}`;
}

export default function linkedin(url: string, options: Options) {
  share(link(url, options), {
    width: 750,
    height: 600,
  });
}
