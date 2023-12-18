app.component('product-display', {
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-if="isDataLoaded" :src="image">
            </div>
            <div class="product-info" v-if="isDataLoaded">
                <h1><a :href="href">{{ products }}</a></h1>
                <p v-if="isInStock">In stock</p>
                <p v-else>Out Of Stock</p>
          
                <div v-for="(sock, index) in socks"
                   v-on:mouseover="updateProduct(index)"
                   class="color-circle"
                   :style="{backgroundColor: sock.color}"
                   ></div>

               <button 
               class="button" 
               :class="{disabledButton: !isInStock}" 
               :disabled="!isInStock"
               v-on:click="addToCart">Add to cart</button>
               
               <button 
               class="button" 
               v-on:click="removeFromCart">Remove</button>


            </div>
            
        </div>
    </div>`,
    data() {
        return {
            isDataLoaded: false,
            products: 'Socks wow',
            selectedProduct: 0,
            href: 'www.github.com',
            inventory: 100,
            socks: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.socks[this.selectedProduct].id);
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.socks[this.selectedProduct].id);
        },
        updateProduct(index) {
            this.selectedProduct = index;
        },
    },
    computed: {
        isInStock() {
            console.log('isInStock', this.socks[this.selectedProduct].pieces);
            return this.socks[this.selectedProduct].pieces > 10;
        },
        image() {
            return this.socks[this.selectedProduct].url;
        },
        inStock() {
            console.log('isStock');

            return this.products[this.selectedProduct].pieces;
        }
    },
    beforeCreate() {
        fetch('./assets/data/products.json')
            .then(response => {
                data = response.json().then(
                    res => {
                        this.socks = res.products[0].socks;
                        this.isDataLoaded = true;
                    }

                )
                //this.socks = data.socks;
            })
            .catch(error => {
                console.error('Error loading JSON file', error);
            });
    },

})