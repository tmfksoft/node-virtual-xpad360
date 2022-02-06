import UInput from 'uinput';
declare class XboxController {
    createConfig: {
        name: string;
        absmax: number;
        absmin: number;
        ffEffectsMax: number;
        id: {
            busType: 3;
            vendor: number;
            product: number;
            version: number;
        };
    };
    setupConfig: {
        UI_SET_EVBIT: (3 | 1 | 21)[];
        UI_SET_KEYBIT: (304 | 305 | 307 | 308 | 314 | 315 | 317 | 318 | 310 | 311 | 316)[];
        UI_SET_FFBIT: (81 | 80 | 96 | 88 | 89 | 90)[];
        UI_SET_ABSBIT: (0 | 3 | 1 | 4 | 16 | 17 | 2 | 5)[];
    };
    static UInputEvents: {
        BUTTON: {
            BTN_A: 304;
            BTN_B: 305;
            BTN_X: 307;
            BTN_Y: 308;
            BTN_SELECT: 314;
            BTN_START: 315;
            BTN_THUMBL: 317;
            BTN_THUMBR: 318;
            BTN_TL: 310;
            BTN_TR: 311;
            BTN_MODE: 316;
            LEFT_BUMPER: 310;
            RIGHT_BUMPER: 311;
            XBOX_BUTTON: 316;
        };
        AXIS: {
            ABS_X: 0;
            ABS_Y: 1;
            ABS_RX: 3;
            ABS_RY: 4;
            ABS_HAT0X: 16;
            ABS_HAT0Y: 17;
            ABS_Z: 2;
            ABS_RZ: 5;
            LEFT_STICK_X: 0;
            LEFT_STICK_Y: 1;
            RIGHT_STICK_X: 3;
            RIGHT_STICK_Y: 4;
            DPAD_X: 16;
            DPAD_Y: 17;
            LEFT_TRIGGER: 2;
            RIGHT_TRIGGER: 5;
        };
    };
    device: UInput.UInput | undefined;
    /**
     * Creates a UInput device or returns the current one.
     * @returns
     */
    createDevice(): Promise<UInput.UInput>;
    /**
     * Creates the device
     */
    setup(): Promise<void>;
    /**
     * Destroys and cleans up the device.
     */
    destroy(): Promise<void>;
    /**
     * Presses a button down
     * @param button Button to press
     * @returns void
     */
    buttonDown(button: number): Promise<void>;
    /**
     * Releases a pressed button
     * @param button Button to release
     * @returns void
     */
    buttonUp(button: number): Promise<void>;
    /**
     * Sets the value of an axis.
     * @param axis Axis to modify
     * @param value Value from -1 to 1 (Gets mapped accordingly)
     * @returns void
     */
    setAxis(axis: number, value: number): Promise<void>;
    clamp(input: number, min: number, max: number): number;
    map(current: number, in_min: number, in_max: number, out_min: number, out_max: number): number;
    /**
     * Simple delay helper, wraps setTimeout in a promise, useful to halt your script for a set amount of time.
     * @param time Time to wait in ms
     * @returns
     */
    sleep(time: number): Promise<unknown>;
}
export default XboxController;
