<script>
	import SignupButton from './SignupButton.svelte'
</script>

<header class="top-app-bar">
	<h1 class="title">PXP Board</h1>
	<SignupButton url="https://auth.pointpay.io/sign-up?ref=15542698942" label="PointPay bank"/>
</header>

<style lang="stylus">
.top-app-bar
	align-items center
	display flex
	height 64px
	justify-content space-between
	margin 16px 0
	padding 0 8px
	
	@media (min-width: 360px)
		padding 0 16px

	@media (min-width: 600px)
		padding 0 32px

	@media (min-width: 840px)
		padding 0 64px

	@media (min-width: 1080px)
		padding 0 96px

.title
	color var(--on-surface)
	font 500 32px/36px 'Roboto', sans-serif
</style>
