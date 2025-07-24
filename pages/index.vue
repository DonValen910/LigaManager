<template>
  <div class="home-page">
    <section class="hero">
      <h1 class="hero-title">Liga Manager</h1>
      <p class="hero-subtitle">Gestiona tu liga de fútbol de manera fácil y eficiente</p>
    </section>
    
    <section class="features">
      <div class="feature">
        <h3>Equipos</h3>
        <p>Administra todos los equipos de tu liga</p>
      </div>
      <div class="feature">
        <h3>Jugadores</h3>
        <p>Registra y gestiona información de jugadores</p>
      </div>
      <div class="feature">
        <h3>Fixtures</h3>
        <p>Programa y organiza los partidos</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.home-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero-title {
  font-family: 'Inter', sans-serif;
  font-size: 3rem;
  font-weight: bold;
  color: var(--color-gris-oscuro);
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature {
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  text-align: center;
  background-color: var(--color-gris);
}

.feature h3 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  color: var(--color-gris-oscuro);
  margin-bottom: 0.5rem;
}

.feature p {
  color: #666;
}
</style>