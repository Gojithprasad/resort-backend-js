
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


















curl --location 'https://resort-backend-js.onrender.com/status'

curl --location 'https://resort-backend-js.onrender.com/admin/login' \
--header 'Content-Type: application/json' \
--data '{
    "username":"admin",
    "password":"admin"
}'

curl --location --request POST 'https://resort-backend-js.onrender.com/admin/refresh-token' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFkbWluIiwidXNlcklkIjoiYWRtaW4tMSIsImlhdCI6MTc2NDYwNzA2NiwiZXhwIjoxNzY1MjExODY2fQ.gSKzDgPoypVhmrUjbZ9pQqDXA7zy-jF4s2V-bWem2Mw'

curl --location 'https://resort-backend-js.onrender.com/admin/booking' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFkbWluIiwidXNlcklkIjoiYWRtaW4tMSIsImlhdCI6MTc2NDYwNzIwOCwiZXhwIjoxNzY0NjA4MTA4fQ.DSFfr14MC9CWaYm-mfW963lGYHEkWantNnUg4aa0ycQ'

curl --location 'https://resort-backend-js.onrender.com/admin/booking' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFkbWluIiwidXNlcklkIjoiYWRtaW4tMSIsImlhdCI6MTc2NDYwNzIwOCwiZXhwIjoxNzY0NjA4MTA4fQ.DSFfr14MC9CWaYm-mfW963lGYHEkWantNnUg4aa0ycQ' \
--header 'Content-Type: application/json' \
--data '{
  "villa": "forest",
  "checkIn": "2025-04-16",
  "checkOut": "2025-02-18",
  "guests": 2,
  "specialRequest": "delay",
  "notes": "Please prepare the room before arrival."
}'

curl --location 'https://resort-backend-js.onrender.com/user/register' \
--header 'Content-Type: application/json' \
--data-raw '{
  "username": "akhil",
  "name": "akhil",
  "gender": "Male",
  "age": "30",
  "email": "user@example.com",
  "phone": "123456776590",
  "password": "qwer"
}'

curl --location 'https://resort-backend-js.onrender.com/user/login' \
--header 'Content-Type: application/json' \
--data '{
  "username": "akhil",
  "password": "qwer"
}'

curl --location --request POST 'https://resort-backend-js.onrender.com/user/refresh-token' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTJkYzY1NDc0NTI2NWJlNzZhN2Q2MmQiLCJ1c2VybmFtZSI6ImFraGlsIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3NjQ2MDc2MzAsImV4cCI6MTc2NTIxMjQzMH0.SIXBaGnrF8chdJzlgAvw28bXLgLgNcyLJ8E82TIkpEw'

curl --location 'https://resort-backend-js.onrender.com/user/booking' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTJkYzY1NDc0NTI2NWJlNzZhN2Q2MmQiLCJ1c2VybmFtZSI6ImFraGlsIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3NjQ2MDgwODEsImV4cCI6MTc2NDYwODk4MX0.F0RKRa4xk4ruyQzs59-omJMljriskePAvb09rNNfuWc'

curl --location 'https://resort-backend-js.onrender.com/user/booking' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTJkYzY1NDc0NTI2NWJlNzZhN2Q2MmQiLCJ1c2VybmFtZSI6ImFraGlsIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3NjQ2MDgwODEsImV4cCI6MTc2NDYwODk4MX0.F0RKRa4xk4ruyQzs59-omJMljriskePAvb09rNNfuWc' \
--header 'Content-Type: application/json' \
--data '{
  "villa": "sunrise",
  "checkIn": "2025-03-13",
  "checkOut": "2026-03-17",
  "guests": 4,
  "specialRequest": "late check-out",
  "notes": "Need extra towels and pillows."
}'