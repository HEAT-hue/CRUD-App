# CRUD-App
#### ENDPOINTS TO PERFORM CRUD OPERATIONS WITH POSTMAN 
+ ###### CREATE OPERATION 
  *To be able to create a data, please enter the data in the request body(raw) of postman in **json** format*  
  In the request body you add {"name": "John Doe", "email": "Doe@gmail.com", "country": " Nigeria "}  
  
  GET https://stormy-springs-07593.herokuapp.com/create  
  

+ ###### READ OPERATION
  ###### READ ALL DATA  
  GET https://stormy-springs-07593.herokuapp.com/read  
  
  ###### READ SPECIFIC DATA  
  Specfic data can only be identified by their **name**  
  The link below reads doc: Emeka    
  GET https://stormy-springs-07593.herokuapp.com/read/Emeka
  
+ ###### UPDATE OPERATION  
  The link below updates doc: Dubem     
  In the request body, specify the record you want to update. i.e. {"country": "UK"}  
  GET https://stormy-springs-07593.herokuapp.com/update/Dubem  
  
+ ###### DELETE OPERATION  
  The link below deletes doc: Daniel  
  GET https://stormy-springs-07593.herokuapp.com/delete/Daniel
  
 #### SPECIAL NOTES
 All requests are **GET** requests  
 **Some data have been created by default**  
 **To read, update and delete *any specific data*, add the name of the data/doc at the end of the url with the correct CRUD operation specified**  
 https://stormy-springs-07593.herokuapp.com/  
 
 
 
 #### HEROKU HOSTED LINK
 https://stormy-springs-07593.herokuapp.com/read
