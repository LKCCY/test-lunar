(() => { // webpackBootstrap
  var __webpack_modules__ = ({});
 	// The module cache
  var __webpack_module_cache__ = {};

 	// The require function
  function __webpack_require__(moduleId) {
 		// Check if module is in cache
 		if(__webpack_module_cache__[moduleId]) {
 			return __webpack_module_cache__[moduleId].exports;
 		}
 		// Create a new module (and put it into the cache)
 		var module = __webpack_module_cache__[moduleId] = {
 			// no module.id needed
 			// no module.loaded needed
 			exports: {}
 		};
 	
 		// Execute the module function
 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
 	
 		// Return the exports of the module
 		return module.exports;
  }

 	// expose the modules object (__webpack_modules__)
  __webpack_require__.m = __webpack_modules__;

 	/* webpack/runtime/define property getters */
  (() => {
 		// define getter functions for harmony exports
    __webpack_require__.d = (exports, definition) => {
      for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
      }
    };
  })();

 	/* webpack/runtime/ensure chunk */
  (() => {
    __webpack_require__.f = {};
 		// This file contains only the entry chunk.
 		// The chunk loading function for additional chunks
    __webpack_require__.e = (chunkId) => {
      return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
        __webpack_require__.f[key](chunkId, promises);
        return promises;
      }, []));
    };
  })();

