import { FaGithub } from "react-icons/fa";
import { RiCss3Fill, RiHtml5Fill, RiJavascriptLine, RiReactjsLine } from "react-icons/ri";
import { SiAntdesign, SiRedux, SiReduxsaga } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap item-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiHtml5Fill className="text-7xl text-orange-600" /> {/* HTML color */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiCss3Fill className="text-7xl text-blue-500" /> {/* CSS color */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptLine className="text-7xl text-yellow-500" /> {/* JavaScript color */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" /> {/* React color */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiRedux className="text-7xl text-sky-600" /> {/* Redux color */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiReduxsaga className="text-7xl text-purple-600" /> {/* Redux-Saga color */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-7xl text-gray-800" /> {/* GitHub color */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAntdesign className="text-7xl text-blue-400" /> {/* Ant Design color */}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
