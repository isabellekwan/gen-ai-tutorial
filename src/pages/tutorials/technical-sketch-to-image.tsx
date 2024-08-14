import React from 'react';
import Image from 'next/image';

import sketchGAN from '@/technical-sti-images/sketchGAN.png';
import mru from '@/technical-sti-images/mru.png'

const TechnicalSTITutorial: React.FC = () => {
    return (
        <div className="container mx-auto px-4 lg:px-8 py-32">
            <h1 className="text-4xl font-bold mb-8">Technical Sketch-To-Image Explanation</h1>
            <p className="mb-8">
                Let us take the SketchGAN model as an example. The SketchGAN mode is a novel GAN-based model that generates diverse and realistic images from sketches.
            </p>
            <div className="flex justify-center mb-8">
                <Image src={sketchGAN} alt="SketchGAN Model" width={600} height={600} className="mb-8"/> 
            </div>
            <p className="mb-8">
                The generator takes a sketch and a noise vector as input. The sketch provides the structural outline, while the noise vector introduces variability, allowing for the generation of diverse images. The generator uses an encoder-decoder architecture. The encoder maps the sketch to a latent space, and the decoder reconstructs the image from this latent representation. Skip connections are used to retain high-level features from the input sketch.
            </p>
            <p className="mb-8">
                This generator utilizes Multiscale Residual Units (MRU) blocks, which help in capturing features at multiple scales, ensuring that both fine details and overall structure are preserved. The input to the generator includes a sketch and a noise vector, introducing variability and enabling the generation of multiple plausible images from the same sketch.
            </p>
            <div className="flex justify-center mb-8">
                <Image src={mru} alt="MRU" width={600} height={600} className="mb-8"/> 
            </div>
            <p className="mb-8">
                PatchGAN Discriminator classifies each patch of the image as real or fake. This encourages high-frequency detail in the generated images. The model incorporatesPatchGAN discriminators at multiple scales to ensure local and global realism.
            </p>
            <p className="mb-8">
                To encourage diversity in the generated images, it penalizes the generator if it produces images that are too similar to each other for different noise inputs. The total loss for the generator is a combination of adversarial loss (ensuring the images are indistinguishable from real images), reconstruction loss (ensuring the generated image retains the structure of the input sketch), and diversity regularization (encouraging diverse outputs).
            </p>
            <p className="mb-8">
                During training, the generator and discriminator are updated alternately in an adversarial manner, gradually improving both networks. SketchyGAN demonstrates through qualitative and quantitative evaluations that it can generate high-quality, diverse images from sketches, showing significant improvements over baseline models. The incorporation of MRU blocks and the emphasis on both realism and diversity make SketchyGAN a valuable tool for applications in art, design, and other creative fields.
            </p>
            <p>
                If you want to know more information: please check this blog out! Link: 
            </p>
            <a href="https://arxiv.org/pdf/1801.02753" className="text-blue-500">https://arxiv.org/pdf/1801.02753</a>
        </div>
    );
};

export default TechnicalSTITutorial;
