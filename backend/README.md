<h1 align='center'>TuitionSoftware Backend 🎲</h1>

## 📋 Descripción 📋

ToutionSoftware Backend es un panel de usuario que te muestra la matrícula a los cursos de tu preferencia, como también los ya matriculados.

## 👨‍💻 Tecnologías 👨‍💻

Stack utilizado: MERN(Mysql, Express, React, Node)

- Backend
	- Express.js (Node.js)
	- Mysql
	- Prisma (ORM)
	- Passport.js (Authentication)
	- JWT (Authentication)
	- Boom (Errores)
	- Joi (Esquemas)
	- Playwright (Tests)
	- ...

## 🧭 Guia para testing 🧭

- Primer paso: 
    Crear un estudiante con haciendo una request a `http://localhost:5000/estudiante` con metodo *POST* y con la siguiente estructura:
    ```ts
    {
        "nombre": String,
        "carrera": String,
        "ciclo": Number,
        "foto": String?,
        "email": String,
        "password":String,
    }
    ```

- Segunda paso:
    Te devolvera un json con el *token*  y eso lo ingresa en el archivo .env, de la siguiente manera
     ```
     # Variables de entorno
     TOKEN_USER_TEST=token
     ```  

- Tercer paso:
    Ya puedes correr los test con el comando `npm run test` 👌👌

## 🙍‍♂️ Contribuidores 🙍‍♂️

  - [@alejooroncoy](https://github.com/alejooroncoy)
  - [@mario2701](https://github.com/Mario2701)
  - [@york](https://github.com/york30)
  - [@YHAGON](https://github.com/YHAGON)