<script>
    let canvasRef;
  
    export var url = "https://arxiv.org/pdf/2007.14900.pdf";
    export var default_url =
      "https://www.swashvillage.org/storage/img/images_1/danny-devito-biography.jpg";
  
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
      })
      .catch(() => {
        var img = new Image();
        var context = canvasRef.getContext("2d");
        canvasRef.height = 1000;
        canvasRef.width = 650;
        img.src = default_url;
        img.onload = function () {
          context.drawImage(img, 0, 0);
        };
      });
  </script>
  
  <svelte:head>
    <script src="//mozilla.github.io/pdf.js/build/pdf.js"></script>
  </svelte:head>
  
  <canvas bind:this={canvasRef} />
  
  <style>
    canvas {
      width: 100%;
      height: 100%;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      border-radius: 0.5rem;
      padding: 0;
      inset: 4rem;
    }
  </style>
  