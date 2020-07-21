Vue.component('Card',{
    template: `
    
    <div class="col-xs-12 col-md-6 col-lg-4">
    <div class="card ml-1 mt-3" style="width: 20rem; height: 25rem;">
    <a @click = "imageSelected = ''; 
        imageSelected = car.imagen; change()"  change data-toggle="modal" data-target="#exampleModal" 
        >
    <img class="card-img-top" :src=car.imagen width="280" height="200" style="cursor:pointer; object-fit: cover;"/>
    </a>
    <div class="card-body">
      <h4 class="card-title">$ {{new Intl.NumberFormat("de-DE").format(car.precio)}}</h4>
      <h5 class="card-subtitle mb-2 text-black"> {{car.anio}} | {{new Intl.NumberFormat("de-DE").format(car.kilometros)}} KM </h5>
      <p class="card-text">{{car.marca}} {{car.modelo}}  <br>{{car.descripcion}}</p>  
    </div>
    </div>
  </div>

    `,
    props :['car'],
    data(){
      return{
        imageSelected: ""
      }
    },
    methods: {
      change: function(){
        app2.image = this.imageSelected;
      }
    }
});

