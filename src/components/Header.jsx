import React, { useState, useEffect } from 'react';
import fundLogo from "../assets/loading_fund_no_background.png";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
} from '@chakra-ui/react';

const Header = () => {

    const [menuClassName, setMenuClassName] = useState(false);

    const mouseEntered = (event) => {
        event.preventDefault();
        setMenuClassName(true);
    }
    
    const mouseOut = (event) => {
        event.preventDefault();
        setMenuClassName(false);
    }

    return (
        <div className={`header sticky`}>
            <div style={{ flexGrow: 1 }} />
            <img src={fundLogo} alt="loading_fund" height={"80px"} width={"80px"} style={{ marginLeft: "7vw" }}/>
            <div style={{ flexGrow: 1 }} />
            <div className={`menuClass`} onMouseEnter={mouseEntered} style={{ display: "flex", flexDirection: "column", width: "7vw", height: "7vh", justifyContent: "space-between" }}>
                {!menuClassName &&
                <>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ padding: "2px", borderLeft: "1px solid red", borderTop: "1px solid red" }}></div>
                    <div style={{ flexGrow: 1 }}></div>
                    <div style={{ padding: "2px", borderRight: "1px solid red", borderTop: "1px solid red" }}></div>
                    </div>
                    <button style={{ padding: "8px", fontSize: "0.9vw" }}>MENU</button>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ padding: "2px", borderLeft: "1px solid red", borderBottom: "1px solid red" }}></div>
                    <div style={{ flexGrow: 1 }}></div>
                    <div style={{ padding: "2px", borderRight: "1px solid red", borderBottom: "1px solid red" }}></div>
                    </div>
                </>
                }
            </div>
            {menuClassName &&
                <div>
                    <Drawer placement={"right"} size={"sm"} isOpen={menuClassName}>
                        <DrawerContent style={{ borderRadius: "4px", color: "black", margin: "24px 24px 0px 0px", width: "30vw", height: "fit-content", backgroundColor: "#fa4c14" }} onMouseLeave={mouseOut}>
                            <DrawerHeader style={{ padding: "16px", display: "flex", justifyContent: "center", alignItems: "center", borderBottom: ".0694444444vw dashed black", margin: "0px 16px" }}>
                            {`MENU`}
                            </DrawerHeader>
                            <DrawerBody>
                            <div style={{ width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                <ul style={{ margin: "0px 16px", width: "100%" }}>
                                
                                <a href="/#home">
                                    <li className="menu_list_item">
                                        <span style={{ fontFamily: "'DotGothic16', serif", paddingRight: "16px" }}>00</span> HOME
                                    </li>
                                </a>

                                <div className="dotted_horizontal_ruler"/>
                                
                                <a href="/#about">
                                    <li className="menu_list_item">
                                        <span style={{ fontFamily: "'DotGothic16', serif", paddingRight: "16px" }}>01</span> ABOUT
                                    </li>    
                                </a>

                                <div className="dotted_horizontal_ruler"/>
                                
                                <a href="/#research">
                                    <li className="menu_list_item">
                                        <span style={{ fontFamily: "'DotGothic16', serif", paddingRight: "16px" }}>02</span> RESEARCH
                                    </li>
                                </a>

                                <div className="dotted_horizontal_ruler"/>
                                
                                <a href="/#team">
                                    <li className="menu_list_item">
                                        <span style={{ fontFamily: "'DotGothic16', serif", paddingRight: "16px" }}>03</span> TEAM
                                    </li>
                                </a>
                                
                                <div className="dotted_horizontal_ruler"/>
                                
                                <a href="/#portfolio">
                                    <li className="menu_list_item">
                                        <span style={{ fontFamily: "'DotGothic16', serif", paddingRight: "16px" }}>04</span> PORTFOLIO
                                    </li>
                                </a>
                                
                                <div className="dotted_horizontal_ruler"/>
                                
                                <a href="/#careers">
                                    <li className="menu_list_item">
                                        <span style={{ fontFamily: "'DotGothic16', serif", paddingRight: "16px" }}>05</span> CAREERS
                                    </li>
                                </a>

                                <div className="dotted_horizontal_ruler"/>
                                <li>
                                    <ul style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "8px 0px", textAlign: "center" }}>
                                    <li className="terms_list">
                                        <a href="/contact">
                                            CONTACT        
                                        </a>
                                    </li>
                                    <div className="dotted_vertical_ruler"/>
                                    <li className="terms_list">
                                        <a href="/legal/terms">
                                            TERMS
                                        </a>
                                    </li>
                                    <div className="dotted_vertical_ruler"/>
                                    <li className="terms_list">
                                        <a href="/legal/disclosures">
                                            DISCLOSURES
                                        </a>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", borderRadius: "4px", margin: "8px 0px", paddingBottom: "12px" }}>
                                        <button className="redClass" onClick={() => {}}/>
                                        <button className="pinkClass" onClick={() => {}}/>
                                        <button className="blueClass" onClick={() => {}}/>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </div>
            }
        </div>
    );
  };
  
  export default Header;
  