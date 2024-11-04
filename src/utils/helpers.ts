export function trimWords(str: string, num: number): string {
  if (str.split(" ").length <= num) return str;
  return str.split(" ").slice(0, num).join(" ") + "...";
}

export function formatPrice(number: number): string {
  return new Intl.NumberFormat("id-ID").format(number);
}

export function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
