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
