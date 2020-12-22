<template>
	<div id="app">
		<div class="background p-sm-5 p-0">
			<div class="container content">
				<site-header></site-header>
				<div class="row">
					<div class="col-md-12 p-0">
						<nav-category/>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 view-content">
						<router-view/>
						<div class="loader" v-if="!isLoading">
							<div class="loadingio-spinner-spinner-lqcbwzuheph"><div class="ldio-bdy5ges5tnd">
								<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer-site/>
			</div>
		</div>
	</div>
</template>

<script>
import SiteHeader from './components/header/Header';
import NavCategory from './components/nav-category/Navbar';
import axios from 'axios';
import NProgress from 'nprogress';
import FooterSite from './components/footer/FooterSite'

export default {
  	components: {
		SiteHeader,
		NavCategory,
		FooterSite
	},
	data() {
		return {
			isLoading: false
		}
	},
	created() {
		axios.interceptors.request.use((config) => {
			this.isLoading = false;
			return config;
		}, (error) => {
			this.isLoading = true;
			return Promise.reject(error);
		});

		axios.interceptors.response.use((response) => {
			this.isLoading = true;
			return response;
		}, (error) => {
			this.isLoading = true;	
			return Promise.reject(error);
		});
	}
}
</script>

<style lang="scss">
	body {
		font-family: 'Roboto', sans-serif !important;
	}
	.background {
		background: linear-gradient(to right, rgba(150,161,174,100) 0%, rgba(240,243,248,100) 30%, rgba(240,243,248,100) 70%, rgba(150,161,174,100));;
	}
	.content {
		padding: 0 !important;
		background: #ffffff;
		box-shadow: 0px 20px 30px 0px rgba(0,0,0,0.4);
		overflow: hidden;
		border-radius: 1px;
	}
	.row {
		margin: 0 !important;
	}
	a:hover {
		text-decoration: none !important;
	}
	.nowrap {
    	white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
	}
	.view-content {
		min-height: 800px;
		position: relative;
	}
	.loader {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		background-color: rgba(0, 0, 0, .4);
		width: 100%;
		height: 100%;
	}
	@keyframes ldio-bdy5ges5tnd {
	0% { opacity: 1 }
	100% { opacity: 0 }
	}
	.ldio-bdy5ges5tnd div {
	left: 62.64px;
	top: 29.52px;
	position: absolute;
	animation: ldio-bdy5ges5tnd linear 1.0204081632653061s infinite;
	background: #dddddd;
	width: 18.72px;
	height: 18.72px;
	border-radius: 9.36px / 9.36px;
	transform-origin: 9.36px 42.48px;
	}.ldio-bdy5ges5tnd div:nth-child(1) {
	transform: rotate(0deg);
	animation-delay: -0.9070294784580498s;
	background: #dddddd;
	}.ldio-bdy5ges5tnd div:nth-child(2) {
	transform: rotate(40deg);
	animation-delay: -0.7936507936507936s;
	background: #dddddd;
	}.ldio-bdy5ges5tnd div:nth-child(3) {
	transform: rotate(80deg);
	animation-delay: -0.6802721088435374s;
	background:#dddddd;
	}.ldio-bdy5ges5tnd div:nth-child(4) {
	transform: rotate(120deg);
	animation-delay: -0.5668934240362812s;
	background: #dddddd;
	}.ldio-bdy5ges5tnd div:nth-child(5) {
	transform: rotate(160deg);
	animation-delay: -0.4535147392290249s;
	background: #dddddd;
	}.ldio-bdy5ges5tnd div:nth-child(6) {
	transform: rotate(200deg);
	animation-delay: -0.3401360544217687s;
	background: #dddddd;
	}.ldio-bdy5ges5tnd div:nth-child(7) {
	transform: rotate(240deg);
	animation-delay: -0.22675736961451246s;
	background:#dddddd;
	}.ldio-bdy5ges5tnd div:nth-child(8) {
	transform: rotate(280deg);
	animation-delay: -0.11337868480725623s;
	background: #dddddd;
	}.ldio-bdy5ges5tnd div:nth-child(9) {
	transform: rotate(320deg);
	animation-delay: 0s;
	background: #dddddd;
	}
	.loadingio-spinner-spinner-lqcbwzuheph {
	width: 144px;
	height: 144px;
	display: inline-block;
	overflow: hidden;
	background: rgba(0, 0, 0, 0);
	}
	.ldio-bdy5ges5tnd {
	width: 100%;
	height: 100%;
	position: relative;
	transform: translateZ(0) scale(1);
	backface-visibility: hidden;
	transform-origin: 0 0; /* see note above */
	}
	.ldio-bdy5ges5tnd div { box-sizing: content-box; }
</style>
