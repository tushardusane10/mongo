db.person.find({"pincode" : {$ne : null}});
// Above query selects all the records from person collection where pincode is notequsl to null ($ne)
