export const toDecimals = (num: number, decimals = 2, minDecimals?: number) =>
  num.toLocaleString('en-EN', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: minDecimals ?? decimals,
  });

export const toDateString = (date: Date) =>
  date.toLocaleDateString('en-EN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
