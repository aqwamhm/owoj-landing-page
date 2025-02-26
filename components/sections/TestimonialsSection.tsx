export default function TestimonialsSection() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-green-900 mb-12 text-center">
                    Apa Kata Mereka?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Ahmad Fauzi",
                            role: "Peserta OWOJ 4",
                            testimonial:
                                "OWOJ membantu saya untuk lebih konsisten dalam membaca Al-Qur'an. Sistem kelompoknya sangat mendukung.",
                        },
                        {
                            name: "Siti Aminah",
                            role: "Peserta OWOJ 1",
                            testimonial:
                                "Saya bisa mengatur waktu membaca Al-Qur'an dengan lebih baik berkat OWOJ. Terima kasih!",
                        },
                        {
                            name: "Budi Santoso",
                            role: "Peserta OWOJ 9",
                            testimonial:
                                "OWOJ membuat saya lebih termotivasi untuk membaca Al-Qur'an secara rutin. Sangat bermanfaat!",
                        },
                    ].map((testimonial, index) => (
                        <div key={index} className="bg-green-50 p-6 rounded-lg">
                            <div className="mb-4">
                                <h3 className="font-semibold text-green-900">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {testimonial.role}
                                </p>
                            </div>
                            <p className="text-gray-600">
                                &quot;{testimonial.testimonial}&quot;
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
