import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { SlArrowDown } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import logo5 from '../Clients-Logo/Worko.jpg';
import verselog from '../Clients-Logo/versmodels.jpg';
import famwork from '../Clients-Logo/famwork.jpg';
import solidating from '../Clients-Logo/solidating.jpg';
import bankiy from '../Clients-Logo/bankiy.jpg';
import hustle from '../Clients-Logo/hustle.jpg';
import behance from '../Clients-Logo/behance.jpg';
import bold from '../Clients-Logo/bold.jpg';
import nake from '../Clients-Logo/nake.jpg';
import pleasure from '../Clients-Logo/pleasure.jpg';
import product from '../Clients-Logo/product.jpg';

function Portfolio() {
    const [isOpenWorko, setIsOpenWorko] = useState(false);
    const [isOpenFamwork, setIsOpenFamwork] = useState(false);
    const [isOpenSolidating, setIsOpenSolidating] = useState(false);
    const [isOpenBankiy, setIsOpenBankiy] = useState(false);
    const [isOpenHustle, setIsOpenHustle] = useState(false);
    const [isOpenBehance, setIsOpenBehance] = useState(false);
    const [isOpenBold, setIsOpenBold] = useState(false);
    const [isOpenNake, setIsOpenNake] = useState(false);
    const [isOpenPleasure, setIsOpenPleasure] = useState(false);
    const [isOpenProduct, setIsOpenProduct] = useState(false);
    const [isOpenVersmodels, setIsOpenVersmodels] = useState(false);

    const openModalWorko = () => {
        setIsOpenWorko(true);
    };

    const openModalFamwork = () => {
        setIsOpenFamwork(true);
    };
    const openModalSolidating = () => {
        setIsOpenSolidating(true);
    };

    const openModalBankiy = () => {
        setIsOpenBankiy(true);
    };

    const openModalHustle = () => {
        setIsOpenHustle(true);
    };

    const openModalBehance = () => {
        setIsOpenBehance(true);
    };

    const openModalBold = () => {
        setIsOpenBold(true);
    };

    const openModalNake = () => {
        setIsOpenNake(true);
    };

    const openModalPleasure = () => {
        setIsOpenPleasure(true);
    };

    const openModalProduct = () => {
        setIsOpenProduct(true);
    };

    const openModalVersmodels = () => {
        setIsOpenVersmodels(true);
    };

    const closeModal = () => {
        setIsOpenWorko(false);
        setIsOpenFamwork(false);
        setIsOpenSolidating(false);
        setIsOpenBankiy(false);
        setIsOpenHustle(false);
        setIsOpenBehance(false);
        setIsOpenBold(false);
        setIsOpenNake(false);
        setIsOpenPleasure(false);
        setIsOpenProduct(false);
        setIsOpenVersmodels(false);
    };

    return (

        <div className="divide-dashed mb-8 px-40px" id='portfolio'>
            <div
                className=" mx-8 mt-8 md:top-10  border-b border-dashed border-gray-200 z-10">

            </div>
            <div
                className="flex flex-col justify-between md:flex-row ml-8">

                <p
                    style={{
                        lineHeight: "4.5rem",
                        padding: "36px 0px",
                        color: "red",
                        fontFamily: "'DotGothic16', serif"
                    }}
                    className="  text-7xl md:text-8xl lg:text-9xl text-left lg:text-center " >
                    04
                </p>

                <h1
                    className="text-white text-6xl  mt-4 lg:text-7xl xl:text-8xl mr-auto md:ml-16 
                    lg:ml-32 font-black">
                    PORTFOLIO
                    <sup>##</sup>
                </h1>

                {/* <h1
                    className="text-7xl md:text-8xl lg:text-9xl  font-bold 
                    z-10 relative text-left lg:text-center mb-8 block lg:pl-20">
                    PORTFOLIO
                </h1> */}

                <div
                    className=" w-0 h-0 md:w-20 md:h-20 xl:w-24 xl:h-24 ">
                    <svg
                        className="mr-8 mt-8"
                        viewBox="0 0 62 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M61 1v60H1V1h60Z"
                            stroke="red"
                            strokeMiterlimit="10"
                        ></path>
                        <path
                            d="M43.3 38H23.8V18.5"
                            stroke="red"
                            strokeMiterlimit="10"
                        ></path>
                        <path d="M23.9 38 60.6 1.3" stroke="red"></path>
                    </svg>
                </div>
            </div>

            <div
                className='flex justify-center md:justify-end'>
                <div
                    className="w-full md:w-3/4 mx-8  mt-8 md:top-10  border-b border-dashed 
                    border-white-10 z-10">

                </div>

            </div>
            <section
                className="text-wrap  flex md:flex-row flex-col items-start  mt-24 mb-24">
                <div className="flex basis-1/4">
                </div>
                <div
                    className=" flex basis-full md:basis-2/4 text-xl sm:text-2xl md:text-3xl 
                    text-white ml-8 md:ml-16 lg:ml-0 w-full lg:w-3/5 md:leading-10 text-balance">
                    FROM PROTOCOLS TO EXCHANGES TO APPS AND BEYOND, WE BACK TEAMS BUILDING GENERATIONAL
                    COMPANIES AND PRODUCTS IN CRYPTO ACROSS SECTORS AND STAGES.
                </div>

                <div
                    className=" flex basis-1/4 flex-col text-md w-full md:w-4/5 text-white 
                    md:pl-10 text-left text-wrap pt-14 md:pt-0 mx-8 pr-8">
                    <span
                        className="bg-gray-300 border-white border w-min text-black 
                        p-2 text-[14px] mb-8 md:mb-4">
                        ETHOS
                    </span>
                    WE SUPPORT TEAMS TACKLING BIG, WICKED PROBLEMS AND PUSHING THE BOUNDARIES OF THE INDUSTRY. WORKING
                    ON SOMETHING WEIRD? WE LOVE THE WEIRD STUFF.
                </div>
            </section>


            <div
                className="mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8  ">
                <div
                    className="flex place-content-between border-t-2 border-dashed 
                    border-[#fa4c14] py-4 hover:text-[#fa4c14]">
                    WORKO
                    <div>
                        <button
                            type="button"
                            onClick={openModalWorko}
                            className="w-min text-white">
                            <SlArrowDown />
                        </button>
                        <Transition appear show={isOpenWorko} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div
                                        className="flex min-h-full items-center justify-center 
                                        p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel
                                                className="w-full max-w-md transform overflow-hidden 
                                                border border-white drop-shadow-[0_0px_25px_rgba(255,0,0,0.5)] 
                                                bg-black p-6 text-left align-middle transition-all">
                                                <button
                                                    type="button"
                                                    className="px-2 py-2 border border-[#fa4c14] text-white uppercase"
                                                    onClick={closeModal}
                                                >
                                                    <RxCross1 />
                                                </button>
                                                <div className="grid place-items-center mt-8">
                                                    <img
                                                        className="rounded-lg h-20 w-20 filter grayscale 
                                                        drop-shadow-md lg:mr-0"
                                                        src={logo5}
                                                        alt="Client Logo5" />
                                                </div>
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-[#fa4c14] text-lg grid place-items-center my-4"
                                                >
                                                    WORKO
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="uppercase text-white text-center">
                                                        From zero to one, innovating and streamlining product development
                                                        for startups worldwide. Let us help you bring your vision to life.
                                                        We’re an early-stage startup looking for talented and passionate
                                                        people to join our team.
                                                    </p>
                                                </div>
                                                <div className=" grid place-items-center mt-4">
                                                    <button
                                                        type="button"
                                                        className=" px-2 border border-[#fa4c14] hover:bg-[#fa4c14]
                                                        hover:text-black text-white uppercase mt-24"
                                                        onClick={() => {
                                                            window.open('https://www.linkedin.com/company/worko-team/', '_blank');
                                                        }}>
                                                        Visit Website
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
                <div
                    className="flex place-content-between border-t-2 border-dashed border-[#fa4c14] py-4 hover:text-[#fa4c14]"> FAMWORK
                    <div className=" ">
                        <button
                            type="button"
                            onClick={openModalFamwork}
                            className="  w-min text-white      "
                        >
                            <SlArrowDown />
                        </button>
                        <Transition appear show={isOpenFamwork} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden border border-white drop-shadow-[0_0px_25px_rgba(255,0,0,0.5)] bg-black p-6 text-left 
                                            align-middle transition-all">
                                                <button
                                                    type="button"
                                                    className="px-2 py-2 border border-[#fa4c14] text-white uppercase"
                                                    onClick={closeModal}
                                                >
                                                    <RxCross1 />
                                                </button>
                                                <div className="grid place-items-center mt-8">
                                                    <img className="rounded-lg h-20 w-20 filter grayscale drop-shadow-md lg:mr-0" src={famwork} alt="Client Logo5" />
                                                </div>                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-[#fa4c14] text-lg grid place-items-center my-4"
                                                >
                                                    FAMWORK
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="uppercase text-white text-center">
                                                        Bringing an innovative Healthcare Solution to the Global
                                                        Market using Cloud Computing integrated with AI and Machine
                                                        Learning Technology at affordable prices.
                                                    </p>
                                                </div>

                                                <div className=" grid place-items-center mt-4">

                                                    <button
                                                        type="button"
                                                        className=" px-2 border border-[#fa4c14] hover:bg-[#fa4c14] hover:text-black text-white uppercase mt-24"
                                                        onClick={() => {
                                                            window.open('https://www.linkedin.com/company/famwork-inc/about/', '_blank');// Replace with your desired website URL
                                                        }}
                                                    >
                                                        Visit Website
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>


                <div
                    className="flex place-content-between border-t-2 border-dashed border-[#fa4c14] py-4 hover:text-[#fa4c14]"> SOLIDATING
                    <div className=" ">
                        <button
                            type="button"
                            onClick={openModalSolidating}
                            className="  w-min text-white      "
                        >
                            <SlArrowDown />
                        </button>
                        <Transition appear show={isOpenSolidating} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden border border-white drop-shadow-[0_0px_25px_rgba(255,0,0,0.5)] bg-black p-6 text-left 
                                            align-middle transition-all">
                                                <button
                                                    type="button"
                                                    className="px-2 py-2 border border-[#fa4c14] text-white uppercase"
                                                    onClick={closeModal}
                                                >
                                                    <RxCross1 />
                                                </button>
                                                <div className="grid place-items-center mt-8">
                                                    <img className="rounded-lg h-20 w-20 filter grayscale drop-shadow-md lg:mr-0" src={solidating} alt="Client Logo5" />
                                                </div>                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-[#fa4c14] text-lg grid place-items-center my-4"
                                                >
                                                    SOLIDATING
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="uppercase text-white text-center">
                                                        Solidating allows you to conveniently meet and connect with like-minded people. Mobile/Web Based Dating app to give a good experience for our users. Stealth Mode is at the moment preparing to launch our first product.
                                                    </p>
                                                </div>

                                                <div className=" grid place-items-center mt-4">

                                                    <button
                                                        type="button"
                                                        className=" px-2 border border-[#fa4c14] hover:bg-[#fa4c14] hover:text-black text-white uppercase mt-24"
                                                        onClick={() => {
                                                            window.open('https://www.linkedin.com/company/solidating/about/', '_blank');// Replace with your desired website URL
                                                        }}
                                                    >
                                                        Visit Website
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
                <div
                    className="flex place-content-between border-t-2 border-dashed border-[#fa4c14] py-4 hover:text-[#fa4c14]"> BANKIY
                    <div className=" ">
                        <button
                            type="button"
                            onClick={openModalBankiy}
                            className="  w-min text-white      "
                        >
                            <SlArrowDown />
                        </button>
                        <Transition appear show={isOpenBankiy} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden border border-white drop-shadow-[0_0px_25px_rgba(255,0,0,0.5)] bg-black p-6 text-left 
                                            align-middle transition-all">
                                                <button
                                                    type="button"
                                                    className="px-2 py-2 border border-[#fa4c14] text-white uppercase"
                                                    onClick={closeModal}
                                                >
                                                    <RxCross1 />
                                                </button>
                                                <div className="grid place-items-center mt-8">
                                                    <img className="rounded-lg h-20 w-20 filter grayscale drop-shadow-md lg:mr-0" src={bankiy} alt="Client Logo5" />
                                                </div>                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-[#fa4c14] text-lg grid place-items-center my-4"
                                                >
                                                    BANKIY
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="uppercase text-white text-center">
                                                        Bankiy is a fintech startup. We offer the most intelligent consumer credit card, whose approval is not based on a credit score.
                                                    </p>
                                                </div>

                                                <div className=" grid place-items-center mt-4">

                                                    <button
                                                        type="button"
                                                        className=" px-2 border border-[#fa4c14] hover:bg-[#fa4c14] hover:text-black text-white uppercase mt-24"
                                                        onClick={() => {
                                                            window.open('https://www.linkedin.com/company/bankiy/about/', '_blank');// Replace with your desired website URL
                                                        }}
                                                    >
                                                        Visit Website
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
                <div
                    className="flex place-content-between border-t-2 border-dashed border-[#fa4c14] py-4 hover:text-[#fa4c14]"> HUSTL3
                    <div className=" ">
                        <button
                            type="button"
                            onClick={openModalHustle}
                            className="  w-min text-white      "
                        >
                            <SlArrowDown />
                        </button>
                        <Transition appear show={isOpenHustle} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden border border-white drop-shadow-[0_0px_25px_rgba(255,0,0,0.5)] bg-black p-6 text-left 
                                            align-middle transition-all">
                                                <button
                                                    type="button"
                                                    className="px-2 py-2 border border-[#fa4c14] text-white uppercase"
                                                    onClick={closeModal}
                                                >
                                                    <RxCross1 />
                                                </button>
                                                <div className="grid place-items-center mt-8">
                                                    <img className="rounded-lg h-20 w-20 filter grayscale drop-shadow-md lg:mr-0" src={hustle} alt="Client Logo5" />
                                                </div>                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-[#fa4c14] text-lg grid place-items-center my-4"
                                                >
                                                    HUSTL3
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="uppercase text-white text-center">
                                                        HUSTLE crafts authentic brand experiences that align with consumer values. Their services encompass design, strategy, and integrated campaigns, fostering positive cultural impact.
                                                    </p>
                                                </div>

                                                <div className=" grid place-items-center mt-4">

                                                    <button
                                                        type="button"
                                                        className=" px-2 border border-[#fa4c14] hover:bg-[#fa4c14] hover:text-black text-white uppercase mt-24"
                                                        onClick={() => {
                                                            window.open('https://www.linkedin.com/company/hustl3/about/', '_blank');// Replace with your desired website URL
                                                        }}
                                                    >
                                                        Visit Website
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
                <div
                    className="flex place-content-between border-t-2 border-dashed border-[#fa4c14] py-4 hover:text-[#fa4c14]"> BEHANCE
                    <div className=" ">
                        <button
                            type="button"
                            onClick={openModalBehance}
                            className="  w-min text-white      "
                        >
                            <SlArrowDown />
                        </button>
                        <Transition appear show={isOpenBehance} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden border border-white drop-shadow-[0_0px_25px_rgba(255,0,0,0.5)] bg-black p-6 text-left 
                                            align-middle transition-all">
                                                <button
                                                    type="button"
                                                    className="px-2 py-2 border border-[#fa4c14] text-white uppercase"
                                                    onClick={closeModal}
                                                >
                                                    <RxCross1 />
                                                </button>
                                                <div className="grid place-items-center mt-8">
                                                    <img className="rounded-lg h-20 w-20 filter grayscale drop-shadow-md lg:mr-0" src={behance} alt="Client Logo5" />
                                                </div>                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-[#fa4c14] text-lg grid place-items-center my-4"
                                                >
                                                    BEHANCE
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="uppercase text-white text-center">
                                                        As a unique product team within Adobe, we're crafting the future of creative workflow. Our talented team of designers and developers work hand-in-hand, leveraging the latest technologies and design thinking to create revolutionary products that connect and empower the creative world. </p>
                                                </div>

                                                <div className=" grid place-items-center mt-4">

                                                    <button
                                                        type="button"
                                                        className=" px-2 border border-[#fa4c14] hover:bg-[#fa4c14] hover:text-black text-white uppercase mt-24"
                                                        onClick={() => {
                                                            window.open('https://www.linkedin.com/company/behance-inc-/about/', '_blank');// Replace with your desired website URL
                                                        }}
                                                    >
                                                        Visit Website
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
                <div
                    className="flex place-content-between border-t-2 border-dashed border-[#fa4c14] py-4 hover:text-[#fa4c14]"> BOLD
                    <div className=" ">
                        <button
                            type="button"
                            onClick={openModalBold}
                            className="  w-min text-white      "
                        >
                            <SlArrowDown />
                        </button>
                        <Transition appear show={isOpenBold} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden border border-white drop-shadow-[0_0px_25px_rgba(255,0,0,0.5)] bg-black p-6 text-left 
                                            align-middle transition-all">
                                                <button
                                                    type="button"
                                                    className="px-2 py-2 border border-[#fa4c14] text-white uppercase"
                                                    onClick={closeModal}
                                                >
                                                    <RxCross1 />
                                                </button>
                                                <div className="grid place-items-center mt-8">
                                                    <img className="rounded-lg h-20 w-20 filter grayscale drop-shadow-md lg:mr-0" src={bold} alt="Client Logo5" />
                                                </div>                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-[#fa4c14] text-lg grid place-items-center my-4"
                                                >
                                                    BOLD
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="uppercase text-white text-center">
                                                        Our fresh, irreverent take on fashion, beauty, and pop culture is both aspirational and approachable, inviting readers to nurture not only personal style but as well as the success that comes with personal power.                                                    </p>
                                                </div>

                                                <div className=" grid place-items-center mt-4">

                                                    <button
                                                        type="button"
                                                        className=" px-2 border border-[#fa4c14] hover:bg-[#fa4c14] hover:text-black text-white uppercase mt-24"
                                                        onClick={() => {
                                                            window.open('https://www.linkedin.com/company/bold-official/', '_blank');// Replace with your desired website URL
                                                        }}
                                                    >
                                                        Visit Website
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
                <div
                    className="flex place-content-between border-t-2 border-dashed border-[#fa4c14] py-4 hover:text-[#fa4c14]"> NAKE
                    <div className=" ">
                        <button
                            type="button"
                            onClick={openModalNake}
                            className="  w-min text-white      "
                        >
                            <SlArrowDown />
                        </button>
                        <Transition appear show={isOpenNake} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden border border-white drop-shadow-[0_0px_25px_rgba(255,0,0,0.5)] bg-black p-6 text-left 
                                            align-middle transition-all">
                                                <button
                                                    type="button"
                                                    className="px-2 py-2 border border-[#fa4c14] text-white uppercase"
                                                    onClick={closeModal}
                                                >
                                                    <RxCross1 />
                                                </button>
                                                <div className="grid place-items-center mt-8">
                                                    <img className="rounded-lg h-20 w-20 filter grayscale drop-shadow-md lg:mr-0" src={nake} alt="Client Logo5" />
                                                </div>                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-[#fa4c14] text-lg grid place-items-center my-4"
                                                >
                                                    NAKE
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="uppercase text-white text-center">
                                                        Elevate your standards with our underwear made from certified organic cotton, skipping insecticides and petroleum-based materials. Experience comfort and breathability for you and your feminine essentials.
                                                    </p>
                                                </div>

                                                <div className=" grid place-items-center mt-4">

                                                    <button
                                                        type="button"
                                                        className=" px-2 border border-[#fa4c14] hover:bg-[#fa4c14] hover:text-black text-white uppercase mt-24"
                                                        onClick={() => {
                                                            window.open('https://www.linkedin.com/company/bethestyle/about/', '_blank');// Replace with your desired website URL
                                                        }}
                                                    >
                                                        Visit Website
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
                <div
                    className="flex place-content-between border-t-2 border-dashed border-[#fa4c14] py-4 hover:text-[#fa4c14]"> PLEASURE
                    <div className=" ">
                        <button
                            type="button"
                            onClick={openModalPleasure}
                            className="  w-min text-white      "
                        >
                            <SlArrowDown />
                        </button>
                        <Transition appear show={isOpenPleasure} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden border border-white drop-shadow-[0_0px_25px_rgba(255,0,0,0.5)] bg-black p-6 text-left 
                                            align-middle transition-all">
                                                <button
                                                    type="button"
                                                    className="px-2 py-2 border border-[#fa4c14] text-white uppercase"
                                                    onClick={closeModal}
                                                >
                                                    <RxCross1 />
                                                </button>
                                                <div className="grid place-items-center mt-8">
                                                    <img className="rounded-lg h-20 w-20 filter grayscale drop-shadow-md lg:mr-0" src={pleasure} alt="Client Logo5" />
                                                </div>                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-[#fa4c14] text-lg grid place-items-center my-4"
                                                >
                                                    PLEASURE
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="uppercase text-white text-center">

                                                        Prioritize sexual health with Pleasure, the ultimate sex app for women and folx. Empower vulva owners for healthy, confident, and pleasurable experiences, addressing physical, psychological, and social factors.
                                                    </p>
                                                </div>

                                                <div className=" grid place-items-center mt-4">

                                                    <button
                                                        type="button"
                                                        className=" px-2 border border-[#fa4c14] hover:bg-[#fa4c14] hover:text-black text-white uppercase mt-24"
                                                        onClick={() => {
                                                            window.open('https://www.linkedin.com/company/pleasure-me/about/', '_blank');// Replace with your desired website URL
                                                        }}
                                                    >
                                                        Visit Website
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
                <div
                    className="flex place-content-between border-t-2 border-dashed border-[#fa4c14] py-4 hover:text-[#fa4c14]"> PRODUCT
                    <div className=" ">
                        <button
                            type="button"
                            onClick={openModalProduct}
                            className="  w-min text-white      "
                        >
                            <SlArrowDown />
                        </button>
                        <Transition appear show={isOpenProduct} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden border border-white drop-shadow-[0_0px_25px_rgba(255,0,0,0.5)] bg-black p-6 text-left 
                                            align-middle transition-all">
                                                <button
                                                    type="button"
                                                    className="px-2 py-2 border border-[#fa4c14] text-white uppercase"
                                                    onClick={closeModal}
                                                >
                                                    <RxCross1 />
                                                </button>
                                                <div className="grid place-items-center mt-8">
                                                    <img className="rounded-lg h-20 w-20 filter grayscale drop-shadow-md lg:mr-0" src={product} alt="Client Logo5" />
                                                </div>                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-[#fa4c14] text-lg grid place-items-center my-4"
                                                >
                                                    PRODUCT
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="uppercase text-white text-center">
                                                        Connecting customers with top 1% global product managers. We handle the sourcing, hiring, and training of the world's best product talent, delivering a ready-assembled team from day one.
                                                    </p>
                                                </div>

                                                <div className=" grid place-items-center mt-4">

                                                    <button
                                                        type="button"
                                                        className=" px-2 border border-[#fa4c14] hover:bg-[#fa4c14] hover:text-black text-white uppercase mt-24"
                                                        onClick={() => {
                                                            window.open('https://www.linkedin.com/company/product-basehq/about/', '_blank');// Replace with your desired website URL
                                                        }}
                                                    >
                                                        Visit Website
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
                <div
                    className="flex place-content-between border-t-2 border-dashed border-[#fa4c14] py-4 hover:text-[#fa4c14]"> VERSMODELS
                    <div className=" ">
                        <button
                            type="button"
                            onClick={openModalVersmodels}
                            className="  w-min text-white      "
                        >
                            <SlArrowDown />
                        </button>
                        <Transition appear show={isOpenVersmodels} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden border border-white drop-shadow-[0_0px_25px_rgba(255,0,0,0.5)] bg-black p-6 text-left 
                                            align-middle transition-all">
                                                <button
                                                    type="button"
                                                    className="px-2 py-2 border border-[#fa4c14] text-white uppercase"
                                                    onClick={closeModal}
                                                >
                                                    <RxCross1 />
                                                </button>
                                                <div className="grid place-items-center mt-8">
                                                    <img className="rounded-lg h-20 w-20 filter grayscale drop-shadow-md lg:mr-0" src={verselog} alt="Client Logo5" />
                                                </div>                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-[#fa4c14] text-lg grid place-items-center my-4"
                                                >
                                                    VERSMODELS
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="uppercase text-white text-center">
                                                        We proudly serve as a premier modeling agency, specializing in scouting fresh
                                                        and distinctive talent for leading magazines and fashion brands. Our passion lies
                                                        in fostering diversity, authenticity, and innovation within the fashion world.
                                                    </p>
                                                </div>

                                                <div className=" grid place-items-center mt-4">

                                                    <button
                                                        type="button"
                                                        className=" px-2 border border-[#fa4c14] hover:bg-[#fa4c14] hover:text-black text-white uppercase mt-24"
                                                        onClick={() => {
                                                            window.open('https://www.linkedin.com/company/versmodels/about/', '_blank');// Replace with your desired website URL
                                                        }}
                                                    >
                                                        Visit Website
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
                {/* <div
                    className="border-t-2 border-dashed border-[#fa4c14] py-4">FAMWORK</div> */}
                {/* <div
                    className="border-t-2 border-dashed border-[#fa4c14] py-4">SOLIDATING</div>
                <div
                    className="border-t-2 border-dashed border-[#fa4c14] py-4">BANKIY</div>
                <div
                    className="border-t-2 border-dashed border-[#fa4c14] py-4">HUSTLE</div>
                <div
                    className="border-t-2 border-dashed border-[#fa4c14] py-4">BEHANCE</div>
                <div
                    className="border-t-2 border-dashed border-[#fa4c14] py-4">BOLD</div>
                <div
                    className="border-t-2 border-dashed border-[#fa4c14] py-4">NAKE</div>
                <div
                    className=" border-t-2 border-dashed border-[#fa4c14] py-4">PLEASURE</div>
                <div
                    className=" border-t-2 border-dashed border-[#fa4c14] py-4">PRODUCT</div>
                <div
                    className=" border-t-2 border-dashed border-[#fa4c14] py-4">VERSMODELS</div> */}
                <div
                    className=" border-t-2 border-dashed border-[#fa4c14] py-4"></div>
                <div
                    className=" md:border-t-2 border-dashed border-[#fa4c14] py-4"></div>
                <div
                    className=" lg:border-t-2 border-dashed border-[#fa4c14] py-4"></div>

            </div>



        </div >
    )
}
export default Portfolio