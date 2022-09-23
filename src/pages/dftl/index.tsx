import { BsFillBookmarksFill, BsStack } from "react-icons/bs";
import { FaUsers, FaRecycle, FaCoins } from "react-icons/fa";
import Concepts from "./components/concepts";
import { concepts } from "./components/mocks/concept";
import { ScrollElement } from "../../components/ScrollEvent";
import TabGroup from "../../components/TabGroup";

export default function DFTL() {
    return (
        <div className="dftl">
            {/* Begin Intro */}
            <ScrollElement to="dftl_intro">
                <div className="intro">
                    <div className="back__effect">
                        <div data-aos="zoom-in" data-aos-once="true">
                            <h1>NO HOLDER LEFT BEHIND</h1>
                            <h4>
                            At the heart of the Our EcoSystem, a portion of every transaction supports around the world through our partnerships with nonprofit organizations such as Convoy of Hope and Xtreme Couture GI Foundation.
                            </h4>
                            <button>Our Version</button>
                        </div>
                    </div>
                </div>
            </ScrollElement>

            {/* Begin Concept */}
            <ScrollElement to="dftl_concept">
                <div style={{margin:'20px'}}>
                    <div className="concept">
                        <div className="spacer-double"></div>
                        <span data-aos="zoom-in" data-aos-once="true">
                            <h2>2022 ROADMAP</h2>
                        </span>
                        <div className="spacer-triple"></div>
                        <div
                            className="row j-center"
                            data-aos="fade-down"
                            data-aos-delay="300"
                            data-aos-once="true"
                        >
                            {concepts.map((item: any, index: number) => (
                                <div className="col-sm-3" key={index}>
                                    <Concepts
                                        title={item.title}
                                        content={item.content}
                                    />
                                    <div className="spacer-double"></div>
                                </div>
                            ))}
                        </div>
                        <div className="spacer-triple"></div>
                    </div>
                </div>
            </ScrollElement>

            {/* Begin Ecosystem */}
            {/* <ScrollElement to="ecosystem">
                <div className="ecosystem">
                    <div className="container">
                        <div className="spacer-double"></div>
                        <span data-aos="zoom-in" data-aos-once="true">
                            <h2>Token Ecosystem</h2>
                        </span>
                        <div className="spacer-double"></div>
                        <img
                            src={require("../../assets/images/ecosystem.webp")}
                            alt=""
                            data-aos="zoom-out-up"
                            data-aos-delay="500"
                            data-aos-once="true"
                        />
                        <div className="spacer-triple"></div>
                    </div>
                </div>
            </ScrollElement> */}

            {/* <ScrollElement to="stake">
                <div className="stake">
                    <div className="container">
                        <div
                            className="row"
                            data-aos="zoom-in-down"
                            data-aos-delay="700"
                            data-aos-once="true"
                        >
                            <div className="col-sm-3">
                                <TabGroup
                                    title={"Q1"}
                                    content={"0.1$"}
                                    contentIcon={BsFillBookmarksFill}
                                    classname={"tabgroup__item__container"}
                                />
                            </div>
                            <div className="col-sm-3">
                                <TabGroup
                                    title={"Q2"}
                                    content={"10M"}
                                    contentIcon={FaRecycle}
                                    classname={
                                        "tabgroup__item__container__reverse"
                                    }
                                />
                            </div>
                            <div className="col-sm-3">
                                <TabGroup
                                    title={"Q2"}
                                    content={"10k"}
                                    contentIcon={FaUsers}
                                    classname={"tabgroup__item__container"}
                                />
                            </div>
                            <div className="col-sm-3">
                                <TabGroup
                                    title={"Q2"}
                                    content={"10k"}
                                    contentIcon={FaUsers}
                                    classname={"tabgroup__item__container"}
                                />
                            </div>
                        </div>
                        <div className="spacer-double"></div>
                        <div className="row m0 j-center j-middle">
                            <div
                                className="col-sm-6"
                                data-aos="fade-right"
                                data-aos-delay="700"
                                data-aos-once="true"
                            >
                                <div className="staking__content">
                                    <span>
                                        <h2>Staking DFTL</h2>
                                    </span>
                                    <h4>
                                        NIL token holder can stake to tank.
                                        <br />
                                        <br /> Each tank has a staking pool, the
                                        sae of which depends an the tank level.
                                        <br />
                                        <br />
                                        The staking has over 300% apy which
                                        decreases over time and there is a 30%
                                        deposit fee..
                                    </h4>
                                    <div className="spacer-single"></div>
                                    <button>Stake</button>
                                </div>
                                <div className="spacer-single"></div>
                            </div>
                            <div
                                className="col-sm-6"
                                data-aos="fade-left"
                                data-aos-delay="700"
                                data-aos-once="true"
                            >
                                <img
                                    className="apy__diagram"
                                    src={require("../../assets/images/apy.webp")}
                                    alt=""
                                />
                            </div>
                        </div>
                        <span className="light_top"></span>
                        <span className="light_bottom"></span>
                    </div>
                </div>
            </ScrollElement> */}

            <ScrollElement to="stake__metrix">
                <div className="stake__metrix">
                    <div className="container">
                        <span data-aos="zoom-in" data-aos-once="true">
                            <h2>WebSite Info</h2>
                        </span>
                        <div className="spacer-triple"></div>
                        <div
                            className="row"
                            data-aos="zoom-in-down"
                            data-aos-delay="1000"
                            data-aos-once="true"
                        >
                            <div className="col-sm-4">
                                <TabGroup
                                    title={"Info 1"}
                                    content={"10M"}
                                    contentIcon={BsFillBookmarksFill}
                                    classname={"tabgroup__item__container"}
                                />
                            </div>
                            <div className="col-sm-4">
                                <TabGroup
                                    title={"Info 2"}
                                    content={"10k"}
                                    contentIcon={BsStack}
                                    classname={
                                        "tabgroup__item__container__reverse"
                                    }
                                />
                            </div>
                            <div className="col-sm-4">
                                <TabGroup
                                    title={"Info 3"}
                                    content={"140k"}
                                    contentIcon={FaCoins}
                                    classname={"tabgroup__item__container"}
                                />
                            </div>
                        </div>
                        <div className="spacer-double"></div>
                    </div>
                </div>
            </ScrollElement>

            <ScrollElement to="available">
                <div className="available">
                        <div className="spacer-double"></div>
                        <div className="spacer-double"></div>
                </div>
            </ScrollElement>
        </div>
    );
}
