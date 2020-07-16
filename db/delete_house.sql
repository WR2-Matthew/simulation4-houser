delete from estates 
where id = $1

returning *;