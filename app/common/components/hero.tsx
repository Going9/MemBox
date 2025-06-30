interface HeroProps {
    title: string;
    description: string;
}

export default function Hero({ title, description }: HeroProps) {
    return (
        <div className="flex flex-col py-15 justify-center items-center rounded-md bg-gradient-to-t from-background to-primary/10">
            <h1 className="text-5xl font-bold py-3">{title}</h1>
            <p className="text-2xl font-light text-foreground">{description}</p>
        </div>
    );
} 