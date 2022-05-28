<script>
	import {active} from 'tinro';
	import Icon from './Icon.svelte'

	function goUp() {
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}, 250)
	}
</script>

<div class="navigation-rail">
	<a class="route route-ripple" href="/" use:active exact on:click={goUp}>
		<span class="indicator">
			<Icon icon="token"/>
		</span>
		<span class="label">Token</span>
	</a>
	<a class="route route-ripple" href="/savings" use:active exact on:click={goUp}>
		<span class="indicator">
			<Icon icon="savings"/>
		</span>
		<span class="label">Savings</span>
	</a>
	<a class="route route-ripple" href="/staking" use:active exact on:click={goUp}>
		<span class="indicator">
			<Icon icon="coin-stake"/>
		</span>
		<span class="label">Staking</span>
	</a>
	<a class="route route-ripple" href="/donate" use:active exact on:click={goUp}>
		<span class="indicator">
			<Icon icon="donate"/>
		</span>
		<span class="label">Donate</span>
	</a>
</div>

<style lang="stylus">
.navigation-rail
	align-items center
	background var(--surface-1)
	border-right solid 1px var(--surface-3)
	display none
	flex-direction column
	height 100%
	justify-content center
	left 0
	width 80px
	position fixed
	top 0
	user-select none
	-webkit-tap-highlight-color transparent

	@media(min-width 840px)
		display flex

	&:focus
		outline none !important

	&::before
		content ''
		position absolute
		top 0
		background url(../logo.svg)
		background-position center
		background-repeat no-repeat
		background-size 40px auto
		height 80px
		width 80px

.route
	align-items center
	display flex
	flex-direction column
	height 64px
	justify-content center
	width 80px

.indicator
	align-items center
	border-radius 16px
	display flex
	fill var(--on-surface-alt)
	min-height 32px
	justify-content center
	transition width .3s
	width 32px

.label
	color var(--on-surface-alt)
	font 500 12px/16px 'Roboto', sans-serif
	margin-top 4px

:global(.active)
	.indicator
		background rgba(#0F8BFE, .07)
		fill var(--primary)
		width 56px
	.label
		color var(--primary)
</style>
