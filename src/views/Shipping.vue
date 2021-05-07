<template>
  <div id="checkout">
  <div class="content">
    <h1 class="title">結帳</h1>
    <div class="left-side">
      <div class="delivery">
        <Step :currentPage="currentPage"/>
        <div class="delivery-shipping">          
          <form>
            <h3 class="activity-title">運送方式</h3>          
            <div class="delivery-shipping-form">
              <div class="form-group standard checked">
                <input id="standard" name="standard" type="radio" value="standard">
                <div class="shipping-info">
                  <p class="shipping-name">標準運送</p>
                  <p class="shipping-during">約3-7個工作天</p>
                </div>
                <p class="shipping-price">免費</p>
              </div>
              <div class="form-group dhl">
                <input id="dhl" name="dhl" type="radio" value="dhl">
                <div class="shipping-info">
                  <p class="shipping-name">DHL 貨運</p>
                  <p class="shipping-during">48小時內送達</p>
                </div>
                <p class="shipping-price">$500</p>
              </div>
            </div>
            <router-link to="/delivery/address"><p type="button" class="btn pre-step">&larr;上一步</p></router-link>   
            <router-link to="/delivery/checkout"><button type="button" class="btn btn-warning next-step">下一步&rarr;</button></router-link>          
          </form>
        </div>
      </div>
    </div>
    <div class="right-side">
      <cart/>
    </div>
  </div>
</div>
</template>

<script>
import Step from '../components/Step.vue'
import Cart from '../components/Cart.vue'
export default {
  name: 'Shipping',
  components: {
    Step,
    Cart
  },
  props: {
    deliveryInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentPage: 'Shipping'  
    }
  }
    
}
</script>

<style scoped>

p {
  margin: 0
}
#checkout {
  display: grid;
  grid-template-columns: 165px 1fr 165px;
  margin: 140px;
}
.content {
  grid-column: 2/3;
  display: grid;
  grid-template-columns:1fr 65px 1fr;
}
.title {
  margin-bottom: 38px;
  line-height: 38px;
  font-size: 32px;
  font-weight: 700;
  color: #2a2a2a;
}
.left-side {
  grid-column: 1/2;
  width: 540px;
  margin-right: 30px;
}
.delivery-shipping{
  position: relative;
}
.activity-title {
  margin-bottom: 48px;
  font-size: 24px;
  font-weight: 700;
}
.form-group {
  position: relative;
  display: flex;
  margin-bottom: 20px;
  padding: 5px 10px;
  height: 60px;
  border: 1px solid;
  border-radius: 4px;
  align-items: center;
}

.form-control:disabled, .form-control:read-only {
  background-color: white;
  color: #6c757d;
}
.form-control {
  border: 1px solid;
  appearance: auto;
}
.shipping-info {
  font-size: 14px;
  margin-left: 10px;
}
.form-group  .shipping-price {
  position: absolute;
  right: 10px;
}
.pre-step, .next-step {
  margin-top: 168px;
}
.next-step {
  position: absolute;
  right: 0;
  padding: 10px 40px;
  background-color: #f67599;
  color: white;
  border-color: #f67599;
}
.right-side {
  grid-column: 3/4;
  margin-left: 30px;
  padding: 32px 5% 52px 24px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
}
</style>



