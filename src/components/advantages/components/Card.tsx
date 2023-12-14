import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './card.scss';

interface IComponentProps {
    src: string;
    html?: string;
}

const Card: FC<IComponentProps> = ({ src, html }) => {
    const { ref, inView, entry } = useInView({ trackVisibility: true, delay: 100 });

    useEffect(() => {
        if (inView) {
            if (!src.includes('mp4')) {
                return;
            }

            (entry?.target as HTMLVideoElement).play();
        }
    }, [inView]);

    return (
        <div className="advantages-card">
            {src.includes('mp4') ? (
                <video ref={ref} className="img" autoPlay muted loop playsInline src={src} />
            ) : (
                <img className="img" ref={ref} src={src} />
            )}
            {/* eslint-disable-next-line react/no-danger */}
            {html && <div className="info" dangerouslySetInnerHTML={{ __html: html }} />}
        </div>
    );
};

export default Card;
