///整合所有要运行的代码
const fs=require('fs');
const path=require('path')
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;


let filelist=[
    "EventTarget",
    "Node",
    "WindowProperties",
    "Window",
    "AudioNode",
    "AudioScheduledSourceNode",
    "StorageManager",
    "Worklet",
    "Element",
    "MediaStreamTrack",
    "HTMLElement",
    "HTMLCollection",
    "NetworkInformation",
    "CustomElementRegistry",
    "Event",
    "UIEvent",
    "MouseEvent",
    "Document",
    "HTMLDocument",
    "AuthenticatorResponse",
    "Location",
    "Storage",
    "CharacterData",
    "Text",
    "Database",
    "CloseEvent",
    "Notification",
    "IDBDatabase",
    "IDBRequest",
    "IDBOpenDBRequest",
    "DeprecatedStorageQuota",
    "IDBFactory",
    "History",
    "Screen",
    "Sensor",
    "CSSStyleDeclaration",
    "CanvasRenderingContext2D",
    "WebGLRenderingContext",
    "MediaQueryList",
    "MutationRecord",
    "webkitRequestFileSystem",
    "CSSRuleList",
    "Attr",
    "Option",
    "Navigation",
    "MediaStream",
    "TrustedTypePolicyFactory",
    "Scheduler",
    "CookieStore",
    "RTCSessionDescription",
    "RTCDataChannel",
    "CacheStorage",
    // "Promise",
    "OffscreenCanvasRenderingContext2D",
    "DeprecatedStorageInfo",
    "SpeechSynthesis",
    "VisualViewport",
    "BeforeInstallPromptEvent",
    "BarProp",
    "BaseAudioContext",
    "BluetoothUUID",
    "StyleMedia",
    "HTMLMediaElement",
    "Audio",
    "HTMLAudioElement",
    "Crypto",
    "CDATASection",
    "CredentialsContainer",
    "Comment",
    "DocumentFragment",
    "DocumentType",
    "DOMParser",
    "Bluetooth",
    "External",
    "PointerEvent",
    "WebSocket",
    "SourceBuffer",
    "DOMStringList",
    "Headers",
    "IDBObjectStore",
    "IDBTransaction",
    "IDBVersionChangeEvent",
    "TextTrackList",
    "SpeechSynthesisUtterance",
    "MediaEncryptedEvent",
    "MutationObserver",
    "NamedNodeMap",
    "NodeList",
    "OfflineAudioContext",
    "Path2D",
    "LockManager",
    "XPathExpression",
    "Performance",
    "ScreenOrientation",
    "PerformanceEntry",
    "PerformancePaintTiming",
    "PerformanceResourceTiming",
    "Permissions",
    "PermissionStatus",
    "Request",
    "SVGElement",
    "DeviceOrientationEvent",
    "PresentationConnectionCloseEvent",
    "SVGGraphicsElement",
    "SVGGElement",
    "SVGPatternElement",
    "SVGGeometryElement",
    "SVGPathElement",
    "SVGSVGElement",
    "SVGSymbolElement",
    "SVGUseElement",
    "WebGLShader",
    "WebGLShaderPrecisionFormat",
    "RTCPeerConnection",
    "WebGLBuffer",
    "WebGLProgram",
    "CSS",
    "OrientationSensor",
    "Navigator",
    "BatteryManager",
    "Plugin",
    "PluginArray",
    "MimeType",
    "MimeTypeArray",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequest",
    "AbortController",
    "AbortSignal",
    "AbsoluteOrientationSensor",
    "AbstractRange",
    "Accelerometer",
    "alert",
    "AnalyserNode",
    "Animation",
    "AnimationEffect",
    "AnimationEvent",
    "AnimationPlaybackEvent",
    "AnimationTimeline",
    "AudioBuffer",
    "AudioBufferSourceNode",
    "AudioContext",
    "AudioData",
    "AudioDecoder",
    "AudioDestinationNode",
    "AudioEncoder",
    "AudioListener",
    "AudioParam",
    "AudioParamMap",
    "AudioProcessingEvent",
    "AudioSinkInfo",
    "AudioWorklet",
    "AudioWorkletNode",
    "AuthenticatorAssertionResponse",
    "AuthenticatorAttestationResponse",
    "BackgroundFetchManager",
    "BackgroundFetchRecord",
    "BackgroundFetchRegistration",
    "BeforeUnloadEvent",
    "BiquadFilterNode",
    "Blob",
    "BlobEvent",
    "BluetoothCharacteristicProperties",
    "BluetoothDevice",
    "BluetoothRemoteGATTCharacteristic",
    "BluetoothRemoteGATTDescriptor",
    "BluetoothRemoteGATTServer",
    "BluetoothRemoteGATTService",
    // "blur",
    "BroadcastChannel",
    "BrowserCaptureMediaStreamTrack",
    "StyleSheet",
    "CSSStyleValue",
    "CSSNumericValue",
    "CSSMathValue",
    "CSSTransformComponent",
    "CSSRule",
    "CSSGroupingRule",
    "ByteLengthQueuingStrategy",
    "Cache",
    "caches",
    "cancelAnimationFrame",
    "cancelIdleCallback",
    "CanvasCaptureMediaStreamTrack",
    "CanvasFilter",
    "CanvasGradient",
    "CanvasPattern",
    "CaptureController",
    "captureEvents",
    "ChannelMergerNode",
    "ChannelSplitterNode",
    // "clearInterval",
    // "clearTimeout",
    "clientInformation",
    "Clipboard",
    "ClipboardEvent",
    "ClipboardItem",
    // "close",
    // "closed",
    "CompositionEvent",
    "CompressionStream",
    // "confirm",
    "ConstantSourceNode",
    "ContentVisibilityAutoStateChangeEvent",
    "ConvolverNode",
    "CookieChangeEvent",
    "cookieStore",
    "CookieStoreManager",
    "CountQueuingStrategy",
    // "createImageBitmap",
    "Credential",
    // "credentialless",
    "CropTarget",
    // "crossOriginIsolated",
    "CryptoKey",
    "CSSAnimation",
    "CSSConditionRule",
    "CSSContainerRule",
    "CSSCounterStyleRule",
    "CSSFontFaceRule",
    "CSSFontPaletteValuesRule",
    "CSSImageValue",
    "CSSImportRule",
    "CSSKeyframeRule",
    "CSSKeyframesRule",
    "CSSKeywordValue",
    "CSSLayerBlockRule",
    "CSSLayerStatementRule",
    "CSSMathClamp",
    "CSSMathInvert",
    "CSSMathMax",
    "CSSMathMin",
    "CSSMathNegate",
    "CSSMathProduct",
    "CSSMathSum",
    "CSSMatrixComponent",
    "CSSMediaRule",
    "CSSNamespaceRule",
    "CSSNumericArray",
    "CSSPageRule",
    "CSSPerspective",
    "CSSPositionValue",
    "CSSPropertyRule",
    "CSSRotate",
    "CSSScale",
    "CSSSkew",
    "CSSSkewX",
    "CSSSkewY",
    "CSSStyleRule",
    "CSSStyleSheet",
    "CSSSupportsRule",
    "CSSTransformValue",
    "CSSTransition",
    "CSSTranslate",
    "CSSUnitValue",
    "CSSUnparsedValue",
    "CSSVariableReferenceValue",
    "customElements",
    "CustomEvent",
    "CustomStateSet",
    "DataTransfer",
    "DataTransferItem",
    "DataTransferItemList",
    "DecompressionStream",
    "DelayNode",
    "DelegatedInkTrailPresenter",
    "DeviceMotionEvent",
    "DeviceMotionEventAcceleration",
    "DeviceMotionEventRotationRate",
    // "devicePixelRatio",
    "DocumentTimeline",
    "DOMMatrixReadOnly",
    "DOMError",
    "DOMException",
    "DOMImplementation",
    "DOMMatrix",
    "DOMPointReadOnly",
    "DOMPoint",
    "DOMQuad",
    "DOMRectReadOnly",
    "DOMRect",
    "DOMRectList",
    "DOMStringMap",
    "DOMTokenList",
    "DragEvent",
    "DynamicsCompressorNode",
    "ElementInternals",
    "EncodedAudioChunk",
    "EncodedVideoChunk",
    "ErrorEvent",
    "EventCounts",
    "EventSource",
    "EyeDropper",
    "WritableStream",
    "FileSystemHandle",
    "FeaturePolicy",
    "FederatedCredential",
    // "fetch",
    "File",
    "FileList",
    "FileReader",
    "FileSystemDirectoryHandle",
    "FileSystemFileHandle",
    "FileSystemWritableFileStream",
    // "find",
    // "focus",
    "FocusEvent",
    "FontData",
    "FontFace",
    "FontFaceSetLoadEvent",
    "FormData",
    "FormDataEvent",
    "FragmentDirective",
    "GainNode",
    "Gamepad",
    "GamepadButton",
    "GamepadEvent",
    "GamepadHapticActuator",
    "Geolocation",
    "GeolocationCoordinates",
    "GeolocationPosition",
    "GeolocationPositionError",
    "getComputedStyle",
    "getScreenDetails",
    "getSelection",
    "GravitySensor",
    "Gyroscope",
    "HashChangeEvent",
    "HID",
    "HIDConnectionEvent",
    "HIDDevice",
    "HIDInputReportEvent",
    "Highlight",
    "HighlightRegistry",
    "HTMLAllCollection",
    "HTMLAnchorElement",
    "HTMLAreaElement",
    "HTMLBaseElement",
    "HTMLBodyElement",
    "HTMLBRElement",
    "HTMLButtonElement",
    "HTMLCanvasElement",
    "HTMLDataElement",
    "HTMLDataListElement",
    "HTMLDetailsElement",
    "HTMLDialogElement",
    "HTMLDirectoryElement",
    "HTMLDivElement",
    "HTMLDListElement",
    "HTMLEmbedElement",
    "HTMLFieldSetElement",
    "HTMLFontElement",
    "HTMLFormControlsCollection",
    "HTMLFormElement",
    "HTMLFrameElement",
    "HTMLFrameSetElement",
    "HTMLHeadElement",
    "HTMLHeadingElement",
    "HTMLHRElement",
    "HTMLHtmlElement",
    "HTMLIFrameElement",
    "HTMLImageElement",
    "HTMLInputElement",
    "HTMLLabelElement",
    "HTMLLegendElement",
    "HTMLLIElement",
    "HTMLLinkElement",
    "HTMLMapElement",
    "HTMLMarqueeElement",
    "HTMLMenuElement",
    "HTMLMetaElement",
    "HTMLMeterElement",
    "HTMLModElement",
    "HTMLObjectElement",
    "HTMLOListElement",
    "HTMLOptGroupElement",
    "HTMLOptionElement",
    "HTMLOptionsCollection",
    "HTMLOutputElement",
    "HTMLParagraphElement",
    "HTMLParamElement",
    "HTMLPictureElement",
    "HTMLPreElement",
    "HTMLProgressElement",
    "HTMLQuoteElement",
    "HTMLScriptElement",
    "HTMLSelectElement",
    "HTMLSlotElement",
    "HTMLSourceElement",
    "HTMLSpanElement",
    "HTMLStyleElement",
    "HTMLTableCaptionElement",
    "HTMLTableCellElement",
    "HTMLTableColElement",
    "HTMLTableElement",
    "HTMLTableRowElement",
    "HTMLTableSectionElement",
    "HTMLTemplateElement",
    "HTMLTextAreaElement",
    "HTMLTimeElement",
    "HTMLTitleElement",
    "HTMLTrackElement",
    "HTMLUListElement",
    "HTMLUnknownElement",
    "HTMLVideoElement",
    "MediaDeviceInfo",
    "IDBCursor",
    "IDBCursorWithValue",
    "IDBIndex",
    "IDBKeyRange",
    "IdentityCredential",
    "IdleDeadline",
    "IdleDetector",
    "IIRFilterNode",
    "Image",
    "ImageBitmap",
    "ImageBitmapRenderingContext",
    "ImageCapture",
    "ImageData",
    "ImageDecoder",
    "ImageTrack",
    "ImageTrackList",
    "indexedDB",
    "Ink",
    // "innerHeight",
    // "innerWidth",
    "InputDeviceCapabilities",
    "InputDeviceInfo",
    "InputEvent",
    "IntersectionObserver",
    "IntersectionObserverEntry",
    // "isSecureContext",
    "Keyboard",
    "KeyboardEvent",
    "KeyboardLayoutMap",
    "KeyframeEffect",
    "LargestContentfulPaint",
    "LaunchParams",
    "launchQueue",
    "LayoutShift",
    "LayoutShiftAttribution",
    "LinearAccelerationSensor",
    "localStorage",
    "locationbar",
    "Lock",
    // "matchMedia",
    "MathMLElement",
    "MediaCapabilities",
    "MediaDevices",
    "MediaElementAudioSourceNode",
    "MediaError",
    "MediaKeyMessageEvent",
    "MediaKeys",
    "MediaKeySession",
    "MediaKeyStatusMap",
    "MediaKeySystemAccess",
    "MediaList",
    "MediaMetadata",
    "MediaQueryListEvent",
    "MediaRecorder",
    "MediaSession",
    "MediaSource",
    "MediaSourceHandle",
    "MediaStreamAudioDestinationNode",
    "MediaStreamAudioSourceNode",
    "MediaStreamEvent",
    "MediaStreamTrackEvent",
    "MediaStreamTrackGenerator",
    "MediaStreamTrackProcessor",
    "menubar",
    "MessageChannel",
    "MessageEvent",
    "MessagePort",
    "MIDIPort",
    "MIDIAccess",
    "MIDIConnectionEvent",
    "MIDIInput",
    "MIDIInputMap",
    "MIDIMessageEvent",
    "MIDIOutput",
    "MIDIOutputMap",
    // "moveBy",
    // "moveTo",
    "MutationEvent",
    // "name",
    "NavigateEvent",
    "NavigationCurrentEntryChangeEvent",
    "NavigationDestination",
    "NavigationHistoryEntry",
    "NavigationPreloadManager",
    "NavigationTransition",
    "NavigatorManagedData",
    "NavigatorUAData",
    "NodeFilter",
    "NodeIterator",
    "OfflineAudioCompletionEvent",
    // "offscreenBuffering",
    "OffscreenCanvas",
    // "open",
    "openDatabase",
    // "origin",
    // "originAgentCluster",
    "OscillatorNode",
    "OTPCredential",
    // "outerHeight",
    // "outerWidth",
    "OverconstrainedError",
    "PaymentRequestUpdateEvent",
    "PageTransitionEvent",
    // "pageXOffset",
    // "pageYOffset",
    "PannerNode",
    "PasswordCredential",
    "PaymentAddress",
    "PaymentManager",
    "PaymentMethodChangeEvent",
    "PaymentRequest",
    "PaymentResponse",
    "PerformanceElementTiming",
    "PerformanceEventTiming",
    "PerformanceLongTaskTiming",
    "PerformanceMark",
    "PerformanceMeasure",
    "PerformanceNavigation",
    "PerformanceNavigationTiming",
    "PerformanceObserver",
    "PerformanceObserverEntryList",
    "PerformanceServerTiming",
    "PerformanceTiming",
    "PeriodicSyncManager",
    "PeriodicWave",
    "personalbar",
    "PictureInPictureEvent",
    "PictureInPictureWindow",
    "PopStateEvent",
    "postMessage",
    "Presentation",
    "PresentationAvailability",
    "PresentationConnection",
    "PresentationConnectionAvailableEvent",
    "PresentationConnectionList",
    "PresentationReceiver",
    "PresentationRequest",
    // "print",
    "ProcessingInstruction",
    "Profiler",
    "ProgressEvent",
    "PromiseRejectionEvent",
    // "prompt",
    "PublicKeyCredential",
    "PushManager",
    "PushSubscription",
    "PushSubscriptionOptions",
    "queryLocalFonts",
    "queueMicrotask",
    "RadioNodeList",
    "Range",
    "ReadableByteStreamController",
    "ReadableStream",
    "ReadableStreamBYOBReader",
    "ReadableStreamBYOBRequest",
    "ReadableStreamDefaultController",
    "ReadableStreamDefaultReader",
    "RelativeOrientationSensor",
    "releaseEvents",
    "RemotePlayback",
    "reportError",
    "ReportingObserver",
    "requestAnimationFrame",
    "requestIdleCallback",
    // "resizeBy",
    "ResizeObserver",
    "ResizeObserverEntry",
    "ResizeObserverSize",
    // "resizeTo",
    "Response",
    "RTCCertificate",
    "RTCDataChannelEvent",
    "RTCDtlsTransport",
    "RTCDTMFSender",
    "RTCDTMFToneChangeEvent",
    "RTCEncodedAudioFrame",
    "RTCEncodedVideoFrame",
    "RTCError",
    "RTCErrorEvent",
    "RTCIceCandidate",
    "RTCIceTransport",
    "RTCPeerConnectionIceErrorEvent",
    "RTCPeerConnectionIceEvent",
    "RTCRtpReceiver",
    "RTCRtpSender",
    "RTCRtpTransceiver",
    "RTCSctpTransport",
    "RTCStatsReport",
    "RTCTrackEvent",
    "Sanitizer",
    "Scheduling",
    "ScreenDetailed",
    "ScreenDetails",
    // "screenLeft",
    // "screenTop",
    // "screenX",
    // "screenY",
    "ScriptProcessorNode",
    // "scroll",
    // "scrollbars",
    // "scrollBy",
    // "scrollTo",
    // "scrollX",
    // "scrollY",
    "SecurityPolicyViolationEvent",
    "Selection",
    "SensorErrorEvent",
    "Serial",
    "SerialPort",
    "ServiceWorker",
    "ServiceWorkerContainer",
    "ServiceWorkerRegistration",
    "sessionStorage",
    "ShadowRoot",
    "SharedWorker",
    "showDirectoryPicker",
    "showOpenFilePicker",
    "showSaveFilePicker",
    "SourceBufferList",
    "speechSynthesis",
    "SpeechSynthesisEvent",
    "SpeechSynthesisErrorEvent",
    "StaticRange",
    // "status",
    "statusbar",
    "StereoPannerNode",
    "stop",
    "StorageEvent",
    "structuredClone",
    "styleMedia",
    "StylePropertyMapReadOnly",
    "StylePropertyMap",
    "StyleSheetList",
    "SubmitEvent",
    "SubtleCrypto",
    "SVGAElement",
    "SVGAngle",
    "SVGAnimatedAngle",
    "SVGAnimatedBoolean",
    "SVGAnimatedEnumeration",
    "SVGAnimatedInteger",
    "SVGAnimatedLength",
    "SVGAnimatedLengthList",
    "SVGAnimatedNumber",
    "SVGAnimatedNumberList",
    "SVGAnimatedPreserveAspectRatio",
    "SVGAnimatedRect",
    "SVGAnimatedString",
    "SVGAnimatedTransformList",
    "SVGAnimationElement",
    "SVGAnimateElement",
    "SVGAnimateMotionElement",
    "SVGAnimateTransformElement",
    "SVGCircleElement",
    "SVGClipPathElement",
    "SVGComponentTransferFunctionElement",
    "SVGDefsElement",
    "SVGDescElement",
    "SVGEllipseElement",
    "SVGFEBlendElement",
    "SVGFEColorMatrixElement",
    "SVGFEComponentTransferElement",
    "SVGFECompositeElement",
    "SVGFEConvolveMatrixElement",
    "SVGFEDiffuseLightingElement",
    "SVGFEDisplacementMapElement",
    "SVGFEDistantLightElement",
    "SVGFEDropShadowElement",
    "SVGFEFloodElement",
    "SVGFEFuncAElement",
    "SVGFEFuncBElement",
    "SVGFEFuncGElement",
    "SVGFEFuncRElement",
    "SVGFEGaussianBlurElement",
    "SVGFEImageElement",
    "SVGFEMergeElement",
    "SVGFEMergeNodeElement",
    "SVGFEMorphologyElement",
    "SVGFEOffsetElement",
    "SVGFEPointLightElement",
    "SVGFESpecularLightingElement",
    "SVGFESpotLightElement",
    "SVGFETileElement",
    "SVGFETurbulenceElement",
    "SVGFilterElement",
    "SVGForeignObjectElement",
    "SVGGradientElement",
    "SVGImageElement",
    "SVGLength",
    "SVGLengthList",
    "SVGLinearGradientElement",
    "SVGLineElement",
    "SVGMarkerElement",
    "SVGMaskElement",
    "SVGMatrix",
    "SVGMetadataElement",
    "SVGMPathElement",
    "SVGNumber",
    "SVGNumberList",
    "SVGPoint",
    "SVGPointList",
    "SVGPolygonElement",
    "SVGPolylineElement",
    "SVGPreserveAspectRatio",
    "SVGRadialGradientElement",
    "SVGRect",
    "SVGRectElement",
    "SVGScriptElement",
    "SVGSetElement",
    "SVGStopElement",
    "SVGStringList",
    "SVGStyleElement",
    "SVGSwitchElement",
    "SVGTextContentElement",
    "SVGTextPositioningElement",
    "SVGTextElement",
    "SVGTextPathElement",
    "SVGTitleElement",
    "SVGTransform",
    "SVGTransformList",
    "SVGTSpanElement",
    "SVGUnitTypes",
    "SVGViewElement",
    "SyncManager",
    "TaskAttributionTiming",
    "TaskController",
    "TaskPriorityChangeEvent",
    "TaskSignal",
    "TextDecoder",
    "TextDecoderStream",
    "TextEncoder",
    "TextEncoderStream",
    "TextEvent",
    "TextMetrics",
    "TextTrack",
    "TextTrackCue",
    "TextTrackCueList",
    "TimeRanges",
    "toolbar",
    "Touch",
    "TouchEvent",
    "TouchList",
    "TrackEvent",
    "TransformStream",
    "TransformStreamDefaultController",
    "TransitionEvent",
    "TreeWalker",
    "TrustedHTML",
    "TrustedScript",
    "TrustedScriptURL",
    "TrustedTypePolicy",
    "trustedTypes",
    "URL",
    "URLPattern",
    "URLSearchParams",
    "USB",
    "USBAlternateInterface",
    "USBConfiguration",
    "USBConnectionEvent",
    "USBDevice",
    "USBEndpoint",
    "USBInterface",
    "USBInTransferResult",
    "USBIsochronousInTransferPacket",
    "USBIsochronousInTransferResult",
    "USBIsochronousOutTransferPacket",
    "USBIsochronousOutTransferResult",
    "USBOutTransferResult",
    "UserActivation",
    "ValidityState",
    "VideoColorSpace",
    "VideoDecoder",
    "VideoEncoder",
    "VideoFrame",
    "VideoPlaybackQuality",
    "ViewTransition",
    // "vilame_setter",
    "VirtualKeyboard",
    "VirtualKeyboardGeometryChangeEvent",
    "VTTCue",
    "WakeLock",
    "WakeLockSentinel",
    "WaveShaperNode",
    "WebGL2RenderingContext",
    "WebGLActiveInfo",
    "WebGLContextEvent",
    "WebGLFramebuffer",
    "WebGLQuery",
    "WebGLRenderbuffer",
    "WebGLSampler",
    "WebGLSync",
    "WebGLTexture",
    "WebGLTransformFeedback",
    "WebGLUniformLocation",
    "WebGLVertexArrayObject",
    "webkitCancelAnimationFrame",
    "WebKitCSSMatrix",
    "webkitMediaStream",
    "WebKitMutationObserver",
    "webkitRequestAnimationFrame",
    "webkitResolveLocalFileSystemURL",
    "webkitRTCPeerConnection",
    "webkitSpeechGrammar",
    "webkitSpeechGrammarList",
    "webkitSpeechRecognition",
    "webkitSpeechRecognitionError",
    "webkitSpeechRecognitionEvent",
    "webkitURL",
    "WebTransport",
    "WebTransportBidirectionalStream",
    "WebTransportDatagramDuplexStream",
    "WebTransportError",
    "WheelEvent",
    "WindowControlsOverlay",
    "WindowControlsOverlayGeometryChangeEvent",
    "Worker",
    "WritableStreamDefaultController",
    "WritableStreamDefaultWriter",
    // "ws",
    "XRSpace",
    "XRDepthInformation",
    "XRReferenceSpace",
    "XMLDocument",
    "XMLHttpRequestUpload",
    "XMLSerializer",
    "XPathEvaluator",
    "XPathResult",
    "XRAnchor",
    "XRAnchorSet",
    "XRBoundedReferenceSpace",
    "XRCamera",
    "XRCPUDepthInformation",
    "XRDOMOverlayState",
    "XRFrame",
    "XRHitTestResult",
    "XRHitTestSource",
    "XRInputSource",
    "XRInputSourceArray",
    "XRInputSourceEvent",
    "XRInputSourcesChangeEvent",
    "XRLayer",
    "XRLightEstimate",
    "XRLightProbe",
    "XRPose",
    "XRRay",
    "XRReferenceSpaceEvent",
    "XRRenderState",
    "XRRigidTransform",
    "XRSession",
    "XRSessionEvent",
    "XRSystem",
    "XRTransientInputHitTestResult",
    "XRTransientInputHitTestSource",
    "XRView",
    "XRViewerPose",
    "XRViewport",
    "XRWebGLBinding",
    "XRWebGLDepthInformation",
    "XRWebGLLayer",
    "XSLTProcessor",
    // "Error",
    "MemoryInfo",
    // "atob",
    // "btoa",
    // "chrome",
    'documentPictureInPicture',
    "GPU",
    "GPUAdapter",
    "GPUAdapterInfo",
    "GPUBindGroup",
    "GPUBindGroupLayout",
    "GPUBuffer",
    "GPUBufferUsage",
    "GPUCanvasContext",
    "GPUColorWrite",
    "GPUCommandBuffer",
    "GPUCommandEncoder",
    "GPUCompilationInfo",
    "GPUCompilationMessage",
    "GPUComputePassEncoder",
    "GPUComputePipeline",
    "GPUDevice",
    "GPUDeviceLostInfo",
    "GPUError",
    "GPUExternalTexture",
    "GPUInternalError",
    "GPUMapMode",
    "GPUOutOfMemoryError",
    "GPUPipelineError",
    "GPUPipelineLayout",
    "GPUQuerySet",
    "GPUQueue",
    "GPURenderBundle",
    "GPURenderBundleEncoder",
    "GPURenderPassEncoder",
    "GPURenderPipeline",
    "GPUSampler",
    "GPUShaderModule",
    "GPUShaderStage",
    "GPUSupportedFeatures",
    "GPUSupportedLimits",
    "GPUTexture",
    "GPUTextureUsage",
    "GPUTextureView",
    "GPUUncapturedErrorEvent",
    "GPUValidationError",
    "LaunchQueue",
    // "length",
    "ToggleEvent",
    'WebGlgetExtension'  //我添加的文件
  ]


