import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Testimonial = () => {
    return (
        <div className='my-10'>
            <div className="flex items-center justify-between h-full w-full absolute z-0">
                <div className="w-1/3 bg-white h-full" />
                <div className="w-4/6 ml-16 bg-gray-100 h-full" />
            </div>
            <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
                <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4}>
                    <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
                    What Our Buyers And Sellers
                        <br />
                        Saying!!
                    </h1>
                    <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">What Our Buyers and Sellers Saying!!</h1>
                    <Slider>
                        <Slide index={0} tabIndex="null">
                            <div className="flex">
                                <div className="mt-14 md:flex">
                                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                        <img src="https://i.ibb.co/4g1D9cv/imgslider1.png" alt="" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                                        <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                        </div>
                                    </div>
                                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">I was buy acer Laptop!</h1>
                                            <p className="text-base font-medium leading-6 mt-4 text-gray-600">I am very happy after buying this product. the seller was pretty good and laptop also good..</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                <div className="mt-14 md:flex">
                                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                        <img src="https://media.istockphoto.com/id/1351445167/photo/happy-male-youngster-smiling-at-the-camera-outdoors.jpg?b=1&s=170667a&w=0&k=20&c=iebfRFHi1ncG_CNCZLmOSLnRI_TO0D4rACMbarHsADc=" alt="" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                                        <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                        </div>
                                    </div>
                                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">Two days ago i sell my HP laptop!</h1>
                                            <p className="text-base font-medium leading-6 mt-4 text-gray-600">i was very upset when i thought to sell my laptop coz i thought did not get enough price but i was wrong this website i found a buyer who give me great price..!!!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                <div className="mt-14 md:flex">
                                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                        <img src="https://media.istockphoto.com/id/1323167284/photo/young-successful-indian-man-wearing-stylish-eyeglasses-standing-on-the-street-handsome-asian.jpg?b=1&s=170667a&w=0&k=20&c=dAYCdnHkGyMP38WuwncFJT9Zfeegun1tf41Xtzuc0uc=" alt="" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                                        <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                        </div>
                                    </div>
                                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">buying a Dell Laptop</h1>
                                            <p className="text-base font-medium leading-6 mt-4 text-gray-600">Actually i want to buy a laptop but i have not enough money for buy new laptop thats why i decided buying a second hand laptop so this website give me a perfect laptop that i want!!!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                <div className="mt-14 md:flex">
                                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                        <img src="https://images.unsplash.com/photo-1551706872-893907c44a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&w=1000&q=80" alt="" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                                        <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                        </div>
                                    </div>
                                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">I love this website!</h1>
                                            <p className="text-base font-medium leading-6 mt-4 text-gray-600">Last two years i use this website for buying and selling best used laptop i reccomand everyone for collecting their best laptop they want...!!!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </Slider>
                    <div className="flex items-center mt-8">
                        <ButtonBack className="cursor-pointer " role="button" aria-label="previous slide">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg" alt="previous" />
                        </ButtonBack>

                        <ButtonNext role="button" aria-label="next slide" className="cursor-pointer ml-2">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg" alt="next" />
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
};

export default Testimonial;