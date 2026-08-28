# 📦 NovaTech Solutions - Sistema de Control Total de Inventario

Sistema de control y administración de inventario desarrollado con **React** y **Vite**, diseñado bajo estándares profesionales de control de versiones utilizando la metodología **Git Flow**.

---

## 🚀 Características (Versión 1.0.0)

El sistema en su versión `1.0.0` incluye las siguientes funcionalidades completadas e integradas en producción:

- ➕ **Creación de Productos**: Formulario funcional para registrar nuevos artículos especificando Nombre, Precio, Categoría y Stock.
- 📋 **Listado de Productos**: Tabla estructurada para visualizar la lista completa de productos registrados en tiempo real.
- ✏️ **Edición de Productos**: Capacidad para seleccionar y actualizar la información de cualquier producto existente.
- 🗑️ **Eliminación de Productos**: Módulo de remoción rápida de productos del inventario.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React.js + Vite
- **Lenguaje**: JavaScript (ES6+)
- **Control de Versiones**: Git & GitHub
- **Flujo de Trabajo**: Git Flow Methodology

---

## 📋 Estructura del Proyecto

```text
novatech-inventory/
├── public/
├── src/
│   ├── components/
│   │   ├── ProductForm.jsx     # Componente para añadir/crear productos
│   │   └── ProductList.jsx     # Componente para listar, editar y eliminar productos
│   ├── App.jsx                 # Componente principal e integración de estados
│   ├── main.jsx                # Punto de entrada de la aplicación
│   └── index.css               # Estilos globales
├── package.json
└── README.md
```

---

## ⚙️ Instalación y Ejecución Local

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

1. **Clonar el repositorio:**

    *git clone https://github.com/JonathanLopez-gif/novatech_inventory_cesde.git*
    
    *cd novatech_inventory_cesde*

2. **Instalar dependencias:**

    *npm install*

3. **Iniciar el servidor de desarrollo:**

    *npm run dev*

4. Abrir en el navegador la dirección local indicada por Vite (por defecto *http://localhost:5173*).

## 🌿 Estrategia de Control de Versiones (Git Flow)

Este proyecto implementa la arquitectura **Git Flow** de forma estricta:

- **main**: Rama de producción con código estable e inmutable etiquetado mediante Tags (v1.0.0).

- **develop**: Rama base para la integración continua de funcionalidades.

- **feature/**: Ramas independientes utilizadas para el desarrollo de módulos específicos:

    - **feature/crear-producto**

    - **feature/listar-productos**

    - **feature/editar-producto**

    - **feature/eliminar-producto**

- **release/1.0.0**: Rama de estabilización utilizada para preparar la documentación y publicar la versión final v1.0.0.

## 📌 Historial de Versiones

### [v1.0.0] - Release Inicial

- Integración completa del CRUD de productos.

- Configuración base del repositorio y arquitectura Git Flow.

- Documentación oficial de la versión de lanzamiento.

## 👥 Equipo de Desarrollo

**Developer Team** - NovaTech Solutions