import express from "express";
import jwt from "jsonwebtoken";
const SECRET="bhjhbh";
const app = express();
app.listen(8080, () => {
  console.log("Server started");
});
const users = [
  {
    name: "John",
    email: "john@email.com",
    password: "1234",
    role: "user",
  },
  {
    name: "Cathy",
    email: "cathy@email.com",
    password: "1234",
    role: "admin",
  },
];
app.use(express.json());
const authenticate = (req, res, next)=>{
  
  try{let token = req.headers.authorization;//client token send krega to access the info(the token it got after login successfully and this token is only for john)
  token = token.split(" ")[1];//prefix "bearer" is removed
  const user= jwt.verify(token, SECRET);
  req.role = user.role;
  next();
  }catch(err){
    return res.json({message:"Access Denied"});
  }
};

const authorize = (role) =>{//admin will be used in role ,//...role is used when more than one role is for one user
  return (req,res, next)=>{
    if(req.role===role){
      next();
    }else{
      return res.json({message:"Access denied"});//giving return is important
      //as in middleware if next() is called then problem will occur
    }
  }
}

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const found = users.find(
    (user) => user.email === email && user.password === password
  );
  if (found) {
    const token = jwt.sign(found,SECRET)//creates a token
    res.status(200).json({user: found, token});//in token john's email password is stored
  } else {
    res.status(400).json({ message: "Access Denied" });
  }
});

app.get("/users", authenticate, authorize("admin"),(req,res)=>{
  res.json(users);
});

app.post("/register", (req,res)=>{
    const {name, email, password, role} = req.body;
    const hashedpwd = bcrypt.hash(password, 10);
    const user = {
        name,
        email,
        password: hashedpwd,
        role,
    };
    users.push(user);
    res.json(user);
});