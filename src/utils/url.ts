const object2Query = (
  obj: Record<string, string | number | boolean>,
): Nullable<string> => {
  if (!obj || typeof obj !== 'object') return null;

  const result = new URLSearchParams();
  const keys = Object.keys(obj).sort((a, b) => (a < b ? -1 : 1));
  keys.forEach((key) => {
    result.append(key, obj[key].toString());
  });

  return result.toString();
};

export { object2Query };
