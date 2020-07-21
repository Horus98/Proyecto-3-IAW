const app2 = new Vue({
    el: '#app2',
    data() {
        return {
            info: null,
            cars: null,
            image: ""
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            axios
            .get('https://proyecto-2-horus.herokuapp.com/api/ApiCar/all?api_token=jR3EBxetz5JKvVfPKyCDdCb38ymjHTzUJhAZTkSCOgK5FLlqYZ8x8UlCz1RR')
            .then(response => (this.cars = response.data))
        })
      }
   
});