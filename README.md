# Proyecto Frontend en Next.js para el Módulo 4 del Diplomado Fullstack

## Tabla de Contenidos
1. [Requisitos Previos](#requisitos-previos)
2. [Instalación](#instalación)
3. [Configuración](#configuración)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Uso](#uso)
6. [Ejecución de Pruebas E2E](#ejecución-de-pruebas-e2e)

## Requisitos Previos

Antes de empezar, asegúrate de tener instaladas las siguientes herramientas:

- Node.js (versión 22.x o superior)
- npm (versión 10.x o superior) o yarn (versión 1.x o superior)
- Git (para clonar el repositorio)

Puedes verificar las versiones instaladas ejecutando los siguientes comandos:

```bash
node -v
npm -v
yarn -v
git --version
```

## Instalación

1. **Clonar el repositorio del proyecto:**

   ```bash
   git clone https://github.com/gabriel-menacho/dipl-mod4-proyecto-final.git
   cd dipl-mod4-proyecto-final
   git fetch
   git checkout modulo5-proyecto-final
   ```

2. **Instalar dependencias:**

   Navega al directorio del proyecto y ejecuta:

   ```bash
   npm install
   # o
   yarn install
   ```


2. **Clonar el repositorio del proyecto backend:**


   ```bash
   git clone https://github.com/IonVillarreal/nestjs-product-gallery.git
   cd nestjs-product-gallery
   ```

   Seguidamente, seguir las instrucciones en su [README.md](https://github.com/IonVillarreal/nestjs-product-gallery/blob/main/README.md)

## Configuración

### Configuración de Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto para almacenar las variables de entorno:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
/modulo5-proyecto-final
  /src
    /components   # Componentes React reutilizables
    /app          # Páginas de Next.js
    /config       # Configuración para el proyecto
  /public         # Archivos estáticos
  .env.local      # Variables de entorno
  next.config.js  # Configuración de Next.js
  package.json    # Dependencias y scripts del proyecto
  README.md       # Documentación del proyecto
```

## Uso

### Iniciar el Servidor de Desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
# o
yarn dev
```

Esto iniciará el servidor en `http://localhost:8000`.

### Construir el Proyecto para Producción

Para construir el proyecto para producción, ejecuta:

```bash
npm run build
# o
yarn build
```

Esto generará una versión optimizada del proyecto en la carpeta `.next`.

### Ejecutar el Proyecto en Modo Producción

Para ejecutar el proyecto en modo producción, primero construye el proyecto y luego inicia el servidor:

```bash
npm run build
npm start
# o
yarn build
yarn start
```

El proyecto estará disponible en `http://localhost:8000`.

## Ejecución de Pruebas E2E

Para ejecutar las pruebas E2E en modo interactivo, utiliza:

```bash
npx cypress open
# o
yarn run cypress open
```

Esto abrirá la interfaz de Cypress donde podrás seleccionar y ejecutar las pruebas.

Para ejecutar las pruebas en modo headless (sin interfaz gráfica), utiliza:

```bash
npx cypress run
# o
yarn run cypress run
```
---

[Volver al inicio](#proyecto-frontend-en-nextjs-para-el-módulo-4-del-diplomado-fullstack)