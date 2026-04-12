<script>
	import _ from "lodash";
	import Story from "$components/Story.svelte";
	import Role from "$components/Role.svelte";
	import copy from "$data/copy.csv";
	import stories from "$data/stories.csv";

	const featuredStories = _.orderBy(
		stories.filter((s) => s.featured === "TRUE"),
		(s) => {
			const [month, year] = s.date.split("/").map(Number);
			return new Date(year, month - 1);
		},
		"desc"
	);

	const moreStories = _.orderBy(
		stories.filter((s) => s.featured !== "TRUE"),
		(s) => {
			const [month, year] = s.date.split("/").map(Number);
			return new Date(year, month - 1);
		},
		"desc"
	);
</script>

<main>
	<section id="intro">
		<h1>{@html copy[0].paragraph}</h1>

		{#each copy.slice(1) as { paragraph }}
			<p>{@html paragraph}</p>
		{/each}
	</section>

	<section id="work">
		<ul class="featured">
			{#each featuredStories as story}
				<Story {...story} />
			{/each}
		</ul>
	</section>

	<section id="more">
		<h2>More</h2>

		<ul class="more-stories">
			{#each moreStories as story}
				{@const rolesCleaned = story.roles.split(",").map((r) => r.trim())}
				<li>
					<a href={story.link} target="_blank">{story.title}</a>

					({story.publication})

					<div class="roles">
						{#each rolesCleaned as role, index}
							<Role {role} /> {index < rolesCleaned.length - 1 ? "/" : ""}
						{/each}
					</div>
				</li>
			{/each}
		</ul>
	</section>
</main>

<style>
	main {
		padding: 5rem 2rem;
		font-family: var(--font-mono);
		background: #fffcf6;
	}

	section {
		margin: 5rem auto;
	}

	section#intro {
		font-size: var(--20px);
		max-width: 660px;
	}

	section#work {
		max-width: 1100px;
	}

	#intro p:last-child {
		font-size: var(--14px);
	}

	h1 {
		font-size: var(--48px);
	}

	h2 {
		font-size: var(--32px);
	}

	ul.featured {
		list-style: none;
		padding: 0;
		display: grid;
		gap: 3rem;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}

	ul.more-stories {
		list-style: none;
		padding: 0;
		font-size: var(--18px);
	}

	ul.more-stories li {
		margin: 0.5rem 0;
	}

	.roles {
		display: inline-flex;
		align-items: center;
		font-size: var(--16px);
		flex-wrap: wrap;
	}

	@media (max-width: 500px) {
		main {
			padding: 2rem 2rem;
			font-size: var(--14px);
		}
		h1 {
			font-size: var(--32px);
		}

		section#intro {
			font-size: var(--16px);
		}

		ul.more-stories {
			font-size: var(--14px);
		}

		ul.more-stories li {
			display: flex;
			flex-direction: column;
		}
	}
</style>
