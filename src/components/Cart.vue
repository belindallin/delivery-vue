<template>
  <div class="cart">
        <h4 class="cart-title">購物籃</h4>
        <div class="cart-items">
          <div class="cart-item">
            <div class="item-photo">
              <img class="product-photo" src="https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg" alt="">
            </div>
            <div class="item-description">
              <div class="item-info">
                <p class="item-name">破壞補丁修身牛仔褲</p>
                <p class="item-price">$3,999</p>
              </div>
              <div class="item-quantily">
                <div type="button" class="circle">-</div>
                <p class="item-amount">1</p>
                <div type="button" class="circle">+</div>
              </div> 
            </div>                       
          </div>
          <div class="cart-item">
            <div class="item-photo">
              <img class="product-photo" src="https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg" alt="">
            </div>
            <div class="item-description">
              <div class="item-info">
                <p class="item-name">破壞補丁修身牛仔褲</p>
                <p class="item-price">$3,999</p>
              </div>
              <div class="item-quantily">
                <div type="button" class="circle">-</div>
                <p class="item-amount">1</p>
                <div type="button" class="circle">+</div>
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
          <p class="total-price">$5298</p>
        </div>
      </div>
</template>

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
  backgroind-size: cover;
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
.item-reduce {
  
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


