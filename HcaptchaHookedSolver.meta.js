// ==UserScript==
// @name         Hcaptcha Hooked Solver
// @namespace    hcaptcha.hookedsolver
// @version      1.9
// @description  Hcaptcha Solver hooked on a Tab
// @author       satology
// @updateURL    https://gitlab.com/dev-userscripts/hcaptcha-hooked-solver/-/raw/main/HcaptchaHookedSolver.meta.js
// @downloadURL  https://gitlab.com/dev-userscripts/hcaptcha-hooked-solver/-/raw/main/HcaptchaHookedSolver.user.js
// @match        https://*.hcaptcha.com/*hcaptcha.html*

// @include      https://criptologico.com/tools/cc

// @grant        GM_getResourceText
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_addValueChangeListener

// @connect      www.imageidentify.com
// @connect      hcaptcha.com
// @connect      https://cdnjs.cloudflare.com
// @connect      https://cdn.jsdelivr.net
// @connect      https://unpkg.com
// @connect      https://*.hcaptcha.com/*
// @require      https://unpkg.com/jimp@0.5.2/browser/lib/jimp.min.js

// @resource r_jimp      https://unpkg.com/jimp@0.5.2/browser/lib/jimp.min.js
// @resource r_tesseract https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/2.0.0-alpha.2/tesseract.min.js
// @resource r_tf        https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.13.0/dist/tf.js
// @resource r_coco      https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.2.2/dist/coco-ssd.min.js
// @resource r_mobilenet https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@2.1.0/dist/mobilenet.min.js

// ==/UserScript==
