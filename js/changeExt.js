export const changeExt = (fn, ext, postname = "") => {
  const n = fn.lastIndexOf(".");
  if (n < 0) return fn + postname + "." + ext;
  return fn.substring(0, n) + postname + "." + ext;
};
