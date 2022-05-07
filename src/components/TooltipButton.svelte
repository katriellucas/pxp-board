<script>
	import IconButton from './IconButton.svelte'

	export let icon;
</script>

<div class="tooltip-button" tabindex="0">
	<IconButton strong icon="{icon}"/>
	<div class="ballon">
		<slot/>
	</div>
</div>

<style lang="stylus">
.tooltip-button
	display inline-flex
	position relative
		
	&:hover
		.ballon
			opacity 1
			visibility visible

.ballon
	background #fff
	border solid 1px #DBDFE3
	border-radius 16px
	display flex
	opacity 0
	right 0
	padding 4px
	position absolute
	bottom 48px
	transition opacity .3s, visibility .3s
	visibility hidden
	z-index 1
	width 150px
</style>