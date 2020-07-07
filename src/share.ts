type NetworkLink<LinkOptions> = (url: string, options: LinkOptions) => string;

type WindowPosition = 'windowCenter' | 'screenCenter';

const isPromise = (obj: any | Promise<any>) =>
  !!obj &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';

const getBoxPositionOnWindowCenter = (width: number, height: number) => ({
  left:
    window.outerWidth / 2 +
    (window.screenX || window.screenLeft || 0) -
    width / 2,
  top:
    window.outerHeight / 2 +
    (window.screenY || window.screenTop || 0) -
    height / 2,
});

const getBoxPositionOnScreenCenter = (width: number, height: number) => ({
  top: (window.screen.height - height) / 2,
  left: (window.screen.width - width) / 2,
});

export default function share(
  url: string,
  {
    width,
    height,
    position = 'windowCenter',
    ...configRest
  }: {
    width: number;
    height: number;
    position?: WindowPosition;
  },
  onClose?: (dialog: Window | null) => void
) {
  const config: { [key: string]: string | number } = {
    width,
    height,
    ...(position === 'windowCenter'
      ? getBoxPositionOnWindowCenter(width, height)
      : getBoxPositionOnScreenCenter(width, height)),
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes',
    ...configRest,
  };

  const shareDialog = window.open(
    url,
    '',
    Object.keys(config)
      .map((key) => `${key}=${config[key]}`)
      .join(', ')
  );

  if (onClose) {
    const interval = window.setInterval(() => {
      try {
        if (shareDialog === null || shareDialog.closed) {
          window.clearInterval(interval);
          onClose(shareDialog);
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }, 1000);
  }

  return shareDialog;
}
