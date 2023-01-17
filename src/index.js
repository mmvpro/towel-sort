module.exports = function towelSort(matrix = []) {
    if (matrix.length) {
        for (let i = 1; i < matrix.length; i += 2) {
            matrix[i].reverse();
        }
        return matrix
            .toString()
            .split(",")
            .map((e) => +e);
    } else return matrix;
};
