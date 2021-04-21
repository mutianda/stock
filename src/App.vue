<template>
  <div
    class="page"
    id="app"
    @mousedown="mousedown"
    @mouseup="mouseup"
    @touchstart="mousedown"
    @touchend="mouseup"
  >
    <main-side class="main-side" v-model="showMenu"> </main-side>
    <main-view class="main-view"></main-view>
    <websocket-modal
      draggable="true"
      class="ws-modal"
      :class="{ 'show-modal': showWsModal || !tableData.length }"
      :tableData="tableData"
    >
      <div class="handle-btn" slot="btn" @click="closeModal">
        <i
          :class="
            showWsModal || !tableData.length
              ? 'el-icon-arrow-left'
              : 'el-icon-arrow-right'
          "
        ></i>
      </div>
    </websocket-modal>
    <a href="https://beian.miit.gov.cn/" class="beian">苏ICP备2021017546号</a>
  </div>
</template>

<script>
import MainSide from "./main/main-side";
import MainView from "./main/main-view";
import { menuRouter } from "./router/router";
import WebsocketModal from "@v/components/websocket-modal";

export default {
  name: "index",
  components: { MainView, MainSide, WebsocketModal },
  data() {
    return {
      showWsModal: false,
      tableData: [],
      showMenu: false,
      mouse: {
        begin: 0,
        end: 0
      }
    };
  },
  mounted() {
    this.saveMenuRouter();
  },
  sockets: {
    connect() {
      this.id = this.$socket.id;

      this.$socket.emit("login", { userid: "111", username: "ssssss" });
      // 监听connect事件
    },

    realTimeStock(data) {
      this.tableData = data.sort((a, b) => b.f170 - a.f170);
      console.log(this.tableData, "table");
      this.showWsModal = true;
      const timer = setTimeout(() => {
        this.showWsModal = false;
        clearTimeout(timer);
      }, 20000);
      console.log("推送");
    },
    message(data) {
      // 监听message事件，方法是后台定义和提供的

      this.$message.info(data.content);
    }
  },
  methods: {
    saveMenuRouter() {
      const list = menuRouter.map(item => {
        return {
          // 供有三级路由的页面读取
          children: item.children || [],
          icon: "",
          ...item
        };
      });
      this.$router.addRoutes(list);
      this.$store.commit("common/saveRouter", list);
      this.$router.push({
        name: "macd"
      });
    },
    mousedown(e) {
      if (e.type == "touchstart") {
        const ev = e.changedTouches[0];
        this.mouse.begin = ev.screenX;
      }
      if (e.type == "mousedown") {
        if (e.clientY > 200) return;
        this.mouse.begin = e.clientX;
      }
    },
    mouseup(e) {
      if (e.type == "touchend") {
        const ev = e.changedTouches[0];
        if (!ev || ev.screenY > 200) return;
        this.mouse.end = ev.screenX;
        if (this.mouse.end - this.mouse.begin > 100) {
          this.showMenu = true;
        }
      }
      if (e.type == "mouseup") {
        if (e.clientY > 200) return;
        this.mouse.end = e.clientX;
        if (this.mouse.end - this.mouse.begin > 100) {
          this.showMenu = true;
        }
      }
    },
    closeModal() {
      this.showWsModal = !this.showWsModal;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  height: 100vh;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
<style lang="less" scoped>
.page {
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  .main-view {
    flex-grow: 1;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 30px);
    overflow-y: auto;
  }
  .beian {
    position: absolute;
    bottom: 1px;
    left: 50%;
    font-size: 16px;
  }
  .ws-modal {
    position: fixed;
    right: 0;
    bottom: 0;
    height: 200px;
    width: 500px;
    z-index: 999;
    animation: all ease 0.2s;
    overflow-x: hidden;
    transition: transform 2s;
    &.show-modal {
      transform: translateX(470px);
    }
    .handle-btn {
      position: absolute;
      left: 1px;
      cursor: pointer;
      height: 50px;
      line-height: 50px;
      color: #fff;
      font-size: 20px;
      top: 50%;
      width: 30px;
    }
  }
}
</style>
