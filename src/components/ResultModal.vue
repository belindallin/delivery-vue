<template>
  <div class="modal fade" :class="{show: isShowModal}" ref="resultModal" id="resultModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delivery-Info</h5>
          <button @click="handleClose" type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          {{deliveryInfo}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ResultModal',
  props: {
    intialDeliveryInfo: {
      type: Object,
      require: true
    },
    intialIsShowModal: {
      type: Boolean,
      require: true
    }
  },
  data() {
    return {
      deliveryInfo: this.intialDeliveryInfo,
      isShowModal: this.intialIsShowModal
    }
  },
  methods: {
    fetchResult() {
      this.deliveryInfo = this.intialDeliveryInfo
    },
    fetchIsShowModal() {
      this.isShowModal = this.intialIsShowModal
    },
    handleClose() {
      this.isShowModal = false
      const modalStatus = false
      this.$emit('after-handle-close', modalStatus)
    }
  },
  watch: {
    intialDeliveryInfo() {
      this.fetchResult()
    },
    intialIsShowModal() {
      this.fetchIsShowModal()
    }

  }
}
</script>


<style scoped>

.fade:not(.show) {
  opacity: 100;
}
.modal {
  overflow:visible;
  position: fixed;
  top: 30%;
}
.modal-body {
  height: 400px;
}
.close{
  border: 0px;
  background-color: white
}
.show {
  display: block;
}

</style>
