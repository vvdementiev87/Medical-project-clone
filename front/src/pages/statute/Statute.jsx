import React from 'react';
import PdfViewer from "../../components/PdfViewer/PdfViewer";

const Statute = () => {
    return (
        <div className={`container`}>
            <PdfViewer url="statute2022.pdf"/>
        </div>
    );
};

export default Statute;