<template>
  <section>
    <div id="divprin">
      <img src="../assets/paella.png" alt="">
      <p>4tufood</p>
    <router-link to="/productos">Realiza tu pedido</router-link>
    </div>

  </section>
</template>

<script>
export default {
  name: 'VistaInicio'
}
</script>

<style lang="sass" scoped>
*
  margin: 0
  padding: 0
  box-sizing: border-box
section
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  background: url("../assets/stacked-waves-haikei.png")
  background-repeat: no-repeat
  background-size: cover
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
  
.wave
    position: absolute
    top: 0
    left: 0
    width: 100%
    overflow: hidden
    line-height: 0


.wave svg
    position: relative
    display: block
    width: calc(100% + 1.3px)
    height: 150px


.wave .shape-fill
    fill: #FFFFFF

.wave2
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    line-height: 0


.wave2 svg
    position: relative
    display: block
    width: calc(100% + 1.3px)
    height: 150px


.wave2 .shape-fill
    fill: #FFFFFF

.flip
  transform: rotate(180deg)
</style>