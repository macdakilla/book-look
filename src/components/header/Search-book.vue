<template>
	<div class="d-flex">
		<input type="text" @keyup.enter="searchBook" v-model="searchValue" placeholder="Какую книгу найти?" class="form-control">
		<button type="Submit" @click="searchBook" class="btn btn-default">Найти</button>	
	</div>
</template>

<script>
export default {
	name: 'search-form',
	data() {
		return {
			searchValue: ''
		}
	},
	computed: {
		valueToRequest() {
			return this.searchValue.split('').map((symbol) => symbol === " " ? symbol = '+' : symbol).join('');
		}
	},
	methods: {
		searchBook() {
			if (this.valueToRequest.length > 0) {
				this.$store.dispatch('initBooks', 'q=intitle:' + this.valueToRequest +'&maxResults=12');
			}
		}
	}
}
</script>

<style scoped>
	.form-control {
		border-right: none;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
	.btn-default {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		color: #333;
		background-color: #fff;
		border-left: none;
		border-color: #ccc;
		transition: all 0.3s ease-in-out;
	}
	.btn-default:hover {
		background-color: rgb(230, 230, 230);
	}
</style>