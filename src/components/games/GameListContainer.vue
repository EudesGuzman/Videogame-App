<template>
  <div class="gameListContainer" @click="viewGame">
    <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 imageListColumn">
              <img :src="game.background_image">
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-8 infoListColumn">

              <div class="row gameListTitle">
                <div class="col-12">
                  {{game.name}}
                </div>
              </div>

              <div class="row gameListDate">
                <div class="col-12">
                  <q-icon name="today" /><span>{{game.released}}</span>
                </div>
              </div>

              <div class="row gameListMetacritic">
                <div class="col-12">
                  <img src="~assets/Metacritic.png"/><span>{{game.metacritic}}</span>
                </div>
              </div>

              <div class="row gameListPlaytime">
                <div class="col-12">
                  <q-icon name="query_builder" /><span>{{game.playtime}}</span>
                </div>
              </div>

            </div>
          </div>
  </div>
</template>

<script>
export default {
  name: 'GameListContainer',
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  methods: {
    viewGame () {
      this.$router.push({ path: 'games/view/' + this.game.id, params: { id: this.game.id, gamepass: this.game } })
    }
  }
}
</script>
