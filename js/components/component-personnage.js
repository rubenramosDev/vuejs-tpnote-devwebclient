Vue.component("personnageComponent", {
    data: function () {
        return {
            name: "Ruben",
            person: null,
            cheat: false,
            nlife: 0,
            ngold: 0,
            nlevel: 0,
            nomon
        }
    },
    computed: {
        exists: function () {
            let found = people.find(e => e.name === this.name);
            if (found) {
                this.person = found;
                this.cheat = false;
                return true;
            } else if (this.name.includes('cheat')) {
                this.cheat = true;
            } else {
                this.cheat = false;
                return false;
            }
        },
        buyCart: function () {

            if (this.$root.$data.flagBuy) {
                
                let item = this.$root.$data.item;

                if (item.price <= this.person.gold) {
                    this.person.boughtItems.push(item);
                    this.person.gold -= item.price;
                }
            }
        }
    },
    methods: {
        modify: function () {
            this.person.level = this.nlevel;
            this.person.gold = this.ngold;
            this.person.life = this.nlife;
        },
        onlyNumber($event) {
            let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { 
                $event.preventDefault();
            }
        },
        buyItems: function () {
            this.$root.$data.buy = true;
        }
    },
    props: ['people'],
    template:
        `
        <div>
            <label class="list-group-item justify-content-between align-items-center bg-light">
                <p>Personnage</p>
            </label>    

            <label class="list-group-item justify-content-between align-items-center">
                Name: 
                <input v-model="name"/>
                <button class="btn btn-link" data-toggle="tooltip" data-placement="top" 
                title="For cheat mode add the word cheat to the name">Looking for cheat mode ?</button>
            </label> 
        
            <ol v-if="exists" class="list-group list-group-flush"> 
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">{{person.name}}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Life : {{person.life}}</h6>

                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Armor</td>
                                            <td>
                                                <span class="badge badge-primary badge-pill">
                                                {{person.armor}}
                                                </span>
                                            </td>
                                        </tr>
                                        
                                        <tr>
                                            <td>Gold</td>
                                            <td>
                                                <span class="badge badge-primary badge-pill">
                                                {{person.gold}}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Level</td>
                                            <td>
                                                <span class="badge badge-primary badge-pill">
                                                {{person.level}}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Strength</td>
                                            <td>
                                                <span class="badge badge-primary badge-pill">
                                                {{person.strength}}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Vitality</td>
                                            <td>
                                                <span class="badge badge-primary badge-pill">
                                                {{person.vitality}}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Bought Items</td>
                                            <td>
                                                <span v-if="person.boughtItems.length == 0" class="badge badge-danger badge-pill">Has no bought items</span>
                                                <span v-else v-for="item in person.boughtItems" class="badge badge-warning badge-pill">
                                                    {{item.name}}
                                                </span>                                                    
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Slots</td>
                                            <td>
                                                <span v-if="person.slots.length == 0" class="badge badge-danger badge-pill">Has no slots</span>
                                                <span v-for="slot in person.slots" class="badge badge-danger badge-pill">
                                                    {{slot.name}}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>                                      
                            <button @click="buyItems" class="btn btn-secondary card-link">Buy items</button>
                        </div>
                    </div>
                </li>
            </ol> 
            <ol v-else-if="this.cheat" class="list-group list-group-flush"> 
                <div class="alert alert-success" role="success">
                    Cheat mode activated
                </div>

                <table>
                    <tr>
                        <td>
                            <div class="card" style="width: 18rem;">
                                <div class="card-footer">
                                    {{person.name}}
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        Level <span class="badge badge-primary badge-pill">{{person.level}}</span>
                                        <input @keypress="onlyNumber" v-model="nlevel" placeholder="New level" />
                                    </li>

                                    <li class="list-group-item">
                                        Life <span class="badge badge-primary badge-pill">{{person.life}}</span> <br>
                                        <input @keypress="onlyNumber" v-model="nlife" placeholder="New life" />
                                    </li>
                                    <li class="list-group-item">
                                        Gold <span class="badge badge-primary badge-pill">{{person.gold}}</span>
                                        <input @keypress="onlyNumber" v-model="ngold" placeholder="New gold" />
                                    </li>
                                </ul>
                            </div>
                            <div class="card-footer">
                                <button @click="modify" class="btn btn-warning">Do it!</button>
                            </div>
                        </td>
                    </tr>
                </table>
            </ol> 
            <ol v-else class="list-group list-group-flush"> 
            <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Personages</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="person in people">
                <td>
                {{person.name}}
                </td>
              </tr>
              </tbody>
              </table>
            </ol> 
            <div v-if="buyCart">
                hola
            </div>
        </div>
      `
});

