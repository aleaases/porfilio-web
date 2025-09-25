# Proyecto de Página Web

Este proyecto es una aplicación web que incluye un formulario para la recolección de datos de los usuarios. A continuación se detallan los componentes y su funcionalidad.

## Estructura del Proyecto

```
pagina-web
├── src
│   ├── index.html          # Página principal de la aplicación
│   ├── styles              # Carpeta que contiene los estilos CSS
│   │   └── style.css       # Estilos para la página web
│   ├── scripts             # Carpeta que contiene los scripts JavaScript
│   │   └── main.js         # Lógica de la página
│   ├── components          # Carpeta que contiene componentes reutilizables
│   │   └── formulario.html  # Código HTML del formulario
│   └── types               # Carpeta que contiene tipos e interfaces
│       └── index.ts        # Tipos para los datos del formulario
├── db                      # Carpeta que contiene la base de datos
│   └── database.sql        # Instrucciones SQL para gestionar la base de datos
├── package.json            # Configuración de npm
├── tsconfig.json           # Configuración de TypeScript
└── README.md               # Documentación del proyecto
```

## Instalación

1. Clona el repositorio en tu máquina local.
2. Navega a la carpeta del proyecto.
3. Ejecuta `npm install` para instalar las dependencias necesarias.

## Uso

1. Abre `src/index.html` en tu navegador para ver la aplicación en funcionamiento.
2. Completa el formulario con tu correo electrónico, nombre, asunto y mensaje.
3. Haz clic en el botón de enviar para enviar tus datos.

## Base de Datos

El archivo `db/database.sql` contiene las instrucciones necesarias para crear las tablas que almacenarán la información del formulario. Asegúrate de ejecutar este script en tu sistema de gestión de bases de datos.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.