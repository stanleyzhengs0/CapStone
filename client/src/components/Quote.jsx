import React from 'react';


const Quote = () => {
  return (
    <section className="
    /* solid fallback */
    bg-black
    bg-[length:100%_100%]
    bg-no-repeat
    "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
                <h1
        className="
        font-display-header text-[8rem] leading-none mb-0
        bg-gradient-to-r               /* left ➜ right */
        from-yellow-300                /* bright yellow on the left edge   */
        via-pink-500                   /* fade through pink                */
        via-red-500                    /* then mid-red                     */
        to-red-700                     /* deep red on the right edge       */
        text-transparent bg-clip-text  /* reveal the gradient only inside letters */
    "
        >
        Save more, live better
        </h1>
        </div>
      </div>
    </section>
  );
};

export default Quote;