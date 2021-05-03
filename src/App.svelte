<script>
  import Header from "./Header.svelte";
  import Project from "./Project.svelte";
  import data from "./data.json";
  import _ from "lodash";
</script>

<main>
  <Header />
  <div class="title">📌 Pinned projects</div>
  <div class="projects">
    {#each data.projects.filter((d) => d.pinned) as d}
      <Project {...d} />
    {/each}
  </div>
  <div class="title">✨ Everything else</div>
  <div class="projects">
    {#each _.orderBy( data.projects.filter((d) => !d.pinned), (d) => (d.date.split("-").length === 2 ? new Date(`01-${d.date}`) : new Date(d.date)), ["desc"] ) as d}
      <Project {...d} />
    {/each}
  </div>
</main>

<style>
  main {
    max-width: 960px;
    margin: 0 auto;
  }

  .title {
    font-family: "Noto Serif";
    font-size: 20px;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 990px) {
    main {
      margin-left: 20px;
      margin-right: 20px;
    }
    .projects {
      justify-content: center;
    }
    .pinned {
      text-align: center;
    }
  }
</style>
