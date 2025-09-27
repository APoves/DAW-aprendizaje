# Backend UserHubLogin

Backend de la aplicación web **UserHubLogin**.
<br>
<br>
API REST desarrollada con **Spring Boot 3.5.6**, **Java 21** y **MySQL**, con servicios REST para la gestión de usuarios.

---

## Tecnologías:

- Java 21.
- Spring Boot 3.5.6 (Web, Data JPA, DevTools, Actuator).
- Spring Data JPA.
- MySQL.
- Maven.

---

## Endpoints:

| Método | Endpoint       | Descripción                     |
|--------|----------------|---------------------------------|
| GET    | `/users`       | Muestra todos los usuarios        |
| POST   | `/users`       | Crea un nuevo usuario           |
| PUT    | `/users/{id}`  | Actualiza un usuario existente  |
| DELETE | `/users/{id}`  | Elimina un usuario por ID       |

---

## Estructura del Proyecto:

```text
backend_userhublogin/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/aurora/backend/userhublogin/backend_userhublogin/
│   │   │       ├── controllers/
│   │   │       │   └── UserController.java
│   │   │       ├── models/
│   │   │       │   └── entities/
│   │   │       │       └── User.java
│   │   │       ├── repositories/
│   │   │       │   └── UserRepository.java
│   │   │       ├── services/
│   │   │       │   ├── UserService.java
│   │   │       │   └── UserServiceImpl.java
│   │   │       └── BackendUserhubloginApplication.java
│   └── resources/
│       └── application.properties
├── pom.xml
```
---

## Créditos:

Este proyecto es únicamente un proyecto de aprendizaje, el cual se realiza íntegramente siguiendo el curso **React & Spring Boot: Creando Webapp Full Stack** de Andrés Guzmán.
