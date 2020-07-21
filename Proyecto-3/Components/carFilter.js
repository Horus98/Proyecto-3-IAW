const URL = "https://proyecto-2-horus.herokuapp.com/api/ApiCar/Marca?api_token=jR3EBxetz5JKvVfPKyCDdCb38ymjHTzUJhAZTkSCOgK5FLlqYZ8x8UlCz1RR&Marca=";
const ALL_URL = "https://proyecto-2-horus.herokuapp.com/api/ApiCar?api_token=jR3EBxetz5JKvVfPKyCDdCb38ymjHTzUJhAZTkSCOgK5FLlqYZ8x8UlCz1RR";

Vue.component('carfilter', {
    template: `
    <div class="container mt-3">
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h4 class=" text-center">Choose your dream car from home </h4>
        </div>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-4 mt-3">
                <select class="form-control" v-model="selected" v-on:change="updateModels"  id="exampleFormControlSelect2">
                    <option disabled value="" selected>Select your brand</option>   
                    <option value="All"> All </option> 
                    <option v-for="car of cars" :value= "car[0].marca" >{{car[0].marca}}</option>
                </select>
            </div>
            <div class="col-4 mt-3">
                <select class="form-control" v-model="selectedModel"  id="exampleFormControlSelect2">
                <option disabled value="" selected >Select your model</option>
                <option value="All"> All </option>
                <option v-for="model of models" :value= "model" > {{model}} </option>
                </select>
            </div>
            <div class="col-2"></div>
        </div>
        <div class="row">
            <div class="col-2"></div>
                <div class="col-8">
                    <div v-if="selectedModel === ''">
                        <button disabled class="btn btn-warning btn-md mt-4 btn-block" @click=showCars>Search</button>
                    </div>
                    <div v-else>
                        <button class="btn btn-warning btn-md mt-4 btn-block" @click=showCars>Search</button>
                    </div>
                </div>
        </div>
        <div class= "row">
            <div class="col-3  "></div>
            <div class="col-6  text-center my-4"><sortfilter v-on:sort = "sortCars($event,$event)" ></sortfilter></div>
            <div class="col-3  "></div>
        </div>
    </div>
    <div class="row " >
        <Card v-for="car of carsToShowFiltered" :car="car" :key= "car.id" ></Card> 
    </div>
    </div>
    `,
    props: ['cars'],
    data() {
        return {
            selected: "",
            selectedModel: "",
            models: new Set([]),
            carsToShow: "",
            carsToShowFiltered: [],
            url: URL,           
        }
    },
    methods: {
        updateModels: function () {
            this.getCarsFromBrand();
            this.selectedModel = "";
            this.models.clear();
            if(this.selected != "All"){
                modelsOfSelectedCar = this.cars[this.selected];
                for (const model of modelsOfSelectedCar) {
                    this.models.add(model.modelo)
                }
            }
           
        },
        getCarsFromBrand: function () {
            this.url = URL;
            if(this.selected === "All")
                this.url = ALL_URL;
            else
                this.url = this.url + this.selected;
            axios
                .get(this.url)
                .then(response => (this.carsToShow = response.data));
        },
        showCars: function () {
            this.carsToShowFiltered = [];
            if (this.selectedModel === "All")
                this.carsToShowFiltered = this.carsToShow;
            else {
                for (const model of this.carsToShow) {
                    if (model.modelo === this.selectedModel)
                        this.carsToShowFiltered.push(model);
                }
            }
        },
        sortCars: function (sorter){
            howToSort = sorter.howToSort;
            if(howToSort === 'Greater'){
                this.carsToShowFiltered = sorter.sortGreater(this.carsToShowFiltered);
            }
            else{
                if(howToSort === "Lower"){
                    this.carsToShowFiltered = sorter.sortLower(this.carsToShowFiltered);
                }
            }
        }
    }
});