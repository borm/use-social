import assert from 'assert';
import stringify from 'utils/stringify';
import share from 'share';

type Options = {
  quote?: string;
  hashtag?: string;
};

export function link(url: string, { quote, hashtag }: Options) {
  assert(url, 'facebook.url');
  return `https://www.facebook.com/sharer/sharer.php${stringify({
    u: url,
    quote,
    hashtag,
  })}`;
}

export default function facebook(url: string, options: Options) {
  share(link(url, options), {
    width: 550,
    height: 400,
  });
}
