import React from "react";
import Image from "next/image";

const Gallery = () => {
    return (
        <div className="w-full min-h-[700px] bg-base-100">
        <div className="flex flex-col items-center justify-center p-4">
          <p className="mt-4 text-5xl font-bold">Our Gallery</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="carousel carousel-vertical rounded-box h-96">
              <div className="h-full carousel-item">
                <Image
                  src="https://post.app/wp-content/uploads/2020/01/BLOG_POST_Pebisnis-Minuman_22-01-2020.jpg"
                  alt="Coffee Business Concept"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-full carousel-item">
                <Image
                  src="https://cdn0-production-images-kly.akamaized.net/UHxWpuRvr9jR5cQTfK67a-ceoUs=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3545109/original/037253400_1629363113-pexels-photo-4790059.jpeg"
                  alt="Coffee Shop Interior"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-full carousel-item">
                <Image
                  src="https://d1r9hss9q19p18.cloudfront.net/uploads/2017/02/1-r02q17GGCoyh3JyjNnqoDA.png"
                  alt="Coffee Brewing"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-full carousel-item">
                <Image
                  src="https://awsimages.detik.net.id/community/media/visual/2022/02/07/kafe-hits-di-jakarta-barat-4_43.jpeg?w=600&q=90"
                  alt="Popular Cafe in Jakarta"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-full carousel-item">
                <Image
                  src="https://asset.kompas.com/crops/t7Cond8p5SslkQg6ylmaYHoOFzw=/100x37:900x570/1200x800/data/photo/2020/06/15/5ee76efd69593.jpg"
                  alt="Coffee Shop Scene"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="carousel carousel-vertical rounded-box h-96">
              <div className="h-full carousel-item">
                <Image
                  src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2024/01/16/pexels-quang-nguyen-vinh-2159065-3575028608.png"
                  alt="Abstract Coffee Shop Design"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-full carousel-item">
                <Image
                  src="https://d1r9hss9q19p18.cloudfront.net/uploads/2017/01/barista-kedai-kopi.jpg"
                  alt="Barista at Work"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-full carousel-item">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZw_zNdNSUGc3djtSfinCGla9nsnc-MuFc17pAvNvNKhc4F8HhzouitTSDgGfkr6jyD4&usqp=CAU"
                  alt="Coffee Preparation"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-full carousel-item">
                <Image
                  src="https://awsimages.detik.net.id/community/media/visual/2023/02/22/6-tanda-coffee-shop-yang-kamu-datangi-berkualitas-buruk-2.jpeg?w=600&q=90"
                  alt="Coffee Shop Interior"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-full carousel-item">
                <Image
                  src="https://warkopnaikkelas.id/wp-content/uploads/2023/02/tips-memilih-franchise-coffee-shop.jpg"
                  alt="Coffee Shop Franchise"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="carousel carousel-vertical rounded-box h-96">
              <div className="h-full carousel-item">
                <Image
                  src="https://d1r9hss9q19p18.cloudfront.net/uploads/2019/12/pouring-di-bar.jpg"
                  alt="Coffee Pouring"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-full carousel-item">
                <Image
                  src="https://asset.kompas.com/crops/Od1YoMeYd8fYYZaH37h6phX8J8w=/0x0:1000x667/750x500/data/photo/2019/03/14/457156343.jpg"
                  alt="Coffee Shop"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-full carousel-item">
                <Image
                  src="https://majalah.ottencoffee.co.id/wp-content/uploads/2015/11/o-BARISTA-facebook.jpg"
                  alt="Barista Preparing Coffee"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-full carousel-item">
                <Image
                  src="https://www.shutterstock.com/shutterstock/videos/13307660/thumb/2.jpg?ip=x480"
                  alt="Coffee Making Process"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-full carousel-item">
                <Image
                  src="https://d1r9hss9q19p18.cloudfront.net/uploads/2018/01/drink-coffee.jpg"
                  alt="Coffee Drinking"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="carousel carousel-vertical rounded-box h-96">
              <div className="h-full carousel-item">
                <Image
                  src="https://arsitag.b-cdn.net/wp-content/uploads/2022/10/coffee-shop-minimalis-1200x900.jpeg"
                  alt="Minimalist Coffee Shop"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-full carousel-item">
                <Image
                  src="https://blog-cdn.kitalulus.com/blog/wp-content/uploads/2024/02/20171913/6233628ece79cbb5eca38b2d_rGv5Wa5x3W1CRvAmKP7159gMkv51Kq7pNVj470lvtQCeRH4nc5zjGhBunNXlgx0l5el8pcAsK9gMSXfoeVSEaz0LCi0tiz1tDv0ypfybsiNthj8QDEJJeOyu-7GZs1bsBsQDEz0t.jpg"
                  alt="Coffee Shop Environment"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-full carousel-item">
                <Image
                  src="https://nibble-images.b-cdn.net/nibble/original_images/1000007545.jpg"
                  alt="Coffee and Pastry"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-full carousel-item">
                <Image
                  src="https://d1r9hss9q19p18.cloudfront.net/uploads/2018/03/devianart.jpg"
                  alt="Coffee Art"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-full carousel-item">
                <Image
                  src="https://asset.kompas.com/crops/GqAwQ0RHfn3JNQ1P_MjbqQiBLe4=/0x76:4032x2764/1200x800/data/photo/2021/09/11/613c98c27631e.jpg"
                  alt="Coffee Shop Gathering"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Gallery;