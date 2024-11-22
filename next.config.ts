import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['karirlab-prod-bucket.s3.ap-southeast-1.amazonaws.com','drishop.co.id',
      'cdn.bitrix24.id','post.app','cdn0-production-images-kly.akamaized.net','d1r9hss9q19p18.cloudfront.net','awsimages.detik.net.id',
      'asset.kompas.com','static.promediateknologi.id','d1r9hss9q19p18.cloudfront.net','encrypted-tbn0.gstatic.com',
      'awsimages.detik.net.id','warkopnaikkelas.id','www.shutterstock.com','arsitag.b-cdn.net','blog-cdn.kitalulus.com','nibble-images.b-cdn.net','majalah.ottencoffee.co.id','jobs.dibimbing.id',
      'w7.pngwing.com'
    ],
  },
};

export default nextConfig;
