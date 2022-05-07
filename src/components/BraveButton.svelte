<script>
	import Icon from './Icon.svelte'
</script>

<a href="https://brave.com/download/" target="_blank" class="button ripple">
	<Icon mini icon="download"/>
	<span class="label">Download Brave</span>
</a>

<style lang="stylus">
.button
	align-items center
	background var(--primary)
	color var(--on-primary)
	border-radius 20px
	display flex
	fill currentcolor
	height 40px
	justify-content center
	padding 0 16px

.label
	margin-left 8px
	font 500 14px/20px 'Roboto', sans-serif
</style>