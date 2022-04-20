<script>
	import Icon from './Icon.svelte'
	export let quest;

	let quest_book = [
		{ 
			name: "At CoinMarketCap, click ⭐, vote 'Good' and search 'Pointpay' on the search bar.",
			url: "https://coinmarketcap.com/currencies/pointpay"
		},
		{ 
			name: "Follow PointPay on Twitter, like and comment the last tweets using $PXP.",
			url: "https://twitter.com/PointPay1"
		},
		{ 
			name: "Follow PointPay on Instagram, like, save and comment the last posts using #PointPay",
			url: "https://instagram.com/pointpayofficial"
		},
		{ 
			name: "Subscribe to PointPay on YouTube, like and comment the last videos",
			url: "https://youtube.com/c/PointPay_official"
		},
		{ 
			name: "Increase PointPay rank on Google by searching",
			url: "https://www.google.com/search?q=pointpay"
		},
		{ 
			name: "Like and follow PointPay on Facebook",
			url: "https://www.facebook.com/PointPayLtd"
		},
	];
</script>

<div class="banner">
	<div class="head">
		<Icon big icon="quest"/>
		<div class="title">On Point Quest</div>
	</div>
	<div class="body">
		{quest_book[quest].name}
		<a href="{quest_book[quest].url}" target="_blank" class="button">Let's go!</a>
	</div>
</div>

<style lang="stylus">
.banner
	background var(--primary)
	border-radius 20px
	color var(--on-primary)
	fill currentcolor
	margin-top 16px
	padding 16px

.head
	align-items center
	display flex
	margin-bottom 8px

.title
	font 500 20px/24px 'Roboto', sans-serif
	margin-left 8px

.body
	align-items center
	border-top solid 1px rgba(#fff, .3)
	display flex
	font 500 16px/20px 'Roboto', sans-serif
	justify-content space-between
	padding-top 16px

.button
	align-items center
	background var(--on-primary)
	color var(--primary)
	border-radius 20px
	display inline-flex
	fill currentcolor
	height 40px
	justify-content center
	margin-left 16px
	min-width 96px
	padding 0 16px
	font 500 14px/20px 'Roboto', sans-serif

</style>