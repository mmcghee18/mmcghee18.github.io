<script>
	let { role } = $props();

	const emojis = {
		data: "📊",
		code: "💻",
		story: "✏️",
		editor: "✏️",
		design: "🎨",
		everything: "✨"
	};
</script>

<span>{role} {emojis[role.toLowerCase()] || ""}</span>

<style>
	span {
		font-size: var(--12px);
		line-height: 1;
		margin: 0 5px;
		border-radius: 4px;
		white-space: nowrap;
	}

	span:first-child {
		margin-left: 0;
	}
</style>
