<script>
  export let title =
    "Evidence from sperm whale clans of symbolic marking in non-human cultures";
  export var url = "https://arxiv.org/pdf/2007.14900.pdf";

  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let canvasRef;
  // Loaded via <script> tag, create shortcut to access PDF.js exports.
  const pdfjsLib = window["pdfjs-dist/build/pdf"];

  // The workerSrc property shall be specified.
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "//mozilla.github.io/pdf.js/build/pdf.worker.js";

  pdfjsLib
    .getDocument(url)
    .promise.then((doc) => doc.getPage(1))
    .then((page) => {
      const scale = 1.5;
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
    });
</script>

<svelte:head>
  <script src="//mozilla.github.io/pdf.js/build/pdf.js"></script>
</svelte:head>

<div class="wrapper">
  <div class="overlay"><div class="paper-title">{title}</div></div>
  <div class="pdf">
    <canvas
      in:fade={{
        duration: 2000,
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
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
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
