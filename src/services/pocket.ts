import assert from 'assert';
import stringify from 'utils/stringify';
import share from 'share';

type Options = {
  title?: string;
};

export function link(url: string, { title }: Options) {
  return `https://getpocket.com/save${stringify({
    url,
    title,
  })}`;
}

export default function pocket(url: string, options: Options) {
  share(link(url, options), {
    width: 500,
    height: 500,
  });
}
