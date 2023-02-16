<template>
  <section>
    <div id="divprin">
      <img src="../assets/paella.png" alt="">
      <p>4tufood</p>
      <a href="./VistaProductos.vue"><button>Realiza tu pedido</button></a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VistaInicio'
}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box
section
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  background: #66D678
  #divprin
    height: 40vh
    display: flex
    align-items: center
    flex-direction: column
    justify-content: space-around
    p
      color: white
      font-size: 20px
      font: bold
    button
      padding: 10px
      border-radius: 97px
      outline: none
      width: 275.45px
      height: 49.64px
      background: rgba(249, 254, 250, 0.8)
      
      border: none
  


</style>