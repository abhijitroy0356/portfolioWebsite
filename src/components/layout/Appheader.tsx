
const Appheader = () => {
  return (
    
    <div className="fixed flex justify-between w-full p-[3rem] text-customBlack mix-blend-difference text-white px-[6rem] ">
    <div className="flex items-end gap-10">
        <div className="font-special font-extrabold text-[24px] leading-tight">Deepanjan Sen</div>
        <a href="" className="flex items-center text-[16px] ml-[58px] ">
            VIEW RESUME
            <img src="/Arrow.svg" alt="" className="ml-0.5 h-4 w-4 bg-white" />
        </a>
    </div>

    <div className="flex gap-[46px] text-[16px] items-end">
        <a href="" className="custom-underline">01/HEY</a>
        <a href="" className="relative group-class">02/ABOUT</a>
        <a href="" className="relative group-class">03/WORK</a>
        <a href="" className="relative group-class">04/CONTACT</a>
    </div>

</div>

  )
}

export default Appheader