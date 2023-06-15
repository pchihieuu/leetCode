# Write your MySQL query statement below
--
-- @lc app=leetcode id=185 lang=mysql
--
-- [185] Department Top Three Salaries
--

-- @lc code=start
# Write your MySQL query statement below
SELECT d.name AS Department, e.name AS Employee, e.salary 
FROM Employee AS e
INNER JOIN Department AS d
ON d.id = e.departmentId
WHERE (
    SELECT
    COUNT(DISTINCT(salary))
    FROM Employee
    WHERE salary > e.salary
    AND DepartmentId = e.DepartmentId        
) < 3;
-- @lc code=end
