import React from 'react';

export const metadata = {
  title: 'HIPAA Notice of Privacy Practices',
  description: 'Notice of Privacy Practices regarding protected health information.',
};

export default function HIPAAPage() {
  const pdfUrl = '/AlignedWest_HIPAA_Notice_of_Privacy_Practices_2026.pdf';

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        
        {/* Header & Action Bar */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-md">
          <div>
            <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-clinic-gold">
              HIPAA Notice of Privacy Practices
            </h1>
            <p className="text-sm text-gray-300 mt-1">
              Please review our official privacy practices below.
            </p>
          </div>

          {/* Download Button (Explicit option) */}
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-clinic-gold hover:opacity-90 rounded-lg shadow transition-opacity shrink-0 font-sans"
          >
            Download PDF
          </a>
        </header>

        {/* Mobile Notice Card (Ensures mobile users aren't left stranded if iframe fails) */}
        <div className="block sm:hidden bg-gray-800 p-4 rounded-xl border border-gray-700 text-center">
          <p className="text-sm text-gray-300 mb-3">
            Viewing on a mobile device? You can view the full PDF natively or download it directly.
          </p>
          <div className="flex gap-3 justify-center">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-medium text-white bg-clinic-gold rounded-lg"
            >
              Open in New Tab
            </a>
            <a
              href={pdfUrl}
              download
              className="px-4 py-2 text-xs font-medium text-white bg-gray-700 hover:bg-gray-600 rounded-lg border border-gray-600"
            >
              Download
            </a>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="w-full h-[70vh] sm:h-[75vh] min-h-[500px] bg-white rounded-xl border border-gray-700 shadow-lg overflow-hidden">
          <iframe
            src={`${pdfUrl}#view=FitH`}
            className="w-full h-full border-none"
            title="HIPAA Notice of Privacy Practices"
          >
            {/* Fallback if iframe fails completely */}
            <div className="p-8 text-center text-gray-800">
              <p className="mb-4">
                Your browser doesn't support embedding inline PDFs.
              </p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-clinic-gold underline font-medium"
              >
                Click here to view or download the PDF document.
              </a>
            </div>
          </iframe>
        </div>

      </div>
    </main>
  );
}