export default (obj: { [k: string]: any }) =>
  '?'.concat(
    Object.keys(obj)
      .map((k) =>
        Array.isArray(obj[k])
          ? obj[k].map((v: string) => `${k}[]=${v}`).join('&')
          : `${k}=${obj[k]}`
      )
      .join('&')
  );
