// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3LmCz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _customButton = require("./components/custom-button");
var _playChoice = require("./components/play-choice");
var _router = require("./router");
var _myCounter = require("./components/counter/my-counter");
var _index = require("./components/score/index");
var _state = require("./state");
(function() {
    const container = document.querySelector(".root");
    (0, _state.state).init();
    (0, _customButton.initCustomButton)();
    (0, _playChoice.initChoice)();
    (0, _myCounter.initCounter)();
    (0, _index.initGameScore)();
    (0, _router.initRouter)(container);
})();

},{"./components/custom-button":"d9GRh","./components/play-choice":"c2q23","./router":"4QFWt","./components/counter/my-counter":"9n8Xg","./components/score/index":"5XKJp","./state":"1Yeju"}],"d9GRh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCustomButton", ()=>initCustomButton);
function initCustomButton() {
    class Button extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const button = document.createElement("button");
            const style = document.createElement("style");
            button.textContent = this.textContent;
            button.className = "boton";
            style.innerHTML = `
                .boton{
                    width: 322px;
                    background-color: #006CFC;
                    color:#fff;
                    font-size:35px;
                    border: solid 4px #001997;
                    border-radius: 15px;
                    margin:0;
                    padding:20px 0;
                    font-family: 'Odibee Sans', cursive;
                }

                .boton:hover{
                    cursor: pointer;
                    background-color: #0d5bc1;
                }

                @media (min-width: 769px){
                    .boton{
                        width: 404px;
                        font-size:45px;
                    }
                  }
            `;
            shadow.appendChild(button);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-button", Button);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"c2q23":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initChoice", ()=>initChoice);
