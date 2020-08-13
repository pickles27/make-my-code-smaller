export const submissionList = [
  {
    id: "1",
    author: "pickles1337",
    title: "i challenge you",
    body: `var maxSubArray = function(nums) {
      var max = nums[0];
      var count;
      for (var start = 0; start < nums.length; start++) {
          count = nums[start];
          for (var end = start; end < nums.length; end++) {
              if (start !== end) {
                  count += nums[end];
              }
              if (count > max) {
                  max = count;
              }
          }
      }
      
      return max;
  };`
  },
  {
    id: "2",
    author: "dart",
    title: "i like food a LOT",
    body: "here lies a bunch of code."
  },
  {
    id: "3",
    author: "maddie",
    title: "i will murder your napkins",
    body: "this is where the code goes."
  }
];
