import React from "react";
import "./Popin.scss";

export const Popin = ({ open, onClose, children, className }) => {
    if (!open) return;
    return (
        <div className={`popin ${className}`}>
            <div className="popin__inner">
                <button className="popin__close" onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>
    );
};
