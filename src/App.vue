<template>
    <div class="page" id="app" @mousedown="mousedown" @mouseup="mouseup">
        <main-side class="main-side" v-model="showMenu">
        </main-side>
        <main-view class="main-view" ></main-view>
        <websocket-modal v-model="showWsModal" :tableData ="tableData"></websocket-modal>
    </div>
</template>

<script>
	import MainSide from './main/main-side'
	import MainView from "./main/main-view";
	import {menuRouter} from "./router/router";
	import WebsocketModal from '@v/components/websocket-modal'

	export default {
		name: "index",
		components: {MainView,MainSide,WebsocketModal},
        data(){
			return {
				showWsModal:false,
				tableData:[],
                showMenu:false,
                mouse:{
				    begin:0,
                    end:0
                }
            }
        },
		mounted(){
			this.saveMenuRouter()
		},
        sockets: {
            connect() {
                this.id = this.$socket.id
                console.log('连接成功')
                this.$socket.emit('login', { userid: '111', username: 'ssssss' })
                // 监听connect事件
            },
            login(data){
                console.log(data)
            },
            logout(data){
                console.log(data)
            },
	        realTimeStock(data){
                this.tableData = data
		        this.showWsModal = true
		        console.log('推送');
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
                this.$router.push({
                    name:'home'
                })
			},
            mousedown(e){
			    this.mouse.begin = e.clientX
                console.log(e);
            },
            mouseup(e){
                this.mouse.end = e.clientX
                if(this.mouse.end-this.mouse.begin>100){
                    this.showMenu = true
                }
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
            padding: 10px;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
        }
    }
</style>
