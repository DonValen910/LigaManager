<template>
  <footer class="footer">
    <figure class="logo">
      <img src="../public/logo_transparente.png" alt="Logo de Liga Manager">
    </figure>

    <div class="content-wrapper">
      <div class="links-section">
        <span class="links-title">Enlaces útiles</span>
        <ul class="links-list">
          <li><a class="link" href="#">Acerca de</a></li>
          <li><a class="link" href="#">Contacto</a></li>
          <li><a class="link" href="#">Términos de uso</a></li>
          <li><a class="link" href="#">Política de privacidad</a></li>
        </ul>
      </div>

      <span class="copyright">
        Hecho con ❤️ y Vue.js | © 2025 Liga Manager | 
        <figure class="github-icon">
          <a href="https://github.com/DonValen910/LigaManager" target="_blank">
            <img src="../public/github-mark.svg" alt="Icono de GitHub">
          </a>
        </figure>
      </span>
    </div>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  padding: 15px 70px;
}

.logo {
  width: 200px;
}

.logo img {
  width: 100%;
  height: auto;
}

.content-wrapper {
  display: grid;
  align-content: space-between;
}

.links-section {
  margin-bottom: 1rem;
}

.links-title {
  font-size: 1.125rem;
  display: block;
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.links-list {
  display: flex;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.link {
  font-size: 1.125rem;
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.link:hover {
  color: var(--color-verde);
}

.copyright {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  color: var(--color-gris-oscuro);
}

.github-icon {
  margin-left: 5px;
  display: inline-flex;
  align-items: center;
}

.github-icon img {
  width: 16px;
  height: 16px;
}

.github-icon img:hover {
  scale: 1.1;
}
</style>