import assert from 'assert';
import stringify from '../utils/stringify';
import share from '../share';

type Options = {
  title?: string;
  description?: string;
};

export function link(url: string, { title, description }: Options) {
  assert(url, 'livejournal.url');
  return `https://www.livejournal.com/update.bml${stringify({
    subject: title,
    event: description,
  })}`;
}

export default function livejournal(url: string, options: Options) {
  share(link(url, options), {
    width: 660,
    height: 460,
  });
}
