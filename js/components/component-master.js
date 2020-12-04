Vue.component("masterComponent", {
    data: function () {
        return {
            quantity: 11,
            flag: true,
            name: "",
            gold: 0,
            itemName: "",
            itemGroup: "",
            itemPrice: 0,
        }
    },
    methods: {
        item: function () {
            this.$root.$data.fitems.push(new Item("", this.itemName, this.itemGroup, this.itemPrice, ""));
            this.itemName = "";
            this.itemGroup = "";
            this.itemPrice = 0;
            console.log(this.$root.$data.fitems);
        },
        personnage: function () {
            let newPerso = new Perso("", this.name, 1);
            newPerso.gold = this.gold;
            this.$root.$data.people.push(newPerso);
            this.name = "";
            this.gold = 0;
        }
    },
    template:
        `
         <div class="container">
            <div class="row">
                <div class="col-6">

                    <label class="list-group-item justify-content-between align-items-center bg-light">
                        <p>New item</p>
                    </label> 

                    <div class="form-group">
                        <label for="name">Name</label>
                        <input v-model="itemName" type="text" class="form-control" id="name" placeholder="Helmet, Sword">
                    </div>
                    <div class="form-group">
                        <label for="group">Group</label>
                        <input v-model="itemGroup" type="text" class="form-control" id="group" placeholder="helmet, crown, armor....">
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input v-model="itemPrice" type="text" class="form-control" id="price" placeholder="900, 400...">
                    </div>
                    <button @click="item" class="btn btn-primary">Add item</button>
                </div>
                <div class="col-6">
                    <label class="list-group-item justify-content-between align-items-center bg-light">
                        <p>New personnage</p>
                    </label> 

                    <div class="form-group">
                        <label for="name">Name</label>
                        <input v-model="name" type="text" class="form-control" id="name" placeholder="Ruben, Edson....">
                    </div>

                    <div class="form-group">
                        <label for="gold">Gold</label>
                        <input v-model="gold" type="text" class="form-control" id="gold" placeholder="9124, 7841, 8764...">
                    </div>
                    <button @click="personnage" class="btn btn-primary">Add personnage</button>
                </div>
            </div>
        </div>
      `
});

