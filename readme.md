## configurar la variables de entorno
- En el archivo .env se configuran para node
- En la carpeta php_service dentro de la carpeta config está el archvo db.php para configurar la db para los servicios de PHP

## Base de datos
Crear una base de datos (configurar el nombre en las variables de entorno)
- Ejecutar `npm run db` -> Crea las tablas y las llena con datos


## Ejecutar los siguiente comandos para inciar el proyecto

### Para los servicios en php
- `npm run php:install` -> intala las dependencias
- `npm run php:up` -> levanta un servidor PHP para ejecutar

### Para los servicios de node
- `npm i` -> instalas dependencias
- `npm run start `-> para iniciar el servidor