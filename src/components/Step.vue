<template>
  <div id="step-control" class="stepper-panel">
    <div class="stepper-container">
      <div :class="{checked: currentPage === 'Shipping' || currentPage === 'Checkout', active: currentPage === 'Address'}" class="step">
        <div class="circle-container step-first"></div>
        <div class="label-container">寄送地址</div>
      </div>
      <div :class="{checked: currentPage === 'Checkout', active: currentPage === 'Shipping'}" class="step">
        <div class="circle-container step-second"></div>
        <span :class="{display: currentPage === 'Shipping' || currentPage === 'Address' || currentPage === 'Checkout'}" class="connent-line"></span>
        <div class="label-container">運送方式</div>
      </div>
      <div :class="{active: currentPage === 'Checkout'}" class="step">
        <div class="circle-container step-third"></div>
        <span :class="{display: currentPage === 'Checkout'}" class="connent-line"></span>
        <div class="label-container">付款資訊</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step",
  props: {
    currentPage: {
      type: String,
      required: true
    }
  }
}
</script>


<style>

.stepper-panel {
  height: 88px;
}
.stepper-container {
  display: flex;
  justify-content: space-between;
}
.step {
  position: relative;
  display: flex;
  text-align: center;
  color: #afb1bd;
}
.step-first::after {
  content: "1";
}
.step-second::after {
  content: "2";
}
.step-third::after {
  content: "3";
}
.circle-container {
  height: 24px;
  width: 24px;
  background-color: white;
  border: 1px solid #afb1bd;
  border-radius: 50%;  
  margin: 0 5px;
}
.connent-line {
  position: absolute;
  top: 13px;
  right: 120px;
  display: block;
  height: 2px;
  width: 80%;
  background-color: #afb1bd;
}
.checked .circle-container, .display {
    background-color:#2a2a2a;
    color: white;
}
.active .circle-container {
  color: #2a2a2a;
  border: 1px solid #2a2a2a;
}
.checked .label-container, .active .label-container {
  color: #2a2a2a;    
}
.checked .circle-container::after {
  content: "\2714";
}


</style>

