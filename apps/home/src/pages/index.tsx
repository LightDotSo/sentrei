import type { FC } from "react";

export const Index: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
      <div className="absolute top-0 -left-4 w-48 sm:w-72 md:w-80 h-48 sm:h-72 md:h-80 bg-purple-300 rounded-full opacity-70 filter blur-xl animate-blob" />
      <div className="absolute top-0 w-48 sm:w-72 md:w-80 h-48 sm:h-72 md:h-80 bg-teal-300 rounded-full opacity-70 filter blur-xl animate-blob" />
      <div className="absolute top-0 -right-4 w-48 sm:w-72 md:w-80 h-48 sm:h-72 md:h-80 bg-yellow-300 rounded-full opacity-70 filter blur-xl animate-blob" />
      <div className="absolute -right-4 w-48 sm:w-72 md:w-80 h-48 sm:h-72 md:h-80 bg-cyan-300 rounded-full opacity-70 filter blur-xl animate-blob" />
      <div className="absolute -left-4 w-48 sm:w-72 md:w-80 h-48 sm:h-72 md:h-80 bg-blue-300 rounded-full opacity-70 filter blur-xl animate-blob" />
      <div className="absolute bottom-0 -left-4 w-48 sm:w-72 md:w-80 h-48 sm:h-72 md:h-80 bg-pink-300 rounded-full opacity-70 filter blur-xl animate-blob " />
      <div className="absolute bottom-0 w-48 sm:w-72 md:w-80 h-48 sm:h-72 md:h-80 bg-purple-300 rounded-full opacity-70 filter blur-xl animate-blob" />
      {/* eslint-disable-next-line tailwindcss/classnames-order */}
      <div className="absolute -right-4 bottom-0 w-48 sm:w-72 md:w-80 h-48 sm:h-72 md:h-80 bg-red-300 rounded-full opacity-70 filter blur-xl animate-blob" />
      <h1 className="relative z-30 py-14 text-[23vw] sm:text-9xl font-extrabold tracking-tightest leading-none text-center select-none">
        <span
          data-content="Connect."
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="block before:block relative before:absolute before:top-0 before:bottom-0 before:left-0 before:z-0 before:px-2 before:w-full before:text-center text-white before:text-white before:animate-gradient-background-1 before:content-[attr(data-content)]"
        >
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500 animate-gradient-foreground-1">
            Connect.
          </span>
        </span>
        <span
          data-content="Discover."
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="block before:block relative before:absolute before:top-0 before:bottom-0 before:left-0 before:z-0 before:px-2 before:w-full before:text-center text-white before:text-white before:animate-gradient-background-2 before:content-[attr(data-content)]"
        >
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-600 animate-gradient-foreground-2">
            Discover.
          </span>
        </span>
        <span
          data-content="Earn."
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="block before:block relative before:absolute before:top-0 before:bottom-0 before:left-0 before:z-0 before:px-2 before:w-full before:text-center text-white before:text-white before:animate-gradient-background-3 before:content-[attr(data-content)]"
        >
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 animate-gradient-foreground-3">
            Earn.
          </span>
        </span>
      </h1>
      <div className="flex z-30 flex-col sm:flex-row sm:justify-center mx-auto space-y-4 sm:space-y-0 sm:space-x-3 w-full max-w-md">
        <div className="rounded-md">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.metabio.wtf"
            className="flex justify-center items-center py-3 px-8 md:px-10 w-full text-base md:text-lg font-medium text-white bg-gradient-to-r from-green-300 hover:from-green-200 via-blue-500 hover:via-blue-400 to-purple-600 hover:to-purple-500 rounded-md border border-blue-600"
          >
            Alpha version
          </a>
        </div>
        <div className="rounded-md">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.sentrei.com/whitepaper"
            className="flex justify-center items-center py-3 px-8 md:px-10 w-full text-base md:text-lg font-medium text-white hover:bg-gray-50 hover:bg-opacity-30 rounded-md border border-gray-100"
          >
            Whitepaper
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
