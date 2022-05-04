<script>
	import Icon from './Icon.svelte'

	export let color;
	export let name;
	export let image;
</script>


<div class="card">
	<div class="card__head" style="--color: {color}">
		<img src="symbols/{image}" alt="logo " />
	</div>
	<div class="card__body">
		<div class="title">{name}</div>
	</div>
</div>


<style lang="stylus">
.title
	color var(--on-surface)
	font 500 16px/20px 'Roboto', sans-serif
	margin 16px

.card
	border 1px solid var(--surface-3)
	border-radius 20px
	background var(--surface-2)
	display flex
	flex-direction column
	position relative
	overflow hidden

	&:first-of-type
		&::before
			border-radius 16px 16px 4px 16px
			content ''
			right 8px
			position absolute
			top 8px
			background url(../symbols/brazil.svg), #73af00
			background-position center
			background-repeat no-repeat
			background-size 36px auto
			height 32px
			width 48px
	
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
</style>