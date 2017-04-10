<template>
	<div>
		<tb-head></tb-head>
		<div>
			<h1>{{guessCityid}} : {{ guessCity }}</h1>
		</div>
	</div>
</template>

<script>
	import tbHead from '../../components/header/head'
	import {cityGuess} from '../../service/getData'
	export default {
		name: 'aa',
		data () {
			return {
				guessCity: '',
				guessCityid: ''
			}
		},
		components:{
			tbHead
		},
		mounted() {
			cityGuess().then(res => {
            this.guessCity = res.name;
            this.guessCityid = res.id;
        })
		}
	}
</script>

<style>
	h1 {
		padding: 0;
		margin: 0;
	}
</style>
