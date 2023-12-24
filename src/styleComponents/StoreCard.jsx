

export default function StoreCard(param) {
    return (
      <>
       <div className="store-details flex flex-col gap-1 my-3 border-[0.654px] border-[#E4E7E9] shadow-[0px_0px_28px_-12px_rgba(0,0,0,0.2)] hover:scale-105 rounded p-5 w-auto max-w-md">
             <img
          src={param.image}
          className="w-full h-40 rounded border-[0.654px]"
        />
            <h3 className="text-sm font-normal text-[#191C1F]">
              {param.name}
            </h3>
            <div className="flex align-center gap-2">
              <span className="text-[11px] font-normal text-[#475156]">
                {param.level}
              </span>
            </div>
            <div className="store-location flex align-center gap-2">
              <span className="text-[11px] font-normal text-[#475156]">
                {param.Description}
              </span>
            </div>
          </div>
      </>
    )
}