
db.getCollection("person").find({"fname": "Dummy1"}, {"address" : 0}, {"lname" : 1, "dob" : 1, "pancard" : 1} );
/* above query would get all the records from person where fname = dummy
    in projection it will show all the columns value is one and ignore columns where value is 0
*/


db.getCollection("person").find({});
/**
    Above query would select all the documents from the person collection
    Here are the fields are select in o/p
*/

db.getCollection("person").find({}).limit(2);
/**
    Above query would select just select only top 2 records
    Here are the fields are select in o/p
*/

db.getCollection("person").find({}).skip(2);
/**
    Above query would select just skip top 2 records
    Here are the fields are select in o/p
*/
db.getCollection("person").find({}).sort({"pancard" : 1});
db.getCollection("person").find({}).sort({"pancard" : -1});
/**
    Above query would return all the records, sorted in ascending order
    1 means ascending
    -1 means decending
    Here are the fields are select in o/p
*/

db.getCollection("person").find({"fname" : "Dummy1"});
/**
    Above query would select all the documents from collection where fname is Dummy1
    Here are the fields are select in o/p
*/


db.getCollection("person").find({"fname" : "Dummy1", "lname" : "Dummy2"});
/**
    Above query would select all the documents from collection where fname is Dummy1 and lname is Dummy2
    Here are the fields are select in o/p
*/

db.getCollection("person").find({}).count();

/**
    Above query return the count of records returned.
*/

db.person.countDocuments({"fname" : "Dummy1", "lname" : "Dummy1"});

/*
    Above query would count the no of records return by the query in {"fname" : "Dummy1", "lname" : "Dummy1"}
*/

db.person.find();
/**
    Instead of using db.getCollection("collectionname").find we can directly use db.collectionname as show above
*/

db.person.distinct("lname");
/**
    Above query return the distinct values from the collection for a given field
*/

db.person.findOne({"lname":"Dummy2"}, {"fname":1, "address":1, "pincode":1, "pancard": 1});

/**
    Above query would find a single record from the documents and how the coumns mained in seocnd object

*/

//db.person.findOne({"_id":"65ca52b56f11a145603ccaca"}, {"fname":1, "address":1, "pincode":1, "pancard": 1});
