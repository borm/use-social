import assert from 'assert';
import stringify from '../utils/stringify';
import share from '../share';

type Options = {
  text?: string;
};

export function link(url: string, { text }: Options) {
  assert(url, 'telegram.url');
  return `https://telegram.me/share/${stringify({
    url,
    text,
  })}`;
}

export default function telegram(url: string, options: Options) {
  share(link(url, options), {
    width: 550,
    height: 400,
  });
}
