export const showImage = (url: string) => {
  let baseUrl = 'http://192.168.100.45:1339';
  let finalUrl = `${baseUrl}${url}`;
  return finalUrl;
};
