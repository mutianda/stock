<template>
    <div class="real-time">
        <div class="search-bar">
            <div class="search-item">
                <div class="item-label">名称</div>
                <div class="item-input">
                    <el-input v-model="stockName"></el-input>
                </div>
            </div>
            <div class="search-item">
                <div class="item-label">名称</div>
                <div class="item-input">
                    <el-input v-model="stockName"></el-input>
                </div>
            </div>
            <div class="search-item">
                <div class="item-label">名称</div>
                <div class="item-input">
                    <el-input v-model="stockName"></el-input>
                </div>
            </div>
            <div class="search-item">
                <div class="item-label">名称</div>
                <div class="item-input">
                    <el-input v-model="stockName"></el-input>
                </div>
            </div>
            <div class="search-item">
                <div class="item-label">名称</div>
                <div class="item-input">
                    <el-input v-model="stockName"></el-input>
                </div>
            </div>
            <div class="search-item">
                <div class="item-label">名称</div>
                <div class="item-input">
                    <el-input v-model="stockName"></el-input>
                </div>
            </div>

            <div class="search-item">
                <div class="item-label">名称</div>
                <div class="item-input">
                    <el-input v-model="stockName"></el-input>
                </div>
            </div>
            <div class="search-item">
                <div class="item-label">名称</div>
                <div class="item-input">
                    <el-input v-model="stockName"></el-input>
                </div>
            </div>

            <div class="search-item">
                <el-button type="primary">查询</el-button>
                <el-button type="success">新增</el-button>


            </div>
        </div>
        <div class="table-box">
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%;height: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
        </div>

    </div>
</template>

<script>
	export default {
		name: "index",
		data() {
			return {
				stockName:'',
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		},
        methods:{

        }
	}
</script>

<style scoped lang="less">
    .real-time{
        display: flex;
        flex-direction: column;
        .table-box{
            flex-grow: 1;
            height: 1px;
        }
    }

</style>