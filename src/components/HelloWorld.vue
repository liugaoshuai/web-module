<template>
	<div class="hello tac">
		<h1>{{ msg }}</h1>
		<ul class="hello-box clearfix">
				<router-link to="/newpage" tag="li" class="hello-item">拼装 / 一个新的模板</router-link>
				<router-link to="/module/subfield" tag="li" class="hello-item">修改 / 一个已有模板</router-link>
				<router-link to="/module/subfield" tag="li" class="hello-item">设置 / 你的喜好</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style>
	.hello{
		padding: 100px;
	}
	.hello-box{
		width: 1000px;
		margin: 100px auto;
	}
	.hello-item{
		height: 200px;
		line-height: 200px;
		width: 200px;
		border: 1px solid #333;
		float: left;
		margin: 20px;
		cursor: pointer;
	}
</style>