#**Implementasi desain pattern MVC, MRC**

Bagaimana cara penggunaannya?

1. npm install
2. Miration (sequelize db:migrate)
3. Seed (sequelize db:seed:all) PENTING!!!
   -Masuk sebagai admin ==> USERNAME : admin, PASSWORD: admin,
   -Masuk sebagai user ==> USERNAME : user, PASSWORD: admin
4. npm start

TYPE API PERTAMA(MVC)

- API versi pertama untuk pemain tunggal (Player 1 vs Com) dengan arsitektur MVC, (render sisi server menggunakan template engine)

Penggunaan TYPE(MVC)

1. ENDPOINT default http://localhost:8000

TYPE API KEDUA(MCR)

- API versi kedua (JSON API) untuk multipemain (Pemain 1 vs Pemain 2) dengan arsitektur MCR, berjalan menggunakan POSTMAN

Penggunaan Type(MCR)

1.  Login terlebih dahulu menggunakan postman dengan endpoint : http://localhost:8000/api/v2/users/login

    - masukan data body type JSON :
      Request:
      {
      "username":"admin",
      "password":"admin"
      }
      Response:
      {
      "id": "9192bceb-eeb2-454e-ad32-86eb3d482e67",
      "username": "admin",
      "tokenAccess": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkxOTJiY2ViLWVlYjItNDU0ZS1hZDMyLTg2ZWIzZDQ4MmU2NyIsInVzZXJuYW1lIjoiYWpob3NhbiIsImlhdCI6MTYzNzU4OTg2Mn0.VsEtsV4qCED9aaNlWiWo8EQ64ctfETlc7mAhElT1blA"

      }

2.  Buat room untuk memulai permainan menggunakan postman dengan endpoint : http://localhost:8000/api/v2/users/create-room

    -masukan data body type JSON :
      Request:
      {
      "name": "admin",
      "player1Id": "06896bd4-8cbc-48c6-8c46-9364a6d939c4" (sesuaikan dengan ID player)
      }
    -dan masukan Authorization di dalam headers menggunakan tokenAccess yang terdapat di response login

3.  Join room untuk player 2(jangan lupa login terlebih dahulu) menggunakan postman dengan endpoint : http://localhost:8000/api/v2/users/join

    - Masukan data body type JSON:
      Request:
      {
      "id": "084b2efa-392c-4261-86f0-ac7fe899d0da", (sesuaikan dengan ID Room)
      "player2Id": "9192bceb-eeb2-454e-ad32-86eb3d482e67" (sesuaikan dengan ID player)
      }
    - dan masukan Authorization di dalam headers menggunakan tokenAccess yang terdapat di response login

4.  Selanjutnya untuk memulai permainan dapat menggunakan endpoint Fight : http://localhost:8000/api/v2/users/fight/:id_room

    - Masukan data body type JSON:
      Request:
      {
      "room_id": "084b2efa-392c-4261-86f0-ac7fe899d0da", (Masukan sesuai ID ROOM)
      "userId": "06896bd4-8cbc-48c6-8c46-9364a6d939c4", (Masukan sesuai ID Player yang terdapat di table room)
      "pick": "R" (memilih R = Batu, S = Gunting, P = Kertas)
      }

      Response:
      {
      "status": "success",
      "player1": [
      "S",
      "R",
      "R"
      ],
      "player2": [
      "R",
      "R",
      "P"
      ],
      "result": [
      "PLAYER 2 WIN",
      "DRAW",
      "PLAYER 2 WIN"
      ]
      }

5.  Untuk melihat result dapat memasukan endpoint : http://localhost:8000/api/v2/users/result/:id_room
