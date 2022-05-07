<script>
	export let color;
	export let description;
	export let name;
	export let image;
</script>


<div class="card">
	<div class="card__head" style="--color: {color}">
		<img class="image" src="symbols/{image}" alt="logo " />
	</div>
	<div class="card__body">
		<div class="title">{name}</div>
		<div class="description">{description}</div>
	</div>
	<div class="card__footer">
		<slot/>
	</div>
</div>


<style lang="stylus">
.title
	color var(--on-surface)
	font 500 16px/20px 'Roboto', sans-serif
	margin-bottom 6px

.card
	border 1px solid var(--surface-3)
	border-radius 20px
	background var(--surface-2)
	display flex
	flex-direction column
	position relative

	&:first-of-type
		&::after
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
	
	&:last-of-type
		&::after
			border-radius 16px 16px 4px 16px
			content ''
			right 8px
			position absolute
			top 8px
			background url(../symbols/bat.svg), #8781D9
			background-position center
			background-repeat no-repeat
			background-size 20px auto
			height 32px
			width 48px
	
	&__head
		align-items center
		background var(--color)
		border-radius 10px
		display flex
		height 150px
		justify-content center
		margin-bottom 16px
		position relative

	&__body
		color var(--on-surface-alt)
		display flex
		flex 1
		flex-direction column
		font 400 14px/18px 'Roboto', sans-serif
		margin 0 16px 24px

	&__footer
		display flex
		justify-content space-between
		margin 0 16px 16px

.image
	height 80px
</style>