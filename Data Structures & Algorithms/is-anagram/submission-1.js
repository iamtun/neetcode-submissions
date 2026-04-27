class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sArrs = s.split('').sort();
        const tArrs = t.split('').sort();
        return sArrs.join('') === tArrs.join('');
    }
}
