import assert from 'assert';
import stringify from '../utils/stringify';
import share from '../share';

type Options = {
  quote?: string;
  hashtag?: string;
};

export function link(url: string, { quote, hashtag }: Options) {
  assert(url, 'workplace.url');

  return `https://work.facebook.com/sharer.php${stringify({
    u: url,
    quote,
    hashtag,
  })}`;
}

export default function workplace(url: string, options: Options) {
  share(link(url, options), {
    width: 550,
    height: 400,
  });
}
