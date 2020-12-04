var app = new Vue({
    el: '#main-div',
    data: {
        fitems: [
            new Item("", "helmet", "helmet", 200, ""),
            new Item("", 'broigne', 'armor', 200, ""),
            new Item("", 'hauberk', 'armor', 500, ""),
            new Item("", 'dagger', 'weapon', 100, ""),
            new Item("", 'long sword', 'weapon', 300, ""),
            new Item("", 'torch', 'lighter', 2, ""),
            new Item("", 'protection potion', 'potion', 100, ""),
            new Item("", 'fireball', 'spell', 1000, ""),
            new Item("", 'invisibility', 'spell', 1000, ""),
            new Item("", 'apple', 'food', 1, ""),
            new Item("", 'beef', 'food', 5, "")
        ],
        sitems: [
            new Item("", "Gold sword", "armor", 50000, ""),
            new Item("", 'Cake', 'food', 800, ""),
            new Item("", 'Excalibur\'s sword', 'armor', 800000, "")
        ],
        people,
        flag: true,
        mode: "Normal",
        buy: false,
        flagBuy: false,
        item: null
    },
    methods: {
        change: function () {
            if (!this.flag)
                this.mode = "Normal";
            else
                this.mode = "Creator";
        }
    },
});