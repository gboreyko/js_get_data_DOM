function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=Array(r);n<r;n++)e[n]=t[n];return e}var r,n=((function(r){if(Array.isArray(r))return t(r)})(r=document.querySelectorAll(".population"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,n){if(r){if("string"==typeof r)return t(r,void 0);var e=Object.prototype.toString.call(r).slice(8,-1);if("Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(t){return t.textContent}).map(function(t){return t.split(",")}).map(function(t){return t.map(function(t){return Number.isFinite(+t)?t:"0"})}).map(function(t){return+t.join("")}),e=n.reduce(function(t,r){return t+r},0),o=e/n.length;function u(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=[];return!function t(e){var o=e;return o>0?(n.push(Math.floor(o%r)),t(o=Math.floor(o/r))):n.reverse()}(Number.isFinite(+t)?+t:0),n.join(",")}document.querySelector(".total-population").textContent=u(e),document.querySelector(".average-population").textContent=u(o);
//# sourceMappingURL=index.4948a8d6.js.map