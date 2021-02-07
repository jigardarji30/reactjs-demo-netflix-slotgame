import React from "react";
import Card from "./Card";
import googleData from "./googleData";

const AppGoogle = () => {
    return (
        <div style={{ display: 'block', clear: 'both' }}>
            <h1 className="heading_style">List of Google Product</h1>


            {googleData.map((val) => {
                return (
                    <Card
                        key={val.id}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        sname={val.sname}
                        link={val.link} />

                );
            })}
        </div>
    )
}

export default AppGoogle;