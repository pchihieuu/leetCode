/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    let n = nums.length;
    let mid = findKthLargest(nums, Math.floor((n + 1) / 2));
    let i = 0, j = 0, k = n - 1;
    while (j <= k) {
        if (nums[newIndex(j, n)] > mid) {
            swap(nums, newIndex(i++, n), newIndex(j++, n));
        } else if (nums[newIndex(j, n)] < mid) {
            swap(nums, newIndex(j, n), newIndex(k--, n));
        } else {
            j++;
        }
    }
};

function findKthLargest(nums, k) {
    let n = nums.length;
    let left = 0, right = n - 1;
    while (true) {
        let pos = partition(nums, left, right);
        if (pos === k - 1) {
            return nums[pos];
        } else if (pos > k - 1) {
            right = pos - 1;
        } else {
            left = pos + 1;
        }
    }
};

function partition(nums, left, right) {
    let pivot = nums[left];
    let l = left + 1, r = right;
    while (l <= r) {
        if (nums[l] < pivot && nums[r] > pivot) {
            swap(nums, l++, r--);
        }
        if (nums[l] >= pivot) {
            l++;
        }
        if (nums[r] <= pivot) {
            r--;
        }
    }
    swap(nums, left, r);
    return r;
};

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};

function newIndex(index, n) {
    return (1 + 2 * index) % (n | 1);
};