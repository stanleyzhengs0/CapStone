import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <div className="flex flex-col gap-16 flex-wrap px-6 md:px-20 py-24">
      <div className="flex gap-28 xl:flex-row flex-col">
        <div className="flex-grow xl:max-w-[50%] max-w-full py-16 border border-[#CDDBFF] rounded-[17px]">Image</div>

        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
            <div className="flex flex-col gap-3">
              <p className="text-[28px] text-secondary font-semibold">
                product.title
              </p>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-10 py-6 border-y border-y-[#E4E4E4]">
            <div className="flex flex-col gap-2">
              <p className="text-[34px] text-secondary font-bold">
                {/* {product.currency} {formatNumber(product.currentPrice)} */}
                curency
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <button className="btn w-fit mx-auto flex items-center justify-center gap-3 min-w-[200px]">
                  <Link target="_blank" className="text-base text-whtie">
                    Add to Cart
                  </Link>
                </button>
              </div>
            </div>
          </div>

    

          <div className="my-7 flex flex-col gap-16">
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl text-secondary font-semibold">
                Product Description
              </h3>

              <div className="flex flex-col gap-4">dec</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
