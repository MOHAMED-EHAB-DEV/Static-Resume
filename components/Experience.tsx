import {DummyData} from "@/constants";
import {calculateDuration, formatDateLabel} from "@/lib/utils";
import Card from "./Card";

const Experience = () => {
    return (
        <div className="flex flex-col gap-4">
            {DummyData.experience.map(({title, enterpriseName, start, end, location = "", desc}, index) => {
                const period = calculateDuration(start, end);
                const formattedStart = formatDateLabel(start);
                const formattedEnd = formatDateLabel(end);

                return (
                    <Card
                        key={index}
                        title={title}
                        desc={desc}
                        enterpriseName={enterpriseName}
                        start={formattedStart}
                        end={formattedEnd}
                        period={period}
                        location={location}
                    />
                );
            })}
        </div>
    );
};


export default Experience;