(function(e){function t(t){for(var r,c,o=t[0],s=t[1],l=t[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1cff":function(e,t,n){},"2abc":function(e,t,n){},"594e":function(e,t,n){"use strict";var r=n("1cff"),i=n.n(r);i.a},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c=(n("5c0b"),n("2877")),o={},s=Object(c["a"])(o,i,a,!1,null,null,null),l=s.exports,u=n("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Scene")],1)},h=[],p=n("d4ec"),v=n("262e"),b=n("2caf"),m=n("9ab4"),w=n("60a3"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{ref:"scene",staticClass:"scene",on:{click:function(t){return e.clickCurrentSelected()}}})])},O=[],j=(n("c740"),n("b0c0"),n("bee2")),y=n("5a89"),S=n("4721"),x=n("34ad"),_=n("32d9"),P=n("93e9"),k=n("f7dd"),C=function(e){Object(v["a"])(n,e);var t=Object(b["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.apply(this,arguments),e.renderer=new y["wb"]({antialias:!0}),e.scene=new y["eb"],e.mouse=new y["sb"],e.raycaster=new y["cb"],e.selectable=[],e.currentSelected=null,e}return Object(j["a"])(n,[{key:"resetOpacity",value:function(){var e=this;if(this.currentSelected){var t=this.selectable.findIndex((function(t){return t.id===e.currentSelected}));this.selectable[t].material.opacity=0,this.currentSelected=null}}},{key:"onMouseMove",value:function(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-e.clientY/window.innerHeight*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);var t=this.raycaster.intersectObjects(this.selectable,!0);if(t&&t[0])this.resetOpacity(),t[0].object.material.opacity=.5,t[0].object.material.transparent=!0,this.currentSelected=t[0].object.id;else for(var n in this.resetOpacity(),this.selectable)this.selectable[n].material.opacity=0}},{key:"clickCurrentSelected",value:function(){this.currentSelected&&this.$router.push("FlatScene")}}]),n}(w["b"]);C=Object(m["a"])([Object(w["a"])({mounted:function(){var e=this,t=this.$refs.scene;this.camera=new y["S"](60,t.clientWidth/t.clientHeight,1,1e3),this.camera.position.set(55,55,55),this.renderer.setSize(t.clientWidth,t.clientHeight),t.appendChild(this.renderer.domElement),window.addEventListener("mousemove",this.onMouseMove,!1);var n=new x["a"];n.load("/develop_house/untitled.gltf",(function(t){var n=t.scene;e.scene.add(n)}),void 0,(function(e){console.error(e)})),n.load("/develop_house/sciana.gltf",(function(t){var n=t.scene;for(var r in n.name="sciana",e.scene.add(n),n.children)n.children[r].material=new y["K"]({color:16711680,opacity:0,transparent:!0}),e.selectable.push(n.children[r])}),void 0,(function(e){console.error(e)}));var r=new y["o"](16777215,2236962,1),i=new y["i"](16777215,.5);i.position.set(10,10,10),this.scene.add(r,i);var a=new S["a"](this.camera,this.renderer.domElement);a.enableDamping=!0,a.dampingFactor=.05,a.screenSpacePanning=!1,a.minDistance=10,a.maxDistance=5e3;var c=new _["a"](this.renderer),o=new P["a"](this.scene,this.camera);c.addPass(o);var s=new k["a"](window.innerWidth*this.renderer.getPixelRatio(),window.innerHeight*this.renderer.getPixelRatio());c.addPass(s);var l=function(){e.renderer.render(e.scene,e.camera)},u=function e(){requestAnimationFrame(e),a.update(),l()};u()},destroyed:function(){window.addEventListener("mousemove",this.onMouseMove,!1),this.renderer.forceContextLoss()}})],C);var E=C,F=E,M=(n("f062"),Object(c["a"])(F,g,O,!1,null,"0c1fcc5b",null)),$=M.exports,H=function(e){Object(v["a"])(n,e);var t=Object(b["a"])(n);function n(){return Object(p["a"])(this,n),t.apply(this,arguments)}return n}(w["b"]);H=Object(m["a"])([Object(w["a"])({components:{Scene:$}})],H);var W=H,D=W,A=Object(c["a"])(D,f,h,!1,null,null,null),R=A.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("FlatScene")],1)},q=[],N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("router-link",{staticClass:"return",attrs:{to:"/"}},[e._v("WRÓĆ")]),n("div",{ref:"scene",staticClass:"scene"})],1)},T=[],z=function(e){Object(v["a"])(n,e);var t=Object(b["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.apply(this,arguments),e.renderer=new y["wb"]({antialias:!0}),e.scene=new y["eb"],e}return n}(w["b"]);z=Object(m["a"])([Object(w["a"])({mounted:function(){var e=this,t=this.$refs.scene;this.camera=new y["S"](60,t.clientWidth/t.clientHeight,1,1e3),this.camera.position.set(4,10,7),this.renderer.setSize(t.clientWidth,t.clientHeight),t.appendChild(this.renderer.domElement);var n=new x["a"];n.load("/develop_house/scene.gltf",(function(t){var n=t.scene;e.scene.add(n)}),void 0,(function(e){console.error(e)}));var r=new y["o"](16777215,2236962,1),i=new y["i"](16777215,.5);i.position.set(10,10,10),this.scene.add(r,i);var a=new S["a"](this.camera,this.renderer.domElement);a.enableDamping=!0,a.dampingFactor=.05,a.screenSpacePanning=!1,a.minDistance=10,a.maxDistance=5e3;var c=new _["a"](this.renderer),o=new P["a"](this.scene,this.camera);c.addPass(o);var s=new k["a"](window.innerWidth*this.renderer.getPixelRatio(),window.innerHeight*this.renderer.getPixelRatio());c.addPass(s);var l=function(){e.renderer.render(e.scene,e.camera)},u=function e(){requestAnimationFrame(e),a.update(),l()};u()},destroyed:function(){this.renderer.forceContextLoss()}})],z);var J=z,B=J,I=(n("594e"),Object(c["a"])(B,N,T,!1,null,"8b5b58ea",null)),K=I.exports,X=function(e){Object(v["a"])(n,e);var t=Object(b["a"])(n);function n(){return Object(p["a"])(this,n),t.apply(this,arguments)}return n}(w["b"]);X=Object(m["a"])([Object(w["a"])({components:{FlatScene:K}})],X);var Y=X,G=Y,Q=Object(c["a"])(G,L,q,!1,null,null,null),U=Q.exports;r["a"].use(d["a"]);var V=[{path:"/",name:"Home",component:R},{path:"/flatscene",name:"Flat",component:U}],Z=new d["a"]({mode:"history",base:"/",routes:V}),ee=Z,te=n("2f62");r["a"].use(te["a"]);var ne=new te["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:ee,store:ne,render:function(e){return e(l)}}).$mount("#app")},f062:function(e,t,n){"use strict";var r=n("2abc"),i=n.n(r);i.a}});
//# sourceMappingURL=app.1ae8282d.js.map