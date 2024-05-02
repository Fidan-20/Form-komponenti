import React, { useState } from 'react';

const Formkomponenti = () => {
  const [ad, setAd] = useState('');
  const [soyad, setSoyad] = useState('');
  const [telefon, setTelefon] = useState('');
  const [email, setEmail] = useState('');
  const [serh, setSerh] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ad && soyad && telefon && email && serh) {
      console.log({
        ad,
        soyad,
        telefon,
        email,
        serh
      });

      alert('Məlumatlar uğurla göndərildi!');

      setAd('');
      setSoyad('');
      setTelefon('');
      setEmail('');
      setSerh('');
    } else {
      alert('Zəhmət olmasa, bütün sahələri doldurun!');
    }
  };

  return (
    <div className="form">
      <h1>Form komponenti</h1>
      <form onSubmit={handleSubmit}>
        Ad <br /> 
        <input type="text"  value={ad} onChange={(e) => setAd(e.target.value)} /> <br />
        Soyad <br /> 
        <input type="text"  value={soyad}   onChange={(e) => setSoyad(e.target.value)} /> <br />
        Telefon <br />
        <input type="tel" value={telefon} onChange={(e) => setTelefon(e.target.value)} /> <br />
        E-mail <br />
        <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
        Şərh <br />
        <textarea rows={7}  value={serh} onChange={(e) => setSerh(e.target.value)} /> <br />
        <button type="submit">Göndər</button><br />
      </form>
    </div>
  );
};

export default Formkomponenti;
