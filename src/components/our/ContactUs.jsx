"use client"
import Image from "next/image";
import IconLocation from '@/assets/images/location_icon.png'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function ContactUs() {

  const [form, setForm] = useState({ name: '', lastname: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Error enviando formulario');
      setForm({ name: '', lastname: '', email: '', message: '' });
      toast.success("Mensaje enviado!");
    } catch (err) {
      alert('Hubo un problema. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col px-4 md:px-20 py-16 md:py-14 text-center justify-center">
      <ToastContainer />
      <h2 className='text-center text-2xl font-semibold mb-6'>Contacto</h2>

      <div className="flex flex-col md:flex-row">
        <div className="flex w-full flex-col md:w-1/2">
          <div className="flex justify-center flex-col items-start">
            <div className="flex flex-col justify-center w-full px-6">
              <div className="mb-3 text-start">Encuentranos aquí:</div>
                <div className="flex">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6091.760641086751!2d-3.7729847163730432!3d40.233963129889005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41f53cd5798b49%3A0xf5a426f8544da94f!2sC.%20Pablo%20Casals%2C%2028981%20Parla%2C%20Madrid%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2spe!4v1760332588958!5m2!1ses-419!2spe" width="600" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"
                    className="w-[100%] md:w-[80%]"
                    height="360"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              <div className="flex mt-2 items-center">
                <Image src={IconLocation} alt="Ubicación Madrid - España" height={16} className="object-cover !h-6 mr-1"/>
                <span className="text-start md:text-center"><strong>Calle Pablo Casals, Madrid - España</strong></span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <div className="mb-3 mt-6 mt:pt-0">Comunícate con nosotros:</div>
          <div className="bg-[#e1ecf191] py-8 px-4 md:px-8 rounded-lg mx-6">
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col items-start"
            >
              <label className="text-sm mb-1">Nombre y apellido:</label>
              <input 
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-white rounded-md w-full mb-6 p-2 text-sm" 
              />
              <label className="text-sm mb-1 mt-2">Correo electrónico:</label>
              <input 
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-white rounded-md w-full mb-6 p-2 text-sm" 
              />
              <label className="text-sm mb-1 mt-2">Mensaje:</label>
              <textarea 
                id="message" 
                className="bg-white rounded-md w-full mb-6 p-2 text-sm"
                style={{ resize: 'none' }}
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                required
              ></textarea>
              <div className="flex justify-center w-full mt-4">
                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-[#bce2f3] text-black cursor-pointer text-sm rounded-md px-3 py-2"
                >
                  {loading ? 'Enviando…' : 'Enviar mensaje'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
