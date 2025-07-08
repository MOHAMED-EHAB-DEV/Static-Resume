const Card = ({
                  title,
                  desc,
                  enterpriseName,
                  start,
                  end,
                  period,
                  location,
                  isEdu = false,
              }: {
    title: string;
    desc?: string;
    enterpriseName?: string;
    start: string;
    end: string;
    period: string;
    location: string;
    isEdu?: boolean;
}) => {
    return (
        <div className="flex flex-col gap-[2px]">
            <h1 className="font-bold text-[11px] text-[#101214]">{title}</h1>
            {!isEdu && (
                <h2 className="font-normal text-[11px]">{enterpriseName}</h2>
            )}
            <span className="font-normal text-[9px] text-[#73808D]">
                {start} - {end} · {period}{isEdu && "y"}, {location}
            </span>
            {!isEdu && (
                <p className="text-[#101214] font-normal text-[10px] leading-3">{desc}</p>
            )}
        </div>
    );
};

export default Card;