<template>
    <div class="">

    </div>
</template>

<script>
	export default {
		name: "index",
        props:{
			show:{
				type:Boolean,
                default:false
            },
            title:{
	            type:String,
	            default:'弹窗'
            },
            width:{
	            type:[Number,String],
	            default:'30%'
            },
            footHide:{
	            type:Boolean,
	            default:false
            }
        }
	}
</script>

<style scoped>

</style>