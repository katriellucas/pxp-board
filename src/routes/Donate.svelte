<script>
	import { fade } from 'svelte/transition';
</script>

<section  in:fade="{{delay: 100, duration: 250 }}" out:fade="{{ duration: 100 }}">
	<div class="card-grid">
		<slot/>
	</div>
</section>

<style lang="stylus">

.card-grid
	display grid
	gap 8px
	grid-template-columns 1fr


	@media (min-width: 600px)
		gap 16px
		grid-template-columns 1fr 1fr 1fr
</style>
