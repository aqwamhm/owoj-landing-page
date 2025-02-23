export default function HowItWorks() {
    return (
        <section id="cara-kerja" className="py-20 px-4 bg-green-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-green-900 mb-12 text-center">
                    Cara Kerja One Week One Juz
                </h2>
                <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 -translate-x-1/2"></div>
                    {[
                        {
                            number: 1,
                            title: "Daftar ke Koordinator",
                            description:
                                "Hubungi koordinator untuk mendaftarkan diri sebagai peserta.",
                        },
                        {
                            number: 2,
                            title: "Bergabung ke Grup WhatsApp",
                            description:
                                "Anda akan dimasukkan ke dalam grup OWOJ yang terdiri dari 30 peserta.",
                        },
                        {
                            number: 3,
                            title: "Mendapatkan Porsi Bacaan",
                            description:
                                "Setiap peserta diberikan tugas membaca 1 juz setiap pekan sesuai pembagian yang telah ditentukan.",
                        },
                        {
                            number: 4,
                            title: "Melaporkan Progres",
                            description:
                                "Setelah menyelesaikan bacaan, laporkan progres tilawah Anda ke grup menggunakan format yang telah ditentukan.",
                        },
                        {
                            number: 5,
                            title: "Pencatatan Otomatis",
                            description:
                                "Robot atau Admin akan mencatat laporan Anda secara otomatis untuk memastikan seluruh peserta menyelesaikan tilawahnya tepat waktu.",
                        },
                    ].map((step, index) => (
                        <div key={index} className="mb-8 relative">
                            <div className="absolute left-1/2 -top-4 transform -translate-x-1/2 w-7 h-7 rounded-full bg-green-600 z-10 flex items-center justify-center text-white">
                                {step.number}
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow max-w-96 mx-auto">
                                <h3 className="font-semibold text-green-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
