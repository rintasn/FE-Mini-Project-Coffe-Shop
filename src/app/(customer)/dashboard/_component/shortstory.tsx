import React from "react";
import Image from "next/image";

// Define the props interface for MenuCard
interface MenuCardProps {
    imageSrc: string;
    title: string;
    description: string;
    width: number;
    height: number;
}
  
// MenuCard component with defined prop types
const MenuCard: React.FC<MenuCardProps> = ({
    imageSrc,
    title,
    description,
    width,
    height,
}) => (
    <div className="transition-transform duration-300 transform shadow-xl card bg-base-100 w-96 hover:rotate-3">
        <figure className="overflow-hidden">
            <Image
                src={imageSrc}
                alt={title}
                width={width}
                height={height}
                className="transition-transform duration-300 transform group-hover:rotate-3"
            />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
);

const Gallery = () => {
    const menuItems = [
        {
            title: "Espresso",
            description:
                "A strong and bold coffee made by forcing hot water through finely-ground coffee beans.",
            imageSrc:
                "https://drishop.co.id/wp-content/uploads/2024/02/kopi-espresso.jpg",
            width: 600,
            height: 400,
        },
        {
            title: "Cappuccino",
            description:
                "A rich coffee drink with a mix of espresso, steamed milk, and a layer of froth.",
            imageSrc:
                "https://drishop.co.id/wp-content/uploads/2024/02/kopi-espresso.jpg",
            width: 600,
            height: 400,
        },
        {
            title: "Latte",
            description:
                "A smooth and creamy coffee drink made with espresso and steamed milk.",
            imageSrc:
                "https://drishop.co.id/wp-content/uploads/2024/02/kopi-espresso.jpg",
            width: 600,
            height: 400,
        },
        {
            title: "Americano",
            description:
                "A diluted espresso with hot water, offering a milder flavor.",
            imageSrc:
                "https://drishop.co.id/wp-content/uploads/2024/02/kopi-espresso.jpg",
            width: 600,
            height: 400,
        },
    ];
    return (
        <div className="w-full min-h-screen bg-base-100">
            <div className="flex flex-col items-center justify-center p-4 pt-10">
                <div className="text-4xl p-7 badge badge-secondary badge-outline">
                    Our Menu
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {menuItems.map((menu, index) => (
                        <MenuCard
                            key={index}
                            imageSrc={menu.imageSrc}
                            title={menu.title}
                            description={menu.description}
                            width={menu.width}
                            height={menu.height}
                        />
                    ))}
                </div>
            </div>
            <div className="py-10 bg-base-200">
                <div className="flex flex-col items-center justify-center px-4 pt-10">
                    <div className="p-7 mb-6 text-4xl badge badge-secondary badge-outline">
                        Short Story
                    </div>
                    <p className="max-w-2xl mx-auto mb-8 text-lg font-semibold text-center">
                        Our coffees are made to be shared because when we talk over
                        coffee, we fill our cups in all kinds of ways.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                        <div className="flex-1 w-full h-auto p-6 shadow-xl card bg-base-100">
                            <h2 className="mb-4 text-2xl font-bold">
                                Welcome to Cafe Dibimbing
                            </h2>
                            <p className="text-lg">
                                At Cafe Dibimbing, we believe that coffee is more than
                                just a beverage; its a catalyst for connection and
                                conversation. Our coffees are made to be shared, crafted
                                with care and passion, inviting you to fill your cup and
                                heart with warmth.
                            </p>
                            <br />
                            <p className="text-lg">
                                Imagine sitting down with friends, family, or even new
                                acquaintances, as the rich aroma of freshly brewed coffee
                                envelops you. Every sip ignites heartfelt discussions,
                                laughter, and stories that weave our experiences together.
                                Each cup we serve is a celebration of lifes moments —
                                from intimate chats to lively gatherings.
                            </p>
                            <br />
                            <p className="text-lg">
                                Our menu features a delightful variety of artisanal
                                coffees sourced from the finest beans, expertly roasted to
                                bring out their unique flavors. Whether youre savoring a
                                bold espresso or a smooth cappuccino, our offerings are
                                designed to inspire dialogue and foster connections.
                            </p>
                            <br />
                            <p className="text-lg">
                                So, come join us at [Your Coffee Shop Name], where every
                                cup tells a story and every conversation enriches our
                                lives. Lets fill our cups and our hearts — one coffee at
                                a time.
                            </p>
                        </div>

                        <div className="flex-1 w-full h-auto shadow-xl card bg-base-200">
                            <Image
                                src="https://cdn.bitrix24.id/b14044525/landing/7ba/7bab5dccad7b1d57c7c8112c420ff41e/Coffee_Toffee_-_Our_Story_1x.png"
                                alt="Our Story"
                                className="object-cover w-full h-full rounded-lg"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Gallery;