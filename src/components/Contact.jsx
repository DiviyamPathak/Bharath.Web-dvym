import React from 'react'
import styles from "../style";
import { logo } from "../assets";
import { robot } from "../assets";
import { bill } from "../assets";
import {Footer} from "../components";

const Contact = () => {
    return (
        <div className={`${styles.flexCenter}  ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow bg-primary w-full overflow-hidden`}>
            <div>
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
                                Get in <br className="sm:block hidden" />{" "}
                                <span className="text-gradient">Touch with us</span>{" "}
                            </h1>
                            <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
                        </div>
                        <div className="flex-[1.5] w-full flex flex-row justify-between md:mt-0 mt-10">

                            <div className={`flex flex-col ss:my-0 my-2 min-w-[150px]`}>
                                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                    Mail us
                                </h4>
                                <ul className="list-none mt-2 mb-4">

                                    <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                                    bharathbabuks99@yahoo.co.in
                                    </li>
                                </ul>
                                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                    WhatsApp
                                </h4>
                                <ul className="list-none mt-4 mb-4">

                                    <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                                    +91 9845253700
                                    </li>
                                </ul>

                            </div>


                        </div>
                    </div>

                    <div className="w-full flow-root items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                        <p className="font-poppins float-left font-normal text-center text-[25px] leading-[27px] text-white">
                            Location 
                        </p>
                        <p className="font-poppins float-right font-normal text-center text-[25px] leading-[27px] text-white">
                        Bharath Enterprises 1231 near railway station, Doddaballpur,Karnatka-561203
                        </p>

                        <div className="flex  md:mt-0 mt-6">
                            

                        </div>
                    </div>
                </section>
                <div className='flex justify-center'>
                    <img src={robot} alt="billing" className=" w-[50%] h-[25%] relative z-[5]" />
                </div>
                <Footer />
            </div >
            
        </div>
        
    )
}

export default Contact
