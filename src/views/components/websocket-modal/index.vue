<template>
    <el-dialog title="实时推送" :visible="value" width="800px" @close="closeModal">
        <div class="modal-view">
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="f58"
                        label="名称"
                        align="center"
                        min-width="100">
                </el-table-column>
                <el-table-column
                        prop="f57"
                        label="代码"
                        align="center"
                        min-width="100"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="f43"
                        align="center"
                        min-width="100"
                        label="股价">
                </el-table-column>
                <el-table-column
                        prop="f170"
                        align="center"
                        min-width="100"
                        label="涨幅">
                </el-table-column>
                <el-table-column
                        prop="f168"
                        align="center"
                        min-width="100"
                        label="换手">
                </el-table-column>
            </el-table>
        </div>
    </el-dialog>
</template>

<script>
	export default {
		name: "addOrEditModal",
        props:{
			value:{
				type:Boolean,
                default:false
            },
            tableData:{
				type:Array,
                default: []
            }
        },

		data(){
			return {

			}
		},
		methods:{
			closeModal(){
				this.$emit('input',false)
            }

		}
	}
</script>

<style scoped>

</style>
