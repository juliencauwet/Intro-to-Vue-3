const app = Vue.createApp({
        data() {
            return {
                cart: [],
            }
        },
        methods: {
            updateCart(id) {
                this.cart.push(id);
                console.log(this.cart);
            },
            removeFromCart(id) {
                const index = this.cart.indexOf(id);
                console.log('index', index);
                if(index !== -1 ){
                    this.cart.splice(index, 1);
                } else {
                    console.log('article non présent')
                }
                console.log(this.cart);

            }
        },
    }

)


