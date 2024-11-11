const diagonalSum = require("./homework");

describe("Tests", () => {
    it("Should work", () => {
        expect(diagonalSum([[12]])).toBe(12);
        expect(diagonalSum([[1, 2], [3, 4]])).toBe(5);
        expect(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe(15);
        expect(diagonalSum([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])).toBe(34);
    }
    );
}
);