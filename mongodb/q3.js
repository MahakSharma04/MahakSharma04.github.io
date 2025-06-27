db.employees.find();// to show all
db.employees.find().skip(1);// only 1 skip and after that show all
db.employees.find().skip(1).limit(1);// 1 skip and after that show only 1
db.employees.find({ department: "IT" });

db.employees.find(
  { department: { $eq: "IT" } },
  { _id: 0, name: 1, salary: 1 }
);

db.employees.find({ salary: { $gt: 3000 } }, { _id: 0, name: 1, salary: 1 });

db.employees.find({ salary: { $gte: 3000 } }, { _id: 0, name: 1, salary: 1 });

db.employees.find({ salary: { $lt: 3000 } }, { _id: 0, name: 1, salary: 1 });

db.employees.find(
  { salary: { $lte: 3000 }, department: "IT" },
  { _id: 0, name: 1, salary: 1 }
);

db.employees.find(
  { $or: [{ salary: { $lte: 3000 } }, { department: "IT" }] },
  { _id: 0, name: 1, salary: 1 }
);

db.employees.find(
    {$or:[{},{}]}
)

db.employees.find({department:{$eq:"IT"}})

db.employees.find({department:{$ne:"IT"}})