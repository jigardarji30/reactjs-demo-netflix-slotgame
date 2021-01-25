import React from 'react';
import SlotMachine from "./SlotMachine";

const SlotM = () => {
    return (
        <>
            <div style={{ display: 'block', clear: 'both' }}>
                <h1 className="heading_style"> 🎰 welcome to <span style={{ fontWeight: 'bold' }}> Slot machine game </span> 🎰 </h1>
                <div className="slot_machine">
                    <SlotMachine x='😃' y='😃' z='😃' />
                    <SlotMachine x='😆' y='🎅' z='😃' />
                    <SlotMachine x='😆' y='😆' z='😅' />
                    <SlotMachine x='👦' y='👦' z='👦' />
                </div>
            </div>
        </>
    );
}

export default SlotM;