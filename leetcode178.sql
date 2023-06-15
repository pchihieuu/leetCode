# Write your MySQL query statement below
--
-- @lc app=leetcode id=178 lang=mysql
--
-- [178] Rank Scores
--

-- @lc code=start
# Write your MySQL query statement below
SELECT score,
    DENSE_RANK() OVER (ORDER BY score DESC) AS 'Rank'
FROM Scores
-- @lc code=end