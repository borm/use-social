import assert from 'assert';
import stringify from 'utils/stringify';
import share from 'share';

type Options = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

export function link(url: string, { title, description, imageUrl }: Options) {
  assert(url, 'facebook.url');
  return `https://connect.mail.ru/share${stringify({
    url,
    title,
    description,
    image_url: imageUrl,
  })}`;
}

export default function mailru(url: string, options: Options) {
  share(link(url, options), {
    width: 660,
    height: 460,
  });
}
