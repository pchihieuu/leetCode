/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
    let res = [];
    for (let i = Math.max(0, k - nums2.length); i <= Math.min(k, nums1.length); i++) {
        let candidate = merge(maxArray(nums1, i), maxArray(nums2, k - i), k);
        if (greater(candidate, 0, res, 0)) {
            res = candidate;
        }
    }
    return res;
};

function maxArray(nums, k) {
    let res = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        while (res.length > 0 && res.length + n - i > k && res[res.length - 1] < nums[i]) {
            res.pop();
        }
        if (res.length < k) {
            res.push(nums[i]);
        }
    }
    return res;
};

function merge(nums1, nums2, k) {
    let res = [];
    let i = 0, j = 0;
    while (i < nums1.length || j < nums2.length) {
        let n1 = nums1.slice(i);
        let n2 = nums2.slice(j);
        if (greater(n1, 0, n2, 0)) {
            res.push(nums1[i++]);
        } else {
            res.push(nums2[j++]);
        }
    }
    return res;
};

function greater(nums1, i, nums2, j) {
    while (i < nums1.length && j < nums2.length && nums1[i] === nums2[j]) {
        i++;
        j++;
    }
    return j === nums2.length || (i < nums1.length && nums1[i] > nums2[j]);
};