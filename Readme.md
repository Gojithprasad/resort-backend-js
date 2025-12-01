
npm install
npm start

===================================

curl --location 'http://localhost:5000/admin/dashboard' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFkbWluIiwidXNlcklkIjoiYWRtaW4tMSIsImlhdCI6MTc2NDUyMzY1MiwiZXhwIjoxNzY0NTI0NTUyfQ.nAZFDyeevAfELGJsJlMsuDke5OeZsTgpOLZ5TxhJ1Qc'

curl --location 'http://localhost:5000/admin/login' \
--header 'Content-Type: application/json' \
--data '{
    "username":"admin",
    "password":"admin"
}'

curl --location 'http://localhost:5000/admin/booking' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFkbWluIiwidXNlcklkIjoiYWRtaW4tMSIsImlhdCI6MTc2NDUyNTM4NiwiZXhwIjoxNzY0NTI2Mjg2fQ._6TIjz1gWJKnNgRwYJLsx4GEDqPDzR0T4i5wBdcxtjs'

curl --location 'http://localhost:5000/admin/booking' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFkbWluIiwidXNlcklkIjoiYWRtaW4tMSIsImlhdCI6MTc2NDUyNTM4NiwiZXhwIjoxNzY0NTI2Mjg2fQ._6TIjz1gWJKnNgRwYJLsx4GEDqPDzR0T4i5wBdcxtjs' \
--header 'Content-Type: application/json' \
--data '{
  "villa": "sunset",
  "checkIn": "2025-02-15",
  "checkOut": "2025-02-18",
  "guests": 2,
  "specialRequest": "early",
  "notes": "Please prepare the room before arrival."
}
'

curl --location 'http://localhost:5000/user/register' \
--header 'Content-Type: application/json' \
--data-raw '{
  "username": "john_doe",
  "name": "John Doe",
  "gender": "Male",
  "age": "30",
  "email": "user@example.com",
  "phone": "1234567890",
  "password": "user"
}
'

curl --location 'http://localhost:5000/user/login' \
--header 'Content-Type: application/json' \
--data '{
  "username": "john_doe",
  "password": "user"
}
'

curl --location 'http://localhost:5000/user/booking' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTJjODczYmQ5YmI1YzRmMjI4NWY1NDMiLCJ1c2VybmFtZSI6ImpvaG5fZG9lIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3NjQ1MjU5NDMsImV4cCI6MTc2NDUyOTU0M30.pg9XAnRYK_icfV5EHkaayM3RMhwr158quMIHspe736g'


curl --location 'http://localhost:5000/user/booking' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTJjODczYmQ5YmI1YzRmMjI4NWY1NDMiLCJ1c2VybmFtZSI6ImpvaG5fZG9lIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3NjQ1MjU5NDMsImV4cCI6MTc2NDUyOTU0M30.pg9XAnRYK_icfV5EHkaayM3RMhwr158quMIHspe736g' \
--header 'Content-Type: application/json' \
--data '{
  "villa": "forest",
  "checkIn": "2025-03-10",
  "checkOut": "2025-03-15",
  "guests": 4,
  "specialRequest": "late check-out",
  "notes": "Need extra towels and pillows."
}
'



=======================================================================



admin login response

{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFkbWluIiwidXNlcklkIjoiYWRtaW4tMSIsImlhdCI6MTc2NDUyNTM4NiwiZXhwIjoxNzY0NTI2Mjg2fQ._6TIjz1gWJKnNgRwYJLsx4GEDqPDzR0T4i5wBdcxtjs",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFkbWluIiwidXNlcklkIjoiYWRtaW4tMSIsImlhdCI6MTc2NDUyNTM4NiwiZXhwIjoxNzY1MTMwMTg2fQ.iymPUvupj0FBjVquI45ttPQYLn5KglzhrM7uU5jH9Ec"
}

user login response

{
    "status": true,
    "message": "login success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTJjODczYmQ5YmI1YzRmMjI4NWY1NDMiLCJ1c2VybmFtZSI6ImpvaG5fZG9lIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3NjQ1MjU5NDMsImV4cCI6MTc2NDUyOTU0M30.pg9XAnRYK_icfV5EHkaayM3RMhwr158quMIHspe736g",
    "userId": "692c873bd9bb5c4f2285f543",
    "role": "User"
}