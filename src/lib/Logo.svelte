<script>
  export let title;
  export let description;
</script>

<div class="logo">
  <div class="titl">{title}</div>
  <div class="description">{description}</div>
</div>

<style>
  .logo {
    position: relative;
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 1);
  }

  .logo::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    border-radius: 7px;
    clip-path: polygon(5% 0, 95% 0, 100% 100%, 5% 100%);
    mask: invert;
  }
</style>
