class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumber(c) {
        return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9");
    }
    isPalindrome(s) {
        const sCleaned = s
            .split("")
            .filter((c) => this.isAlphanumber(c))
            .join("")
            .toLowerCase();

        return sCleaned === sCleaned.split("").reverse().join("");
    }
}
