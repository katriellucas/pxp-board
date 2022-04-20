<div class="spinner"></div>

<style lang="stylus">
.spinner
	border 3px solid var(--primary)
	border-right 3px solid transparent
	border-radius 50%
	height 16px
	animation rotation 1s infinite linear
	width 16px

@keyframes rotation
	from
		transform rotate(0deg)
	to
		transform rotate(359deg)
</style>
