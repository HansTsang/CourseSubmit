<template>
  <div>
    <el-table>
      <el-table-column :label="info" >
          <el-table-column
            prop=""
            label="日期">
          </el-table-column>
          <el-table-column
            prop=""
            label="班级编号">
          </el-table-column>
          <el-table-column
            prop=""
            label="实际上课人数">
          </el-table-column>
      </el-table-column>
      <el-table-column :label="dateTime">
        <el-table-column
            v-for="item in week" :key="item.id"
            :label="item.class">
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      info: 'Teacher',
      dateTime: '2018-06-01至2018-08-01',
      week: [
        { id: 0, class: '1' },
        { id: 1, class: '2' },
        { id: 2, class: '3' },
        { id: 3, class: '4' },
        { id: 1, class: '5' },
        { id: 2, class: '6' },
        { id: 3, class: '7' }
      ]
    }
  }
}
</script>
