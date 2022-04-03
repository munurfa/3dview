const convert2xkt = require("@xeokit/xeokit-convert/dist/convert2xkt.cjs");

// IFC -> XKT
convert2xkt({ 
    source: "./example.ifc", 
    output: "./fromjs.ifc.xkt" 
});