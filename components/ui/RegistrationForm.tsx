"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function RegistrationForm() {
    const [namaLengkap, setNamaLengkap] = useState("");
    const [umur, setUmur] = useState("");
    const [jenisKelamin, setJenisKelamin] = useState("");
    const [domisili, setDomisili] = useState("");
    const [nomorWhatsapp, setNomorWhatsapp] = useState("");

    const [namaLengkapError, setNamaLengkapError] = useState("");
    const [umurError, setUmurError] = useState("");
    const [jenisKelaminError, setJenisKelaminError] = useState("");
    const [domisiliError, setDomisiliError] = useState("");
    const [nomorWhatsappError, setNomorWhatsappError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let isValid = true;

        if (!namaLengkap) {
            setNamaLengkapError("Nama Lengkap wajib diisi");
            isValid = false;
        } else {
            setNamaLengkapError("");
        }

        if (!umur) {
            setUmurError("Umur wajib diisi");
            isValid = false;
        } else if (!/^\d+$/.test(umur)) {
            setUmurError("Umur harus berupa angka");
            isValid = false;
        } else {
            setUmurError("");
        }

        if (!jenisKelamin) {
            setJenisKelaminError("Jenis Kelamin wajib diisi");
            isValid = false;
        } else {
            setJenisKelaminError("");
        }

        if (!domisili) {
            setDomisiliError("Domisili wajib diisi");
            isValid = false;
        } else {
            setDomisiliError("");
        }

        if (!nomorWhatsapp) {
            setNomorWhatsappError("Nomor Whatsapp wajib diisi");
            isValid = false;
        } else if (!/^\d+$/.test(nomorWhatsapp)) {
            setNomorWhatsappError("Nomor Whatsapp harus berupa angka");
            isValid = false;
        } else {
            setNomorWhatsappError("");
        }

        if (!isValid) {
            return;
        }

        const whatsappMessage = encodeURIComponent(
            `Assalamu'alaikum, saya ingin bergabung dengan OWOJ: ${namaLengkap}, ${umur}, ${jenisKelamin}, ${domisili}, ${nomorWhatsapp}.`
        );
        const whatsappLink = `https://wa.me/6289601181929?text=${whatsappMessage}`;
        window.location.href = whatsappLink;
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label
                    htmlFor="namaLengkap"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >
                    Nama Lengkap
                </label>
                <input
                    type="text"
                    id="namaLengkap"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Nama Lengkap Anda"
                    value={namaLengkap}
                    onChange={(e) => setNamaLengkap(e.target.value)}
                />
                {namaLengkapError && (
                    <p className="text-red-500 text-xs italic">
                        {namaLengkapError}
                    </p>
                )}
            </div>
            <div className="flex space-x-4">
                <div className="w-1/2">
                    <label
                        htmlFor="umur"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Umur
                    </label>
                    <input
                        type="number"
                        id="umur"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Umur Anda"
                        value={umur}
                        onChange={(e) => setUmur(e.target.value)}
                    />
                    {umurError && (
                        <p className="text-red-500 text-xs italic">
                            {umurError}
                        </p>
                    )}
                </div>
                <div className="w-1/2">
                    <label
                        htmlFor="jenisKelamin"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Jenis Kelamin
                    </label>
                    <select
                        id="jenisKelamin"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={jenisKelamin}
                        onChange={(e) => setJenisKelamin(e.target.value)}
                    >
                        <option value="">Pilih Jenis Kelamin</option>
                        <option>Laki-laki</option>
                        <option>Perempuan</option>
                    </select>
                    {jenisKelaminError && (
                        <p className="text-red-500 text-xs italic">
                            {jenisKelaminError}
                        </p>
                    )}
                </div>
            </div>
            <div>
                <label
                    htmlFor="domisili"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >
                    Domisili
                </label>
                <input
                    type="text"
                    id="domisili"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Domisili Anda"
                    value={domisili}
                    onChange={(e) => setDomisili(e.target.value)}
                />
                {domisiliError && (
                    <p className="text-red-500 text-xs italic">
                        {domisiliError}
                    </p>
                )}
            </div>
            <div>
                <label
                    htmlFor="nomorWhatsapp"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >
                    Nomor Whatsapp
                </label>
                <input
                    type="number"
                    id="nomorWhatsapp"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Contoh: 0812345678"
                    value={nomorWhatsapp}
                    onChange={(e) => setNomorWhatsapp(e.target.value)}
                />
                {nomorWhatsappError && (
                    <p className="text-red-500 text-xs italic">
                        {nomorWhatsappError}
                    </p>
                )}
            </div>
            <div>
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center space-x-2 w-full justify-center"
                >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Daftar</span>
                </button>
            </div>
        </form>
    );
}
