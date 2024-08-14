import React from 'react';
import Image from 'next/image';

import reconstructions from '@/technical-st-images/reconstructions.png';
import lossFunction from '@/technical-st-images/loss-function.png';
import contentLoss from '@/technical-st-images/content-loss.png';
import styleLoss from '@/technical-st-images/style-loss.png';
import gramMatrix from '@/technical-st-images/gram-matrix.png'

const TechnicalTTITutorial: React.FC = () => {
    return (
        <div className="container mx-auto px-4 lg:px-8 py-32">
            <h1 className="text-4xl font-bold mb-8">Technical Style Transfer Explanation</h1>
            <p className="mb-8">
                Typically, a pre-trained CNN such as VGG19 is used for style transfer tasks. This network has already been trained on a large dataset like ImageNet and is capable of capturing complex features from images.
            </p>
            <div className="flex justify-center mb-8">
                <Image src={reconstructions} alt="Reconstructions" width={800} height={800} className="mb-8"/> 
            </div>
            <p className="font-bold">
                Feature Extraction from Content Image
            </p>
            <p className="mb-8">
                The content image is passed through the CNN to extract its features from a certain layer (usually a deeper layer) of the network. These features represent the high-level content of the image.
            </p>
            <p className="font-bold">
                Feature Extraction from Style Image
            </p>
            <p className="mb-8">
                The style image is also passed through the CNN, but here the features are extracted from multiple layers (usually shallower layers). These layers capture different levels of textures and patterns present in the style image.
            </p>
            <p className="font-bold">
                Loss function
            </p>
            <p className="mb-8">
                The loss function used is a combination of content loss and style loss. The style image a, the content image p, the target image x: 
            </p>
            <div className="flex justify-center mb-8">
                <Image src={lossFunction} alt="Loss Function" width={800} height={800} className="mb-8"/> 
            </div>
            <p className="font-bold">
                Content loss
            </p>
            <p className="mb-8">
                The content loss measures the difference between the content features of the generated image and the content image. The goal is to minimize this loss so that the generated image retains the structure and layout of the content image.
            </p>
            <div className="flex justify-center mb-8">
                <Image src={contentLoss} alt="Content Loss" width={800} height={800} className="mb-8"/>
            </div>
            <p className="font-bold">
                Style loss
            </p>
            <p className="mb-8">
            The style loss measures the difference between the style features (usually captured using Gram matrices) of the generated image and the style image. It is equal to computing the Maximum Mean Discrepancy between the style image and the generated image. The goal is to minimize this loss so that the generated image adopts the textures and patterns of the style image.
            </p>
            <div className="flex justify-center mb-8">
                <Image src={gramMatrix} alt="Gram Matrix" width={800} height={800} className="mb-8"/>
            </div>
            <div className="flex justify-center mb-8">
                <Image src={styleLoss} alt="Style Loss" width={800} height={800} className="mb-8"/>
            </div>
            <p className="font-bold">
                Optimization Process
            </p>
            <p className="mb-8">
                Starting with a random or content image, the generated image is iteratively updated to minimize a weighted sum of the content and style losses. This is typically done using gradient descent. The process continues until the generated image successfully blends the content of the content image with the style of the style image.
            </p>
            
            <p className="mb-8">
                Now, with the text embedding, the noise predictor will be able to provide guidance based on text conditioning and denoising the noisy image to a clear image that matches the prompt. The whole process is done!
            </p>
            <p>
                If you want to know more information: please check this blog out! Link: 
            </p>
            <a href="https://medium.com/@ferlatti.aldo/neural-style-transfer-nst-theory-and-implementation-c26728cf969d" className="text-blue-500">https://medium.com/@ferlatti.aldo/neural-style-transfer-nst-theory-and-implementation-c26728cf969d
</a>
        </div>
    );
};

export default TechnicalTTITutorial;
