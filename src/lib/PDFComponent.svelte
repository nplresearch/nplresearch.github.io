<script>
  //read doc from store, or something
  export let title;
  export let url;
  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let canvasRef;
  // Loaded via <script> tag, create shortcut to access PDF.js exports.
  const pdfjsLib = window["pdfjs-dist/build/pdf"];

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "//cdn.jsdelivr.net/npm/pdfjs-dist@latest/build/pdf.worker.js";

  pdfjsLib
    .getDocument(url)
    .promise.then((doc) => doc.getPage(1))
    .then((page) => {
      const scale = 1;
      const viewport = page.getViewport({ scale });
      // Prepare canvas using PDF page dimensions
      var context = canvasRef.getContext("2d");
      canvasRef.height = viewport.height;

      canvasRef.width = viewport.width;
      // Render PDF page into canvas context
      var renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      page.render(renderContext);
    })
    .catch((error) => {
      console.log(error.message);
    });
</script>

<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/npm/pdfjs-dist@latest/build/pdf.min.js"
  ></script>
</svelte:head>

<div class="wrapper">
  <div class="overlay"><div class="paper-title">{title}</div></div>
  <div class="pdf">
    <canvas
      in:fade={{
        duration: 1000,
        easing: quintOut,
      }}
      bind:this={canvasRef}
    />
  </div>
</div>

<style>
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  canvas,
  .overlay {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    padding: 0;
    inset: 4rem;
  }
  .overlay {
    display: grid;
    place-items: center;
    overflow: elipsis;
    padding: 1rem;
    background-color: rgb(255, 255, 255, 0.1);
    box-shadow: 0 10px 15px rgb(0 0 0 / 40%);
    color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(15px);
    background-blend-mode: overlay;
  }
  .paper-title {
    margin-bottom: 2rem;
    font-family: "Noto Sans TC", sans-serif;
    font-size: 0.8rem;
    line-height: 1.2rem;
    text-align: center;

    color: var(--text1);
  }

  .pdf {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
  }
</style>
