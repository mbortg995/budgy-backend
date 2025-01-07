# budgy-backend
Parte backend de "Budgy", un software para registrar tus gastos programados y tener una proyección de tus ahorros futuros.
## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (normalmente se instala junto con Node.js)
- [MongoDB](https://www.mongodb.com/)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
  ```bash
  git clone https://github.com/tu-usuario/budgy-backend.git
  ```
2. Navega al directorio del proyecto:
  ```bash
  cd budgy-backend
  ```
3. Instala las dependencias:
  ```bash
  npm install
  ```
4. Configura las variables de entorno:
  - Crea un archivo `.env` en la raíz del proyecto.
  - Añade las siguientes variables de entorno al archivo `.env`:
    ```plaintext
    MONGODB_URI=mongodb://localhost:27017/budgy
    JWT_PRIVATE_KEY=tu_secreto_jwt
    ```

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:
```bash
npm start
```

El servidor debería estar corriendo en `http://localhost:3000`.

## Pruebas

Para ejecutar las pruebas, usa el siguiente comando:
```bash
npm test
```

## Contribuir

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request en GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.