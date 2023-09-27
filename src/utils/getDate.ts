export const getDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("ru-ru");
}