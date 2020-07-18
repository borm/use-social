import assert from 'assert';
import stringify from '../utils/stringify';
import share from '../share';

type Options = {
  title?: string;
  image?: string;
  noParse?: boolean;
  noVkLinks?: boolean;
};

export function link(
  url: string,
  { title, image, noParse, noVkLinks }: Options
) {
  assert(url, 'vk.url');

  return `https://vk.com/share.php${stringify({
    url,
    title,
    image,
    noparse: noParse ? 1 : 0,
    no_vk_links: noVkLinks ? 1 : 0,
  })}`;
}

export default function vk(url: string, options: Options) {
  share(link(url, options), {
    width: 660,
    height: 460,
  });
}
