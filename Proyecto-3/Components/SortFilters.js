Vue.component('sortfilter',{
    template: `
    <div class= "row">
        <div class= "col-12">
        <div class="btn-group">
            <div class="dropdown ">
                <button class="btn btn-warning dropdown-toggle btn-sm" type="button" id="dropYear" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{year}}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" @click = "changeYear('Max Year')">Max Year</a>
                    <a class="dropdown-item" href="#" @click = "changeYear('Min Year')">Min Year</a>
                </div>
            </div>
            <div class="dropdown ">
                <button class="btn btn-warning dropdown-toggle btn-sm" type="button" id="dropKm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{km}}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" @click = "changeKm('Max Km')" >Max Km</a>
                    <a class="dropdown-item" href="#"  @click = "changeKm('Min Km')" >Min Km</a>
                </div>
            </div>
            <div class="dropdown ">
                <button class="btn btn-warning dropdown-toggle btn-sm" type="button" id="dropPrice" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{price}}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" @click = "changePrice('Max Price')">Max Price</a>
                    <a class="dropdown-item" href="#" @click = "changePrice('Min Price')">Min Price</a>
                </div>
            </div>
            </div>
        </div>
        
    </div>
    `,
    data(){
        return{
            price: "Sort by Price",
            km: "Sort by Km",
            year:" Sort by Year"
        }
    },
    methods: {
        changeYear(sortType) {
            this.reset();
            this.year = sortType;
            this.$emit('sort',sortType);

        },
        changeKm(sortType) {
            this.reset();
            this.km = sortType;
            this.$emit('sort',sortType);
        },
        
        changePrice(sortType) {
            this.reset();
            this.price = sortType;
            this.$emit('sort',sortType);

        },
        reset(){
            this.price = "Sort by Price" ;
            this.km = "Sort by Km";
            this.year = " Sort by Year";
        }
    }
});

 