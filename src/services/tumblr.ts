import assert from 'assert';
import stringify from '../utils/stringify';
import share from '../share';

type Options = {
  title?: string;
  caption?: string;
  tags?: string | string[];
  posttype?: 'link' | string;
};

export function link(url: string, { title, caption, tags, posttype }: Options) {
  assert(url, 'tumblr.url');
  return `https://www.tumblr.com/widgets/share/tool${stringify({
    canonicalUrl: url,
    title,
    caption,
    tags,
    posttype,
  })}`;
}
export default function tumblr(url: string, options: Options) {
  share(link(url, options), {
    width: 660,
    height: 460,
  });
}
