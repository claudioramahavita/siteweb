import { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            setError("Tous les champs sont obligatoires !");
            return;
        }
        setError("");
        alert("Message envoyé !");
    };

    return (
        <section className="container mx-auto px-6 py-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Nous Contacter</h2>
            <p className="mt-4 text-gray-600">Laissez-nous un message</p>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-6 bg-gray-100 p-6 rounded-lg shadow-lg">
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input
                    type="text"
                    name="name"
                    placeholder="Votre Nom"
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-gray-300 mb-4"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Votre Email"
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-gray-300 mb-4"
                />
                <textarea
                    name="message"
                    placeholder="Votre Message"
                    rows={5}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-gray-300 mb-4"
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                >
                    Envoyer
                </button>
            </form>
        </section>
    );
};

export default Contact;
