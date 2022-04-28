<script>
	export let url;
	export let label;
</script>

<span class="chip ripple" href="{url}">{label}</span>

<style lang="stylus">
.chip
	align-items center
	border 1px solid var(--primary)
	border-radius 20px
	color var(--primary)
	display inline-flex
	font 500 14px/20px 'Roboto', sans-serif
	height 40px
	justify-content center
	margin-right 8px
	padding 0 16px
</style>