let parentPath=path.dirname(__dirname)
// debugger
function getEnvCode(){
    let code = "//env相关代码" + "\r\n"
    for (file of filelist){
        code += getFile('env',file)
    }
    return code
}




function getFile(dir_name,name) {
    // debugger
    let _path =path.join( parentPath,dir_name,name+'.js');
    // debugger
    // console.log(_path)
    try {
        return fs.readFileSync(_path) + "\r\n";

    } catch (e) {
        console.log(`${_path}不存在`)
        return "";
    }
}
function exportEnvCode(){
    let code=''
    code+=getFile("config","config")
    code+=getFile("config","configFontSize")
    code+=getFile("config","configFormChrome")
    code+=getFile("tools","toolsFunc")
    code+=getFile("tools","printLog")
    return code
}

function getStaticCode(){
    let code=''
    //获取tools文件夹下的所有文件代码
    code=exportEnvCode()
    code+=getEnvCode()
    // toolsPlugin
    code+=getFile("tools","envFuncBom")
    code+=getFile("tools","envFuncDom")
    code+=getFile("tools","envFuncJSApi")
    code+=getFile("tools","envFuncListener")

    code +=getFile("tools","toolsPromise")

    code+=getFile("tools","globalHook")
    code+=getFile("tools","globalThis")

    code +=getFile("tools","toolsPlugin")
    code+=getFile("tools","myReqHelper")
    code+=getFile("tools","scriptDomExec")

    return code
}





function getRunCode(runFileName){
    let code=''
    if (!runFileName){
        code+=getFile("run","run") 
    }else{
        code+=getFile("run",runFileName) 
        debugger
    }
    // console.log('run.js 代码转换中')

    // debugger
    // console.log('run.js 代码转换完成')
    return code
}


function getRunAllCode(runFileName){
    let code=''
    code +='function getValue(){ \r\n'
    code +=`bodaEnv.toolsFunc.initEnvFingerPrint() \r\n`
    code +=`bodaDoScript() \r\n`

    code += getFile("tools","listenerData")  //加载轨迹数据
    // debugger
    // if (website){
    //     code+=getFile("run//website//"+website,"run")
    // }else{
        // code+=getFile("run","run")  //只需要修改这个代码就行
    code +=getRunCode(runFileName)
    // }
    // debugger
    // code+=getFile("tools","asyncLoad")
    code+=getFile("tools","asyncListener")
    code+=getFile("tools","asyncsetTimeout")
    code+=getFile("run","getResult")
    code+=getFile("run","clearCache")
    code+='\r\n  } \r\n getValue'
    return code
}
// getCode()

module.exports = {
    getStaticCode,getRunCode,exportEnvCode,getFile,parser,traverse,types,generator,getRunAllCode
}