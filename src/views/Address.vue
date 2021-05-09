<template>
  <div id="checkout">
  <div class="content">
    <h1 class="title">結帳</h1>
    <div class="left-side">
      <div class="delivery">
        <Step :currentPage="currentPage" />
        <div class="delivery-address">          
          <form>
            <h3 class="activity-title">寄送地址</h3>          
            <div class="delivery-address-form">
                <div class="form-group salutation">
                <label for="salutation">稱謂</label>
                <select v-model="salutation" class="form-control" id="salutation">
                  <option value="先生">先生</option>
                  <option value="女士">女士</option>
                </select>
              </div>
              <div class="form-group name">
                <label for="name">姓名</label>
                <input v-model="username" id="name" name="name" type="name"  class="form-control"  placeholder="請輸入姓名">
              </div>
              <div class="form-group phone">
                <label for="phone">電話</label>
                <input v-model="phone" id="phone" name="phone"  type="text"  class="form-control" placeholder="請輸入行動電話">
              </div>
              <div class="form-group email">
                <label for="email">Email</label>
                <input v-model="email" id="email" name="email"  type="email"  class="form-control" placeholder="請輸入電子郵件">
              </div>
              <div class="form-group city">
                <label for="city">縣市</label>
                <select v-model="city" class="form-control" id="city">
                  <option>請選擇縣市</option>
                  <option value="台北">台北</option>
                  <option value="台中">台中</option>
                  <option value="台南">台南</option>
                  <option value="高雄">高雄</option>
                  <option value="南投">南投</option>
                  <option value="新竹">新竹</option>
                </select>
              </div>
              <div class="form-group address">
                <label for="address">地址</label>
                <input v-model="address"  id="address" name="address" type="text" class="form-control" placeholder="請輸入地址">
              </div>
            </div>
            <router-link to="/delivery/shipping"><button @click="handleSubmit" type="button" class="btn btn-warning next-step">下一步&rarr;</button></router-link>          
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

const STORAGE_KEY = 'delivery-address-vue'

export default {
  name: 'Address',
  components: {
    Step,
    Cart
  },
  data() {
    return {
      username: '',
      salutation: '先生',
      phone: '',
      email: '',
      city: '請選擇縣市',
      address: '',
      currentPage: 'Address'     
    }
  },
  methods: {
    fetchAddress() {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY))
      this.username = data.name
      this.salutation = data.salutation
      this.phone = data.phone
      this.email = data.email
      this.city = data.city
      this.address = data.address
    },
    handleSubmit() {
      const payLoad = {
        name: this.username,
        salutation: this.salutation,
        phone: this.phone,
        email: this.email,
        city: this.city,
        address: this.city,
      }      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payLoad))
    }
  },
  created() {
    this.fetchAddress()
  }  
}
</script>

<style scoped>

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
.delivery-address{
  position: relative;
}
.activity-title {
  margin-bottom: 48px;
  font-size: 24px;
  font-weight: 700;
}
.delivery-address-form {
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
.salutation {
  grid-column: 1/2;
  width: 150px;
}
.name {
  grid-column: 2/4;
}
.phone {
  grid-column: 1/3;
}
.email {
  grid-column: 3/4;
  width: 260px;
}
.city {
  grid-column: 1/2;
}
.address {
  grid-column: 2/4;
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


