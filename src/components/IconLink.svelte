<script>
	import Icon from './Icon.svelte'

	export let icon;
	export let url;
</script>

<a href="{url}" class="icon-link ripple" target="_blank">
	<Icon icon="{icon}"/>
</a>

<style lang="stylus">
.icon-link
	align-items center
	color var(--on-surface-alt)
	border-radius 50%
	display inline-flex
	fill var(--on-surface-alt)
	height 40px
	justify-content center
	width 40px
</style>