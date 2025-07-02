export const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number)
}