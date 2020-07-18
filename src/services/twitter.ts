import assert from 'assert';
import stringify from '../utils/stringify';
import share from '../share';

type Options = {
  title?: string;
  via?: string;
  hashtags?: string[];
  related?: string[];
};

export function link(
  url: string,
  { title, via, hashtags = [], related = [] }: Options
) {
  assert(url, 'twitter.url');
  assert(Array.isArray(hashtags), 'twitter.hashtags is not an array');
  assert(Array.isArray(related), 'twitter.related is not an array');

  return `https://twitter.com/share${stringify({
    url,
    text: title,
    via,
    hashtags: hashtags.length > 0 ? hashtags.join(',') : undefined,
    related: related.length > 0 ? related.join(',') : undefined,
  })}`;
}

export default function twitter(url: string, options: Options) {
  share(link(url, options), {
    width: 550,
    height: 400,
  });
}
