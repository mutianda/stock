<template>
    <keep-alive>
        <router-view class="router-view"><slot></slot></router-view>
    </keep-alive>
</template>

<script>
	export default {
		name: "main-view"
	}
</script>

<style scoped>

</style>