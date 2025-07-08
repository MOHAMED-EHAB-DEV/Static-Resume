import {DummyData} from "@/constants";

const Header = () => {
    return (
        <div className="flex flex-col gap-4 w-full h-1/5">
            <h1 className="text-[24px] font-bold">{DummyData.name}</h1>
            <p className="text-[18px] font-normal">{DummyData.title}</p>
        </div>
    )
};

export default Header;