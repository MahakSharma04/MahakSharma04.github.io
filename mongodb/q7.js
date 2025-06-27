//posts
//_id-post
//p1-Post 1
//p2-Post 2

//comments
//_id-pid-comment
//c1-p1-Comment1
//c2-p1-Comment2
//c3-p2-Comment1
//c4-p2-Comment2
//c5-p2-Comment3

db.posts.insertMany([
    { _id: "p1", title: "Post 1" },
    { _id: "p2", title: "Post 2" }
  ]);

  db.comments.insertMany([
    { _id: "c1", pid: "p1", comment: "Comment1" },
    { _id: "c2", pid: "p1", comment: "Comment2" },
    { _id: "c3", pid: "p2", comment: "Comment1" },
    { _id: "c4", pid: "p2", comment: "Comment2" },
    { _id: "c5", pid: "p2", comment: "Comment3" }
  ]);
    

  db.posts.aggregate([//lookup operator is very important - 4 fields
    {
      $lookup: {
        from: "comments",     // collection to join with
        localField: "_id",    // field from posts(posts se lookup to comments)
        foreignField: "pid",  // field from comments
        as: "comments"    // name of the array field to add(only for display)
      }
    }
  ])
  