/**
 * @namespace PF.Heuristic
 * @description A collection of heuristic functions.
 */
module.exports = {

    /**
     * Manhattan distance.
     * @param {number} dx - Difference in x.
     * @param {number} dy - Difference in y.
     * @return {number} dx + dy
     */
    manhattan: function(dx, dy) {
        return dx + dy;
    },

    /**
     * Euclidean distance.
     * @param {number} dx - Difference in x.
     * @param {number} dy - Difference in y.
     * @return {number} sqrt(dx * dx + dy * dy)
     */
    euclidean: function(dx, dy) {
        return Math.sqrt(dx * dx + dy * dy);
    },

    /**
     * Chebyshev distance.
     * @param {number} dx - Difference in x.
     * @param {number} dy - Difference in y.
     * @return {number} max(xdist, ydist) for grids
     */
    chebyshev: function(dx, dy) {
        return max(Math.sqrt(dx * dx), Math.sqrt(dy * dy));
    },
}