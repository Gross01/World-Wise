export const formatNumber = (number: number | undefined) => {
    if (number) {
        return new Intl.NumberFormat().format(number)
    }
}