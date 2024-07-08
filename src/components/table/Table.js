//components
import TableHead from "./TableHead";

//icons
import next from "../../assets/icons/next.svg";
import back from "../../assets/icons/back.svg";

function Table() {
  return (
    <div>
      <table className="min-w-full  text-black ml-4">
        <TableHead />
        <tr className="grid  grid-cols-12 col-span-12 items-center ">
          <td className="py-2 col-span-2">
            <p className="font-medium">Stereo</p>
          </td>
          <td className="py-2 col-span-2 ml-2">
            <p>Beats by Dre</p>
          </td>
          <td className="py-2 col-span-2 ml-2">
            <p>Eletronics</p>
          </td>
          <tb className="py-2 col-span-2 ml-2">
            <span className="inline-flex  rounded-md bg-red-200 px-2 my-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
              OUT
            </span>
          </tb>
        </tr>
      </table>
      <div className="w-full flex justify-end items-center py-6 h-max gap-5">
        <div className="flex gap-5 h-max ">
          <p>Rows per page: 10</p>
          <p>1-5 of 13</p>
        </div>
        <div className="flex gap-10 h-max">
          <img src={back} width={20} alt="back button" />
          <img src={next} width={20} alt="next button" className="" />
        </div>
      </div>
    </div>
  );
}

export default Table;
