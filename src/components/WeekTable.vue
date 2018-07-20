<template>
  <div class="week-table">
    <el-card>
    <table cellspacing="0" border="1" width="100%" >
      <tr id="one">
        <td colspan="5">Teacher</td>
        <td colspan="6">DateTime</td>
        <td colspan="7">Option</td>
      </tr>
      <tr id="two">
        <td rowspan="3">课时日期</td>
        <td rowspan="3">班级编号</td>
        <td rowspan="3">人数</td>
        <td colspan="4">上午</td>
        <td colspan="4">下午</td>
        <td colspan="4" rowspan="2">课时费统计</td>
        <td colspan="3" rowspan="3">操作</td>
      </tr>
      <tr id="two">
        <td>第一节</td><td>第二节</td><td>第三节</td><td>第四节</td>
        <td>第五节</td><td>第六节</td><td>第七节</td><td>第八节</td>
      </tr>
      <tr id="two">
        <td>08:40-09:30</td><td>09:40-10:30</td><td>10:40-11:30</td><td>13:00-13:50</td>
        <td>14:00-14:50</td><td>15:00-15:50</td><td>16:00-16:50</td><td>17:00-17:50</td>
        <td>课时名</td><td>课时数</td><td>课时费</td><td>小计</td>
      </tr>
      <tbody>
      <tr class="data-rows" v-for="(item,index) in this.WeekList" :key="index">
        <td>{{item.CourseDate}}</td>
        <td>{{item.ClassCode}}</td>
        <td>{{item.ClassPerson}}</td>
        <td v-for="index in 8" :key="index"></td>
        <td>{{item.Subject}}</td><td>{{item.CourseLesson}}</td><td>{{item.CoursePrice}}</td><td>{{item.CourseSubtotal}}</td>
        <td colspan="3">
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="info" icon="el-icon-message" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </td>
      </tr>
      <tr class="data-rows">
        <td colspan="11">合计</td>
        <td></td><td></td><td></td><td></td>
        <td colspan="3">
          <el-button type="primary" icon="el-icon-download">导出表格</el-button>
        </td>
      </tr>
      </tbody>
    </table>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 移除测试
      WeekList: [
        {
          CourseDate: '2018-07-20',
          ClassCode: '1410',
          ClassPerson: 30,
          Subject: '英语',
          CourseLesson: 2,
          CoursePrice: 200,
          CourseSubtotal: 400
        },
        {
          CourseDate: '2018-07-20',
          ClassCode: '1410',
          ClassPerson: 30,
          Subject: '数学',
          CourseLesson: 3,
          CoursePrice: 230,
          CourseSubtotal: 690
        },
        {
          CourseDate: '2018-07-20',
          ClassCode: '1410',
          ClassPerson: 30,
          Subject: '物理',
          CourseLesson: 3,
          CoursePrice: 200,
          CourseSubtotal: 600
        }
      ]
    }
  }
}
</script>
