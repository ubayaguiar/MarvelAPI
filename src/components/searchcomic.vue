<template>
    <div>
      <header>
        <span class="page-title">MARVEL Comic Search</span>
        <input type="text" id="search" placeholder="Comic starts with..."
        v-on:keyup.enter="clean();getSearch()"
        v-model="search">
        <select>
          <option value="comics"><router-link to="/" >Comics</router-link></option>
          <option value="comics"><router-link to="/findByCharacter">Characters</router-link></option>
        </select>
      </header>

        <div class="comic-list">
          <div v-for="comic in comicList" :key="comic.id" :id="comic.id" class="comic">
              <router-link :to="'/comicdata/'+comic.id">
                <img v-if="comic.images.length > 0" 
                :src="comic.images[0].path+'.jpg'" :alt="comic.title" style="max-width:100%">
                <img v-else 
                :src="'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg'" alt="" style="max-width:100%">
                <div class="comicTitle">{{comic.title}}</div>
              </router-link>
              
          </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "searchcomic",
  data() {
    return {     
      search: "",      
      comicList: [],
      msg: "hola",
      bottomOfWindow: false,
      page: 0
    };
  },
  methods: {
    scroll(){
      window.onscroll = () => {
        this.bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        console.log(this.bottomOfWindow);
        
        if(this.bottomOfWindow){
          this.getSearch();
        console.log("Es el final");

        }
      }
    },

    getSearch() {
      console.log("Voy a buscar :)")
      axios
        .get(
          `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=` +
            this.search +
            `&offset=`+this.page+`&ts=200&apikey=62ea07aa4be8d05bd4690c7df0742bcd&hash=c59ec3ac796e183d088faab71e255be5`
        )
        .then(response =>  (this.comicList = [...this.comicList, ...response.data.data.results], console.log("Aqui tienes la mierda")))
        .catch(console.log("Te Jodes y fallo"));
      this.page = this.page + 20;
    },
  clean(){
    this.comicList= [];
    this.page= 0;
  }
  },
  mounted(){
    this.scroll();
  }
  
};

</script>

<style scoped>
body, html{
  height: 100%;
}
header{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  position: fixed;
  background-color: #141414;
}
#search {
  text-align: center;
  width: 100%;
  grid-column: 2/-2;

}
.comic-list{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0px 10px 0 10px;
  padding-top: 40px; 
}
.comic{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}

.page-title{
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  color:red;
  margin-left: 10px;
}
</style>

