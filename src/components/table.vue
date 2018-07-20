 <template>
    <div class="cnode-list">
    <el-table
      :data="tableData"
      header-align="true"
      :border="true"
      style="width: 100%">

      <el-table-column
        prop="title"
        label="标题"
        width="">
      </el-table-column>

      <el-table-column
        prop="visit_count"
        label="浏览次数"
        width="s">
      </el-table-column>

      <el-table-column
        prop="tab"
        label="栏目">
      </el-table-column>

      <el-table-column
        prop="top"
        :formatter="booleanFormat"
        label="是否置顶">
      </el-table-column>

    </el-table>
    </div>
  </template>

<script>
export default {
  mounted () {
    this.getCnodeList()
  },
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    getCnodeList () {
      this.$api
        .get('topics')
        .then(res => {
          console.log(res)
          if (res.success) {
            this.tableData = res.data
          }
        })
        .catch(error => {
          alert(error)
        })
    },
    booleanFormat (row) {
      if (!row) return
      const isTop = row.top
      return isTop ? '是' : '否'
    }
  }
}
</script>
