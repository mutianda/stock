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
                <el-button type="primary" @click="getTable(true)">查询</el-button>
                <el-button type="success" @click="addOrEdit({},false)">新增</el-button>


            </div>
        </div>
        <div class="table-box">
            <el-table
                    :data="tableData"
                    stripe
                    class="custom-table"
                   >
                <el-table-column
                        prop="share_code"
                        label="股票编码"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="share_name"
                        label="股票名称"
                        width="180">
                </el-table-column>
              <el-table-column
                prop="price_rise"
                label="突破位">
              </el-table-column>
              <el-table-column
                prop="price_down"
                label="跌破位">
              </el-table-column>
              <el-table-column
                prop="turn_hand"
                label="换手率">
              </el-table-column>
              <el-table-column
                prop="limit_up"
                label="涨幅">
              </el-table-column>
              <el-table-column
                label="操作">
                <template slot-scope='{row}'>
                  <el-button @click="addOrEdit(row,true)" type="warning" size="small">编辑</el-button>
                  <el-button @click="remove(row)" type="danger" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
        </div>
      <add-or-edit-modal ref="addOrEditForm" @getTable="getTable"/>
    </div>
</template>

<script>
	import AddOrEditModal from "@v/components/real-time-modal";
  export default {
		name: "index",
    components: {AddOrEditModal},
    data() {
			return {
				stockName:'',
        axios:this.$_api.realTime,
        searchForm:{
				  pageNum:1,
          pageSize:20,
        },
				tableData: []
			}
		},
    provide () {
      return {
        axios:this.axios
      }
    },

    activated(){
      this.getTable()
    },
    methods:{
		  getTable(flag){
		    flag&&(this.searchForm.pageNum =1)
		    this.axios.getRealTimePush({...this.searchForm}).then(res=>{
		      this.tableData = res.data
        })
      },
		  addOrEdit(data={},isEdit){
		    this.$refs.addOrEditForm.openModal(data,isEdit)
      },
      remove(row){
        this.axios.removeRealTimePush({id:row.id}).then(res=>{
          this.$message.success('删除成功')
          this.getTable()
        })
      }
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
          .custom-table{
            height: calc(100% - 14px);
          }
        }
    }

</style>
