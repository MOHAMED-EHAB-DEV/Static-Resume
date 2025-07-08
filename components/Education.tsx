import {DummyData} from "@/constants";
import {calculateDuration, formatDateLabel} from "@/lib/utils";
import Card from "./Card";

const Education = () => {
    return (
        <div className="flex flex-col gap-4">
            {DummyData.education.map(({title, start, end, location}, index) => {
                const period = String(Number(end) - Number(start));

                return (
                    <Card
                        key={index}
                        title={title}
                        start={start}
                        end={end}
                        period={period}
                        location={location}
                        isEdu={true}
                    />
                );
            })}
        </div>
    );
};


export default Education;