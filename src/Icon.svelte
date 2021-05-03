<script>
  export let src;
  export let href;
</script>

<a {href} target="_blank">
  <img src={`icons/${src}`} alt={src} class="icon" />
</a>

<style>
  a {
    margin-right: 6px;
  }
  a:last-child {
    margin-right: 0px;
  }
  .icon {
    padding: 8px;
  }
  .icon:hover {
    background: #f0f8fa;
  }
</style>
