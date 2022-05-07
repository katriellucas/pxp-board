<script>
	export let icon;
	export let big = false;
	export let mini = false;
</script>

<svg class="icon" class:big class:mini viewBox="0 0 24 24">
	<use xlink:href="sprite.svg#{icon}"></use>
</svg>

<style lang="stylus">
.icon
	height 24px
	width 24px

.big
	height 40px
	width 40px

.mini
	height 18px
	width 18px
</style>