function initChoice() {
    const rockImg = require("ac25434800b7f1ae");
    const paperImg = require("a3de56d14f61fa84");
    const scissorsImg = require("49b8b6e83fd81237");
    class Choice extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            const size = this.getAttribute("data-size");
            div.className = "choice";
            div.innerHTML = `
              <img class="choice-img ${size}" src="${this.textContent === "piedra" ? rockImg : this.textContent === "tijeras" ? scissorsImg : paperImg}">
            `;
            style.innerHTML = `
            .choice {
                display: flex;
            }
            
            .choice-img{
                height: 159px;
                width: 61px;
                object-position: 0px 40px;
                transition: all 0.5s;
            }

            .xl {
                height: 300px;
                width: 160px;
            }

            .choice-img:hover{
                cursor: pointer;
                transform: scale(1.5);
            }

            @media (min-width: 769px){
                .choice-img{
                    height: 190px;
                    width: 70px;
                    object-position: 0px 60px;
                }

                .xl {
                    height: 300px;
                    width: 160px;
                }
              }
          `;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("play-choice", Choice);
}

},{"ac25434800b7f1ae":"6G2ao","a3de56d14f61fa84":"2nKnS","49b8b6e83fd81237":"4a2rT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6G2ao":[function(require,module,exports) {
module.exports = require("4b3f9bdff7a7bbe7").getBundleURL("7UhFu") + "piedra.a2cfd8de.png" + "?" + Date.now();

},{"4b3f9bdff7a7bbe7":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"2nKnS":[function(require,module,exports) {
module.exports = require("c3c0a17767750314").getBundleURL("7UhFu") + "papel.26fa0fee.png" + "?" + Date.now();

},{"c3c0a17767750314":"lgJ39"}],"4a2rT":[function(require,module,exports) {
module.exports = require("74fa69a444cad09a").getBundleURL("7UhFu") + "tijeras.624d8247.png" + "?" + Date.now();

},{"74fa69a444cad09a":"lgJ39"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _welcomePage = require("./pages/welcome-page");
var _gamePage = require("./pages/game-page");
var _instructionsPage = require("./pages/instructions-page");
var _resultsPage = require("./pages/results-page");
const routes = [
    {
        path: /\/desafio-modulo-5\/welcome/,
        component: (0, _welcomePage.initWelcomePage)
    },
    {
        path: /\/desafio-modulo-5\/instructions/,
        component: (0, _instructionsPage.initInstructionsPage)
    },
    {
        path: /\/desafio-modulo-5\/game/,
        component: (0, _gamePage.initGamePage)
    },
    {
        path: /\/desafio-modulo-5\/result/,
        component: (0, _resultsPage.initResult)
    }
];
function initRouter(container) {
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    location.host.includes("github.io");
    goTo("/desafio-modulo-5/welcome");
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/welcome-page":"djaTl","./pages/game-page":"9OaTe","./pages/instructions-page":"8ZTz5","./pages/results-page":"7TYQl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"djaTl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcomePage", ()=>initWelcomePage);
function initWelcomePage(params) {
    const div = document.createElement("div");
    const bgImg = require("bbf1c980cad83531");
    div.innerHTML = `
    <section class="welcome__section">
      <div class="title-container">
        <h1 class="title">Piedra, Papel o Tijera</h1>
      </div>
      <div class="button-container">
        <custom-button class="button">Comenzar</custom-button>
      </div>
      <div class="hands-container">
        <play-choice>tijeras</play-choice>
        <play-choice>papel</play-choice>
        <play-choice>piedra</play-choice>
      </div>
    </section>
  `;
    const style = document.createElement("style");
    style.innerHTML = `
    .welcome__section {
      background-image:url(${bgImg});
      display:flex;
      width:100%;
      height:100vh;
      flex-direction:column;
      justify-content:space-between;
      align-items:center;
      padding-top:20px;
      padding-left: 20px;
      padding-right:20px;
    }

    .hands-container {
      display:flex;
      gap:40px;
      flex-direction:row;
      justify-content:space-evenly;
      overflow:hidden;
      padding: 0 20px;
    }

    .title-container {
      margin-top:50px;
    }

    .title {
      font-style: normal;
      font-weight: 700;
      font-size: 80px;
      color: #009048;
    }

    .button-container {
      text-align:center;
      width:100%;
      margin-top:50px;
    }
  `;
    div.appendChild(style);
    div.querySelector(".button").addEventListener("click", ()=>{
        params.goTo("/desafio-modulo-5/instructions");
    });
    return div;
}

},{"bbf1c980cad83531":"dbLnQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dbLnQ":[function(require,module,exports) {
module.exports = require("bee9461bf926f619").getBundleURL("7UhFu") + "fondo.fee3b614.png" + "?" + Date.now();

},{"bee9461bf926f619":"lgJ39"}],"9OaTe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGamePage", ()=>initGamePage);
var _state = require("../../state");
function initGamePage(params) {
    const div = document.createElement("div");
    const bgImg = require("206af432205315b");
    div.innerHTML = `
    <section class="game__section">
        <div class="game__counter-container">
            <custom-counter class="counter"></custom-counter>
        </div>
        <div class="hands-container">
          <play-choice class="play">tijeras</play-choice>
          <play-choice class="play">papel</play-choice>
          <play-choice class="play">piedra</play-choice>
        </div>
    </section>
  `;
    const style = document.createElement("style");
    style.innerHTML = `
    .game__section{
      background-image:url(${bgImg});
      display:flex;
      width:100%;
      height:100vh;
      flex-direction:column;
      justify-content:space-between;
      align-items:center;
      padding-top:100px;
      padding-left: 20px;
      padding-right:20px;
    }
    
    .hands-container{
      display:flex;
      gap:40px;
      flex-direction:row;
      overflow:hidden;
      padding: 0 20px;
    }
  `;
    const plays = div.querySelectorAll(".play");
    let counter = div.querySelector(".counter");
    let bandera = false;
    plays.forEach((play)=>{
        play.addEventListener("click", ()=>{
            bandera = true;
            (0, _state.state).setPlay(play.textContent);
            params.goTo("/desafio-modulo-5/result");
        });
    });
    counter.addEventListener("change", (e)=>{
        if (bandera == false) params.goTo("/desafio-modulo-5/instructions");
    });
    div.appendChild(style);
    return div;
}

},{"../../state":"1Yeju","206af432205315b":"dbLnQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            playerPlay: "",
            result: ""
        },
        playHistory: {
            player: 0,
            computer: 0
        }
    },
    init () {
        const localData = localStorage.getItem("saved-state");
        if (localData) this.setState(JSON.parse(localData));
    },
    getScore () {
        return this.data.playHistory;
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        localStorage.setItem("saved-state", JSON.stringify(newState));
    },
    setPlay (play) {
        const currentState = this.getState();
        const computerPlay = this.randomComputerPlay();
        currentState.currentGame.playerPlay = play;
        currentState.currentGame.computerPlay = computerPlay;
        const winner = this.whoWins(play, computerPlay);
        this.setState(currentState);
        this.updateScore(winner);
    },
    randomComputerPlay () {
        const moves = [
            "piedra",
            "papel",
            "tijeras"
        ];
        const randomMove = Math.floor(Math.random() * 3);
        return moves[randomMove];
    },
    whoWins (playerPlay, computerPlay) {
        if (playerPlay == computerPlay) return "draw";
        const winnerPlays = {
            piedra: "tijeras",
            papel: "piedra",
            tijeras: "papel"
        };
        if (winnerPlays[playerPlay] == computerPlay) return "player";
        return "computer";
    },
    updateScore (winner) {
        const currentState = this.getState();
        if (winner === "player") currentState.playHistory.player++;
        if (winner === "computer") currentState.playHistory.computer++;
        currentState.currentGame.result = winner;
        this.setState(currentState);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ZTz5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInstructionsPage", ()=>initInstructionsPage);
function initInstructionsPage(params) {
    const div = document.createElement("div");
    const bgImg = require("4143d59b77042086");
    div.innerHTML = `
    <section class="instructions__section">
      <div class="instructions__title">
        <h2 class="instruction"> Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h2>
      </div>
      <div class="instructions__button-container">
        <custom-button class="instructions__button">Jugar!</custom-button>
      </div>
      <div class="hands-container">
        <play-choice>tijeras</play-choice>
        <play-choice>papel</play-choice>
        <play-choice>piedra</play-choice>
      </div>
    </section>
  `;
    const style = document.createElement("style");
    style.innerHTML = `
    .instructions__section {
      background-image:url(${bgImg});
      display:flex;
      width:100%;
      height:100vh;
      flex-direction:column;
      justify-content:space-between;
      align-items:center;
      padding-top:100px;
      padding-left: 20px;
      padding-right:20px;
    }

    .hands-container {
      display:flex;
      gap:40px;
      flex-direction:row;
      justify-content:space-evenly;
      overflow:hidden;
      padding: 0 20px;
    }

    .instructions__title {
        padding:20px;
        max-width:650px;
        margin-top:50px;
    }

    .instruction {
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
    }

    .instructions__button-container{
      text-align:center;
      width:100%;
      margin-top:50px;
    }
  `;
    div.appendChild(style);
    div.querySelector(".instructions__button")?.addEventListener("click", ()=>{
        params.goTo("/desafio-modulo-5/game");
    });
    return div;
}

},{"4143d59b77042086":"dbLnQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7TYQl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResult", ()=>initResult);
var _state = require("../../state");
function initResult(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    const lastState = (0, _state.state).getState();
    const fondo = require("b6c463ebf7084010");
    const imgWin = require("1c45b8cf2f36541");
    const imgLose = require("54b7b10644d0067a");
    const imgDraw = require("31a27781e937a9d3");
    function createPlayElement(playState) {
        const playElement = document.createElement("div");
        playElement.innerHTML = `<play-choice data-size="xl">${playState}</play-choice>`;
        return playElement;
    }
    const playerPlay = createPlayElement(lastState.currentGame.playerPlay);
    const computerPlay = createPlayElement(lastState.currentGame.computerPlay);
    div.innerHTML = `
    <section class="result__section">
      <div class="computer-play"></div>
      <div class="player-play"></div>
      <section class="results-container">
        <div>
          <img class="result-img" src="${imgWin}"></img>
        </div>
        <div>
          <game-score></game-score>
        </div>
        <div class="container-buttons">
          <custom-button class="button-return-to-play">Volver a Jugar </custom-button>
        </div>
      </section>
    </section>
  `;
    style.innerHTML = `
    .result-img{
      max-width:230px;
      max-height:230px;
    }

    .result__section{
      background-image:url(${fondo});
      display:flex;
      height:100vh;
      flex-direction:column;
      align-items:center;
    }

    .results-container{
      padding:20px;
      display:none;
      flex-direction:column;
      justify-content: space-between;
      align-items:center;
      position:absolute;
      min-width:375px;
      top:0px;
      bottom:0px;
      right:0px;
      left:0px;
    }

    .player-play{
      position: absolute;
      bottom:0px;
    }

    .computer-play{
      transform:rotate(180deg);
    }

    .button-return-to-play{
      width:100%;
    }
  `;
    const resultsContainer = div.querySelector(".results-container");
    const resultImg = div.querySelector(".result-img");
    const intervalo = setInterval(()=>1000);
    setTimeout(()=>{
        clearInterval(intervalo);
        const results = {
            player: {
                background: "rgba(136, 137, 73, 0.9)",
                img: imgWin
            },
            computer: {
                background: "rgba(137, 73, 73, 0.9)",
                img: imgLose
            },
            draw: {
                background: "rgba(255, 233, 0, 0.7)",
                img: imgDraw
            }
        };
        const currentResult = results[lastState.currentGame.result];
        resultsContainer.style.display = "flex";
        resultsContainer.style.background = currentResult.background;
        resultImg.src = currentResult.img;
    }, 2000);
    div.querySelector(".computer-play")?.appendChild(computerPlay);
    div.querySelector(".player-play")?.appendChild(playerPlay);
    div.appendChild(style);
    div.querySelector(".button-return-to-play")?.addEventListener("click", ()=>{
        params.goTo("/desafio-modulo-5/instructions");
    });
    return div;
}

},{"../../state":"1Yeju","b6c463ebf7084010":"dbLnQ","1c45b8cf2f36541":"9XOPs","54b7b10644d0067a":"aGFPq","31a27781e937a9d3":"bDyPc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9XOPs":[function(require,module,exports) {
module.exports = require("a23add9e45f03eb6").getBundleURL("7UhFu") + "ganaste.f3c8af57.png" + "?" + Date.now();

},{"a23add9e45f03eb6":"lgJ39"}],"aGFPq":[function(require,module,exports) {
module.exports = require("682563299af4b1a3").getBundleURL("7UhFu") + "perdiste.92bc7dd8.png" + "?" + Date.now();

},{"682563299af4b1a3":"lgJ39"}],"bDyPc":[function(require,module,exports) {
module.exports = require("dd5203ff493bb88").getBundleURL("7UhFu") + "empate.05073be2.png" + "?" + Date.now();

},{"dd5203ff493bb88":"lgJ39"}],"9n8Xg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCounter", ()=>initCounter);
function initCounter() {
    class Counter extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let counter = 3;
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            style.innerHTML = `
          .counter{
              color: black;
              min-width:60px;
              min-height:80px;
              font-size:100px;
          }        
        `;
            const intervalo = setInterval(()=>{
                div.innerHTML = `
              <div class="counter">${counter}</div>
            `;
                if (counter <= 0) {
                    clearInterval(intervalo);
                    const contador = new CustomEvent("change", {
                        detail: {
                            numero: counter
                        }
                    });
                    this.dispatchEvent(contador);
                }
                counter--;
            }, 1000);
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-counter", Counter);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5XKJp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGameScore", ()=>initGameScore);
var _state = require("../../state");
function initGameScore() {
    class GameScore extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            const score = (0, _state.state).getScore();
            div.innerHTML = `
      <div class="container">
        <h3 class="title">Score</h3>
        <p class="text" variant="body">Player: ${score.player}</p>
        <p class="text" variant="body">Maquina: ${score.computer}</p>
      </div>
      `;
            style.innerHTML = `
        .container{
            border:solid black 5px;
            border-radius:2px;
            min-width:230px;
            min-height:190px;
            background-color:white;
        }

        .title{
            font-size:50px;
            text-align:center;
            color:black;
        }
        
        .text{
            font-size:35px;
            text-align:right;
            padding:5px;
        }
      `;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("game-score", GameScore);
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3LmCz","h7u1C"], "h7u1C", "parcelRequire9462")

//# sourceMappingURL=index.b71e74eb.js.map
