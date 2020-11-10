<template>
  <div class="row rowFilter">
    <div class="col-12 col-sm-12 col-md-2 col-lg-3 filterText">
      <q-input v-model="search" label="Filtro por texto" placeholder="'Metal gear' por ejemplo..." />
    </div>

    <div class="col-12 col-sm-12 col-md-2 col-lg-3 filterSelect">
      <q-select v-model="genre" :options="genresOptions" label="Filtro por género" option-value="id" option-label="name" placeholder="Seleccione género" emit-value map-options multiple />
    </div>

    <div class="col-12 col-sm-12 col-md-2 col-lg-3 filterDate">
      <q-input v-model="fecha" label="Filtro por fecha" readOnly>
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="range" range></q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>

    <div class="col-12 col-sm-12 col-md-6 col-lg-3 filterButton">
      <q-btn color="dark" icon-right="settings_backup_restore" @click="cleanFilter" label="Limpiar" />
      <q-btn color="primary" icon-right="search" @click="searchInComponent" label="Buscar" />
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
      genresOptions: null,
      date: null,
      range: null,
      fecha: ''
    }
  },
  created () {
    if (this.dgenre !== null && this.dgenre !== undefined) {
      this.genre = this.dgenre
    }
    this.loadGenres()
  },
  watch: {
    range: function (val) {
      this.date = val.from.replaceAll('/', '-') + ',' + val.to.replaceAll('/', '-')
      var dateFrom = new Date(val.from)
      var dateTo = new Date(val.to)
      this.fecha += dateFrom.getDate() + '/' + (dateFrom.getMonth() + 1) + '/' + dateFrom.getFullYear()
      this.fecha += ' - ' + dateTo.getDate() + '/' + (dateTo.getMonth() + 1) + '/' + dateTo.getFullYear()
    }
  },
  methods: {
    cleanFilter () {
      this.genre = null
      this.search = null
      this.date = null
      this.range = null
      this.fecha = ''
      this.searchInComponent()
    },
    searchInComponent () {
      this.$emit('filtrar', this.search, this.genre, this.date)
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
    }
  }
}
</script>
