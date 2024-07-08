import scan from "../assets/icons/scan.svg";

function ScannerNav() {
  return (
    <div className="w-full   h-32 flex items-center bg-slate-100 text-black shadow-2xl" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="flex items-center gap-1 ml-5 grow">
        <img src={scan} width={40} height={20} alt="barcode" />
        <h1 className="text-center text-4xl font-bold" >Scanner</h1>
      </div>
      <div className="text-2xl semibold mx-10"><h1>Inventory</h1></div>
      <div className="text-2xl semibold mx-10"><h1>Item Management</h1></div>
      <div className="text-2xl semibold mx-10 pr-10"><h1>Logs</h1></div>
    </div>
  );
}

export default ScannerNav;
