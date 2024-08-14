import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import textToImage from '@/images/text_to_image.png';
import styleTransfer from '@/images/style-transfer.png';
import imageToImage from '@/images/image_to_image.png';
// import datasetToImage from '@/images/dataset_to_image.png';
import logoSketch from '@/images/logo_sketch.png';

const images = [
    { src: textToImage, alt: "Text to Image" },
    { src: styleTransfer, alt: "Style Transfer" },
    { src: imageToImage, alt: "Image to Image" },
    //{ src: datasetToImage, alt: "Dataset to Image" },
    { src: logoSketch, alt: "Logo Sketch" },
];

export function CarouselDemo() {
    return (
        <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index} className="relative">
                        <Card className="shadow-lg rounded-lg overflow-hidden">
                            <CardContent className="p-0">
                                <div className="relative w-full h-[500px] flex items-center justify-center">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        layout="fill"
                                        objectFit="contain"
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md">
                <span className="text-xl">&lt;</span>
            </CarouselPrevious>
            <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md">
                <span className="text-xl">&gt;</span>
            </CarouselNext>
        </Carousel>
    );
}
