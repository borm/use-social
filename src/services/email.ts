import stringify from 'utils/stringify';

type Options = {
  body?: string;
  separator?: string;
  subject?: string;
};

export default function email(
  url: string,
  { subject, body, separator = ' ' }: Options
) {
  window.location.href = `mailto:${stringify({
    subject,
    body: body ? `${body}${separator}${url}` : url,
  })}`;
}
