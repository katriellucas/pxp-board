<script>
	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function closeDialog() {
		dispatch('message', false );
	}
</script>
<div class="overlay" on:click|self={closeDialog} in:fade="{{ duration: 200 }}" out:fade="{{ duration: 150 }}">
	<div class="contact-card" in:fly="{{ y: 64, duration: 200 }}">
		<div class="head">
			<div class="title">Contact</div>
		</div>
		<div class="body">
			<div style="display: flex">
				<input class="input" type="text" placeholder="Enter your name"/>
				<input class="input" type="email" placeholder="Enter your email"/>
			</div>
			<textarea class="text-area"></textarea>
			<div class="actions">
				<input type="submit" value="Send"/>
			</div>
		</div>
	</div>
</div>

<style lang="stylus">
.overlay
	align-items center
	background rgba(0,0,0, .7)
	display flex
	flex-direction column
	height 100%
	justify-content center
	left 0
	position fixed
	top 0
	width 100%
	z-index 2

.contact-card
	background var(--surface-1)
	border-radius 24px
	display flex
	flex-direction column
	height auto
	max-width 560px
	padding 24px

.head
	display flex
	background red

.body
	display flex
	margin-left 16px
	width 100%

.input
	background none
	width 100%

.text-area
	background none

.actions
	display flex
	flex-direction row-reverse
</style>