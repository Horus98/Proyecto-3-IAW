Vue.component('sortfilter',{
    template: `
    <div class= "row">
        <div class= "col-sm-12">
        <div class="btn-group">
            <div class="dropdown ">
                <button class="btn btn-warning dropdown-toggle btn-sm" type="button" id="dropYear" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{year}}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" @click = "changeYear('Max Year','Greater')">Max Year</a>
                    <a class="dropdown-item" href="#" @click = "changeYear('Min Year','Lower')">Min Year</a>
                </div>
            </div>
            <div class="dropdown ">
                <button class="btn btn-warning dropdown-toggle btn-sm" type="button" id="dropKm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{km}}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" @click = "changeKm('Max Km','Greater')" >Max Km</a>
                    <a class="dropdown-item" href="#"  @click = "changeKm('Min Km','Lower')" >Min Km</a>
                </div>
            </div>
            <div class="dropdown ">
                <button class="btn btn-warning dropdown-toggle btn-sm" type="button" id="dropPrice" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{price}}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" @click = "changePrice('Max Price','Greater')">Max Price</a>
                    <a class="dropdown-item" href="#" @click = "changePrice('Min Price','Lower')">Min Price</a>
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
        changeYear(sortType,howToSort) {
            this.reset();
            this.year = sortType;
            var sortStrategy = new YearStrategy(howToSort)
            this.$emit('sort',sortStrategy);

        },
        changeKm(sortType,howToSort) {
            this.reset();
            this.km = sortType;
            var sortStrategy = new KmStrategy(howToSort)
            this.$emit('sort',sortStrategy);
        },
        
        changePrice(sortType,howToSort) {
            this.reset();
            this.price = sortType;
            var sortStrategy = new PriceStrategy(howToSort)
            this.$emit('sort',sortStrategy);

        },
        reset(){
            this.price = "Sort by Price" ;
            this.km = "Sort by Km";
            this.year = " Sort by Year";
        }
    }
});


