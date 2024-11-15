import { motion } from "framer-motion";
import { FaFile } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function Card({ Data, reference }) {
  return (
    <motion.div
    dragElastic={0.12}
    whileDrag={{scale: 1.2}}
      drag
      dragConstraints={reference}
      className="w-[110px] h-[150px] bg-zinc-300 rounded-[15px] overflow-hidden px-3 py-4 relative"
    >
      <FaFile className="h-2.8 w-2.5" />

      <div className="text-xs mt-[5px] text-[9px] leading-tight mb-1">
        {Data.desc}
      </div>

      <div className="flex justify-between items-center relative mb-4">
        <h5 className="text-[8px]">{Data.size}</h5>
        <div className="absolute h-2.5 w-2.5 bg-blue-500 flex justify-center items-center rounded-full right-0 text-[5px]">
          {Data.icon ? <FaDownload /> : <IoMdClose />}
        </div>
      </div>

      {Data.down && (
        <div className="text-xs bg-green-500 w-full bottom-0 left-0 text-center absolute py-1 rounded-b-[15px]">
          Download
        </div>
      )}
    </motion.div>
  );
}

export default Card;
