<script>
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let el;
  export let dud_color = "#841f37";
  export let text_color = "hsl(0, 0%, 55%)";

  import { onMount } from "svelte";
  onMount(() => {
    // ——————————————————————————————————————————————————
    // TextScramble
    // ——————————————————————————————————————————————————

    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = "!<>-$_\\/[]{}—=+*^?#________";
        this.update = this.update.bind(this);
      }
      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => (this.resolve = resolve));
        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || "";
          const to = newText[i] || "";
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }
      update() {
        let output = "";
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span id="dude" style="color:${dud_color}" class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    // ——————————————————————————————————————————————————
    // Example
    // ——————————————————————————————————————————————————

    const phrases = [
    "    Complex Systems Research    ",
    "      Neural Patterns Lab       ",
    " Nihilistic Philosophers League ",
    "     Non-Profit Lumberjacks     ",
    "      Nature's Playground       ",
    "     Nobel Prize Laureates      ",
    "     Nurtured by Pure Love      ",
    "    Non-Parametric Learning     ",
    "         Non-Petri Lab          ",
    "       New Paradigms Lab        ",
    "Neuroscience and Physics of Life",
    "            Bad Max             ",
    "    Nebulous Plane of Light     ",
    " Noncommutative Perpetual Lock  ",
    " Neuroscience and Physiscs Lab  ",
    "     Natural Phenomena Lab      ",
    "   Neo-Pythagorean Laboratory   ",
    "        Bonchi Approved         ",
    "     Neural Phase Landscape     ",
    "    Nutella Production Line     ",
    "        Napolitan Lovers        ",
    "  Numbingly Precise Laboratory  ",
    "   Nefarious Plotters Legion    ",
    "    Necessary Procedures Lab    ",
    "  Nosebleed Prevention Lotion   ",
    "     Nerd Power Laboratory      ",
    "    Nuclear Potato Launcher     ",
    "      Non Performing Loans      ",
    "      Nose Picking Llamas       "
];


    //const el = document.querySelector(".text");
    const fx = new TextScramble(el);

    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 1600);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  });
</script>

<div class="wrapper" />
<div id="glitch">
  <div bind:this={el} class="text" style="color:{text_color}" />
  <span id="cursor" />
</div>

<style>
  .wrapper {
    font-family: Helvetica, monospace;
    background: hsl(200, 20%, 0%);
    height: 100%;
  }

  #glitch {
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    overflow: hidden; 
  }

  .text {
    font-family: Helvetica;
    font-size: 1.4rem;
    font-weight: 100;
    margin: 0;
    padding: 0;
    text-align: center;
    letter-spacing: 0.4rem;
    text-transform: uppercase;
    margin-bottom: 0.1rem;
    margin-top: 0rem;
  }

  #glitch {
    font-weight: 100;
    font-size: 28px;
    color: #fafafa;
  }

  #glitch {
    animation: 1500ms infinite normal glitch;
  }
</style>
