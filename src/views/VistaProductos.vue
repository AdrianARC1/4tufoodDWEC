<template>
  <section>
  <div id="header">
    <div id="titulo">
      <router-link to="/"><h1>4tufood</h1></router-link>
      <p>Elige uno de estos deliciosos platos</p>
    </div>
    <div id="cuadr">
      <div class="cuadrados">
        <i class="fa-solid fa-house"></i>
      </div>
      <div class="cuadrados" id="divcua2">
        <router-link to="/favoritos"><i class="fa-solid fa-heart"></i></router-link>
      </div>
    </div>
   </div>
   <div id="productos">
      <div id="divprod" v-for="(prod, index) in productos" :key="prod.nombre">
        <div id="cora">
        <button @click="addToFavs(index)"><i class="fa-solid fa-heart" :class="{'rojo': prod.favorito}"></i></button>
        </div>
        <img :src="prod.imagen" alt="">
        <p>{{prod.nombre}}</p>
        <div id="mas">
          <p>{{prod.precio}}</p>
          <button><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
   </div>

  </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'VistaProductos',
  computed:{
    ...mapState('productos',['productos'])
  },
  methods:{
    ...mapMutations('productos',['add']),
    addToFavs(indice){
      this.add(indice)
      console.log(this.productos[indice])
    }
  }
}
</script>

<style lang="sass" scoped>
.rojo
  color: red
.blanco
  color: white

section
  height: 100vh
  display: flex
  background: #ffffff
  flex-direction: column
  #cora
    width: 100%
    display: flex
    justify-content: flex-end
    margin-right: 30px
    i
      font-size: 20px
  button
    outline: none
    border: none
  
  #header
    margin-left: 30px
    height: 30vh
    display: flex
    flex-direction: column
    justify-content: space-evenly
    #titulo
      margin-top: 10px
      display: flex
      justify-content: space-between
      flex-direction: column
      height: 10vh
      a
        text-decoration: none
        color: black
    #cuadr
      display: flex
      .cuadrados
        display: flex
        align-items: center
        justify-content: center
        box-sizing: border-box
        width: 51.61px
        height: 43.82px
        border: 1.94743px solid #66D678
        border-radius: 7.78973px
        background: white
        i
          font-size: 25px
      #divcua2
        margin-left: 20px
  #productos
    display: flex
    flex-wrap: wrap
    justify-content: space-evenly
    height: 60vh
    gap: 30px
    #divprod
      width: 40%
      display: flex
      justify-content: center
      flex-direction: column
      align-items: center
      border: 0.973716px solid #C5C5C5
      justify-content: space-evenly
      border-radius: 14.6057px
      img
        height: 100px
        width: 100px
        border-radius: 50%
      #mas
        display: flex
        flex-direction: row
        width: 80%
        justify-content: space-between
        align-items: center
        color: #66D678
        font-size: 20px
        i
          padding: 5px
          background: #66D678
          border-radius: 50%
          color: white

</style>