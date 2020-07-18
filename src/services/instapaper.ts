import stringify from '../utils/stringify';
import share from '../share';

type Options = {
  title?: string;
  description?: string;
};

export function link(url: string, { title, description }: Options) {
  return `http://www.instapaper.com/hello2${stringify({
    url,
    title,
    description,
  })}`;
}

export default function instapaper(url: string, options: Options) {
  share(link(url, options), {
    width: 500,
    height: 500,
  });
}
