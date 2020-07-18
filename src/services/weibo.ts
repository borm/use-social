import assert from 'assert';
import stringify from '../utils/stringify';
import share from '../share';

type Options = {
  title?: string;
  image?: string;
};

export function link(url: string, { title, image }: Options) {
  assert(url, 'weibo.url');

  return `http://service.weibo.com/share/share.php${stringify({
    url,
    title,
    pic: image,
  })}`;
}

export default function weibo(url: string, options: Options) {
  share(link(url, options), {
    width: 660,
    height: 550,
    position: 'screenCenter',
  });
}
