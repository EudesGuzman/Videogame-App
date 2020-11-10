<template>
  <q-page class="q-pa-md">

    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="Informacion" icon="info" />
    </q-breadcrumbs>

    <div class="row rowTitle">
        <div class="col-12">
          <h3>Información</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
          <p class="texto-info">
          Aplicación desarrollada en Vue.js. Mostramos los juegos de https://api.rawg.io/api/games con distintas opciones de filtrado.
</p>
        </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'info'
}
</script>
