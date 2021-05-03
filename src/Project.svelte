<script>
  import _ from "lodash";

  export let id;
  export let title;
  export let description = null;
  export let url;
  export let gif = false;
</script>

<a target="_blank" href={url} class="project-container">
  <div class="project-image-container">
    <img
      src={gif ? `img/sized/${id}.gif` : `img/sized/${id}.png`}
      alt={id}
      class="project-image"
    />
  </div>
  <div class="info">
    <h3>{title}</h3>
    {#if description}
      <div class="description">{description}</div>
    {/if}
  </div>
</a>

<style>
  a {
    color: black;
    text-decoration: none;
  }

  h3 {
    font-weight: 400;
    font-style: normal;
  }

  .project-container {
    width: 297px;
    height: 100%;
    float: left;
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-right: 30px;
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    transition: box-shadow 0.2s ease, transform 0.2s ease;
    box-shadow: 0 0 1px rgb(0 0 0 / 0%);
    background-color: white;
  }
  .project-container:hover,
  .project-container:focus {
    box-shadow: 5px 5px 5px #e8e8e8;
    transform: translateY(-0.25em);
  }
  .project-container:nth-child(3n + 3) {
    margin-right: 0;
  }
  @media (max-width: 990px) {
    .project-container:nth-child(3n + 3) {
      margin-right: 30px;
    }
    .project-container:nth-child(2n + 2) {
      margin-right: 0;
    }
  }

  @media (max-width: 705px) {
    .project-container {
      margin-right: 0 !important;
      width: 100%;
    }
  }

  .project-image-container {
    width: 100%;
  }

  .project-image {
    width: 100%;
    border-radius: 9px 9px 0px 0px;
  }

  .info {
    padding: 0 10px 10px 10px;
  }
  .description {
    font-family: "Roboto";
  }
</style>
