export function trimWords(str: string, num: number): string {
  if (str.split(" ").length <= num) return str;
  return str.split(" ").slice(0, num).join(" ") + "...";
}

export function formatPrice(number: number): string {
  return new Intl.NumberFormat("id-ID").format(number);
}
