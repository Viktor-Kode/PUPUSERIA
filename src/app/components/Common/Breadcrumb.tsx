import Link from "next/link";
import { BreadcrumbProps } from "../../types/breadcrumb";

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  pageName,
  pageDescription,
}) => {
  return (
    <div className="relative z-10 overflow-hidden pb-[60px] pt-[120px] md:pt-[130px] lg:pt-[160px] bg-gradient-to-br from-[#7CFC00]/10 via-white to-[#1A73E8]/5">
      {/* Decorative elements for organic vibe */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#FB8C00]/10 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-[#7CFC00]/10 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-[#1A73E8]/10 blur-xl"></div>
      
      <div className="from-stroke/0 via-stroke to-stroke/0 absolute bottom-0 left-0 h-px w-full bg-linear-to-r"></div>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="text-center">
              {/* Organic/healthy badge */}
              <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-[#7CFC00]/20 border border-[#7CFC00]/30">
                <span className="w-2 h-2 rounded-full bg-[#7CFC00] mr-2"></span>
                <span className="text-sm font-medium text-[#1A73E8]">Rico y Saludable</span>
              </div>
              
              <h1 className="text-[#1A73E8] mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] md:leading-[1.2]">
                {pageName}
              </h1>
              <p className="text-gray-700 mb-8 text-base max-w-2xl mx-auto">
                {pageDescription}
              </p>

              <ul className="flex items-center justify-center gap-[10px]">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 flex items-center gap-[10px] text-base font-medium hover:text-[#1A73E8] transition-colors duration-300"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    Inicio
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-[#FB8C00] font-medium">{pageName}</span>
                </li>
              </ul>
              
              {/* Additional organic food indicators */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-[#7CFC00] mr-2"></span>
                  Ingredientes orgánicos
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-[#FB8C00] mr-2"></span>
                  Opciones vegetarianas
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-[#1A73E8] mr-2"></span>
                  Hecho a mano
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;