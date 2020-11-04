<template>
  <div class="row rowFilter">
    <div class="col-12 col-sm-12 col-md-3 col-lg-4 filterText">
      <q-input v-model="search" label="Filtro por texto" placeholder="'Metal gear' por ejemplo..." />
    </div>

    <div class="col-12 col-sm-12 col-md-3 col-lg-4 filterSelect">
      <q-select v-model="genre" :options="genresOptions" label="Filtro por género" option-value="id" option-label="name" placeholder="Selecciione género" emit-value map-options />
    </div>

    <div class="col-12 col-sm-12 col-md-6 col-lg-4 filterButton">
      <q-btn color="dark" icon-right="setting_backup_restore" @click="limpiar" label="Limpiar" />
       <q-btn color="positive" icon-right="search" @click="buscarEnComponente" label="Buscar" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameListFilter',
  data () {
    return {
      search: null,
      genre: null,
      genresOptions: null
    }
  },
  created () {
    this.loadGenres()
  },
  methods: {
    limpiar () {
      this.genre = null
      this.search = null
    },
    buscarEnComponente () {
      this.$emit('filtrar', this.search, this.genre)
    },
    async loadGenres () {
      var url = 'https://api.rawg.io/api/genres?page_size=99'
      await this.$axios.get(url).then((response) => {
        // console.log(response.data)
        this.genresOptions = response.data.results
      }).catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top-right',
          message: 'Ha fallado la carga de generos',
          icon: 'report_problem'
        })
      })
      console.log(this.genresOptions)
    }
  }
}
</script>
