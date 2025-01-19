"use client"

import { useState } from "react";

export default function Counter() {

    const [nbClick, setNbClick] = useState(0);

    return (
        <button
            type="button"
            onClick={() => {
                setNbClick(nbClick + 1);
            }}
        >
            🚀{nbClick}
        </button>
    )
}