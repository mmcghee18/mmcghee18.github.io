<script>
	import Role from "$components/Role.svelte";

	const { id, title, description, link, publication, roles, date } = $props();

	const rolesCleaned = roles.split(",").map((r) => r.trim());
	const year = date.split("/")[1];
</script>

<li class="story">
	<a href={link} target="_blank">
		<div class="img-container">
			<img src={`assets/img/${id}.jpg`} />

			<div class="overlay">
				<p class="description">{description || "tk description"}</p>
				<div class="roles">
					{#each rolesCleaned as role, index}
						<Role {role} /> {index < rolesCleaned.length - 1 ? "/" : ""}
					{/each}
				</div>
			</div>
		</div>

		<h3><span class="year">{year}</span> {title}</h3>

		<div class="mobile-description">
			<p class="description">{description || "tk description"}</p>
			<div class="roles">
				{#each rolesCleaned as role, index}
					<Role {role} /> {index < rolesCleaned.length - 1 ? "/" : ""}
				{/each}
			</div>
		</div>
	</a>
</li>

<style>
	a {
		text-decoration: none;
	}

	h3 {
		font-size: var(--18px);
		text-transform: uppercase;
		line-height: 1.2;
		margin: 1rem 0;
	}

	.year {
		font-size: var(--12px);
		color: var(--color-gray-500);
		display: block;
		margin-bottom: 4px;
	}

	.img-container {
		position: relative;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.5rem;
		padding: 1rem;
		overflow: scroll;
		opacity: 0;
		transition: opacity calc(var(--1s) * 0.25) ease;
	}

	img {
		box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
		transition:
			transform calc(var(--1s) * 0.25) ease,
			opacity calc(var(--1s) * 0.25) ease;
	}

	a:hover .overlay {
		opacity: 1;
	}

	.roles {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		font-size: var(--18px);
	}

	.description {
		font-size: var(--16px);
		margin: 0;
	}

	.mobile-description {
		display: none;
	}

	@media (min-width: 501px) {
		a:hover img {
			filter: blur(2px);
			opacity: 0.1;
		}
	}

	@media (max-width: 500px) {
		.mobile-description {
			display: block;
		}

		.overlay {
			display: none;
		}

		.description {
			font-size: var(--14px);
		}
	}
</style>
