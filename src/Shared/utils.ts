export const formatDate = (date: string) => {
    return date.slice(0, 10) + ' às ' + date.slice(11, 13);
}