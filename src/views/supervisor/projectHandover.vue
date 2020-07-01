<template>
	<!-- 工程移交 -->
	<div class="page-container">
		<!--表格树内容栏-->
		<el-table :data="list" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中。。。"
		          :header-cell-style="$store.state.project.headerName">
			<el-table-column type="index" label="序号"></el-table-column>
			<el-table-column prop="name" label="工程名称"></el-table-column>
			<el-table-column prop="type" label="工程类别"></el-table-column>
			<el-table-column prop="zoneCnt" label="区段数量"></el-table-column>
			<el-table-column prop="status" label="状态">
				<template slot-scope="scope">
					{{ scope.row.botStatus == 1 ? '已移交':'未移交'}}
				</template>
			</el-table-column>
			<!-- 操作 -->
			<el-table-column fixed="right" width="185" label="操作" v-if="$store.state.project.userType != 5">
				<template slot-scope="scope">
					<el-button type="text" @click="handleAdd(scope.row)">移交</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!-- 移交 -->
		<el-dialog title="移交" width="500px" :visible.sync="dialogVisible" :close-on-click-modal="false">
			<el-form label-width="100px" size="small" style="text-align:left;">
				<!-- 上级菜单 -->
				<el-form-item label="移交单位" prop="type">
					<el-cascader v-model="value" :options="options" :props="optionsProps"></el-cascader>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
                <el-button size="small" @click="dialogVisible = false">取消</el-button>
                <el-button size="small" type="primary" @click="submitForm">移交</el-button>
            </span>
		</el-dialog>
	</div>
</template>

<script>
	import KtButton from '@/views/Core/KtButton';
	import TableTreeColumn from '@/views/Core/TableTreeColumn';
	import PopupTreeInput from '@/components/PopupTreeInput';
	import FaIconTooltip from '@/components/FaIconTooltip';

	export default {
		components: {
			PopupTreeInput,
			KtButton,
			TableTreeColumn,
			FaIconTooltip
		},
		data() {
			return {
				list: [],
				row: {},
				loading: false,
				dialogVisible: false,
				dataForm: {},
				value: '',
				options: [],
				optionsProps: {
					label: 'name',
					value: 'id'
				}
			};
		},
		mounted() {
			this.findTreeData();
		},
		methods: {
			//获取监理单位
			getCompany(name) {
				this.$api.company.list({name, type: 0}).then(res => {
					this.options = this.$tool.tree(res.data.resultList)
				})
			},
			// 获取数据
			findTreeData(type) {
				this.loading = true;
				this.$api.project.list({
					userId: sessionStorage.getItem("companyId"),
					limit: 9999,
					...this.filters
				}).then(res => {
					this.list = res.data.resultList
					this.loading = false;
				});
			},
			// 显示
			handleAdd(row) {
				this.row = row
				this.getCompany()
				this.dialogVisible = true;
			},
			// 表单提交
			submitForm() {
				const botStatus = "1"
				const userId = this.value[this.value.length - 1]
				const id = this.row.id
				//工程移交
				this.$api.project.update({id, userId})
			}
		}
	};
</script>

