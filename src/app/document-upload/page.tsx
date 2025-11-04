// "use client";

// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { useState } from "react";

// type DocType =
//   | "cac"
//   | "identity"
//   | "nepa_bill"
//   | "memart";

// const ENDPOINTS: Record<DocType, string> = {
//   cac: "/compliance/upload-cac",
//   identity: "/compliance/upload-identity",
//   nepa_bill: "/compliance/upload-nepa_bill",
//   memart: "/compliance/upload-memart",
// };

// const API_BASE = "https://merchantapi-ezpf.onrender.com/api/v2";

// export default function DocumentUploadPage() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [documentType, setDocumentType] = useState<DocType | "">("");
//   const [uploading, setUploading] = useState(false);
//   const [uploaded, setUploaded] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");

//   /* ------------------------------------------------------------------ */
//   /*  STEP 1 – Pick type + file                                          */
//   /* ------------------------------------------------------------------ */
//   const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       // optional: size guard
//       if (file.size > 10 * 1024 * 1024) {
//         alert("File must be ≤ 10 MB");
//         return;
//       }
//       setSelectedFile(file);
//       setCurrentStep(2);
//     }
//   };

//   /* ------------------------------------------------------------------ */
//   /*  STEP 2 – Upload to the correct endpoint                             */
//   /* ------------------------------------------------------------------ */
//   const handleUpload = async () => {
//     if (!selectedFile || !documentType) return;

//     setUploading(true);
//     setErrorMsg("");

//     const form = new FormData();
//     form.append("file", selectedFile);               // the API expects "file"
//     // If the API needs the type as a separate field, uncomment:
//     // form.append("type", documentType);

//     try {
//       const endpoint = ENDPOINTS[documentType];
//       const res = await fetch(`${API_BASE}${endpoint}`, {
//         method: "POST",
//         body: form,
//       });

//       if (!res.ok) {
//         const txt = await res.text();
//         throw new Error(`Upload failed (${res.status}): ${txt}`);
//       }

//       // you can parse JSON if the API returns one
//       const data = await res.json().catch(() => ({}));
//       console.log("Upload response:", data);
//     } catch (err: any) {
//       console.error(err);
//       setErrorMsg(err.message ?? "Something went wrong");
//     } finally {
//       setUploading(false);
//       if (!errorMsg) {
//         setUploaded(true);
//         setCurrentStep(3);
//       }
//     }
//   };

//   /* ------------------------------------------------------------------ */
//   /*  Reset flow                                                         */
//   /* ------------------------------------------------------------------ */
//   const resetUpload = () => {
//     setCurrentStep(1);
//     setSelectedFile(null);
//     setDocumentType("");
//     setUploaded(false);
//     setErrorMsg("");
//   };

//   /* ------------------------------------------------------------------ */
//   /*  UI (unchanged styling – only logic added)                          */
//   /* ------------------------------------------------------------------ */
//   return (
//     <div className="bg-white font-sans text-gray-800 min-h-screen">
//       <Header />

//       <main className="container mx-auto px-4 py-16 lg:py-24">
//         {/* Title */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#273B4A] max-w-4xl mx-auto leading-tight">
//             Upload Your Document
//           </h1>
//           <p className="mt-4 text-lg text-[#8C8C8C] max-w-2xl mx-auto">
//             Securely upload compliance documents in just 3 steps.
//           </p>
//         </div>

//         {/* Step Indicator */}
//         <div className="flex justify-center items-center mb-16">
//           <div className="flex items-center space-x-4 md:space-x-8">
//             {[1, 2, 3].map((step) => (
//               <div key={step} className="flex items-center">
//                 <div
//                   className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
//                     currentStep >= step
//                       ? "bg-[#DAB22F] text-white"
//                       : "bg-gray-200 text-gray-500"
//                   }`}
//                 >
//                   {step}
//                 </div>
//                 {step < 3 && (
//                   <div
//                     className={`w-24 md:w-32 h-1 transition-all duration-300 ${
//                       currentStep > step ? "bg-[#DAB22F]" : "bg-gray-300"
//                     }`}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Step Content */}
//         <div className="max-w-4xl mx-auto">
//           {/* ---------- STEP 1 ---------- */}
//           {currentStep === 1 && (
//             <div className="bg-gradient-to-br from-[#FFFBF0] to-white p-8 lg:p-12 rounded-3xl shadow-xl">
//               <h2 className="text-3xl font-bold text-[#273B4A] mb-6">
//                 Step 1: Select Document Type
//               </h2>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//                 {[
//                   { value: "cac", label: "CAC Document" },
//                   { value: "identity", label: "Identity Document" },
//                   { value: "nepa_bill", label: "NEPA Bill" },
//                   { value: "memart", label: "Memart" },
//                 ].map(({ value, label }) => (
//                   <label
//                     key={value}
//                     className={`flex items-center p-5 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
//                       documentType === value
//                         ? "border-[#DAB22F] bg-[#FFFBF0]/50 shadow-md"
//                         : "border-gray-300 hover:border-gray-400"
//                     }`}
//                   >
//                     <input
//                       type="radio"
//                       name="documentType"
//                       value={value}
//                       checked={documentType === value}
//                       onChange={(e) =>
//                         setDocumentType(e.target.value as DocType)
//                       }
//                       className="w-5 h-5 text-[#DAB22F] focus:ring-[#DAB22F]"
//                     />
//                     <span className="ml-3 text-lg font-medium text-[#273B4A]">
//                       {label}
//                     </span>
//                   </label>
//                 ))}
//               </div>

