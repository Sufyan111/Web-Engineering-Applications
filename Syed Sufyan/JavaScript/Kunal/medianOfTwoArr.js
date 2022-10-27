const findMedianSortedArrays = (nums1, nums2) => {
  let arrNum = [...nums1, ...nums2].sort((a, b) => a - b);
  console.log(arrNum);
  if (arrNum.length % 2 !== 0) {
    return arrNum[Math.floor(arrNum.length / 2)];
  } else {
    return (arrNum[arrNum.length / 2 - 1] + arrNum[arrNum.length / 2]) / 2;
  }
};

console.log(findMedianSortedArrays([-1, 3], [-2]));
