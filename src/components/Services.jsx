import React from 'react'
import styles from "../style";
import { logo } from "../assets";
import { robot } from "../assets";
import { card } from "../assets";
import {Clients, Business, Footer} from "../components";

const Services = () => {
    return (
        <div className={`${styles.flexCenter}  ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow bg-primary w-full overflow-hidden`}>
            <div>
            <Business />
                <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
                    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                        <div className="flex-[1] flex flex-col justify-start mr-10">
                            <img
                                src={logo}
                                alt="hoobank"
                                className="w-[266px] h-[72.14px] object-contain"
                            />

                        </div>
                        <div className="flex flex-col justify-between items-center w-full ">
                            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80.8px] leading-[55px]">
                                Companies <br className="sm:block hidden" />{" "}
                                <span className="text-gradient">we have worked with.</span>{" "}
                            </h1>
                            <Clients />
                            <img src={card} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
                        </div>
                        <div className="flex-[1.5] w-full flex flex-row justify-between md:mt-0 mt-10">

                            <div className={`flex flex-col ss:my-0 my-2 min-w-[150px]`}>
                                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                    Mail us
                                </h4>
                                <ul className="list-none mt-2 mb-4">

                                    <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                                        abcd@gmil.com
                                    </li>
                                </ul>
                                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                    WhatsApp
                                </h4>
                                <ul className="list-none mt-4 mb-4">

                                    <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                                        +91 69 696 69 69
                                    </li>
                                </ul>

                            </div>


                        </div>
                    </div>

                   
                </section>
                
                <Footer />
            </div >
            
        </div>
        
    )
}

export default Services
