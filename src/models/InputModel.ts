class InputModel {
    id: string;
    label: string;
    required: boolean;
    type: string;
    placeholder?: string;
    step?: string | number;
    min?: string | number;
    max?: string | number;
    ref: React.RefObject<HTMLInputElement>;

    constructor(
        id: string,
        label: string,
        required: boolean,
        type: string,
        ref: React.RefObject<HTMLInputElement>,
        placeholder?: string,
        step?: string | number,
        min?: string | number,
        max?: string | number
    ) {
        this.id = id;
        this.label = label;
        this.placeholder = placeholder;
        this.required = required;
        this.type = type;
        if (this.type === "time") {
            this.step = step;
            this.min = min;
            this.max = max;
        }
        this.ref = ref;
    }
}

export default InputModel;
