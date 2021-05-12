# CRUD-App
#### ENDPOINTS TO PERFORM CRUD OPERATIONS WITH POSTMAN 
+ ###### CREATE OPERATION 
  *To be able to create a data, please enter the data in the request body(raw) of postman in **json** format*  
  GET https://stormy-springs-07593.herokuapp.com/create  
  In the request body you add {"name": "Jod Doe", "email": "Doe@gmail.com", "country": " Nigeria "}

+ ###### READ OPERATION
  ###### READ ALL DATA
  - GET https://stormy-springs-07593.herokuapp.com/read  
  
  ###### READ SPECIFIC DATA  
  Specfic data can only be identified by their **name** 
  - GET https://stormy-springs-07593.herokuapp.com/read/Emeka
  
+ ###### UPDATE OPERATION
  GET https://stormy-springs-07593.herokuapp.com/update/Emeka  
  
  In the request body, specify the record you want to update. i.e. {"country": "UK"}
  
+ ###### DELETE OPERATION
  GET https://stormy-springs-07593.herokuapp.com/delete/Emeka
  
 #### SPECIAL NOTES
 All requests are **GET** requests  
 **Some data have been created by default**   
 
 
 #### HEROKU HOSTED LINK
 https://stormy-springs-07593.herokuapp.com/read
