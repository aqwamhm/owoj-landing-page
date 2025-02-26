import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function AboutSection() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
                    Tentang One Week One Juz
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="prose prose-lg text-gray-600">
                        <p>
                            One Week One Juz (OWOJ) adalah gerakan yang
                            bertujuan untuk meningkatkan interaksi umat muslim
                            dengan Al-Qur&#39;an melalui pembacaan rutin 1 juz
                            setiap pekan.
                        </p>
                        <p>
                            Dengan sistem kelompok yang terstruktur, OWOJ
                            membantu peserta untuk konsisten dalam membaca dan
                            memahami Al-Qur&#39;an, serta membangun komunitas
                            yang saling mendukung.
                        </p>
                        <div className="mt-6 space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <FaWhatsapp className="text-green-600" />
                                </div>
                                <p>Grup WhatsApp untuk koordinasi</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600">30</span>
                                </div>
                                <p>Peserta per grup</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600">1</span>
                                </div>
                                <p>Juz per pekan</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="relative w-64 h-64 mx-auto">
                            <Image
                                src="https://xsgames.co/randomusers/avatar.php?g=male"
                                alt="Founder"
                                width={256}
                                height={256}
                                className="rounded-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mt-4 text-green-900">
                            Sutomo Budi Santoso
                        </h3>
                        <p className="text-gray-600">Pendiri OWOJ</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
