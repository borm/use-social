import assert from 'assert';
import stringify from 'utils/stringify';
import share from 'share';

type Options = {
  media?: string;
  description?: string;
};

export function link(url: string, { media, description }: Options) {
  return `https://pinterest.com/pin/create/button/${stringify({
    url,
    media,
    description,
  })}`;
}

export default function pinterest(url: string, options: Options) {
  share(link(url, options), {
    width: 1000,
    height: 730,
  });
}
