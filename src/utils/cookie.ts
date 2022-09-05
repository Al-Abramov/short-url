export const setCookie = (name: string, value: string) => {
  document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
};

export function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
