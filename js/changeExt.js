export const changeExt = (fn, ext) => {
  const n = fn.lastIndexOf(".");
  if (n < 0) return fn + "." + ext;
  return fn.substring(0, n + 1) + ext;
};
