// SVGTextElement对象
bodavm.memory.globalobj['SVGTextElement'] = function SVGTextElement(){if (!(this instanceof SVGTextElement)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGTextElement'], "SVGTextElement");
bodavm.memory.globalobj['SVGTextElement'].prototype.__proto__=bodavm.memory.globalobj['SVGTextPositioningElement'].prototype;
bodavm.memory.globalobj['SVGTextElement'].__proto__=bodavm.memory.globalobj['SVGTextPositioningElement'];
bodavm.toolsFunc.defineProperty('SVGTextElement', "LENGTHADJUST_SPACINGANDGLYPHS", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty('SVGTextElement', "LENGTHADJUST_SPACING", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty('SVGTextElement', "LENGTHADJUST_UNKNOWN", {configurable:false, enumerable:true, writable:false, value:0});