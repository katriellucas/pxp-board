<script>
	export let icon;
	export let big = false;
</script>

<svg class="icon" class:big viewBox="0 0 24 24">
	<use xlink:href="sprite.svg#{icon}"></use>
</svg>

<style lang="stylus">
.icon
	height 24px
	width 24px

.big
	min-height 40px
	min-width 40px
</style>