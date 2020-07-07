import assert from 'assert';
import stringify from 'utils/stringify';
import share from 'share';

type Options = {
  title?: string;
  separator?: string;
};

export function link(url: string, { title, separator }: Options) {
  assert(url, 'viber.url');
  return `viber://forward${stringify({
    text: title ? title + separator + url : url,
  })}`;
}

export default function viber(url: string, options: Options) {
  share(link(url, options), {
    width: 660,
    height: 460,
  });
}
