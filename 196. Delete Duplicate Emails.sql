-- Write a SQL query to delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest Id.

-- +----+------------------+
-- | Id | Email            |
-- +----+------------------+
-- | 1  | john@example.com |
-- | 2  | bob@example.com  |
-- | 3  | john@example.com |
-- +----+------------------+
-- Id is the primary key column for this table.
-- For example, after running your query, the above Person table should have the following rows:

-- +----+------------------+
-- | Id | Email            |
-- +----+------------------+
-- | 1  | john@example.com |
-- | 2  | bob@example.com  |
+----+------------------+

# Write your MySQL query statement below
delete p from Person p where p.Id not in ( select Id from ( select min(Person.Id) as Id from Person group by Person.Email ) as toRemoved );

# Write your MySQL query statement below
delete p1 from Person p1, Person p2 where p1.Email = p2.Email and p1.Id > p2.Id;