Vue.component('Card',{
    template: `
    <div class="card-group col-12 col-sm-12 col-md-6 col-lg-4">
      <div class="card mt-3" style="height: 25rem;">
        <a @click = "imageSelected = ''; 
            imageSelected = car.imagen; change()"  change data-toggle="modal" data-target="#exampleModal" 
            >
            <div class="view overlay zoom" style="cursor:pointer;">
          <img class="card-img-top" :src=car.imagen width="280" height="250" style=" object-fit: cover;"/>
          <div class="mask flex-center rgba-black-strong">
          <p class="white-text">View Image</p>
      </div>
      </div>
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

