<script>
	import Icon from './Icon.svelte'

	export let icon;
	export let url;
</script>

<a href="{url}" class="icon-button ripple" target="_blank">
	<Icon icon="{icon}"/>
</a>

<style lang="stylus">
.icon-button
	align-items center
	color var(--on-surface-alt)
	border-radius 50%
	display inline-flex
	fill var(--on-surface-alt)
	height 40px
	justify-content center
	margin-right 4px
	width 40px
</style>