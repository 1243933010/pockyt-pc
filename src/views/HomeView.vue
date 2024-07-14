
<script setup>
import { $request } from '@/utils/request'
import { reactive, ref } from 'vue';
import { userStoreFnc } from '@/stores/userStore';
const store = userStoreFnc()

</script>

<template>
  <!-- <main> -->
  <div class="banner">
    <div class="posi">
      <img src="@/assets/banner.jpg" alt="">
    </div>
    <div class="left">
      <div class="tip">
        <div class="title">{{ $t('app.newAdd6') }}</div>
        <div class="label">{{ $t('app.newAdd7') }}</div>
        <div class="btn"><el-button type="primary">{{ $t('app.name26') }}</el-button></div>

      </div>
    </div>
  </div>

  <div class="lipin">
    <div class="title">
      <img src="@/assets/index1.svg" alt="">
      <span>{{ $t('app.newAdd5') }}</span>
    </div>
    <div class="list">
      <div class="item"></div>
    </div>
  </div>
  <!-- </main> -->
</template>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 415px;
  position: relative;


  .posi {
    position: absolute;
    z-index: -10;
    width: 100%;
    top: 0;

    img {
      // width: 1100px;
      height: 100%;
      // margin: 0 auto;
    }
  }

  .left {
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .tip {
      width: 50%;
      margin-top: 80px;

      .title {
        font-size: 40px;
        // font-weight: 600;
        color: #0f864b;
      }

      .label {
        font-size: 20px;
        margin-bottom: 20px;
        color: #0f864b;
      }

      .btn {
        .el-button {
          background-color: #2EAC6C;
          border: none;
          border-radius: 12px;
          width: 200px;
          height: 40px;
        }
      }
    }
  }
}
</style>