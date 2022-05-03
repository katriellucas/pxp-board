<script>
	import Icon from './Icon.svelte'

	export let icon;
</script>

<button class="icon-button ripple">
	<Icon icon="{icon}"/>
</button>

<style lang="stylus">
.icon-button
	align-items center
	color var(--on-surface-alt)
	border-radius 50%
	display inline-flex
	fill var(--on-surface-alt)
	height 40px
	justify-content center
	width 40px
</style>