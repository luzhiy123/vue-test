<template>
	<header>
		<div class='head-content'>
			<i class='icon logo' @click="reload"></i>
			<ul class="nav-link">
				<li><a>产品</a><i class='icon icon-arrow'></i></li>
				<li><a>解决方案</a><i class='icon icon-arrow'></i></li>
				<li><a>资源</a><i class='icon icon-arrow'></i></li>
				<li><a>公司</a><i class='icon icon-arrow'></i></li>
			</ul>
			<div class='animate-border'></div>
			<div class="right">
				<i class="icon icon-help"></i>
				<span v-if='userInfo'>
					<i class="icon icon-gift"></i>
					<a>登陆</a>
					<a class="signup">注册</a>
				</span>
				<span v-else>
					<i class="icon head-icon"></i>
					<i class='icon icon-arrow'></i>
					<ul class='user-menu'>
						<li>
							<i class="icon icon_profile ie-background"></i>我的资料
							<i class="reminder-mark"></i>
						</li>
						<li>
							<i class="icon icon_profile ie-background"></i>我的帐户
							<i class="reminder-mark"></i>
						</li>
						<li>
							<i class="icon icon_profile ie-background"></i>我的面板
							<i class="reminder-mark"></i>
						</li>
					</ul>
				</span>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'head',
		data(){
			return{
				userInfo: false
			}
		},
		methods:{
	        //点击图标刷新页面
	        reload(){
	        	window.location.reload();
	        }
	    }
	}
</script>
<style lang="scss" scoped>
	@import 'head';
</style>