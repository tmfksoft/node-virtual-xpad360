"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uinput_1 = __importDefault(require("uinput"));
var XboxController = /** @class */ (function () {
    function XboxController() {
        this.createConfig = {
            name: 'Xbox360 Controller',
            absmax: 2048,
            absmin: -2048,
            ffEffectsMax: 69,
            id: {
                busType: uinput_1.default.events.BUS_USB,
                vendor: 0x045e,
                product: 0x028e,
                version: 0x0110,
            },
        };
        this.setupConfig = {
            UI_SET_EVBIT: [
                uinput_1.default.events.EV_KEY,
                uinput_1.default.events.EV_ABS,
                uinput_1.default.events.EV_FF,
            ],
            // What keys can be pressed.
            UI_SET_KEYBIT: [
                uinput_1.default.events.BTN_A,
                uinput_1.default.events.BTN_B,
                uinput_1.default.events.BTN_X,
                uinput_1.default.events.BTN_Y,
                uinput_1.default.events.BTN_SELECT,
                uinput_1.default.events.BTN_START,
                uinput_1.default.events.BTN_THUMBL,
                uinput_1.default.events.BTN_THUMBR,
                uinput_1.default.events.BTN_TL,
                uinput_1.default.events.BTN_TR,
                uinput_1.default.events.BTN_MODE,
            ],
            // Enables Force Feedback, though we don't support it currently.
            UI_SET_FFBIT: [
                uinput_1.default.events.FF_PERIODIC,
                uinput_1.default.events.FF_RUMBLE,
                uinput_1.default.events.FF_GAIN,
                uinput_1.default.events.FF_SQUARE,
                uinput_1.default.events.FF_TRIANGLE,
                uinput_1.default.events.FF_SINE,
            ],
            UI_SET_ABSBIT: [
                uinput_1.default.events.ABS_X,
                uinput_1.default.events.ABS_Y,
                uinput_1.default.events.ABS_RX,
                uinput_1.default.events.ABS_RY,
                uinput_1.default.events.ABS_HAT0X,
                uinput_1.default.events.ABS_HAT0Y,
                uinput_1.default.events.ABS_Z,
                uinput_1.default.events.ABS_RZ, // Right Trigger
            ],
        };
    }
    /**
     * Creates a UInput device or returns the current one.
     * @returns
     */
    XboxController.prototype.createDevice = function () {
        return __awaiter(this, void 0, void 0, function () {
            var device;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.device) {
                            return [2 /*return*/, this.device];
                        }
                        return [4 /*yield*/, uinput_1.default.setup(this.setupConfig)];
                    case 1:
                        device = _a.sent();
                        return [4 /*yield*/, device.create(this.createConfig)];
                    case 2:
                        _a.sent();
                        this.device = device;
                        return [2 /*return*/, device];
                }
            });
        });
    };
    /**
     * Creates the device
     */
    XboxController.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createDevice()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Destroys and cleans up the device.
     */
    XboxController.prototype.destroy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.device) {
                    this.device.destroy();
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Presses a button down
     * @param button Button to press
     * @returns void
     */
    XboxController.prototype.buttonDown = function (button) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.device) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.device.keyEvent(button, true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Releases a pressed button
     * @param button Button to release
     * @returns void
     */
    XboxController.prototype.buttonUp = function (button) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.device) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.device.keyEvent(button, false)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //32767
    /**
     * Sets the value of an axis.
     * @param axis Axis to modify
     * @param value Value from -1 to 1 (Gets mapped accordingly)
     * @returns void
     */
    XboxController.prototype.setAxis = function (axis, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.device) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.device.sendEvent(uinput_1.default.events.EV_ABS, axis, this.map(value, -1, 1, -32767, 32767))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // See https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56
    XboxController.prototype.clamp = function (input, min, max) {
        return input < min ? min : input > max ? max : input;
    };
    XboxController.prototype.map = function (current, in_min, in_max, out_min, out_max) {
        var mapped = ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
        return this.clamp(mapped, out_min, out_max);
    };
    /**
     * Simple delay helper, wraps setTimeout in a promise, useful to halt your script for a set amount of time.
     * @param time Time to wait in ms
     * @returns
     */
    XboxController.prototype.sleep = function (time) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, time); })];
            });
        });
    };
    XboxController.UInputEvents = {
        BUTTON: {
            BTN_A: uinput_1.default.events.BTN_A,
            BTN_B: uinput_1.default.events.BTN_B,
            BTN_X: uinput_1.default.events.BTN_X,
            BTN_Y: uinput_1.default.events.BTN_Y,
            BTN_SELECT: uinput_1.default.events.BTN_SELECT,
            BTN_START: uinput_1.default.events.BTN_START,
            BTN_THUMBL: uinput_1.default.events.BTN_THUMBL,
            BTN_THUMBR: uinput_1.default.events.BTN_THUMBR,
            BTN_TL: uinput_1.default.events.BTN_TL,
            BTN_TR: uinput_1.default.events.BTN_TR,
            BTN_MODE: uinput_1.default.events.BTN_MODE,
            // Remapped for ease of use.
            LEFT_BUMPER: uinput_1.default.events.BTN_TL,
            RIGHT_BUMPER: uinput_1.default.events.BTN_TR,
            XBOX_BUTTON: uinput_1.default.events.BTN_MODE
        },
        AXIS: {
            ABS_X: uinput_1.default.events.ABS_X,
            ABS_Y: uinput_1.default.events.ABS_Y,
            ABS_RX: uinput_1.default.events.ABS_RX,
            ABS_RY: uinput_1.default.events.ABS_RY,
            ABS_HAT0X: uinput_1.default.events.ABS_HAT0X,
            ABS_HAT0Y: uinput_1.default.events.ABS_HAT0Y,
            ABS_Z: uinput_1.default.events.ABS_Z,
            ABS_RZ: uinput_1.default.events.ABS_RZ,
            // Remapped for ease of use.
            LEFT_STICK_X: uinput_1.default.events.ABS_X,
            LEFT_STICK_Y: uinput_1.default.events.ABS_Y,
            RIGHT_STICK_X: uinput_1.default.events.ABS_RX,
            RIGHT_STICK_Y: uinput_1.default.events.ABS_RY,
            DPAD_X: uinput_1.default.events.ABS_HAT0X,
            DPAD_Y: uinput_1.default.events.ABS_HAT0Y,
            LEFT_TRIGGER: uinput_1.default.events.ABS_Z,
            RIGHT_TRIGGER: uinput_1.default.events.ABS_RZ, // Right Trigger
        },
    };
    return XboxController;
}());
exports.default = XboxController;
