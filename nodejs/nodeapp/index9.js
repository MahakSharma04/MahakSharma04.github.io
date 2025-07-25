// email, password given by user if correct then token is generated
//login and post generates a token
//token is given in bearer and get and /users
//if token is correct and role is admin the only users are shown

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
  //res.json({message:"Access Denied"});
  try{let token = req.headers.authorization;//client token send krega to access the info(the token it got after login successfully and this token is only for john)
  token = token.split(" ")[1];//prefix "bearer" is removed
  const user= jwt.verify(token, SECRET);
  req.role = user.role;
  next();//will only go to next if role is admin
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

//token-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBlbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQiLCJyb2xlIjoidXNlciIsImlhdCI6MTc1MTYyNTk2Nn0.lTGgvl-mLhSifxvEnRcX6n4xT5KmnEukFUmJ38FR0fw

//token-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2F0aHkiLCJlbWFpbCI6ImNhdGh5QGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1MTYyNzM0NX0.RjnH0PgQgpb-HSMlLlTFhIVHXbuiRzYLuRd-_YX-EvE
