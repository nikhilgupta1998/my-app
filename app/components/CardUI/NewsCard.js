import Image from "next/image";
import React from "react";

const NewsCard = (props) => {
  return (
    <div>
      <div>
        <Image
          src={
            "https://res.cloudinary.com/pollpe-in/image/upload/v1685808325/blog_1_t14tf0.jpg"
          }
          width={472}
          style={{ borderRadius: "10px" }}
          height={312}
          quality={75}
          alt="homepage image"
        />
      </div>
      <div className="space-y-4 my-4">
        <div className="flex gap-4 items-center">
          <div className="relative h-5 w-5">
            <Image
              src={
                "https://res.cloudinary.com/pollpe-in/image/upload/v1685808325/blog_1_t14tf0.jpg"
              }
              style={{ borderRadius: "100%" }}
              quality={75}
              fill
              alt="homepage image"
            />
          </div>
          <div className="text-xs text-gray-500">Formula 1 . 3 hours ago</div>
        </div>
        <div className="font-bold text-lg font-serif leading-none">Amet non nulla tempor ut cupidatat.</div>
        <p className="text-gray-500 text-sm line-clamp-4">Adipisicing anim nostrud sunt sunt culpa eu ad Lorem ea non. Exercitation excepteur consectetur aliquip Lorem id est minim ad in consequat irure mollit enim. Elit non in cupidatat veniam ad. Officia deserunt sunt id nulla id aute esse fugiat.</p>
        <div className="text-gray-500 text-sm"><span className="text-red-600 font-semibold">Sports</span> . 8 min read</div>
      </div>
    </div>
  );
};

export default NewsCard;