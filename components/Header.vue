<template>
  <header class="header">
    <figure class="logo">
      <img 
        class="sidebar-icon" 
        src="/icon/Sidebar.svg" 
        alt="Icono de la barra lateral"
        @click="toggleSidebar"
      />
      <img class="logo-pelota" src="/logo_pelota.png" alt="Logo de Liga Manager" />
    </figure>

    <nav :class="{ 'nav-open': isSidebarOpen }" ref="navRef">
      <ul>
        <li :class="{ active: $route.path === '/' }">
          <NuxtLink href="/" @click="closeSidebar">
            <figure><img src="/icon/Home.svg" alt="Inicio"></figure>
            Inicio
          </NuxtLink>
        </li>
        <li :class="{ active: $route.path === '/equipos' }">
          <NuxtLink href="/equipos" @click="closeSidebar">
            <figure><img src="/icon/Shield.svg" alt="Equipos"></figure>
            Equipos
          </NuxtLink>
        </li>
        <li :class="{ active: $route.path === '/jugadores' }">
          <NuxtLink href="/jugadores" @click="closeSidebar">
            <figure><img src="/icon/Users.svg" alt="Jugadores"></figure>
            Jugadores
          </NuxtLink>
        </li>
        <li :class="{ active: $route.path === '/fixtures' }">
          <NuxtLink href="/fixtures" @click="closeSidebar">
            <figure><img src="/icon/Target.svg" alt="Partidos"></figure>
            Partidos
          </NuxtLink>
        </li>
        <li :class="{ active: $route.path === '/resultados' }">
          <NuxtLink href="/resultados" @click="closeSidebar">
            <figure><img src="/icon/Ribbon.svg" alt="Resultados"></figure>
            Resultados
          </NuxtLink>
        </li>
        <li :class="{ active: $route.path === '/estadisticas' }">
          <NuxtLink href="/estadisticas" @click="closeSidebar">
            <figure><img src="/icon/ChartColumn.svg" alt="Estadísticas"></figure>
            Estadisticas
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}

// Cerrar sidebar al hacer click fuera
const navRef = ref<HTMLElement>()

onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      isSidebarOpen.value && 
      navRef.value && 
      !navRef.value.contains(event.target as Node) &&
      !(event.target as HTMLElement).classList.contains('sidebar-icon')
    ) {
      closeSidebar()
    }
  }

  document.addEventListener('click', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 11px 0 11px 20px;
  position: relative;
  background: rgba(248, 250, 252, 0.95);
}

.header .logo {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.header .logo img {
  height: 68px;
  width: auto;
}

.sidebar-icon {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.sidebar-icon:hover {
  transform: scale(1.05);
}

.header nav {
  position: absolute;
  top: 100px;
  left: 0;
  width: 250px;
  height: fit-content;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  background: rgba(248, 250, 252, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.header nav.nav-open {
  transform: translateX(0);
}

.header nav ul {
  display: grid;
  gap: 0.5rem;
  padding: 1rem;
}

.header nav ul li {
  border-radius: 8px;
  transition: all 0.2s ease;
}

.header nav ul li:hover {
  background: rgba(200, 200, 200, 0.5);
}

.header nav ul li.active {
  background: var(--color-verde, #16A34A);
  color: white;
}

.header nav ul li.active a {
  color: white;
}

.header nav ul li a {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.125rem;
  padding: 0.75rem;
  border-radius: 8px;
  transition: color 0.2s ease;
}

.header nav ul li a figure {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header nav ul li a figure img {
  width: 24px;
  height: 24px;
  filter: brightness(0) saturate(100%);
}

.header nav ul li.active a figure img {
  filter: brightness(0) saturate(100%) invert(100%);
}
</style>