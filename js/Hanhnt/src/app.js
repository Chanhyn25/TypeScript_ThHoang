"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const hooks_1 = require("preact/hooks");
const preact_svg_1 = __importDefault(require("./assets/preact.svg"));
const vite_svg_1 = __importDefault(require("/vite.svg"));
require("./app.css");
function App() {
    const [count, setCount] = (0, hooks_1.useState)(0);
    return (<>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={vite_svg_1.default} class="logo" alt="Vite logo"/>
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preact_svg_1.default} class="logo preact" alt="Preact logo"/>
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>);
}
exports.App = App;
