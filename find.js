
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



 

