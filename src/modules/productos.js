export default{
  namespaced: true,
  state:{
    productos:[
      {
        nombre: "Ensalada",
        imagen:"https://e0.pxfuel.com/wallpapers/970/736/desktop-wallpaper-trippy-aesthetic-purple-thumbnail.jpg",
        precio: "8€",
        favorito: true
      },
      {
        nombre: "Arroz",
        imagen:"https://e0.pxfuel.com/wallpapers/970/736/desktop-wallpaper-trippy-aesthetic-purple-thumbnail.jpg",
        precio: "9€",
        favorito: false
      },
      {
        nombre: "Pollo",
        imagen:"https://e0.pxfuel.com/wallpapers/970/736/desktop-wallpaper-trippy-aesthetic-purple-thumbnail.jpg",
        precio: "2€",
        favorito: false
      },
      {
        nombre: "Carne",
        imagen:"https://e0.pxfuel.com/wallpapers/970/736/desktop-wallpaper-trippy-aesthetic-purple-thumbnail.jpg",
        precio: "1€",
        favorito: false
      }
    ]    
  },
  getters: {
    favoritos(state){
      return state.productos.filter(pro => pro.favorito==true)
    }
  },
  mutations: {
      add(state, indice){
        state.productos[indice].favorito=true
        // localStorage.setItem('ProdFavs', JSON.stringify(state.favoritos))
        // console.log("Productos añadidos:", state.favoritos)
        // console.log(state.productos)
    }

  },
  actions: {
  }
}
