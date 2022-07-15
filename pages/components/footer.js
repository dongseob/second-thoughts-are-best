import Image from "next/image";
import ChanelTalk from "../../api/chanelTalk";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div
        className="border-t border-slate-900/5 py-10 flex justify-center flex-col"
        id="footerTarget"
      >
        <div className="h-8 w-auto inline-flex justify-center">
          <a href="/.">
            <Image
              src="/images/second-thoghts-are-best_logo.svg"
              alt="Workflow"
              height={30}
              width={250}
            />
          </a>
        </div>
        <p className="mt-5 text-center text-sm leading-6 text-slate-500">
          © Second Thoughts Are Best. ALL rights reserved.
        </p>

        <div className="mt-5 flex items-center justify-center space-x-4">
          <p className="text-center text-sm leading-6 text-slate-500">
            NH 351-0293-682513
          </p>
          <div className="h-4 w-px bg-slate-500/20"></div>
          <a
            href="tel:010-4603-7572"
            className="text-center text-sm leading-6 text-slate-500 hover:line-through"
          >
            010-4603-7572
          </a>
        </div>
      </div>
      <ChanelTalk></ChanelTalk>
    </footer>
  );
}
