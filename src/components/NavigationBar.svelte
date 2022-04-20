<script>
	import {active} from 'tinro';
	import Icon from './Icon.svelte'
</script>

<div class="navigation-bar">
	<a class="route route-ripple" href="/" use:active exact>
		<span class="indicator">
			<Icon icon="token"/>
		</span>
		<span class="label">Token</span>
	</a>
	<a class="route route-ripple" href="/savings" use:active exact>
		<span class="indicator">
			<Icon icon="savings"/>
		</span>
		<span class="label">Savings</span>
	</a>
	<a class="route route-ripple" href="/staking" use:active exact>
		<span class="indicator">
			<Icon icon="coin-stake"/>
		</span>
		<span class="label">Staking</span>
	</a>
</div>

<style lang="stylus">
.navigation-bar
	align-items center
	background var(--surface-1)
	display flex
	height 80px
	justify-content center
	bottom 0
	width 100%
	position sticky

	@media(min-width 840px)
		display none

.route
	align-items center
	display flex
	flex-direction column
	height 80px
	justify-content center
	min-width 120px 

.indicator
	align-items center
	border-radius 16px
	display flex
	fill var(--on-surface-alt)
	height 32px
	justify-content center
	margin-top 14px
	transition width .3s
	width 32px

.label
	color var(--on-surface-alt)
	font 500 12px/16px 'Roboto', sans-serif
	margin 4px 0 16px

:global(.active)
	.indicator
		background rgba(#0C7EF9, .1)
		fill var(--primary)
		width 56px
	.label
		color var(--primary)
</style>