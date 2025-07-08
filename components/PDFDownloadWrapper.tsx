import MyDocument from "@/components/MyDocument";
import {PDFDownloadLink} from "@react-pdf/renderer";

const PdfDownloadWrapper = () => {
    return (
        <PDFDownloadLink
            document={<MyDocument/>}
            fileName="CV.pdf"
        >
            {({loading}) => (
                <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded">
                    {loading ? "Generating PDF..." : "Download PDF"}
                </button>
            )}
        </PDFDownloadLink>
    )
}
export default PdfDownloadWrapper
