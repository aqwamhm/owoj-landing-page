import Image from "next/image";
import RegistrationForm from "../ui/RegistrationForm";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-20">
            <div className="absolute inset-0">
                <Image
                    src="/public/globe.svg"
                    alt="Background"
                    fill
                    className="object-cover opacity-10"
                />
            </div>
            <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Column: Headline and Subheadline */}
                <div className="text-left space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6 animate-fade-in">
                        One Week One Juz
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 animate-fade-in-up">
                        Komunitas One Week One Juz adalah wadah bagi para muslim
                        untuk meningkatkan interaksi dengan Al-Qur’an dengan
                        membaca 1 juz setiap pekan. Bergabunglah bersama ribuan
                        anggota yang sudah berkomitmen dalam perjalanan ini!
                    </p>
                </div>

                {/* Right Column: Registration Form */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-900 mb-4">
                        Daftar Sekarang
                    </h2>
                    <RegistrationForm />
                </div>
            </div>
        </section>
    );
}
