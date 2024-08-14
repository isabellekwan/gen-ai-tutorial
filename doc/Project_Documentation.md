# Project Documentation for AI-Gen-Image-Tutorial

## Overview

Welcome to the AI-Gen-Image-Tutorial project! This document aims to provide a detailed overview of the project structure, components, and how to work seamlessly within the codebase. This will help you understand how the project is organized and how to effectively contribute to it.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Pages](#pages)
3. [Components](#components)
    - [Hooks](#hooks)
    - [Survey](#survey)
    - [Tutorial](#tutorial)
    - [UI](#ui)
4. [Data](#data)
5. [Images](#images)
6. [Lib](#lib)
7. [How to Add New Components](#how-to-add-new-components)
8. [Common Practices](#common-practices)
9. [Running the Project](#running-the-project)

## Project Structure

Here is an overview of the project directory structure:

```
.
├── app
│   ├── app.tsx
│   ├── favicon.ico
│   ├── globals.css
│   └── layout.tsx
├── components
│   ├── hooks
│   │   └── useIntersectionObserver.ts
│   ├── survey
│   │   └── survey.tsx
│   ├── tutorial
│   │   ├── ITI
│   │   │   ├── ITI2.tsx
│   │   │   ├── ITIStructure.tsx
│   │   │   ├── ITIStyle.tsx
│   │   │   └── ITITutorialChat.tsx
│   │   └── TTI
│   │       ├── TTIBox.tsx
│   │       ├── TTIBox2.tsx
│   │       ├── TTIDog.tsx
│   │       ├── TTILiv1.tsx
│   │       ├── TTILiv2.tsx
│   │       ├── TTILiv3.tsx
│   │       ├── TTILiv4.tsx
│   │       ├── TTIMap.tsx
│   │       ├── TTITutorialChat.tsx
│   │       └── TTiBox3.tsx
│   └── ui
│       ├── CarouselDemo.tsx
│       ├── Footer.tsx
│       ├── Navbar.tsx
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       └── separator.tsx
├── data
│   ├── ITIChatMessages.json
│   └── TTIChatMessages.json
├── image-to-image-images
│   ├── StyleImageAnalysis.jpg
│   ├── contentImage.jpg
│   ├── contentImage2.jpg
│   ├── generatedImageMedium.jpg
│   ├── generatedImageMedium2.jpg
│   ├── generatedImageStrong.jpg
│   ├── generatedImageStrong2.jpg
│   ├── generatedImageWeak.jpg
│   ├── generatedImageWeak2.jpg
│   ├── styleImage.jpg
│   └── styleImage2.jpg
├── images
│   ├── Image_to_image.png
│   ├── Logo_Black.svg
│   ├── Logo_Grey.svg
│   ├── dataset_to_image.png
│   ├── human2_icon.png
│   ├── human_icon.png
│   ├── ixlab_logo.svg
│   ├── logo_sketch.png
│   └── text_to_image.png
├── lib
│   └── utils.ts
├── pages
│   ├── _app.tsx
│   ├── index.tsx
│   └── tutorials
│       ├── image-to-image.tsx
│       └── text-to-image.tsx
└── text-to-image-slides
    ├── Dogs
    │   ├── Interaction1.png
    │   ├── Interaction2.png
    │   ├── Jul23_TTI-1 2.png
    │   ├── Jul23_TTI-2 2.png
    │   ├── Jul23_TTI-3 2.png
    │   ├── Jul23_TTI-4 3.png
    │   ├── TTI-1 2.png
    │   ├── TTI-2 2.png
    │   ├── TTI-3.png
    │   ├── TTI-4.png
    │   ├── lying-dog.png
    │   ├── sitting-dog.png
    │   ├── sofa_dog1.png
    │   ├── sofa_dog2.png
    │   ├── sofa_dog3.png
    │   └── standing-dog.png
    ├── Living room image
    │   ├── living room 1
    │   │   ├── Jul23_TTI-1 2.png
    │   │   ├── Jul23_TTI-2 2.png
    │   │   ├── Jul23_TTI-3 2.png
    │   │   ├── Jul23_TTI-4 2.png
    │   │   └── LivingRoom1.png
    │   ├── living room 2
    │   │   ├── Jul23_TTI-1.png
    │   │   ├── Jul23_TTI-2.png
    │   │   ├── Jul23_TTI-3.png
    │   │   ├── Jul23_TTI-4.png
    │   │   └── LivingRoom2.png
    │   ├── living room 3
    │   │   ├── Jul23_TTI-1.png
    │   │   ├── Jul23_TTI-2.png
    │   │   ├── Jul23_TTI-3.png
    │   │   ├── Jul23_TTI-4.png
    │   │   ├── Jul23_TTI-5.png
    │   │   ├── Jul23_TTI-6.png
    │   │   ├── Jul23_TTI-7.png
    │   │   └── LivingRoom3.png
    │   └── living room 4
    │       ├── Jul23_TTI-1 2.png
    │       ├── Jul23_TTI-2 2.png
    │       ├── Jul23_TTI-3 2.png
    │       ├── Jul23_TTI-4 2.png
    │       └── LivingRoom4.png
    ├── TTI - BEFORE TECHNICAL 
    │   ├── TTI-1.png
    │   ├── TTI-2.png
    │   ├── TTI-3.png
    │   ├── TTI-4.png
    │   ├── TTI-5.png
    │   ├── TTI-6.png
    │   └── TTI-7.png
    └── Tech_Details_
        ├── Tech_Details_-1.png
        ├── Tech_Details_-11.png
        ├── Tech_Details_-2.png
        ├── Tech_Details_-3.png
        ├── Tech_Details_-4.png
        ├── Tech_Details_-5.png
        ├── Tech_Details_-6.png
        ├── Tech_Details_-7.png
        ├── Tech_Details_-8.png
        ├── animation backward process_-10.png
        └── animation forward process_-9.png
```
## Tech Stack
- Next.js ver 14
- React
- Tailwind css

## Pages

### `pages/_app.tsx`
This is the main entry point for the Next.js application. It includes global styles and sets up the layout for all pages.

### `pages/index.tsx`
This is the homepage of the application.

### `pages/tutorials`
This directory contains tutorial-specific pages:
- `image-to-image.tsx`: Page for the image-to-image tutorial.
- `text-to-image.tsx`: Page for the text-to-image tutorial.

## Components

### Hooks

#### `useIntersectionObserver.ts`
This custom hook is used to observe intersection changes for lazy-loading images or triggering animations when elements come into view.

### Survey

#### `survey.tsx`
Component for handling user surveys within the application.

### Tutorial

This directory contains components for different tutorials.

#### ITI (Image-to-Image)

- `ITI2.tsx`: Component for the second part of the ITI tutorial.
- `ITIStructure.tsx`: Component for demonstrating structure match in ITI.
- `ITIStyle.tsx`: Component for demonstrating style intensity in ITI.
- `ITITutorialChat.tsx`: Chat component for the ITI tutorial.

#### TTI (Text-to-Image)

- `TTIBox.tsx`, `TTIBox2.tsx`, `TTiBox3.tsx`: Components for different parts of the T

TI tutorial.
- `TTIDog.tsx`: Component for the dog-related example in TTI.
- `TTILiv1.tsx`, `TTILiv2.tsx`, `TTILiv3.tsx`, `TTILiv4.tsx`: Components for living room examples in TTI.
- `TTIMap.tsx`: Component for mapping examples in TTI.
- `TTITutorialChat.tsx`: Chat component for the TTI tutorial.

### UI

Reusable UI components for the application.

- `CarouselDemo.tsx`: Component for demonstrating a carousel.
- `Footer.tsx`: Footer component.
- `Navbar.tsx`: Navigation bar component.
- `breadcrumb.tsx`: Breadcrumb navigation component.
- `button.tsx`: Button component.
- `card.tsx`: Card component.
- `carousel.tsx`: Carousel component.
- `chart.tsx`: Chart component.
- `separator.tsx`: Separator component.

## Data

Contains JSON files with data for tutorials.

- `ITIChatMessages.json`: Chat messages data for ITI tutorial.
- `TTIChatMessages.json`: Chat messages data for TTI tutorial.

## Images

This directory contains images used in the application.

- `image-to-image-images`: Images specific to the image-to-image tutorial.
- `images`: General images used across the application.

## Lib

Contains utility functions.

- `utils.ts`: Utility functions used throughout the application.

## How to Add New Components

1. **Create the Component File**: Add your new component file in the appropriate directory under `components`.

2. **Write the Component**: Implement your component. Follow existing code style and structure for consistency.

3. **Import and Use the Component**: Import your component in the relevant page or parent component and use it.

Example:

```tsx
import MyNewComponent from '@/components/tutorial/MyNewComponent';

const SomePage: React.FC = () => {
    return (
        <div>
            <MyNewComponent />
        </div>
    );
};

export default SomePage;
```

## Common Practices

1. **Consistent Naming**: Use consistent naming conventions for files and variables.
2. **Modularization**: Keep components small and focused. Break down large components into smaller, reusable ones.
3. **Styling**: Use Tailwind CSS for styling and follow the existing style guidelines.
4. **Documentation**: Add comments and documentation within the code to explain the purpose and functionality of components.

## Running the Project

To run the project locally:

1. **Install Dependencies**:

```bash
npm install
```

2. **Run the Development Server**:

```bash
npm run dev
```

3. **Build the Project**:

```bash
npm run build
```

4. **Start the Production Server**:

```bash
npm start
```

## Conclusion

This documentation should help new team members get up to speed with the project structure and how to work within it. If you have any questions or need further assistance, feel free to reach out to the team. Happy coding!
