<template>
  <div class="modal-view">
    <div class="info-box">
      <el-timeline>
        <el-timeline-item
          :timestamp="item.f58"
          :hide-timestamp="true"
          placement="top"
          v-for="(item, index) in [
            ...tableData,
            ...tableData,
            ...tableData,
            ...tableData,
            ...tableData
          ]"
          :key="index"
        >
          <el-card class="item-card">
            <div
              class="item-desc"
              :style="{ color: item.pushType == 'up' ? 'red' : 'green' }"
            >
              {{ item.desc }}
            </div>
            <div class="item-detail">
              <div :style="{ color: item.pushType == 'up' ? 'red' : 'green' }">
                名称:{{ item.f58 }}
              </div>
              <div>股价：{{ item.f43 }}</div>
              <div>突破位：{{ item.price_rise }}</div>
              <div>涨幅：{{ item.f170 }}</div>
              <div>换手：{{ item.f168 }}</div>
              <div>跌破位：{{ item.price_down }}</div>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <slot name="btn"></slot>
  </div>
</template>

<script>
export default {
  name: "addOrEditModal",
  props: {
    tableData: {
      type: Array,
      default: []
    }
  },

  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="less">
.modal-view {
  .info-box {
    width: 470px;
    margin-left: 20px;
    max-height: 500px;
    text-align: center;
    overflow-y: auto;
    /deep/.el-card__body {
      width: 100%;
      display: flex;
      padding: 5px;
      align-items: center;
      justify-items: center;
      .item-desc {
        width: 80px;
        font-size: 18px;
      }
      .item-detail {
        flex: 1;
        display: flex;
        text-align: left;
        flex-wrap: wrap;
        div {
          width: 100px;
        }
      }
    }
  }
}
</style>