/* webpack/runtime/get javascript chunk filename */
  (() => {
    // This function allow to reference async chunks
    __webpack_require__.u = (chunkId) => {
      // return url for filenames based on template
      return "" + chunkId + ".js";
    };
  })();

	/* webpack/runtime/hasOwnProperty shorthand */
	(() => {
		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
	})();

	/* webpack/runtime/load script */
	(() => {
		var inProgress = {};
		var dataWebpackPrefix = "@normal-test/app2:";
		// loadScript function to load a script via script tag
		__webpack_require__.l = (url, done, key) => {
			if(inProgress[url]) { inProgress[url].push(done); return; }
			var script, needAttach;
			if(key !== undefined) {
				var scripts = document.getElementsByTagName("script");
				for(var i = 0; i < scripts.length; i++) {
					var s = scripts[i];
					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
				}
			}
			if(!script) {
				needAttach = true;
				script = document.createElement('script');

				script.charset = 'utf-8';
				script.timeout = 120;
				if (__webpack_require__.nc) {
					script.setAttribute("nonce", __webpack_require__.nc);
				}
				script.setAttribute("data-webpack", dataWebpackPrefix + key);
				script.src = url;
			}
			inProgress[url] = [done];
			var onScriptComplete = (prev, event) => {
				// avoid mem leaks in IE.
				script.onerror = script.onload = null;
				clearTimeout(timeout);
				var doneFns = inProgress[url];
				delete inProgress[url];
				script.parentNode && script.parentNode.removeChild(script);
				doneFns && doneFns.forEach((fn) => fn(event));
				if(prev) return prev(event);
			}
			;
			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
			script.onerror = onScriptComplete.bind(null, script.onerror);
			script.onload = onScriptComplete.bind(null, script.onload);
			needAttach && document.head.appendChild(script);
		};
	})();

	/* webpack/runtime/make namespace object */
	(() => {
		// define __esModule on exports
		__webpack_require__.r = (exports) => {
			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
			}
			Object.defineProperty(exports, '__esModule', { value: true });
		};
	})();

	/* webpack/runtime/publicPath */
	(() => {
		__webpack_require__.p = "http://localhost:3002/";
	})();

	/* webpack/runtime/sharing */
	(() => {
		__webpack_require__.S = {};
		var initPromises = {};
		__webpack_require__.I = (name) => {
			// only runs once
			if(initPromises[name]) return initPromises[name];
			// handling circular init calls
			initPromises[name] = 1;
			// creates a new share scope if needed
			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
			// runs all init snippets from all modules reachable
			var scope = __webpack_require__.S[name];
			var warn = (msg) => typeof console !== "undefined" && console.warn && console.warn(msg);;
			var uniqueName = "@normal-test/app2";
			var register = (name, version, factory) => {
				var versions = scope[name] = scope[name] || {};
				var activeVersion = versions[version];
				if(!activeVersion || !activeVersion.loaded && uniqueName > activeVersion.from) versions[version] = { get: factory, from: uniqueName };
 			};
 			var initExternal = (id) => {
 				var handleError = (err) => warn("Initialization of sharing external failed: " + err);
 				try {
 					var module = __webpack_require__(id);
 					if(!module) return;
 					var initFn = (module) => module && module.init && module.init(__webpack_require__.S[name])
 					if(module.then) return promises.push(module.then(initFn, handleError));
 					var initResult = initFn(module);
 					if(initResult && initResult.then) return promises.push(initResult.catch(handleError));
 				} catch(err) { handleError(err); }
 			}
 			var promises = [];
 			switch(name) {
 			}
 			return promises.length && (initPromises[name] = Promise.all(promises).then(() => initPromises[name] = 1));
    };
  })();

 	/* webpack/runtime/jsonp chunk loading */
  (() => {
 		// object to store loaded and loading chunks
 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
 		// Promise = chunk loading, 0 = chunk loaded
    var installedChunks = {
      "main": 0
    };

    __webpack_require__.f.j = (chunkId, promises) => {
 				// JSONP chunk loading for javascript
        var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
				if(installedChunkData !== 0) { // 0 means "already installed".

					// a Promise means "currently loading".
					if(installedChunkData) {
						promises.push(installedChunkData[2]);
					} else {
						if(true) { // all chunks have JS
							// setup Promise in chunk cache
							var promise = new Promise((resolve, reject) => {
								installedChunkData = installedChunks[chunkId] = [resolve, reject];
							});
							promises.push(installedChunkData[2] = promise);

							// start chunk loading
							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
							// create error before stack unwound to get useful stacktrace later
							var error = new Error();
							var loadingEnded = (event) => {
								if(__webpack_require__.o(installedChunks, chunkId)) {
									installedChunkData = installedChunks[chunkId];
									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
									if(installedChunkData) {
										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
										var realSrc = event && event.target && event.target.src;
										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
                    error.name = 'ChunkLoadError';
                    error.type = errorType;
                    error.request = realSrc;
                    installedChunkData[1](error);
                  }
                }
              };
              __webpack_require__.l(url, loadingEnded, "chunk-" + chunkId);
            } else installedChunks[chunkId] = 0;
          }
        }
    };


		// install a JSONP callback for chunk loading
    function webpackJsonpCallback(data) {
      var chunkIds = data[0];
      var moreModules = data[1];

      var runtime = data[3];
      // add "moreModules" to the modules object,
      // then flag all "chunkIds" as loaded and fire callback
      var moduleId, chunkId, i = 0, resolves = [];
      for(;i < chunkIds.length; i++) {
        chunkId = chunkIds[i];
        if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          resolves.push(installedChunks[chunkId][0]);
        }
        installedChunks[chunkId] = 0;
      }
      for(moduleId in moreModules) {
        if(__webpack_require__.o(moreModules, moduleId)) {
          __webpack_require__.m[moduleId] = moreModules[moduleId];
        }
      }
      if(runtime) runtime(__webpack_require__);
      if(parentJsonpFunction) parentJsonpFunction(data);
      while(resolves.length) {
        resolves.shift()();
      }
    
    };

    var jsonpArray = window["webpackJsonp_normal_test_app2"] = window["webpackJsonp_normal_test_app2"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    var parentJsonpFunction = oldJsonpFunction;
  })();


  __webpack_require__.e("src_bootstrap_js").then(__webpack_require__.bind(__webpack_require__, "./src/bootstrap.js"));
})()
