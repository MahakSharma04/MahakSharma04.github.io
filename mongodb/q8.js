//aggregate, lookup, unwind ,group is very important
//marks

//name,term,subject,score
//john,t1,maths,98
//john,t2,maths,90
//john,t3,maths,91
//john,t1,science,92
//john,t2,science,45
//john,t3,science,83
//cathy,t1,maths,77
//cathy,t2,maths,95
//cathy,t3,maths,91
//cathy,t1,science,92
//cathy,t2,science,80
//cathy,t3,science,99

db.marks.insertMany([
    { name: "c1", term: "t1", subject: "maths", score: 98 },
    { name: "c1", term: "t2", subject: "maths", score: 99 },
    { name: "c1", term: "t3", subject: "maths", score: 80 },
    { name: "c1", term: "t1", subject: "science", score: 77 },
    { name: "c1", term: "t2", subject: "science", score: 60 },
    { name: "c1", term: "t3", subject: "science", score: 81 },
    { name: "c2", term: "t1", subject: "maths", score: 99 },
    { name: "c2", term: "t2", subject: "maths", score: 80 },
    { name: "c2", term: "t3", subject: "maths", score: 73 },
    { name: "c2", term: "t1", subject: "science", score: 94 },
    { name: "c2", term: "t2", subject: "science", score: 77 },
    { name: "c2", term: "t3", subject: "science", score: 76 }
  ]);

  //display average score of each student
db.marks.aggregate([
    {$group :{
        _id: "$name",
        AvgScore: { $avg: "$score"}
    }}
])

db.marks.aggregate([
    {$group :{
        _id: "$term",
        AvgScore: { $avg: "$score"}
    }}
])

db.marks.aggregate([
    {$group :{
        _id: {term:"$term", subject: "$subject"},
        AvgScore: { $avg: "$score"}}},
        {$sort:{_id:1}}
])

db.marks.aggregate([
    { $match: { name: "c1" } },
    {
      $group: {
        _id: { term: "$term", name: "$name"},
        AvgScore: { $avg: "$score" }
      }
    },
    { $sort: { "_id.term": 1 } }
])  

db.studentInfo.insertMany([
    {_id: "s1", name: "c1"},
    {_id: "s2", name: "c2"},
])

db.marks.updateMany(
    {},
    {$rename: {name: "sid"}
    })

db.marks.updateMany(
    {sid: "c1"},
    {$set: {sid:"s1"}}
)

db.marks.updateMany(
    {sid: "c2"},
    {$set: {sid:"s2"}}
)

db.studentInfo.aggregate([
    {$lookup: {from: "marks",
        localField: "_id",
        foreignField: "sid",
        as: "marks",
    },
},
{$unwind: "$marks"},
{$group: {
    _id:"$marks.term", AvgScore: {$avg: "$marks.score"},
}}
])

// if multiple collections then lookup-unwind-lookup-unwind-soon... and then group or something