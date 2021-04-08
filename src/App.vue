<template>
    <div class="page" id="app">
        <main-side class="main-side">
        </main-side>
        <main-view class="main-view"></main-view>
    </div>
</template>

<script>
	import MainSide from './main/main-side'
	import MainView from "./main/main-view";
	import {menuRouter} from "./router/router";

	export default {
		name: "index",
		components: {MainView,MainSide},
		mounted(){
			this.saveMenuRouter()
		},
    sockets: {
      connect() {
        this.id = this.$socket.id
        console.log('连接成功')
        this.$socket.emit('login', { userid: '111', username: 'sss' })
        // 监听connect事件
      },
      login(data){
        console.log(data)
      },
      logout(data){
        console.log(data)
      },
      message(data) {     // 监听message事件，方法是后台定义和提供的
        console.log(data)
        this.$message.info(data.content)
      },
    },
		methods:{
			saveMenuRouter(){
				const list = menuRouter.map(item=> {
					return {
						// 供有三级路由的页面读取
						children: item.children || [],
						icon: '',
						...item
					}
				})
				this.$router.addRoutes(list)
				this.$store.commit('common/saveRouter', list)
			}
		},
	}
</script>

<style>
    body{
        margin: 0;
        height:100vh;
        background-color: #111;
    }
    #app {
          height: 100%;
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #fff;
    }
</style>
<style lang="less" scoped>
    .page {
        width: 100%;
        height: 100%;
        display: flex;

        .main-view {
            flex-grow: 1;

            height: 100%;
        }

        .main-side {
            width: 230px;
            flex-shrink: 0;
            height: 100%;
        }
    }
</style>
