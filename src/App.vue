<template>
  <router-view/>
</template>

<script>
export default{
  mounted(){
    let data= localStorage.getItem('ProdFavs')
    if(data!=null){
      this.$store.state.favoritos = JSON.parse(data)
    }else{
      console.log("El local storage está vacio")
    }
  },
}
</script>

<style lang="scss">

</style>
