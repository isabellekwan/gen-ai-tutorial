import React from 'react';
import Image from 'next/image';

import clipModel from '@/techincal-tti-images/clip-model.png';
import diffusionModel from '@/techincal-tti-images/diffusion-model.png';
import diffusionTraining from '@/techincal-tti-images/diffusion-training.png';
import diffusionReverse from '@/techincal-tti-images/diffusion-reverse.png';
import unet from '@/techincal-tti-images/unet.png'
import noisePredictor from '@/techincal-tti-images/noise-predictor.png'

const TechnicalTTITutorial: React.FC = () => {
    return (
        <div className="container mx-auto px-4 lg:px-8 py-32">
            <h1 className="text-4xl font-bold mb-8">Technical Text-To-Image Explanation</h1>
            <p className="mb-8">
                Let&apos;s explore text encoding using the CLIP model. When you provide a text prompt, CLIP processes it using a transformer-based architecture. The text is tokenized and passed through multiple layers of transformers to generate a contextualized vector representation. This vector captures the semantic meaning of the text, allowing the model to understand complex descriptions. Simultaneously, images are encoded into vectors in the same latent space as the text. This shared space allows the model to measure the similarity between text and image representations.
            </p>
            <div className="flex justify-center mb-8">
                <Image src={clipModel} alt="CLIP Model Diagram" width={800} height={800} className="mb-8"/> 
            </div>
            
            <p className="mb-8">
                CLIP is a combination of an image encoder and a text encoder. After we have the image and text encoded, the CLIP model will compare the cosine similarity between them. Initially, even if the text describes the image correctly, the similarity might be low. However, through training with a large dataset, the encoder eventually produces similar embeddings for paired images and text descriptions, like &quot;a cat&quot; and &quot;a photo of a cat.&quot;
            </p>
            <div className="flex justify-center mb-8">
                <Image src={diffusionModel} alt="Diffusion Process" width={800} height={800} className="mb-8"/>
            </div>
            <p className="mb-8">
                With the text vector from CLIP, we move to the Diffusion Model for image generation. The process starts with a noisy image, essentially random pixels. The model uses the text vector as a conditional input to guide denoising. Over several steps, the model gradually refines the image, reducing the noise and adding details that align with the text prompt.
            </p>
            <p className="mb-8">
                Training the Diffusion Model involves two key phases: forward and reverse diffusion. In the forward diffusion phase, given x0 ∼ q(x0), then we add Gaussian noise to the sample in T steps, leading to a sequence of noisy samples x1, …, xT according to a variance schedule β1, …, βT.
            </p>
            <div className="flex justify-center mb-8">
                <Image src={diffusionTraining} alt="Diffusion Training" width={800} height={800} className="mb-8"/> 
            </div>
            <p className="mb-8">
                In the reverse diffusion phase, the model learns to start from noise and iteratively denoise it to reconstruct the image.
            </p>
            <div className="flex justify-center mb-8">
                <Image src={diffusionReverse} alt="Diffusion Reverse" width={800} height={800} className="mb-8"/>
            </div>
            <p className="mb-8">
                The UNet is used to denoise images at various stages of the generation process, refining the image step-by-step from random noise to a clear image. The noise predictor is trained with a massive dataset to create images that closely match the text prompt.
            </p>
            <div className="flex justify-center mb-8">
                <Image src={unet} alt="UNet" width={800} height={800} className="mb-8"/>
            </div>
            <p className="mb-8">
                But we still need to add text embedding to the noise predictor UNet so the text input can get involved in the generation. Here, the text embedding will be added to the noise predictor as an additional attention layer.
            </p>
            <div className="flex justify-center mb-8">
                <Image src={noisePredictor} alt="Noise Predictor" width={800} height={800} className="mb-8"/>
            </div>
            <p className="mb-8">
                Now, with the text embedding, the noise predictor will be able to provide guidance based on text conditioning and denoising the noisy image to a clear image that matches the prompt. The whole process is done!
            </p>
            <p>
                If you want to know more information: please check this blog out! Link: 
            </p>
            <a href="https://jalammar.github.io/illustrated-stable-diffusion/" className="text-blue-500">https://jalammar.github.io/illustrated-stable-diffusion/</a>
        </div>
    );
};

export default TechnicalTTITutorial;
