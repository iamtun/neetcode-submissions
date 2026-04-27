class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 1) {
            return [strs]
        }

        const results = [];

        for (let i = 0; i < strs.length; ++i) {
            const str1 = strs[i].split('').sort();
            const arrs = [strs[i]];
            for (let j = i + 1; j < strs.length; ++j) {
                const str2 = strs[j].split('').sort();
                if (str1.join('') === str2.join('')) {
                    arrs.push(strs[j])
                    strs.splice(j,1);
                    j--;
                }

            }
            results.push(arrs)
        }

        return results;
    }
}
