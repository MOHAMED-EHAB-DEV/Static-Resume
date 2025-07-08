import {Document, Page, View, Text, StyleSheet} from "@react-pdf/renderer";
import {DummyData} from "@/constants";
import {formatLink, calculateDuration, formatDateLabel} from "@/lib/utils";

const styles = StyleSheet.create({
    page: {
        padding: 48,
        fontSize: 11,
        display: "flex",
        flexDirection: "column",
    },
    container: {
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontSize: 11,
        fontWeight: 'bold',
        marginBottom: 4,
        color: "#73808D",
    },
    item: {
        marginBottom: 2,
    },
    heading: {
        textTransform: "uppercase",
        fontWeight: 400,
        color: "#73808D",
        fontSize: 7,
    },
});

function MyDocument() {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    height: "20%",
                    width: "100%",
                }}>
                    <Text style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}>{DummyData.name}</Text>
                    <Text style={{
                        fontSize: "18px",
                        fontWeight: "normal",
                    }}>{DummyData.title}</Text>
                </View>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                }}>
                    <View style={{
                        width: 335,
                        gap: "20px",
                        ...styles.container
                    }}>
                        <View style={{
                            gap: "8px",
                            ...styles.container
                        }}>
                            <Text style={styles.heading}>
                                Experience
                            </Text>
                            <View style={{
                                gap: "16px",
                                ...styles.container
                            }}>
                                {DummyData.experience.map(({
                                                               title,
                                                               enterpriseName,
                                                               start,
                                                               end,
                                                               location = "",
                                                               desc
                                                           }, index) => {
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
                            </View>
                        </View>
                        <View style={{
                            gap: "8px",
                            ...styles.container
                        }}>
                            <Text style={styles.heading}>
                                Education
                            </Text>
                            <View style={{
                                gap: "16px",
                                ...styles.container
                            }}>
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
                            </View>
                        </View>
                    </View>
                    <View style={{
                        ...styles.container,
                        width: 140,
                        gap: "16px",
                        color: "#73808D",
                        fontSize: 11,
                    }}>
                        <View style={styles.container}>
                            <Text style={{fontWeight: 400}}>{DummyData.email}</Text>
                            <Text style={{fontWeight: 400}}>{DummyData.phone}</Text>
                            <Text style={{fontWeight: 400}}>{DummyData.location}</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>Industry Knowledge</Text>
                            {DummyData.knowledge.map((val, index) => (
                                <Text key={index} style={{fontWeight: 400}}>{val}</Text>
                            ))}
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>Tools & Technologies</Text>
                            <Text style={{fontWeight: 400}}>{DummyData.tools.map((val) => `${val}, `)}</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>Other Skills</Text>
                            <Text style={{fontWeight: 400}}>{DummyData.otherSkills.map((val) => `${val}, `)}</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>Languages</Text>
                            {DummyData.languages.map(({name, level}, index) => (
                                <Text style={{fontWeight: 400}} key={index}>
                                    {name} ({level})
                                </Text>
                            ))}
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>Social</Text>
                            {DummyData.socialLinks.map((val, index) => (
                                <a href={val} className="font-normal" key={index}>
                                    {formatLink(val)}
                                </a>
                            ))}
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
}

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
        <View style={{
            gap: "2px",
            ...styles.container
        }}>
            <Text style={{
                fontSize: "11px",
                fontWeight: "bold",
                color: "#101214",
            }}>{title}</Text>
            {!isEdu && (
                <Text style={{
                    fontWeight: 400,
                    fontSize: "11px",
                }}>{enterpriseName}</Text>
            )}
            <Text style={{
                fontWeight: 400,
                fontSize: "9px",
                color: "#73808D",
            }}>
                {start} - {end} · {period}{isEdu && "y"}, {location}
            </Text>
            {!isEdu && (
                <Text style={{
                    color: "#101214",
                    fontWeight: 400,
                    fontSize: "10px",
                }}>{desc}</Text>
            )}
        </View>
    );
};

export default MyDocument;

// <View style={styles.section}>
//     <Text style={styles.heading}>Contact</Text>
//     <Text style={styles.item}>{DummyData.name}</Text>
//     <Text style={styles.item}>{DummyData.title}</Text>
//     <Text style={styles.item}>{DummyData.email}</Text>
//     <Text style={styles.item}>{DummyData.phone}</Text>
//     <Text style={styles.item}>{DummyData.location}</Text>
// </View>
//
// <View style={styles.section}>
//     <Text style={styles.heading}>Experience</Text>
//     {DummyData.experience?.map(({ title, enterpriseName, start, end, location = "", desc }, i) => (
//         <View key={i} style={styles.item}>
//             <Text>{title}</Text>
//             <Text>{enterpriseName}</Text>
//             <Text>{`${formatDateLabel(start)} - ${formatDateLabel(end)} · ${calculateDuration(start, end)}, ${location}`}</Text>
//             <Text>{desc}</Text>
//         </View>
//     ))}
// </View>
//
// <View style={styles.section}>
//     <Text style={styles.heading}>Education</Text>
//     {DummyData.education?.map(({ title, start, end, location }, i) => (
//         <View key={i} style={styles.item}>
//             <Text>{title}</Text>
//             <Text>{`${start} - ${end} · ${Number(end) - Number(start)}y, ${location}`}</Text>
//         </View>
//     ))}
// </View>
//
// <View style={styles.section}>
//     <Text style={styles.heading}>Tools & Technologies</Text>
//     <Text style={styles.item}>{DummyData.tools?.join(", ")}</Text>
// </View>
//
// <View style={styles.section}>
//     <Text style={styles.heading}>Other Skills</Text>
//     <Text style={styles.item}>{DummyData.otherSkills?.join(", ")}</Text>
// </View>
//
// <View style={styles.section}>
//     <Text style={styles.heading}>Languages</Text>
//     {DummyData.languages?.map(({ name, level }, i) => (
//         <Text style={styles.item} key={i}>{name} ({level})</Text>
//     ))}
// </View>
//
// <View style={styles.section}>
//     <Text style={styles.heading}>Social</Text>
//     {DummyData.socialLinks?.map((val, i) => (
//         <Text style={styles.item} key={i}>{formatLink(val)}</Text>
//     ))}
// </View>