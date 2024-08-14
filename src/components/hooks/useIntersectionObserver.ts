import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback: IntersectionObserverCallback, options?: IntersectionObserverInit) => {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(callback, options);
        observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [callback, options]);

    return ref;
};

export default useIntersectionObserver;
