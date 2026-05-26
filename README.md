# 🚐 Transporte Seguro Kids

Sistema web desarrollado en **HTML, CSS y JavaScript** para la gestión de rutas escolares, conductores y estudiantes.

El proyecto permite:

- Administrar conductores.
- Visualizar rutas disponibles.
- Registrar estudiantes.
- Agrupar estudiantes por conductor.
- Editar y eliminar información.
- Consultar el clima en tiempo real mediante API.

---

# 📂 Estructura del Proyecto

El proyecto está dividido en 3 carpetas principales:

```bash
📁 INICIO
📁 CONDUCTORES
📁 USUARIOS
```

---

# 🏠 INICIO

Pantalla principal del sistema.

## Funcionalidades

- Acceso como usuario.
- Acceso como administrador.
- Validación de contraseña para administradores.

## Tecnologías usadas

- HTML
- CSS
- JavaScript

## Seguridad

El acceso de administrador solicita una contraseña:

```js
const clave = "1234";
```

---

# 👨CONDUCTORES

Módulo CRUD para administrar conductores y rutas escolares.

## Funcionalidades

✅ Crear conductores  
✅ Editar conductores  
✅ Eliminar conductores  
✅ Buscar conductores  
✅ Guardado automático en LocalStorage  
✅ Modal dinámico  
✅ Renderizado dinámico de tarjetas

## Datos almacenados

Cada conductor contiene:

- Nombre
- Horario
- Ruta
- Imagen

## Ejemplo de objeto conductor

```js
{
    id: 123456,
    nombre: "Carlos",
    horario: "07:00",
    ruta: "Ruta Norte",
    imagen: "url_imagen"
}
```

## Eventos implementados

- `click`
- `submit`
- `keydown`
- `input`
- `CustomEvent`

---

# 👨‍🎓 USUARIOS

Módulo para registrar estudiantes y asignarlos a rutas escolares.

## Funcionalidades

✅ Visualización de conductores disponibles  
✅ Registro de estudiantes  
✅ Agrupación automática por conductor  
✅ Editar estudiantes  
✅ Eliminar estudiantes  
✅ Validación de teléfono  
✅ Uso de modales  
✅ Persistencia con LocalStorage  
✅ Clima en tiempo real

---

# 🌦 API del Clima

Se implementó la API de OpenWeatherMap para mostrar:

- Temperatura
- Descripción del clima
- Icono climático

## Ciudad usada

```txt
Bucaramanga
```

## Endpoint utilizado

```txt
https://api.openweathermap.org/data/2.5/weather
```

---

# 🧠 Validaciones implementadas

## Teléfono

El número telefónico debe contener exactamente 10 dígitos.

```js
if(telefono.value.length !== 10)
```

# 💾 Almacenamiento Local

El sistema utiliza:

```js
localStorage
```

para guardar:

- Conductores
- Estudiantes

Esto permite mantener la información aunque se recargue la página.

---

# 🎨 Características visuales

- Diseño responsive
- Navbar fija
- Cards dinámicas
- Hover animations
- Modales animados
- Diseño moderno con CSS

---

# 📌 Funcionalidades principales

| Función | Estado |
|---|---|
| CRUD conductores | ✅ |
| CRUD estudiantes | ✅ |
| LocalStorage | ✅ |
| API clima | ✅ |
| Validaciones | ✅ |
| Agrupación por conductor | ✅ |
| Modal editar | ✅ |
| Buscador | ✅ |

---

# 👨‍💻 Autor

Proyecto desarrollado por:

**Maria Jose Angulo Sanchez**

---