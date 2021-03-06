export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'USD', // BRL
    minimumFractionDigits: 2,
  };

  // check if its a clean amount
  if (amount % 100 === 0) options.minimumFractionDigits = 0;

  const formatter = Intl.NumberFormat('en-US' /* pt-BR */, options);

  return formatter.format(amount / 100);
}
