(function(e){function n(n){for(var a,r,c=n[0],u=n[1],l=n[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);s&&s(n);while(p.length)p.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,c=1;c<t.length;c++){var u=t[c];0!==o[u]&&(a=!1)}a&&(i.splice(n--,1),e=r(r.s=t[0]))}return e}var a={},o={app:0},i=[];function r(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=a,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)r.d(t,a,function(n){return e[n]}.bind(null,a));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/developer3d-test/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var s=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},1647:function(e,n,t){},"6c10":function(e,n,t){"use strict";t("1647")},"9cdc":function(e,n,t){"use strict";t("c701")},c701:function(e,n,t){},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("7a23"),o={id:"app"};function i(e,n,t,i,r,c){var u=Object(a["v"])("router-view");return Object(a["o"])(),Object(a["c"])("div",o,[Object(a["e"])(u)])}t("9cdc");const r={};r.render=i;var c=r,u=t("6c02");function l(e,n,t,o,i,r){var c=Object(a["v"])("Scene");return Object(a["o"])(),Object(a["c"])(c)}var s=t("d4ec"),d=t("262e"),p=t("2caf"),b=t("9ab4"),f=t("ce1f"),v=Object(a["D"])("data-v-232eb97b");Object(a["s"])("data-v-232eb97b");var m={class:"container"},g={class:"return"},w={class:"preloader"},h=Object(a["d"])(" Ładowanie "),j={class:"annotation",ref:"annotationRef"},O={class:"annotation-content"},y={class:"annotation-title"},x=Object(a["e"])("div",{class:"annotation-desc"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida massa odio, vitae accumsan mauris rutrum sed. Curabitur venenatis quam risus, sed rutrum magna cursus nec. Fusce viverra ultricies nulla, et ultricies turpis. In eu mi eget velit sagittis tempus in non tortor. ",-1);Object(a["p"])();var C=v((function(e,n,t,o,i,r){return Object(a["o"])(),Object(a["c"])("div",m,[Object(a["e"])("div",g,[Object(a["e"])("div",{class:"change-camera",onClick:n[1]||(n[1]=function(e){return o.changeCamera(o.currentCamera,"global"===o.currentCamera?"person":"global",1500)})},"Change camera: "+Object(a["x"])(o.currentCamera),1)]),Object(a["C"])(Object(a["e"])("div",w,[Object(a["e"])("div",null,[h,Object(a["C"])(Object(a["e"])("span",null,Object(a["x"])(o.loading.loaded)+"/"+Object(a["x"])(o.loading.total),513),[[a["z"],o.loading.total]])]),Object(a["C"])(Object(a["e"])("div",null,Object(a["x"])(o.loading.progress)+"%",513),[[a["z"],o.loading.total]])],512),[[a["z"],o.loading.progress<100]]),Object(a["e"])("div",{class:"scene",ref:"sceneRef",onClick:n[2]||(n[2]=function(){return o.sceneClick.apply(o,arguments)}),onTouchstart:n[3]||(n[3]=function(){return o.sceneClick.apply(o,arguments)})},null,544),Object(a["C"])(Object(a["e"])("div",j,[Object(a["e"])("div",O,[Object(a["e"])("div",{class:"annotation-close",onClick:n[4]||(n[4]=function(e){return o.closeAnnotation()})},"x"),Object(a["e"])("div",y,"Id mieszkania: "+Object(a["x"])(o.currentSelected),1),x])],512),[[a["z"],o.currentSelected]])])})),P=t("5a89"),k=t("34ad"),A=(t("4160"),t("b64b"),t("159b"),t("5530")),S=t("4721"),z=t("1209");function T(e){var n=new P["kb"],t=new P["Eb"]({antialias:!0}),o=Object(a["u"])("global"),i=new P["Y"],r={global:{camera:{fov:60,aspect:e.value?e.value.clientWidth/e.value.clientHeight:window.innerWidth/window.innerHeight,near:1,far:1e3,position:new P["Bb"](55,55,55)},controls:{enableDamping:!0,dampingFactor:.05,screenSpacePanning:!1,minDistance:10,maxDistance:5e3,maxPolarAngle:Math.PI/2,enablePan:!0,position0:new P["Bb"](0,0,0),target:new P["Bb"](0,0,0),enableKeys:!1,keyPanSpeed:7,enableZoom:!0}},person:{camera:{fov:60,aspect:e.value?e.value.clientWidth/e.value.clientHeight:window.innerWidth/window.innerHeight,near:1,far:1e3,position:new P["Bb"](76,1,76)},controls:{enableDamping:!0,dampingFactor:.05,screenSpacePanning:!1,minDistance:10,maxDistance:5e3,maxPolarAngle:Math.PI/2,enablePan:!0,position0:new P["Bb"](0,0,0),target:new P["Bb"](75,1,75),enableKeys:!0,keyPanSpeed:70,enableZoom:!1}}},c=new S["a"](i,t.domElement),u=Object(a["u"])(),l=[],s=[],d=[],p=new P["i"],b=function(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)},f=function(){d.forEach((function(e){e()}))},v=function(e,n,t,a){var o=e[a.value].camera;Object.keys(o).forEach((function(e){"position"!=e?n[e]=o[e]:n[e].set(o[e].x,o[e].y,o[e].z)}));var i=e[a.value].controls;Object.keys(i).forEach((function(e){t[e]=i[e]}))},m=function(e,n,t){c.enableRotate=!1,u.value=Object(z["a"])({targets:i.position,easing:"easeOutCirc",duration:t,complete:function(){u.value=null},x:r[n].camera.position.x,y:r[n].camera.position.y,z:r[n].camera.position.z});var a=Object(A["a"])({},r[e].controls.target);console.log(a),u.value=Object(z["a"])({targets:c.target,easing:"easeOutCirc",duration:1.1*t,complete:function(){u.value=null,c.enableRotate=!0,o.value=n,r[e].controls.target=a,i.updateProjectionMatrix()},x:r[n].controls.target.x,y:r[n].controls.target.y,z:r[n].controls.target.z})};return Object(a["m"])((function(){v(r,i,c,o),i.updateProjectionMatrix(),t.setSize(e.value.clientWidth,e.value.clientHeight),e.value.appendChild(t.domElement),window.addEventListener("resize",b);var a=function(){t.render(n,i),s.forEach((function(e){e()}))},u=function e(){requestAnimationFrame(e),c.update(p.getDelta()),l.forEach((function(e){e()})),a()};u()})),Object(a["n"])((function(){t.forceContextLoss()})),{scene:n,renderer:t,camera:i,currentCamera:o,changeCamera:m,control:c,rendererFunctions:s,animateFunctions:l,animation:u,sceneClick:f,sceneClickFunctions:d,camAndControls:r}}function D(e){return Object(a["m"])((function(){var n=new P["r"](16777215,2236962,1),t=new P["k"](16777215,.5);t.position.set(10,10,10),e.add(n,t)})),{}}t("38cf");function E(e){Object(a["m"])((function(){var n=new P["wb"],t=n.load("textures/grass.jpg");t.wrapS=t.wrapT=P["jb"],t.repeat.set(25,25),t.anisotropy=16,t.encoding=P["Fb"];var a=new P["O"]({map:t}),o=new P["M"](new P["Z"](500,500),a);o.position.y=-1,o.rotation.x=-Math.PI/2,o.receiveShadow=!0,e.background=new P["j"](13426943),e.fog=new P["o"](13426943,70,200),e.add(o)}))}var M=t("32d9"),R=t("93e9"),I=t("f7dd");function F(e,n,t,o){Object(a["m"])((function(){var t=new M["a"](o),a=new R["a"](e,n);t.addPass(a);var i=new I["a"](window.innerWidth*o.getPixelRatio(),window.innerHeight*o.getPixelRatio());t.addPass(i)}))}function H(e){var n=Object(a["t"])({loaded:0,total:0,progress:0});return Object(a["m"])((function(){e.onProgress=function(e,t,a){n.loaded=t,n.total=a,n.progress=Math.round(t/a*1e4)/100}})),{loading:n}}var B=t("0ca5");function W(e,n,t){var o=new B["a"];return o.setDecoderPath("gltf/"),e.setDRACOLoader(o),Object(a["m"])((function(){e.load(t,(function(e){var t=e.scene;n.add(t)}),void 0,(function(e){console.error(e)}))})),{}}function _(e,n){var t=!1,o=new P["Ab"],i=[],r=function(a){t?(o.x=a.changedTouches[0].clientX/window.innerWidth*2-1,o.y=-a.changedTouches[0].clientY/window.innerHeight*2+1):(o.x=a.clientX/window.innerWidth*2-1,o.y=-a.clientY/window.innerHeight*2+1),e.setFromCamera(o,n),i.forEach((function(n){n(e)}))};return Object(a["m"])((function(){"ontouchstart"in document.documentElement?(t=!0,window.addEventListener("touchend",r,!1)):window.addEventListener("mousemove",r,!1)})),Object(a["n"])((function(){t?window.addEventListener("touchend",r,!1):window.addEventListener("mousemove",r,!1)})),{onCursorMoveFunctions:i}}t("c740"),t("b0c0"),t("d3b7"),t("25f0");function L(e,n,t,o,i,r,c,u){var l=null,s=Object(a["u"])(),d=function(){if(l){var e=r.findIndex((function(e){return e.id===l}));l!=s.value&&(r[e].material.opacity=0),l=null}},p=function(){l!=s.value&&(s.value=l)},b=function(e){var n=e.intersectObjects(r,!0);if(n&&n[0])d(),n[0].object.material.opacity=.5,n[0].object.material.transparent=!0,l=n[0].object.id;else{d();var t=r.findIndex((function(e){return e.id===s.value}));for(var a in r)a!=t.toString()&&(r[a].material.opacity=0)}},f=function(){if(s.value){var e=r.findIndex((function(e){return e.id===s.value})),n=r[e].position.clone(),a=t.domElement;n.project(o),n.x=Math.round((.5+n.x/2)*(a.width/window.devicePixelRatio)),n.y=Math.round((.5-n.y/2)*(a.height/window.devicePixelRatio)),c.value.style.top="".concat(n.y,"px"),c.value.style.left="".concat(n.x,"px")}},v=function(){s.value=null};return Object(a["m"])((function(){e.load(u,(function(e){var t=e.scene;for(var a in t.name="sciana",n.add(t),t.children)t.children[a].material=new P["Q"]({color:16711680,opacity:0,transparent:!0}),r.push(t.children[a])}),void 0,(function(e){console.error(e)}))})),Object(a["n"])((function(){s.value=null})),{currentSelected:s,mockupToRaycast:b,mockupToClick:p,updateAnnotationPosition:f,closeAnnotation:v}}t("cb29");function Y(e,n,t,o){var i=null,r=[{id:1,position:new P["Bb"](50,18,-12)},{id:2,position:new P["Bb"](8,20,-14)},{id:3,position:new P["Bb"](10,15,-8)},{id:4,position:new P["Bb"](10,5,-6)}],c=[],u=function(e){var n=document.createElement("canvas");n.width=64,n.height=64;var t=32,a=32,o=30,i=0,r=2*Math.PI,c=n.getContext("2d");return null!=c&&(c.fillStyle="rgb(0, 0, 0)",c.beginPath(),c.arc(t,a,o,i,r),c.fill(),c.strokeStyle="rgb(255, 255, 255)",c.lineWidth=3,c.beginPath(),c.arc(t,a,o,i,r),c.stroke(),c.fillStyle="rgb(255, 255, 255)",c.font="32px sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText(e,t,a)),new P["g"](n)},l=function(n,t){var a=u(n),o=new P["sb"]({map:a}),i=new P["sb"]({map:a,transparent:!0,depthTest:!1,opacity:.3}),r=new P["rb"](o),l=new P["rb"](i);r.position.copy(t),l.position.copy(t),r.userData.frontID=r.id,r.userData.backID=l.id,l.userData.frontID=r.id,l.userData.backID=l.id,c.push(r,l),e.add(r,l)},s=function(){for(var e in r)l(r[e].id.toString(),r[e].position)},d=function(e){var n=e.intersectObjects(c,!0);n&&n[0]?(n[0].object.material.opacity=.1,i=n[0]):i&&(i.object.material.opacity=.7,i=null)},p=function(e,a,i){var r=t.getAzimuthalAngle();t.maxAzimuthAngle=r,t.minAzimuthAngle=r,t.enableRotate=!1;var c=n.position.distanceTo(e),u=1,l=e.clone(),s=e.clone(),d=e.clone();l.x-=u,s.y-=u,d.z-=u;var p=n.position.distanceTo(l),b=n.position.distanceTo(s),f=n.position.distanceTo(d),v=p>c?e.x+u:e.x-u,m=b>c?e.y+u:e.y-u,g=f>c?e.z+u:e.z-u;o.value=Object(z["a"])({targets:n.position,easing:"easeOutCirc",duration:a,complete:function(){o.value=null},x:v,y:m,z:g}),o.value=Object(z["a"])({targets:t.target,easing:"easeOutCirc",duration:a+10,complete:function(){o.value=null,t.maxAzimuthAngle=1/0,t.minAzimuthAngle=-1/0,t.enableRotate=!0,void 0!=i&&i()},x:e.x,y:e.y,z:e.z})},b=function(){i&&p(i.object.position,1500)};return Object(a["m"])((function(){s()})),{spritesToRaycast:d,spritesToClick:b}}var Z={setup:function(){var e=Object(a["u"])(null),n=T(e),t=n.scene,o=n.renderer,i=n.camera,r=n.currentCamera,c=n.changeCamera,u=n.control,l=n.rendererFunctions,s=n.animation,d=n.sceneClick,p=n.sceneClickFunctions,b=n.camAndControls;t.add(new P["b"](100)),D(t),E(t),F(t,i,r,o);var f=new P["H"],v=H(f),m=v.loading,g=new k["a"](f);W(g,t,"develop_house/untitledDraco.gltf");var w=new P["ib"],h=_(w,i),j=h.onCursorMoveFunctions,O=[],y=Object(a["u"])(null),x=L(g,t,o,i,r,O,y,"develop_house/sciana.gltf"),C=x.currentSelected,A=x.mockupToRaycast,S=x.mockupToClick,z=x.updateAnnotationPosition,M=x.closeAnnotation;j.push(A),p.push(S),l.push(z);var R=Y(t,i,u,s),I=R.spritesToRaycast,B=R.spritesToClick;return j.push(I),p.push(B),{sceneRef:e,annotationRef:y,changeCamera:c,currentCamera:r,closeAnnotation:M,currentSelected:C,sceneClick:d,loading:m,camAndControls:b}}};t("6c10");Z.render=C,Z.__scopeId="data-v-232eb97b";var q=Z,J=function(e){Object(d["a"])(t,e);var n=Object(p["a"])(t);function t(){return Object(s["a"])(this,t),n.apply(this,arguments)}return t}(f["b"]);J=Object(b["a"])([Object(f["a"])({components:{Scene:q}})],J);var K=J;K.render=l;var X=K,N=[{path:"/",name:"Home",component:X}],Q=Object(u["a"])({history:Object(u["b"])("/developer3d-test/"),routes:N}),G=Q,U=t("5502"),V=Object(U["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["b"])(c).use(V).use(G).mount("#app")}});
//# sourceMappingURL=app.9313cbf8.js.map