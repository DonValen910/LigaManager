<template>
  <header class="header">
    <figure class="logo">
      <img class="sidebar-icon" src="../public/icon/Sidebar.svg" alt="Icono de la barra lateral">
      <img class="logo-pelota" src="../public/logo_pelota.png" alt="Logo de Liga Manager">
    </figure>

    <!-- TODO: Crear barra de navegación -->
  </header>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  padding: 11px 0 11px 20px;
}

.header .logo {
  display: flex;
  gap: 2.5rem;
}

.header .logo img {
  height: 68px;
  width: auto;
}
</style>