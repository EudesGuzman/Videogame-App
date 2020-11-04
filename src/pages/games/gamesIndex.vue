<template>
  <q-page class="q-pa-md">
    <div class="row rowTitle">
        <div class="col-12">
          <h3>Listado juegos</h3>
        </div>
    </div>

    <gameListFilter @filtrar="buscar"/>

    <div class="row" v-if="gamesList !== null">
      <div class="col-12" v-for="(game) in gamesList" :key="game.id">
        <gameListContainer :game="game"/>
      </div>
    </div>

    <div class="row">
      <div class="col-12 rowTitle">
        <q-btn color="positive" icon-right="navigate_next" class="full-width" @click="loadMore" label="Cargar Más Juegos" />
      </div>
    </div>

    <q-inner-loading :showing="visible" class="loading">
      <q-spinner-gears size="100px" color="positive" />
    </q-inner-loading>

  </q-page>
</template>

<script>
import gameListContainer from 'components/games/GameListContainer.vue'
import gameListFilter from 'components/games/GameListFilter.vue'
export default {
  name: 'GamesIndex',
  components: { gameListContainer, gameListFilter },
  data () {
    return {
      gamesList: null,
      page: 1,
      visible: false,
      search: null,
      genre: null
    }
  },
  created () {
    this.loadGames()
  },
  methods: {
    async buscar (searchString, genreId) {
      this.search = searchString
      this.genre = genreId
      this.page = 1
      this.gamesList = null
      this.loadGames()
    },
    async loadMore () {
      this.page++
      this.loadGames()
    },
    async loadGames () {
      this.visible = true
      // console.log('He entrado para cargar juegos.')
      var url = 'https://api.rawg.io/api/games?page_size=20'
      if (this.page !== null) {
        url += '&page=' + this.page
      }
      if (this.search !== null) {
        url += '&search=' + this.search
      }
      if (this.genre !== null) {
        url += '&genres=' + this.genre
      }
      await this.$axios.get(url).then((response) => {
        // console.log(response.data)
        if (this.gamesList !== null) {
          this.gamesList.push(...response.data.results)
        } else {
          this.gamesList = response.data.results
        }
      }).catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top-right',
          message: 'Ha fallado la carga de juegos',
          icon: 'report_problem'
        })
      })
      this.visible = false
    }
  }
}
</script>
