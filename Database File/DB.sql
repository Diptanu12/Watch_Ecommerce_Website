use watchshop;

truncate product;
truncate category;
truncate user;
truncate user_role;

delimiter $$
create procedure productbycategory(in catid int)
begin

select * from product p inner join category c where c.catid = p.ct_catid and c.catid = catid;

end$$
delimiter ;

SET FOREIGN_KEY_CHECKS = 0; 
TRUNCATE `category`;
TRUNCATE `productbycategory`;
SET FOREIGN_KEY_CHECKS = 1;