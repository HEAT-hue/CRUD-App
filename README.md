# CRUD-App
#### ENDPOINTS TO PERFORM CRUD OPERATIONS WITH POSTMAN 
+ ###### CREATE OPERATION 
  *To be able to create a data, please enter the data the request body(raw) of postman in **json** format*  
  GET http://hostname/create  

+ ###### READ OPERATION
  ###### READ ALL DATA
  - GET http://hostname/read  
  
  ###### READ SPECIFIC DATA  
  Specfic data can only be identified by their **name** 
  - GET http://hostname/read/name
  
+ ###### UPDATE OPERATION
  GET http://hostname/update/name
  
+ ###### DELETE OPERATION
  GET http://hostname/delete/name
  
 #### SPECIAL NOTES
 All requests are **GET** requests  
 **Some data have been created by default**  
 
 ###HEROKU hosted link  
 https://stormy-springs-07593.herokuapp.com/read
