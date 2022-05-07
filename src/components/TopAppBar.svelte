<script>

	import SignupButton from './SignupButton.svelte'
	import ThemeButton from './ThemeButton.svelte'

	export let mode;

	console.log(mode, "on top app bar")

</script>

<header class="top-app-bar">
	<div class="top-app-bar__logo">
		<img class="image" src="logo.svg" />
		<h1 class="title">Board</h1>
	</div>
	<div class="actions">
		<ThemeButton mode="{mode}" on:message/>
		<SignupButton url="https://auth.pointpay.io/sign-up?ref=22297046471" label="PointPay Bank"/>
	</div>
</header>

<style lang="stylus">
.top-app-bar
	align-items center
	display flex
	height 64px
	justify-content space-between
	margin 16px 0 40px
	padding 0 16px

	@media (min-width 600px)
		padding 0 32px

	@media (min-width 840px)
		padding 0 64px

	@media (min-width 1080px)
		padding 0 96px

	&__logo
		align-items center
		display flex

.image
	margin-right 16px
	width 40px

	@media (min-width 840px)
		display none

.title
	color var(--on-surface)
	font 500 20px/24px 'Roboto', sans-serif

	@media (min-width 840px)
		font 500 32px/36px 'Roboto', sans-serif

.actions
	align-items center
	display flex
</style>
