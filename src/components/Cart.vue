<template>
  <div class="cart">
        <h4 class="cart-title">購物籃</h4>
        <div class="cart-items">
          <div v-for ="item in cartItems" :key="item.id" class="cart-item">
            <div class="item-photo">
              <img class="product-photo" :src="item.img" alt="">
            </div>
            <div class="item-description">
              <div class="item-info">
                <p class="item-name">{{item.productName}}</p>
                <p class="item-price">${{item.price}}</p>
              </div>
              <div class="item-quantily">
                <div @click="reduceMount(item.id)" type="button" class="circle">-</div>
                <p class="item-amount">{{item.count}}</p>
                <div @click="addMount(item.id)" type="button" class="circle">+</div>
              </div> 
            </div>                       
          </div>
        </div>
        <div class="shipping">
          <p class="shipping-title">運費</p>
          <p class="shipping-price">免費</p>
        </div>      
        <div class="total">
          <p class="total-name">小計</p>
          <p class="total-price">${{totalPrice}}</p>
        </div>
      </div>
</template>

<script>
const dummyCartItems = [
  {
    id: '1',
    productName: '破壞補丁修身牛仔褲',
    img: "https://www.yuting.idv.tw/OneBoyInc/image/2018090720Y-F/medium/61813B.jpg",
    price: 3999,
    count: 1
  },
  {
    id: '2',
    productName: '刷色直筒牛仔褲',
    img: "https://image.obdesign.com.tw/catalog/products/BA5036/BA5036@T9-1.jpg",
    price: 1299,
    count: 1
  }
]

export default {
  name: 'Cart',
  data() {
    return {
      cartItems: [],
      totalPrice: 0
    }    
  },
  methods: {
    fetchCartItems() {
      this.cartItems = dummyCartItems
      console.log(this.cartItems)
    },
    addMount(id) {
      this.cartItems.find(item => {
        if (id === item.id) {
          item.count += 1
          this.totalPrice += item.price
        }
      })
    },
    reduceMount(id) {
      this.cartItems.find(item => {
        if (id === item.id) {
          item.count -= 1
          this.totalPrice -= item.price
        }
      })
    },
    calculateTotal() {
      this.cartItems.map(item => {
        this.totalPrice += item.price
      })
      console.log(this.totalPrice)
    },
  },
  created() {
    this.fetchCartItems(),
    this.calculateTotal()
  }
}
</script>


<style>
.cart-title {
  font-size: 18px;
  font-weight: 700;  
  margin-bottom: 54px;
}
.cart-item {
  position: relative;
  display: flex;
  margin-bottom: 54px;
}
.product-photo {
  width: 100px;
  height: 100px;
  background-size: cover;
  margin-right: 24px;
  border-radius: 4px;
}
.item-description {
  display: flex;
  flex-direction: column;
}
.item-info {
  display: flex;
}
.item-price {
  position: absolute;
  right: 0;
  font-weight: 700;
}
.item-quantily {
  display: flex;
}
.circle {
  width: 26.02px;
  height: 27px;
  background-color: #e5e5e5;
  border-radius: 50%;
  text-align: center;
  margin: 0 20px;
}
.shipping, .total {
  display: flex;
  justify-content: space-between;
}
.shipping-title, .total-name {
  font-size: 14px;
}
.shipping-price, .total-price {
  font-size: 14px;
  font-weight: 700;
}

</style>


