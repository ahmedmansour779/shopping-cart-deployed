const CURRENCY_FORMATTER = new Intl.NumberFormat('en-EG', {
    currency: "EGP",
    style: "currency",
})

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
}