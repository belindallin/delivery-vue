<template>
  <div id="checkout">
    <div class="content">
      <h1 class="title">結帳</h1>
      <div class="left-side">
        <div class="delivery">
          <Step :currentPage="currentPage"/>
          <div class="delivery-checkout">          
            <form>
              <h3 class="activity-title">付款資訊</h3>          
              <div class="delivery-checkout-form">
                <div class="form-group ccname">
                  <label for="ccname">持卡人姓名</label>
                  <input v-model="ccname" id="ccname" name="ccname" type="name"  class="form-control"  placeholder="John Doe">
                </div>
                <div class="form-group cardnumber">
                  <label for="cardnumber">卡號</label>
                  <input v-model="cardNumber" id="cardnumber" name="cardnumber" type="text"  class="form-control"  placeholder="1111 2222 3333 4444">
                </div>
                <div class="form-group expdate">
                  <label for="expdate">有效日期</label>
                  <input v-model="expdate" id="expdate" name="expdate"  type="text"  class="form-control" placeholder="MM/YY">
                </div>
                <div class="form-group cvv">
                  <label for="cvv">cvc/cvv</label>
                  <input  v-model="cvv" id="cvv" name="cvv"  type="text"  class="form-control" placeholder="123">
                </div>
              </div>
              <router-link to="/delivery/shipping"><p type="button" class="btn pre-step">&larr;上一步</p></router-link>          
              <button @click="handleSubmit();resultDelivertInfo();showModal()" type="button" class="btn btn-warning next-step" data-toggle="modal" data-target="#resultModal">
                確認下單
              </button>    
            </form>
          </div>
        </div>
      </div>
      <div class="right-side">
        <Cart @after-submit="afterHandleSubmit"/>
      </div>         
      <ResultModal :intial-delivery-info="deliveryInfo" :intial-is-show-modal = "isShowModal" @after-handle-close = "changeIsModalShow"/>  
    </div>
    
  </div>  
</template>

<script scoped>
import Step from '../components/Step.vue'
import Cart from '../components/Cart.vue'
import ResultModal from '../components/ResultModal.vue'

const STORAGE_KEY = 'delivery-checkout-vue'

export default {
  name: 'Checkout',
  components: {
    Step,
    Cart,
    ResultModal
  },
  data() {
    return {
      ccname: '',
      cardNumber: '',
      expdate: '',
      cvv: '',
      totalPrice: '',
      deliveryInfo: '',
      isShowModal: false,
      currentPage: 'Checkout',
      modalId: 'resultModal'
    }
  },
  methods: {
    fetchCheckInfo() {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY))
      this.ccname = data.ccname
      this.cardNumber = data.cardNumber
      this.expdate = data.expdate
      this.cvv = data.cvv
    },
    handleSubmit() {
      const payLoad = {
        ccname: this.ccname,
        cardNumber: this.cardNumber,
        expdate: this.expdate,
        cvv: this.cvv
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payLoad))
    },
    afterHandleSubmit(payLoad) {
      this.totalPrice = payLoad.totalPrice
    },
    resultDelivertInfo() {
      const address = JSON.parse(localStorage.getItem('delivery-address-vue'))
      const shipping = JSON.parse(localStorage.getItem('delivery-shipping-vue'))
      const checkout = JSON.parse(localStorage.getItem(STORAGE_KEY))
      this.deliveryInfo = {
        ...address,
        ...shipping,
        ...checkout,
        totalPrice: this.totalPrice
      }
      const result = {
        ...this.deliveryInfo
      }
      console.log(result)
    },
    showModal() {
      this.isShowModal = true
    },
    cancelModal() {
      this.isShowModal = false
    },
    changeIsModalShow(modalStatus) {
      this.isShowModal = modalStatus
    }
  },
  created() {
    this.fetchCheckInfo()
  }
}
</script>

<style>

#checkout {
  display: grid;
  grid-template-columns: 165px 1fr 165px;
  margin: 100px 50px;
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
.delivery-checkout{
  position: relative;
}
.activity-title {
  margin-bottom: 48px;
  font-size: 24px;
  font-weight: 700;
}
.delivery-checkout-form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 64px);
  grid-gap: 24px 30px
}
.form-control:disabled, .form-control:read-only {
  background-color: white;
  color: #6c757d;
}
.form-control {
  border: 1px solid;
  appearance: auto;
}
.ccname {
  grid-column: 1/3;
  width: 350px;
}
.cardnumber {
  grid-column: 1/3;
  width: 350px;
}
.expdate {
  grid-column: 1/2;
  width: 255px;
}
.cvv {
  grid-column: 3/4;
  width: 255px;
}
.next-step {
  position: absolute;
  right: 0;
  padding: 10px 40px;
  background-color: #f67599;
  color: white;
  border-color: #f67599;
}
.btn-warning,
.btn-warning:hover,
.btn-warning:focus,
.btn-warning:active,
.btn-outline-primary,
.btn-outline-primary:focus,
.btn-outline-primary:hover,
.btn-outline-primary:active
{
  color: #fff!important;
  background-color:  #f67599!important;
  border-color: #f67599!important;
}
.right-side {
  grid-column: 3/4;
  margin-left: 30px;
  padding: 32px 5% 52px 24px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
}
.showModal {
  background: #f67599
}
</style>


