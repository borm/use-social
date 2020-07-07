import assert from 'assert';
import share from 'share';
import stringify from 'utils/stringify';

type Options = {
  title?: string;
  separator?: string;
};

function isMobileOrTablet() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}

export function link(url: string, { title, separator }: Options) {
  assert(url, 'whatsapp.url');
  return `https://${
    isMobileOrTablet() ? 'api' : 'web'
  }.whatsapp.com/send${stringify({
    text: title ? title + separator + url : url,
  })}`;
}

export default function whatsapp(url: string, options: Options) {
  share(link(url, options), {
    width: 550,
    height: 400,
  });
}