//               <div className="mt-10">
//                 <label
//                   htmlFor="file-upload"
//                   className="flex flex-col items-center justify-center w-full h-48 border-4 border-dashed border-[#DAB22F]/30 rounded-2xl cursor-pointer bg-[#FFFBF0]/20 hover:bg-[#FFFBF0]/40 transition-all duration-300"
//                 >
//                   <svg
//                     className="w-16 h-16 text-[#DAB22F] mb-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
//                     />
//                   </svg>
//                   <p className="text-lg font-semibold text-[#273B4A]">
//                     Click to upload or drag and drop
//                   </p>
//                   <p className="text-sm text-[#8C8C8C] mt-1">
//                     PDF, JPG, PNG up to 10 MB
//                   </p>
//                   <input
//                     id="file-upload"
//                     type="file"
//                     accept=".pdf,.jpg,.jpeg,.png"
//                     className="hidden"
//                     onChange={handleFileSelect}
//                   />
//                 </label>
//               </div>

//               {selectedFile && (
//                 <div className="mt-6 p-4 bg-white rounded-xl border border-[#DAB22F]/20 flex items-center gap-3">
//                   <svg
//                     className="w-6 h-6 text-[#DAB22F]"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-[#273B4A] font-medium">
//                     {selectedFile.name}
//                   </span>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* ---------- STEP 2 ---------- */}
//           {currentStep === 2 && selectedFile && (
//             <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-[#FFFBF0]">
//               <h2 className="text-3xl font-bold text-[#273B4A] mb-6">
//                 Step 2: Review Details
//               </h2>

//               {errorMsg && (
//                 <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
//                   {errorMsg}
//                 </div>
//               )}

//               <div className="space-y-6">
//                 <div>
//                   <p className="text-sm text-[#8C8C8C] mb-1">Document Type</p>
//                   <p className="text-xl font-semibold text-[#273B4A]">
//                     {documentType
//                       ? {
//                           cac: "CAC Document",
//                           identity: "Identity Document",
//                           nepa_bill: "NEPA Bill",
//                           memart: "Memart",
//                         }[documentType]
//                       : "—"}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-sm text-[#8C8C8C] mb-1">File Name</p>
//                   <p className="text-xl font-semibold text-[#273B4A]">
//                     {selectedFile.name}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-sm text-[#8C8C8C] mb-1">File Size</p>
//                   <p className="text-xl font-semibold text-[#273B4A]">
//                     {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
//                   </p>
//                 </div>

//                 <div className="bg-gray-50 rounded-xl p-6 flex items-center gap-4">
//                   <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 flex items-center justify-center">
//                     <svg
//                       className="w-12 h-12 text-gray-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="font-medium text-[#273B4A]">
//                       Preview not available
//                     </p>
//                     <p className="text-sm text-[#8C8C8C]">
//                       Large files will be processed after upload
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex gap-4 mt-10">
//                 <button
//                   onClick={() => setCurrentStep(1)}
//                   className="px-6 py-3 border-2 border-[#273B4A] text-[#273B4A] rounded-xl font-semibold hover:bg-[#273B4A] hover:text-white transition-all duration-300"
//                 >
//                   Back
//                 </button>
//                 <button
//                   onClick={handleUpload}
//                   disabled={!documentType || uploading}
//                   className="flex-1 px-6 py-3 bg-[#DAB22F] text-white rounded-xl font-semibold hover:bg-[#c9a32a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 >
//                   {uploading ? (
//                     <>
//                       <svg
//                         className="animate-spin h-5 w-5"
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                           fill="none"
//                         />
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8v8z"
//                         />
//                       </svg>
//                       Uploading...
//                     </>
//                   ) : (
//                     "Upload Document"
//                   )}
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* ---------- STEP 3 ---------- */}
//           {currentStep === 3 && uploaded && (
//             <div className="bg-gradient-to-br from-[#FFFBF0] to-white p-8 lg:p-12 rounded-3xl shadow-xl text-center">
//               <div className="w-24 h-24 mx-auto mb-6 bg-[#DAB22F] rounded-full flex items-center justify-center">
//                 <svg
//                   className="w-12 h-12 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={3}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </div>

//               <h2 className="text-3xl font-bold text-[#273B4A] mb-4">
//                 Document Uploaded Successfully!
//               </h2>

//               <p className="text-lg text-[#8C8C8C] mb-8 max-w-xl mx-auto">
//                 Your{" "}
//                 <span className="font-semibold text-[#273B4A]">
//                   {documentType
//                     ? {
//                         cac: "CAC Document",
//                         identity: "Identity Document",
//                         nepa_bill: "NEPA Bill",
//                         memart: "Memart",
//                       }[documentType]
//                     : ""}
//                 </span>{" "}
//                 has been securely uploaded and is now being processed.
//               </p>

//               <div className="bg-white rounded-xl p-6 shadow-sm mb-8 max-w-md mx-auto">
//                 <p className="text-sm text-[#8C8C8C] mb-1">File Name</p>
//                 <p className="font-semibold text-[#273B4A] truncate">
//                   {selectedFile?.name}
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button
//                   onClick={resetUpload}
//                   className="px-8 py-3 bg-[#DAB22F] text-white rounded-xl font-semibold hover:bg-[#c9a32a] transition-all duration-300"
//                 >
//                   Upload Another Document
//                 </button>
//                 <button className="px-8 py-3 border-2 border-[#273B4A] text-[#273B4A] rounded-xl font-semibold hover:bg-[#273B4A] hover:text-white transition-all duration-300">
//                   View Documents
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }