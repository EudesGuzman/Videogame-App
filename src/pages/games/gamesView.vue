<template>
  <q-page class="q-pa-md" v-if="game">

    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="Juegos" icon="games" to="/games" />
      <q-breadcrumbs-el :label="game.name" icon="videogame_asset" />
    </q-breadcrumbs>

    <div class="row rowTitle">
        <div class="col-12">
          <h3>{{game.name}}</h3>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
          <img :src="game.background_image" class="imageGameView">
        </div>

        <div class="col-12 col-sm-12 col-md-4 col-lg-4 gameListDate">
        <q-icon name="today" /><span>{{game.released}}</span>
      </div>

      <div class="col-12 col-sm-12 col-md-4 col-lg-4 gameListMetacritic">
        <img src="~assets/Metacritic.png"/><span>{{game.metacritic}}</span>
      </div>

      <div class="col-12 col-sm-12 col-md-4 col-lg-4 gameListPlaytime">
        <q-icon name="query_builder" /><span>{{game.playtime}}</span>
      </div>
      <div class="col-12">
        <q-rating
          v-model="game.rating"
          max="5"
          size="2em"
          color="yellow"
          icon="star_border"
          icon-selected="star"
          icon-half="star_half"
          no-dimming
          readonly
        />
      </div>
      <div class="col-12">
        <span v-for="(platform, index) in game.platforms" :key="platform.id">
          <span v-if="index !== 0">-</span>
          {{platform.platform.name}}
        </span>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <span v-for="genre in game.genres" :key="genre.id">
          <button class="genreButton" @click="filterGenre(genre)"><q-icon name="loyalty" /> {{genre.name}}</button>
        </span>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <span>Disponible en: </span>
        <span v-for="(store, index) in game.stores" :key="store.store.id">
          <span v-if="index !== 0"> - </span>
          <a :href="generateUrlStore(store)" target="_blank">{{store.store.name}}</a>
        </span>
      </div>
    </div>

    <div class="row tagsRow">
      <div class="col-12">
        <q-chip v-for="tag in game.tags" :key="tag.id" class="glossy">{{tag.name}}</q-chip>
      </div>
    </div>
    <div class="row carouselRow">
      <div class="col-12">
        <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="slide" :img-src="game.clip.preview">
              <q-video class="absolute-full" :src="game.clip.clip" />
            </q-carousel-slide>
            <q-carousel-slide v-for="(image, index) in game.short_screenshots" :key="image.id" :name="index" :img="image.image" />
            </q-carousel>
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'gamesView',
  data () {
    return {
      slide: 0,
      game: null
    }
  },
  async created () {
    if (this.game === null || this.game === undefined) {
      await this.$axios.get('https://api.rawg.io/api/games/' + this.id).then((response) => {
        this.game = response.data
      }).catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top-right',
          message: 'Ha fallado la carga de juegos',
          icon: 'report_problem'
        })
      })
    } else {
      this.game = this.gamepass
    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    gamepass: {
      type: Object,
      required: false
    }
  },
  methods: {
    generateUrlStore (store) {
      var result = ''
      if (store !== null && store.url_en !== null && store.url_en !== undefined) {
        result = store.url_en
      } else if (store !== null && store.url !== null && store.url !== undefined) {
        result = store.url
      }
      return result
    },
    filterGenre (selectedGenre) {
      this.$router.push({ name: 'gamesindex', params: { dgenre: selectedGenre.id } })
    }
  }
}
</script>
