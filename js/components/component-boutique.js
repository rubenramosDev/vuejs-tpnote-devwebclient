Vue.component("boutiqueComponent", {
  data: function () {
    return {
      quantity: 11,
      flag: true,
      items: this.$root.$data.fitems
    }
  },
  methods: {
    principaleItems: function () {
      this.items = this.$root.$data.fitems;
    },
    secondaryItems: function () {
      this.items = this.$root.$data.sitems;
    },
    buy: function (id) {
        this.$root.$data.flagBuy = true;
        this.$root.$data.index = id;
    }
  },
  computed: {
    isbuying: function () {
      return this.$root.$data.buy;
    }
  },
  template:
    `
    <div>
      <label class="list-group-item justify-content-center align-items-center bg-light">
        <p>Boutique</p>
          <div class="btn-group">
          <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Boutiques
          </button>
          <div class="dropdown-menu">
              <button class="dropdown-item" @click="principaleItems">Principale</button>
              <button class="dropdown-item" @click="secondaryItems">Secondaire</button>
          </div>
        </div>
      </label> 

      <label class="list-group-item justify-content-between align-items-center">
        Show: 
        <input v-model="quantity">
      </label> 

      <ol class="list-group list-group-flush"> 

              <li class="list-group-item d-flex justify-content-between align-items-center"
                  v-for="(it,index) in items" v-if="index<quantity" :key="it.name">

                    {{it.name}}

                    <span class="badge badge-primary badge-pill">
                    {{it.price}} gp
                    </span>

                    <div v-if="isbuying">
                      <button @click="buy(index)" class="btn btn-success">Buy</button>
                    </div>
              </li>
              
      </ol> 
    </div>
    `
});

