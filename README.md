# Sistema de Gestión de Estudios de Seguridad - Frontend (Angular 17)

Este proyecto implementa una interfaz de usuario para un sistema de gestión de solicitudes de estudios de seguridad, desarrollada con Angular 17 que consume la API del backend en Laravel 11.

## Tecnologías Utilizadas

- **Angular 17**: Framework de frontend
- **TypeScript 5.2**: Lenguaje de programación
- **RxJS**: Biblioteca para programación reactiva
- **Angular Reactive Forms**: Para manejo de formularios
- **Node.js 18+**: Entorno de ejecución
- **npm**: Gestor de paquetes

## Requisitos Previos

- Node.js 18.0 o superior
- npm 9.0 o superior
- Angular CLI 17.0 o superior

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Danielprogramin/frontend-solicitud.git
   cd frontend-solicitud
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar el entorno**
   
   Editar el archivo `src/environments/environment.ts` con la URL de la API:
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:8000/api'
   };
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   ng serve
   ```
   La aplicación estará disponible en `http://localhost:4200`

## Estructura del Proyecto

```
src/
├── app/
│   ├── core/                       # Funcionalidades centrales
│   │   ├── auth/                   # Autenticación
│   │   ├── interceptors/           # Interceptores HTTP
│   │   ├── guards/                 # Guards de rutas
│   │   └── services/               # Servicios compartidos

│   │   ├── components/             # Componentes reutilizables
│   │   ├── models/                 # Interfaces y modelos

│   ├── features/                   # Módulos de funcionalidades
│   │   ├── dashboard/              # Dashboard con conteo de solicitudes
│   │   ├── candidatos/             # Gestión de candidatos
│   │   ├── solicitudes/            # Gestión de solicitudes
│   │   └── tipos-estudio/          # Visualización de tipos de estudio
│   ├── app-routing.module.ts       # Configuración de rutas
│   ├── app.component.ts            # Componente raíz
│   └── app.module.ts               # Módulo raíz
├── assets/                         # Recursos estáticos
├── environments/                   # Configuraciones de entorno
└── styles/                         # Estilos globales
```

## Funcionalidades Implementadas

### Autenticación
- Inicio de sesión con manejo de tokens
- Cierre de sesión
- Protección de rutas con Guards
- Interceptor para agregar token a las peticiones HTTP

### Dashboard
- Gráficos de resumen de solicitudes por estado
- Indicadores clave con conteos actualizados

### Gestión de Candidatos
- Listado de candidatos
- Formulario para creación y edición
- Validaciones en tiempo real
- Confirmación antes de eliminar

### Gestión de Solicitudes
- Listado con filtros por estado y tipo de estudio
- Formulario para crear nuevas solicitudes
- modal para cambiar el estado de una solicitud
- Seguimiento del historial de cambios

### Componentes Reutilizables
- Tablas genéricas con ordenación y filtrado
- Formularios modulares
- Diálogos de confirmación
- Indicadores de carga y notificaciones

## Decisiones Técnicas

### Arquitectura Modular
Se ha organizado el código siguiendo una arquitectura modular para:
- Facilitar el mantenimiento
- Permitir la carga perezosa (lazy loading)
- Separar claramente las responsabilidades

### Estado de la Aplicación
- Uso de servicios para gestionar el estado
- Implementación del patrón Observable para comunicación entre componentes
- Uso de BehaviorSubject para mantener el estado actual

### Formularios Reactivos
- Todos los formularios implementados con ReactiveFormsModule
- Validaciones personalizadas para casos específicos
- Mensajes de error intuitivos

### Interceptores HTTP
- Interceptor de autenticación para agregar token
- Interceptor de errores para manejo centralizado
- Interceptor de carga para mostrar indicadores visuales

### Diseño Responsivo
- Uso de Tailwind con diseño adaptable
- Implementación de breakpoints para diferentes tamaños de pantalla
- Diseño mobile-first

## Credenciales de Prueba
- **Usuario**: admin@example.com
- **Contraseña**: admin

## Licencia
Este proyecto es de uso exclusivo para evaluación técnica.
