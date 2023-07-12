import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { SiGooglemybusiness } from "react-icons/si";
import product1 from "/public/images/product1.avif";
import product2 from "/public/images/product2.avif";

const ProductCard = () => {
  return (
    //ellen and Ore
    <div className="group block cursor-pointer my-3">
      <div className="relative h-[180px] sm:h-[350px] lg:h-[370px]">
        <Image
          src={product2}
          alt="product"
          className="w-full border-soild border-[1px] border-black h-full object-cover absolute inset-0 opacity-100 group-hover:opacity-0"
        />
        <Image
          src={product1}
          alt="product"
          className="w-full border-soild border-[1px] border-black h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100"
        />
      </div>
      <div className="my-2 cursor-pointer">
        <p className="text-xs pt-4 hover:underline">BLUE JEANS</p>
        <p className="my-2">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <span className="font-light text-[#0f1111] text-[10px]">(12)</span>
        </p>
        <p className="my-1 font-light">₦37,000.00</p>
      </div>
    </div>

    // Amazon
    // <div className="flex my-1 items-center lg:flex-col border-solid border-[#f5f5f5] border-[1px]">
    //   <div className="py-12 lg:py-1 bg-[#F8F8F8] w-full h-full flex-1 px-4">
    //     <Image
    //       src={product1}
    //       alt="product"
    //       className="w-full h-full max-w-[270px] mx-auto max-h-[270px]"
    //     />
    //   </div>
    //   <div className="flex text-xs lg:text-sm  flex-[1.2] px-2 flex-col">
    //     <h4 className="text-sm lg:text-base text-[#0f1111] pt-6">
    //       DSS Games Call 911! - A Guessing Game of Unexpected Emergencies for
    //       The Whole...
    //     </h4>
    //     <p className="my-1">Kid, Teen, Adult</p>
    //     <p className="text my-1">
    //       <span className="text-[#007185]">4.7</span>
    //       <AiFillStar />

    //       <AiFillStar />
    //       <AiFillStar />
    //       <AiFillStar />
    //       <AiFillStar />
    //       <span className="text-[#0f1111]">(12)</span>
    //     </p>
    //     <p className="text-[#565959]">400+ bought in past month</p>
    //     <p className="my-3 text-[#565959]">
    //       <span className="text-[22px] lg:text-[28px] text-[#0f1111]">
    //         $13<span className="align-super text-sm">48</span>
    //       </span>{" "}
    //       <span className="mx-1 font-light">List Price</span>{" "}
    //       <span className="line-through font-light">$20.00</span>
    //     </p>
    //     <p className="mt-2 mb-1 text-[#565959] font-light ">Ships to Nigeria</p>
    //     <p>
    //       <SiGooglemybusiness />{" "}
    //       <span className="underline mx-1">Small Business</span>
    //     </p>
    //     <p className="font-light lg:font-normal pt-2 pb-6">
    //       Ages: 14 years and up
    //     </p>
    //   </div>
    // </div>

    // jumia
    // <div className="flex my-1 shadow-[0_0_12px_0_rgb(0_0_0_/_12%)] rounded-[4px] lg:bg-white  bg- justify-center pb-3 flex-col items-center">
    //   <div className="w-full">
    //     <Image
    //       src={product1}
    //       alt="product"
    //       className="w-full  h-full lg:max-w-[208px] lg:max-h-[208px] max-h-[175px] max-w-[175px] mx-auto"
    //     />
    //   </div>
    //   <div className="px-2 lg:w-full lg:mt-2 lg:px-4">
    //     <h3 className="mt-2 text-xs"> EA Sports FIFA 23- PlayStation4</h3>
    //     <p className="mt-2">₦22,990</p>
    //     <p className="mt-1 mb-2">
    //       <AiFillStar />
    //       <AiFillStar />
    //       <AiFillStar />
    //       <AiFillStar />
    //       <AiFillStar />
    //     </p>
    //     <p className="text-center lg:mt-10 lg:py-3 py-2 mx-1 text-xs bg-primaryColor text-white rounded-md">
    //       ADD TO CART
    //     </p>
    //   </div>
    // </div>
  );
};

export default ProductCard;
