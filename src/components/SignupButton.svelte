<script>
	export let label
	export let url
</script>

<a href="{url}" class="button ripple" target="_blank">
	<span class="label">{label}</span>
</a>

<style lang="stylus">
.button
	align-items center
	background var(--primary)
	color var(--on-primary)
	border-radius 20px
	display inline-flex
	fill currentcolor
	height 40px
	justify-content center
	padding 0 16px

.label
	font 500 14px/20px 'Roboto', sans-serif
</style>