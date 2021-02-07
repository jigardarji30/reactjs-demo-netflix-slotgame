import React from "react";

const Footer = ()=>{
    const year = new Date().getFullYear();
return (
    <>
    <footer className="keep_footer">
        <p>copyright &copyright {year} </p>
    </footer>
    </>
);
    
}

export default Footer;