<template>
  <div id="app">    
    <router-view/>
        
        
    
  </div>
</template>

<script>
import searchcomic from "./components/searchcomic";
import comicdata from "./components/comicdata";
export default {
  name: "App",
  components: {
    searchcomic,
    comicdata
  }
};
</script>

<style scoped>
  #app{
   height: 100%;
  }
</style>
