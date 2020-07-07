import assert from 'assert';
import stringify from 'utils/stringify';
import share from 'share';

type Options = {
  title?: string;
};

export function link(url: string, { title }: Options) {
  assert(url, 'reddit.url');
  return `https://www.reddit.com/submit${stringify({
    url,
    title,
  })}`;
}

export default function reddit(url: string, options: Options) {
  share(link(url, options), {
    width: 660,
    height: 460,
    position: 'windowCenter',
  });
}
