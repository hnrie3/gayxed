// De-obfuscated bootstrap.js

// The bPQjb object stores strings that are later used to call 'require' and access module properties.
const bPQjb = {};

// Populating the bPQjb object with various strings.
// These strings are used to dynamically construct calls to 'require' and access properties of modules.
// For example, bPQjb.Xz6gb(0) returns "./scriptblox.bin", which is the compiled bytenode file.
bPQjb.kcFJ = function() { return 33; };
bPQjb.eHOI = function() { return 3; };
bPQjb.u_OI = function() { return '&~'; };
bPQjb.BUGI = function() { return '#'; };
bPQjb.csJI = function() { return 5; };
bPQjb.wPBI = function() { return 36; };
bPQjb.AWdj = function() { return 19; };
bPQjb.Uj = function() { return 34; };
bPQjb.QE_J = function() { return 21; };
bPQjb.S_0I = function() { return 1; };
bPQjb._VI = function() { return '#~'; };
bPQjb.lHYI = function() { return '!4'; };
bPQjb.oJvJ = function() { return 8; };
bPQjb.QgyJ = function() { return 39; };
bPQjb.Mbtj = function() { return 15; };
bPQjb.gzLX = function() { return 14; };
bPQjb.gRvK = function() { return 16; };
bPQjb.iKeH = function() { return 2; };
bPQjb.qn8G = function() { return '   ~'; };
bPQjb.FTaH = function() { return '&3'; };
bPQjb.AO5G = function() { return 23; };
bPQjb.UbYG = function() { return 8; };
bPQjb.wJ0G = function() { return 29; };
bPQjb.Udvh = function() { return 26; };
bPQjb.oBNZ = function() { return 7; };
bPQjb.Q8PZ = function() { return 20; };
bPQjb.QAJK = function() { return 28; };
bPQjb.S_YH = function() { return 1; };
bPQjb.Xz6gb = function() { return ["./scriptblox.bin", "bytenode", "runBytecode", "jscode", []["constructor"], "constructor", "console", "log", "error", "warn"]; };
bPQjb.jHdfb = function() { return "mainModule"; };
bPQjb.D6Cfb = function() { return "_compile"; };
bPQjb.z1xfb = function() { return "toString"; };
bPQjb.Xtvfb = function() { return "bytenode"; };

// The first require statement loads the compiled bytenode file.
require(bPQjb.Xz6gb(0));

// This line appears to be an attempt to tamper with the module compilation process.
// It's replacing the original _compile function with the toString function.
require[bPQjb.jHdfb(1)][bPQjb.D6Cfb(2)] = require[bPQjb.jHdfb(1)][bPQjb.z1xfb(3)];

// The final require statement loads the bytenode module.
require(bPQjb.Xtvfb(4));
