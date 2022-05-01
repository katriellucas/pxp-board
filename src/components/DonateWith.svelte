<script>
	import Icon from './Icon.svelte'

	export let name;
</script>


<div class="card">
	<div class="card__head">
		<img class="image" alt="logo" />
	</div>
	<div class="card__body">
		<div class="title">{name}</div>
	</div>
</div>


<style lang="stylus">
.title
	color var(--on-surface)
	font 500 16px/20px 'Roboto', sans-serif
	margin-top 16px

.card
	border 1px solid var(--surface-3)
	border-radius 20px
	background var(--surface-2)
	display flex
	flex-direction column
	padding 16px
	
	&__head
		align-items center
		background var(--color)
		border-radius 10px
		display flex
		height 150px
		justify-content center

	&__body
		color var(--on-surface)
		font 400 12px/16px 'Roboto', sans-serif

.price, .fee, .volume
	display flex
	justify-content space-between

.button
	align-items center
	color var(--on-surface)
	border-radius 50%
	display inline-flex
	fill var(--on-surface)
	height 40px
	justify-content center
	width 40px

.image
	width 40px
	height 40px
	margin-right 16px

.name
	color var(--on-surface)
	font 500 16px/20px 'Roboto', sans-serif

.exchange
	align-items center
	display flex
</style>