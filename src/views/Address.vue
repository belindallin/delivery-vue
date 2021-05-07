<template>
  <div id="checkout">
  <div class="content">
    <h1 class="title">結帳</h1>
    <div class="left-side">
      <div class="delivery">
        <Step/>
        <div class="delivery-address">          
          <form>
            <h3 class="activity-title">寄送地址</h3>          
            <div class="delivery-address-form">
                <div class="form-group salutation">
                <label for="salutation">稱謂</label>
                <select class="form-control" id="salutation">
                  <option>先生</option>
                  <option>女士</option>
                </select>
              </div>
              <div class="form-group name">
                <label for="name">姓名</label>
                <input id="name" name="name" type="name"  class="form-control"  placeholder="請輸入姓名">
              </div>
              <div class="form-group phone">
                <label for="phone">電話</label>
                <input id="phone" name="phone"  type="text"  class="form-control" placeholder="請輸入行動電話">
              </div>
              <div class="form-group email">
                <label for="email">Email</label>
                <input id="email" name="email"  type="email"  class="form-control" placeholder="請輸入電子郵件">
              </div>
              <div class="form-group city">
                <label for="city">縣市</label>
                <select class="form-control" id="city">
                  <option>請選擇縣市</option>
                  <option>台北</option>
                  <option>台中</option>
                  <option>台南</option>
                  <option>高雄</option>
                  <option>南投</option>
                  <option>新竹</option>
                </select>
              </div>
              <div class="form-group address">
                <label for="address">地址</label>
                <input  id="address" name="address" type="text" class="form-control" placeholder="請輸入地址">
              </div>
            </div>
            <router-link to="/delivery/shipping"><button type="button" class="btn btn-warning next-step">下一步&rarr;</button></router-link>          
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
  name: 'Address',
  components: {
    Step,
    Cart
  }
    
}
</script>

<style>

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


