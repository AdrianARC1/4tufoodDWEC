<template>
  <section>
    <div>
      <a href="./VistaInicio.vue"><h1>4tufood</h1></a>
      <p>Elige uno de estos deliciosos platos</p>
    </div>
    <div>
      <div class="cuadrado">

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VistaProductos'
}
</script>

<style lang="sass">
section
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  background: #66D678
  .cuadrados
    box-sizing: border-box
    position: absolute
    width: 51.61px
    height: 43.82px
    left: 20px
    top: 175px
    border: 1.94743px solid #66D678
    border-radius: 7.78973px
</style>