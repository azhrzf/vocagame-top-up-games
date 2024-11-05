export function trimWords(str: string, num: number): string {
  if (str.split(" ").length <= num) return str;
  return str.split(" ").slice(0, num).join(" ") + "...";
}

export function formatPrice(number: number): string {
  return new Intl.NumberFormat("id-ID").format(number);
}

export function getUniqueTime(): string {
  const date = new Date();
  return date.getTime().toString();
}

export function formatDate(dateInput: string | Date, complete = false): string {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  const simpleDate = date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const completeDate = date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const completeTime = date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return complete ? `${completeDate}, ${completeTime}` : simpleDate;
}
