class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs.length) return "empty";

        const _strs = strs.join("_#");
        return _strs;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (!str) return [""];
        if (str == "empty") return [];
        return str.split("_#");
    }
}
