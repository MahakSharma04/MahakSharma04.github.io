import bcrypt from 'bcrypt';
// const pwd='pass1234';
// const hashedpwd = await bcrypt.hash(pwd,10)
// console.log(hashedpwd);

const check = await bcrypt.compare('pass1234',"$2b$10$2FP90er.3Nx4wq/bmV01WuZKQQZHBY2auh.Pwn60LNXyY9GIhHjBG");
console.log(check);
