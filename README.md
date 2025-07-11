# LigaManager

Una plataforma web para gestionar una liga de fútbol local que permita administrar equipos, jugadores, fixtures, resultados y generar estadísticas automáticas. El sistema está diseñado para ser usado por administradores de ligas amateur o semi-profesionales.

## 🎨 Concepto Visual
Estilo: Moderno y deportivo con colores relacionados al fútbol (verde campo, blanco, azul, amarillo para tarjetas)
Layout: Dashboard con sidebar de navegación y área principal de contenido
Responsive: Mobile-first para que funcione bien en dispositivos móviles

#### 📋 Funcionalidades Principales
1. **Gestión de Equipos**

- Crear/Editar/Eliminar equipos

  - Nombre del equipo
  - Logo/escudo (upload de imagen)
  - Colores del uniforme
  - Estadio/cancha local
  - Entrenador
  - Año de fundación



2. **Gestión de Jugadores**

- Registro de jugadores

  - Datos personales (nombre, apellido, edad, posición)
  - Número de camiseta
  - Foto del jugador
  - Equipo al que pertenece
  - Estadísticas individuales



3. **Sistema de Fixtures**

- Calendario de partidos

  - Fecha y hora
  - Equipos enfrentados
  - Estadio/cancha
  - Jornada/fecha del torneo
  - Estado (programado, en juego, finalizado)



4. **Gestión de Resultados**

- Carga de resultados

  - Marcador final
  - Goleadores
  - Tarjetas amarillas y rojas
  - Minutos de los goles
  - Observaciones del partido



5. **Estadísticas y Reportes**

- Tabla de posiciones

  - Puntos, partidos jugados, ganados, empatados, perdidos
  - Goles a favor y en contra, diferencia de gol
  - Ordenamiento automático


- Estadísticas de jugadores

  - Tabla de goleadores
  - Jugadores con más tarjetas
  - Más partidos jugados


- Estadísticas de equipos

  - Mejor ataque/defensa
  - Racha actual (victorias/derrotas)
  - Historial de enfrentamientos



### 🗂️ Estructura de Páginas
Páginas Principales

- **Dashboard Principal** (/)

  - Resumen general de la liga
  - Próximos partidos
  - Tabla de posiciones resumida
  - Estadísticas destacadas


- **Equipos** (/equipos)

  - Lista de todos los equipos
  - Página individual de cada equipo (/equipos/[id])


- **Jugadores** (/jugadores)

  - Lista de todos los jugadores
  - Filtros por equipo, posición
  - Perfil individual (/jugadores/[id])


- **Fixtures** (/fixtures)

  - Calendario de partidos
  - Vista por jornada
  - Formulario para programar partidos


- **Resultados** (/resultados)

  - Historial de partidos
  - Formulario para cargar resultados
  - Detalle de cada partido


- **Estadísticas** (/estadisticas)

  - Tabla de posiciones completa
  - Goleadores
  - Tarjetas
  - Estadísticas avanzadas


- **Administración** (/admin)

  - Gestión de equipos y jugadores
  - Configuración de la liga



### 🛠️ Stack Tecnológico Recomendado
- **Frontend**

  - Nuxt 3 (Vue.js)
  - UnoCSS para estilos
  - Pinia para gestión de estado
  - VueUse para composables útiles

- **Backend** (Opcional - Fase 2)

  - Nuxt API Routes (built-in)
  - Prisma + SQLite para base de datos
  - Cloudinary para manejo de imágenes

**Librerías Útiles**

@unocss/nuxt - Estilos
@pinia/nuxt - Estado global
@vueuse/nuxt - Composables
vue-chartjs - Gráficos para estadísticas
@headlessui/vue - Componentes UI
