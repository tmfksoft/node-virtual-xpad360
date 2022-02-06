import UInput from 'uinput';

class XboxController {

	public createConfig = {
		name: 'Xbox360 Controller',
		absmax: 2048,
		absmin: -2048,
		ffEffectsMax: 69,
		id: {
			busType: UInput.events.BUS_USB,
			vendor: 0x045e,
			product: 0x028e,
			version: 0x0110,
		},
	};

	public setupConfig = {
		UI_SET_EVBIT:  [
			UInput.events.EV_KEY,
			UInput.events.EV_ABS,
			UInput.events.EV_FF,
		],
		// What keys can be pressed.
		UI_SET_KEYBIT: [
			UInput.events.BTN_A,
			UInput.events.BTN_B,
			UInput.events.BTN_X,
			UInput.events.BTN_Y,
			UInput.events.BTN_SELECT, // Start
			UInput.events.BTN_START, // Back
	
			UInput.events.BTN_THUMBL,
			UInput.events.BTN_THUMBR,
	
			UInput.events.BTN_TL,
			UInput.events.BTN_TR,
			UInput.events.BTN_MODE,
		],
	
		// Enables Force Feedback, though we don't support it currently.
		UI_SET_FFBIT: [
			UInput.events.FF_PERIODIC,
			UInput.events.FF_RUMBLE,
			UInput.events.FF_GAIN,
			UInput.events.FF_SQUARE,
			UInput.events.FF_TRIANGLE,
			UInput.events.FF_SINE,
		],
		UI_SET_ABSBIT: [
			UInput.events.ABS_X, // Left Stick X
			UInput.events.ABS_Y, // Left Stick Y
			UInput.events.ABS_RX, // Right Stick X
			UInput.events.ABS_RY, // Right Stick Y
	
			UInput.events.ABS_HAT0X, // Dpad
			UInput.events.ABS_HAT0Y, // Dpad
	
			UInput.events.ABS_Z, // Left Trigger
			UInput.events.ABS_RZ, // Right Trigger
		],
	};
	
	public device: UInput.UInput | undefined;

	/**
	 * Creates a UInput device or returns the current one.
	 * @returns 
	 */
    async createDevice(): Promise<UInput.UInput> {
        if (this.device) {
            return this.device;
        }

        const device = await UInput.setup(this.setupConfig);
        await device.create(this.createConfig);

		this.device = device;

        return device;
    }

	/**
	 * Creates the device
	 */
	async setup() {
		await this.createDevice();
	}

	/**
	 * Destroys and cleans up the device.
	 */
	async destroy() {
		if (this.device) {
			this.device.destroy();
		}
	}

	/**
	 * Presses a button down
	 * @param button Button to press
	 * @returns void
	 */
	async buttonDown(button: number) {
		if (!this.device) {
			return;
		}
		await this.device.keyEvent(button, true);
	}
	/**
	 * Releases a pressed button
	 * @param button Button to release
	 * @returns void
	 */
	async buttonUp(button: number) {
		if (!this.device) {
			return;
		}
		await this.device.keyEvent(button, false);
	}
	//32767

	/**
	 * Sets the value of an axis.
	 * @param axis Axis to modify
	 * @param value Value from -1 to 1 (Gets mapped accordingly)
	 * @returns void
	 */
	async setAxis(axis: number, value: number) {
		if (!this.device) {
			return;
		}
		await this.device.sendEvent(UInput.events.EV_ABS, axis, this.map(value, -1, 1, -32767, 32767));
	}

	// See https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56
	clamp(input: number, min: number, max: number): number {
		return input < min ? min : input > max ? max : input;
	}
	
	map(current: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
		const mapped: number = ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
		return this.clamp(mapped, out_min, out_max);
	}

	/**
	 * Simple delay helper, wraps setTimeout in a promise, useful to halt your script for a set amount of time.
	 * @param time Time to wait in ms
	 * @returns 
	 */
	async sleep (time: number) {
		return new Promise((resolve) => setTimeout(resolve, time));
	}
}
export default XboxController;