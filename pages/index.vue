<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1 class="dashboard-title">Bienvenido a Liga Manager</h1>
      <p class="dashboard-description">Acá verás un resumen de la liga, próximos partidos y estadísticas destacadas.</p>
    </header>
    <section class="dashboard-content">
      <div class="dashboard-card-column">
        <article class="dashboard-card">
          <h2 class="dashboard-card-title">Resumen general de la liga</h2>
        </article>
        <article class="dashboard-card">
          <h2 class="dashboard-card-title">Próximos partidos</h2>
        </article>
      </div>
      <div class="dashboard-card-column reverse">
        <article class="dashboard-card">
          <h2 class="dashboard-card-title">Tabla de posiciones resumidas</h2>
        </article>
        <article class="dashboard-card">
          <h2 class="dashboard-card-title">Estadísticas destacadas</h2>
        </article>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.dashboard {
  padding: 20px;
  background-color: rgba(248, 250, 252, 0.95);
  border-radius: 1rem;
  margin: 30px 45px;
}

.dashboard-header {
  margin-bottom: 20px;
}

:is(.dashboard-title, .dashboard-description) {
  text-align: center;
}

.dashboard-title {
  font-size: 2.7rem;
  margin-bottom: 10px;
}

.dashboard-description {
  font-size: 1.3rem;
  color: var(--color-gris-oscuro);
}

.dashboard-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.dashboard-card-column {
  display: grid;
  grid-template-columns: 70% auto;
  gap: 20px;
}

.dashboard-card-column.reverse {
  grid-template-columns: auto 70%;
}

.dashboard-card {
  background-color: transparent;
  border-radius: 0.5rem;
  outline: 3px solid var(--color-gris-oscuro);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
}

.dashboard-card-title {
  font-size: 1.5rem;
  text-align: center;
}
</style>