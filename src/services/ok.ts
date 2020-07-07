import assert from 'assert';
import stringify from 'utils/stringify';
import share from 'share';

type Options = {
  title?: string;
  description?: string;
  image?: string;
};

export function link(url: string, { title, description, image }: Options) {
  return `https://connect.ok.ru/offer${stringify({
    url,
    title,
    description,
    imageUrl: image,
  })}`;
}

export default function ok(url: string, options: Options) {
  share(link(url, options), {
    width: 588,
    height: 480,
    position: 'screenCenter',
  });
}
