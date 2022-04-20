<script>
	import Icon from './Icon.svelte'

	export let icon
	export let label
	export let url
</script>

<a href="{url}" class="button ripple">
	<Icon icon={icon}/>
	<span class="label">{label}</span>
</a>

<style lang="stylus">
.button
	align-items center
	background var(--surface-3)
	color var(--on-surface)
	border-radius 20px
	display inline-flex
	fill currentcolor
	height 40px
	justify-content center
	margin 0 8px 12px 0
	padding 0 20px 0 16px

.label
	margin-left 8px
	font 500 14px/20px 'Roboto', sans-serif
</style>