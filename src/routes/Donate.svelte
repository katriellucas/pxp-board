<script>
	import { fade } from 'svelte/transition';
	import DonateBanner from '../components/DonateBanner.svelte';
</script>

<section in:fade="{{delay: 100, duration: 250 }}" out:fade="{{ duration: 100 }}">
	<div class="card-grid">
		<slot/>
	</div>
	<DonateBanner/>
</section>

<style lang="stylus">

.card-grid
	display grid
	gap 8px
	grid-template-columns repeat(auto-fit, minmax(248px, 1fr))

	@media (min-width 600px)
		gap 16px
</style>
