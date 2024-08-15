"use client";

import React, {useCallback, useEffect} from "react";
import Link from 'next/link';
import useIntersectionObserver from '@/components/hooks/useIntersectionObserver'; // Adjust the import path if necessary
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Image from 'next/image';
import textToImage from '../images/text_to_image.png';
import styleTransfer from '../images/style-transfer.png';
import imageToImage from '../images/Image_to_image.png';
import computerIcon from '../images/computer-icon.png';
import SurveyCharts from '@/components/survey/survey';


const tutorials = [
    {
        title: "Text to Image Tutorial",
        description: "Learn how to generate images from text descriptions.",
        link: "/tutorials/text-to-image",
        bgColor: "bg-antiqueBlass",
        icon: <Image src={textToImage} alt="Text to Image" width={600} height={600} />,
    },
    {
        title: "Style Transfer Tutorial",
        description: "Transform existing images into new styles.",
        link: "/tutorials/style-transfer",
        bgColor: "bg-mistGray",
        icon: <Image src={styleTransfer} alt="Style Transfer" width={600} height={600} />,
    },
    {
        title: "Sketch to Image Tutorial",
        description: "Create new images from sketches.",
        link: "/tutorials/sketch-to-image",
        bgColor: "bg-coralReef",
        icon: <Image src={imageToImage} alt="Sketch to Image" width={800} height={800} />,
    },
];

const Home: React.FC = () => {
    const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            } else {
                entry.target.classList.remove('animate__animated', 'animate__fadeInUp');
            }
        });
    }, []);

    const goalsRef = useIntersectionObserver(handleIntersection);

    useEffect(() => {
        const missionImage = document.getElementById('mission-image');

        if (missionImage) {
            missionImage.classList.add('animate__animated', 'animate__fadeInRight');

            // Remove the initial animation class after it ends and add the pulse animation
            missionImage.addEventListener('animationend', () => {
                missionImage.classList.remove('animate__fadeInRight');
                missionImage.classList.add('animate__pulse', 'animate__infinite');
            });
        }
    }, []);

    return (

        <div className="bg-alabaster min-h-screen">
            <div className="container mx-auto px-4 lg:px-8">
                <section className="flex flex-col lg:flex-row items-start py-32">
                    <div className="w-full flex flex-col lg:flex-row lg:items-center">
                        <div className="w-full lg:w-3/4">
                            <h1 className="text-5xl lg:text-7xl font-bold mt-10 mb-10  ">
                                Our Mission
                            </h1>
                            <p className="max-w-3xl text-left mb-4 text-xl lg:text-2xl animate__animated animate__pulse">
                                At AI-Gen-Image Tutorial, our mission is to demystify the complexities of generative AI
                                tools and make them accessible to everyone. Through our tutorials and
                                resources, we investigate potential shifts in motivation and skepticism, fostering a deeper
                                appreciation and confidence in using generative AI for creative and practical applications.
                            </p>
                        </div>
                        <div id="mission-image" className="w-full lg:w-1/4 lg:ml-8 hidden sm:flex justify-center">
                                <Image
                                    src={computerIcon}
                                    alt="Computer Icon"
                                    width={300}
                                    height={300}
                                    className="object-cover rounded-xl"
                                />
                        </div>
                    </div>
                </section>

                <div className="border-t border-black my-8 animate__animated animate__fadeInLeft"></div>
                <section className="flex flex-col items-center py-32">
                    <div className="w-full flex flex-col lg:flex-row lg:items-start">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-10 lg:mb-0 lg:mr-12 lg:w-1/4">Our Goals</h2>
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-x-16 max-w-full text-left text-xl lg:text-2xl lg:w-3/4">
                            <div>
                                <h3 className="text-3xl lg:text-4xl font-semibold">Education</h3>
                                <p>
                                    We provide clear, detailed tutorials that break down the complexities of generative
                                    AI, making it
                                    approachable and understandable for all users, regardless of their background.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl lg:text-4xl font-semibold">Empowerment</h3>
                                <p>
                                    Our resources equip domain experts with the knowledge and skills to leverage AI
                                    tools in their
                                    respective fields, enhancing creativity and efficiency.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl lg:text-4xl font-semibold">Innovation</h3>
                                <p>
                                    We explore the latest advancements in AI technology and their applications, keeping
                                    our community
                                    informed and ahead of the curve.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl lg:text-4xl font-semibold">Community</h3>
                                <p>
                                    We build a supportive community where knowledge and experiences are shared,
                                    fostering a collaborative
                                    learning environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="border-t border-black my-8 animate__animated animate__fadeInLeft"></div>
                <div className="w-full lg:w-3/4 mt-10 mb-10">
                    <h2 className="text-4xl lg:text-5xl font-bold mt-10 mb-10 animate__animated animate__fadeInLeft">
                        Survey Results
                    </h2>
                    <p className="max-w-3xl text-left mb-4 text-xl lg:text-2xl animate__animated animate__pulse">
                        We conducted a survey to understand the current usage and understanding of generative AI-image
                        tools.
                        The results showed that a significant number of users have never used these tools before, and
                        many do
                        not fully understand how they work. This highlighted the need for comprehensive tutorials to
                        bridge
                        the knowledge gap and empower users to utilize these tools effectively.
                    </p>
                </div>
                <SurveyCharts/> {/* Add this line to include the survey charts */}


                <div className="border-t border-black my-8"></div>
                <section
                    className="flex-grow flex items-center justify-center py-32 mb-10 animate__animated animate__fadeInLeft">
                    <div className="w-full">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 lg:mb-8 lg:mr-12 lg:w-1/4">Tutorials</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {tutorials.map((tutorial) => (
                                <Link href={tutorial.link} key={tutorial.title}>
                                    <Card
                                        className={`${tutorial.bgColor} cursor-pointer transition-transform transform p-6 lg:p-8 rounded-3xl`}>
                                        <CardHeader className="flex items-center">
                            <span
                                className="text-5xl lg:text-6xl mr-4 hover:scale-105 transition-transform duration-500">
                                {tutorial.icon}
                            </span>
                                            <div>
                                                <CardTitle className="text-2xl lg:text-3xl">{tutorial.title}</CardTitle>
                                                <CardDescription className="text-black text-xl lg:text-2xl">
                                                    {tutorial.description}
                                                </CardDescription>
                                            </div>
                                        </CardHeader>
                                        <div className="mt-4">
                                            <Button
                                                className="bg-white bg-opacity-30 text-black border border-transparent  hover:text-white"
                                            >
                                                Start Tutorial
                                            </Button>
                                        </div>

                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
};

export default Home;
