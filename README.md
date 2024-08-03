number 1 answer is in index.html
view result at http://localhost:3500/

number 2 : this code is made based on tutorial on [YouTube Tutorial](https://www.youtube.com/watch?v=f2EqECiTBL8). 

usr admin
user: test2
password: pass1234

the database choosen is monggodb to save time

security measure choosen is using JWT token and cors to filter origin
API start from server.js -> seperate route one group without auth and other without auth
verifyJWT.js will verify an generate necesary token using jsonwebtoken library
then
verifyRole ussed to verify which API can be accessed (assigned at role_list)
from there each api can be found in api folder to deecide which function in eeach respective controller to call with which method/route
