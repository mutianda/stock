<template>
  <el-drawer
    title=""
    :visible="value"
    :size="250"
    direction="ltr"
    :with-header="false"
    @close="closeDraw"
  >
    <div class="side">
      <el-menu
        class="menu-box"
        background-color="#020b21"
        text-color="#fff"
        router
        :default-active="activeRouter"
        @select="handleSelect"
        active-text-color="#ffd04b"
      >
        <div v-for="(item, index) in menuList" :key="index">
          <el-submenu
            :index="item.name"
            v-if="item.children && item.children.length"
            class="menu-item"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.title }}</span>
            </template>
          </el-submenu>
          <el-menu-item :index="item.name" v-else class="menu-item">
            <i class="el-icon-menu"></i>
            <span>{{ item.title }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
  </el-drawer>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    menuList() {
      return this.$store.state.common.routerList;
    },
    activeRouter() {
      return this.$route.name;
    }
  },
  mounted() {
    console.log(this.menuList, this.$route.name);
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(this.$route);
      this.$router.push({
        name: key
      });
    },
    closeDraw() {
      this.$emit("input", false);
    }
  }
};
</script>

<style scoped lang="less">
/deep/ .el-menu {
  border: none;
}
.side {
  height: 100%;
  .menu-box {
    height: 100%;
    .menu-item {
      text-align: left;
    }
  }
}
</style>
