"use client";

import dynamic from 'next/dynamic';

import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import {DummyData} from "@/constants";
import {formatLink} from "@/lib/utils";

const PDFDownloadWrapper = dynamic(() => import('@/components/PDFDownloadWrapper'), {
    ssr: false,
});

export default function Home() {
    return (
        <div className="bg-white relative text-black flex items-center justify-center">
            <div id="print-section" className="flex flex-col gap-2 w-[595px] h-[842px] p-12">
                <Header/>
                <div className="flex gap-4">
                    <div className="flex flex-col w-[335px] gap-5">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[7px] font-arial text-[#73808D] font-normal tracking-[2px] uppercase">Experience</h1>
                            <Experience/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[7px] font-arial text-[#73808D] font-normal tracking-[2px] uppercase">Education</h1>
                            <Education/>
                        </div>
                    </div>
                    <div className="text-[#73808D] text-[11px] flex w-[140px] flex-col gap-4">
                        <div className="flex flex-col ">
                            <span className="font-normal">{DummyData.email}</span>
                            <span className="font-normal">{DummyData.phone}</span>
                            <span className="font-normal">{DummyData.location}</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold mb-1">Industry Knowledge</h1>
                            {DummyData.knowledge.map((val, index) => (
                                <span key={index} className="font-normal">{val}</span>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold mb-1">Tools & Technologies</h1>
                            <span className="font-normal">{DummyData.tools.map((val) => `${val}, `)}</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold mb-1">Other Skills</h1>
                            <span className="font-normal">{DummyData.otherSkills.map((val) => `${val}, `)}</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold mb-1">Languages</h1>
                            {DummyData.languages.map(({name, level}, index) => (
                                <span className="font-normal" key={index}>
                  {name} ({level})
                </span>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold mb-1">Social</h1>
                            {DummyData.socialLinks.map((val, index) => (
                                <a href={val} className="font-normal" key={index}>
                                    {formatLink(val)}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 absolute -top-1 right-6 print:hidden">
                <button
                    onClick={() => window.print()}
                    className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Print
                </button>

                <PDFDownloadWrapper />
            </div>
        </div>
    );
}