<script>
	let { children } = $props();
</script>

<div class="layout">
	{@render children()}
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: Arial, sans-serif;
		background-color: #f4f4f4;
	}
	.layout {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>