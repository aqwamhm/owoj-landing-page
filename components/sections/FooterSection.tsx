export default function FooterSection() {
    return (
        <footer className="bg-green-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            One Week One Juz
                        </h3>
                        <p className="text-gray-300">
                            Komunitas untuk meningkatkan interaksi dengan
                            Al-Qur&#39;an melalui pembacaan rutin 1 juz setiap
                            pekan.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#cara-kerja"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Cara Kerja
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Tentang Kami
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    Kontak
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-green-800 mt-8 pt-8 text-center text-gray-300">
                    © {new Date().getFullYear()} One Week One Juz. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
}
