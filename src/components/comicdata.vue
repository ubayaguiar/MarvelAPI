<template>
  <div id="comic">    
    
        <div class="comic-img">
          <img v-if="comic.images.length > 0" 
            :src="comic.images[0].path+'.jpg'" :alt="comic.title" style="heigth:100%; max-width:100%" >
          <img v-else 
          :src="'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg'" alt="" style="max-width:100%">    
        </div>


        
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "comicdata",
  created() {
    this.comicID = this.$route.params.id;
    this.getSearch(this.comicID);
  },
  data() {
    return {
      comicID: 0,
      comic: []
    }
  },
  methods: {
    getSearch(id) {
      console.log("Voy a buscar :)");
      axios
        .get(
          `https://gateway.marvel.com:443/v1/public/comics/` +
            id +
            `?ts=200&apikey=62ea07aa4be8d05bd4690c7df0742bcd&hash=c59ec3ac796e183d088faab71e255be5`
        )
        .then(
          response => (this.comic = response.data.data.results[0]),
          console.log("Aqui tienes la mierda")
        )
        .catch(console.log("Te Jodes y fallo"));
    }
  }
};
</script>

<style scoped>
#comic{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
}

.comic-img{
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>