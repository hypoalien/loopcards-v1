// "use client";

// import Link from "next/link";
// import { ChevronRight } from "lucide-react";

// export function SiteBanner() {
//   return (
//     <div className="group relative top-0 bg-indigo-600 py-3 text-white transition-all duration-300 md:py-0">
//       <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
//         <Link
//           href="https://pro.magicui.design"
//           onClick={() => console.log("banner_cta_clicked")}
//           target="_blank"
//           className="inline-flex text-xs leading-normal md:text-sm"
//         >
//           ✨{" "}
//           <span className="ml-1 font-[580] dark:font-[550]">
//             {" "}
//             Discover premium plots and homes in Hyderabad tailored for your
//             investment needs.
//           </span>{" "}
//           <ChevronRight className="ml-1 mt-[3px] hidden size-4 transition-all duration-300 ease-out group-hover:translate-x-1 lg:inline-block" />
//         </Link>
//       </div>
//       <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function SiteBanner() {
  return (
    <div className="group relative top-0 bg-primary py-3 text-primary-foreground transition-all duration-300 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link
          // href="https://pro.magicui.design"
          href="/contact-us"
          onClick={() => console.log("banner_cta_clicked")}
          target="_blank"
          className="inline-flex text-xs leading-normal md:text-sm"
        >
          ✨{" "}
          <span className="ml-1 font-medium">
            {" "}
            Discover premium plots and homes in Hyderabad tailored for your
            investment needs.
          </span>{" "}
          <ChevronRight className="ml-1 mt-[3px] hidden size-4 transition-all duration-300 ease-out group-hover:translate-x-1 lg:inline-block" />
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-primary-foreground/30" />
    </div>
  );
}
