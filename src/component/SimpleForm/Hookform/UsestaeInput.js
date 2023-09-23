import { useState } from "react";

const Useinputstate = (defaultvalue = null) => {
    const [value, setvalue] = useState(defaultvalue);

    const onChange = e => {
        setvalue(e.target.value);
    }
    return {
        value,
        onChange
    }
}

export default Useinputstate;
