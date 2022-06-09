<script>
	export let description;
	export let label;
</script>

<div class="tooltip-button" tabindex="0">
	<button class="button ripple">
		<span class="label">{label}</span>
	</button>
	<div class="ballon">
		{description}
	</div>
</div>

<style lang="stylus">
.button
	align-items center
	background rgba(#0F8BFE, .1)
	color var(--primary)
	border-radius 20px
	display inline-flex
	fill currentcolor
	height 40px
	justify-content center
	padding 0 16px

.label
	font 500 14px/20px 'Roboto', sans-serif

.tooltip-button
	display inline-flex
	position relative
		
	&:hover
		.ballon
			opacity 1
			visibility visible

.ballon
	background var(--surface-3)
	border-radius 16px
	bottom 48px
	display flex
	font 400 14px/20px 'Roboto', sans-serif
	left 0
	opacity 0
	padding 12px
	position absolute
	transition opacity .3s, visibility .3s
	visibility hidden
	width 240px
	z-index 1
</style>