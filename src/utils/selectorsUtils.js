export const sortByKey = (array, key) => {
    return array.sort((a, b) => {
        const x = a[key];
        const y = b[key];
        // eslint-disable-next-line
        return x < y ? -1 : x > y ? 1 : 0;
    });
};
