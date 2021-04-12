<template>
    <div class="home-page">
<!--        <el-button @click="login" type="primary"> 登录</el-button>-->
<!--        <el-button @click="sendMsg" type="primary"> 发消息</el-button>-->
    </div>
</template>

<script>
	export default {
		name: "index",
        data(){
			return {
				socket:null
            }
        },
        mounted() {

        },

        methods:{
	        login(){
		        this.$socket.emit('login', { userid: '111', username: 'sss' })
            },
	        sendMsg(){
		        this.$socket.emit('message', { userid: '111', username: 'sss',content:'hello 大傻逼' })
	        },
	        openWs(e){
		        console.log(e);
		        this.socket.send('login', { username:'ss'})
	        },
	        onMessage(e){
		        console.log(e);
	        },
	        onclose(){

            }
        }
	}
</script>

<style scoped>

</style>
