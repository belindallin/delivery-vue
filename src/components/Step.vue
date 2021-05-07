<template>
  <div id="step-control" class="stepper-panel">
    <div class="stepper-container">
      <div class="step">
        <div class="circle-container step-first"></div>
        <div class="label-container">寄送地址</div>
      </div>
      <div class="step">
        <div class="circle-container step-second"></div>
        <span class="connent-line"></span>
        <div class="label-container">運送方式</div>
      </div>
      <div class="step">
        <div class="circle-container step-third"></div>
        <span class="connent-line"></span>
        <div class="label-container">付款資訊</div>
      </div>
    </div>
  </div>
</template>

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
  background-color: #2a2a2a;
  border-radius: 50%;
  color: white;
  margin: 0 5px;
}
.connent-line {
  position: absolute;
  top: 13px;
  right: 120px;
  display: block;
  height: 2px;
  width: 80%;
  background-color: #2e2e2e;
}
</style>

