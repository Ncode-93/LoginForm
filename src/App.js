// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (

//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';

// const countries = [
//   { code: 'us', name: 'United States', phone: '1', flag: 'https://flagcdn.com/w20/us.png' },
//   { code: 'gb', name: 'United Kingdom', phone: '44', flag: 'https://flagcdn.com/w20/gb.png' },
//   { code: 'fr', name: 'France', phone: '33', flag: 'https://flagcdn.com/w20/fr.png' },
//   { code: 'de', name: 'Germany', phone: '49', flag: 'https://flagcdn.com/w20/de.png' },
//   { code: 'jp', name: 'Japan', phone: '81', flag: 'https://flagcdn.com/w20/jp.png' },
//   // Add more countries as needed
// ];

// const LoginForm = () => {
//   const [activeForm, setActiveForm] = useState('A');
//   const [formA, setFormA] = useState({ name: '', country: '', phoneNumber: '' });
//   const [formB, setFormB] = useState({ name: '', country: '', phoneNumber: '' });

//   useEffect(() => {
//     const storedFormA = JSON.parse(localStorage.getItem('formA'));
//     const storedFormB = JSON.parse(localStorage.getItem('formB'));
//     if (storedFormA) setFormA(storedFormA);
//     if (storedFormB) setFormB(storedFormB);
//   }, []);

//   const handleChange = (form, field, value) => {
//     const setForm = form === 'A' ? setFormA : setFormB;
//     setForm(prevForm => {
//       const newForm = { ...prevForm, [field]: value };
//       localStorage.setItem(`form${form}`, JSON.stringify(newForm));
//       return newForm;
//     });
//   };

//   const handleNameChange = (e) => {
//     const value = e.target.value.replace(/[^A-Za-z]/ig, '');
//     handleChange(activeForm, 'name', value);
//   };

//   const handleCountryChange = (e) => {
//     const selectedCountry = e.target.value;
//     handleChange(activeForm, 'country', selectedCountry);
//     const countryData = countries.find(c => c.code === selectedCountry);
//     if (countryData) {
//       handleChange(activeForm, 'phoneNumber', `+${countryData.phone} `);
//     }
//   };

//   const handlePhoneChange = (e) => {
//     const value = e.target.value;
//     const numberPart = value.split(' ')[1] || '';
//     const newNumber = value.split(' ')[0] + ' ' + numberPart.replace(/\D/g, '');
//     handleChange(activeForm, 'phoneNumber', newNumber);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = activeForm === 'A' ? formA : formB;
//     console.log(`Form ${activeForm} submitted:`, formData);
//     // Here you would typically send the data to your backend
//   };

//   const currentForm = activeForm === 'A' ? formA : formB;

//   return (
//     <div style={{maxWidth: '400px', margin: '40px auto', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)'}}>
//       <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
//         <button 
//           onClick={() => setActiveForm('A')} 
//           style={{
//             padding: '10px 20px',
//             marginRight: '10px',
//             backgroundColor: activeForm === 'A' ? '#007bff' : '#f8f9fa',
//             color: activeForm === 'A' ? 'white' : 'black',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }}
//         >
//           Form A
//         </button>
//         <button 
//           onClick={() => setActiveForm('B')} 
//           style={{
//             padding: '10px 20px',
//             backgroundColor: activeForm === 'B' ? '#007bff' : '#f8f9fa',
//             color: activeForm === 'B' ? 'white' : 'black',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }}
//         >
//           Form B
//         </button>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div style={{marginBottom: '20px'}}>
//           <label style={{display: 'block', marginBottom: '5px'}} htmlFor="name">
//             Name
//           </label>
//           <input
//             id="name"
//             type="text"
//             value={currentForm.name}
//             onChange={handleNameChange}
//             placeholder="Enter your name"
//             required
//             style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd'}}
//           />
//         </div>
//         <div style={{marginBottom: '20px'}}>
//           <label style={{display: 'block', marginBottom: '5px'}} htmlFor="country">
//             Country
//           </label>
//           <select
//             id="country"
//             value={currentForm.country}
//             onChange={handleCountryChange}
//             required
//             style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd'}}
//           >
//             <option value="">Select a country</option>
//             {countries.map((country) => (
//               <option key={country.code} value={country.code}>
//                 {country.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div style={{marginBottom: '20px'}}>
//           <label style={{display: 'block', marginBottom: '5px'}} htmlFor="phone">
//             Phone Number
//           </label>
//           <div style={{display: 'flex', alignItems: 'center'}}>
//             {currentForm.country && (
//               <img 
//                 src={countries.find(c => c.code === currentForm.country)?.flag} 
//                 alt="Country flag" 
//                 style={{width: '20px', marginRight: '10px'}}
//               />
//             )}
//             <input
//               id="phone"
//               type="tel"
//               value={currentForm.phoneNumber}
//               onChange={handlePhoneChange}
//               placeholder="Enter your phone number"
//               required
//               style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd'}}
//             />
//           </div>
//         </div>
//         <button type="submit" style={{width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
//           Submit Form {activeForm}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;




import React, { useState, useEffect } from 'react';

const LoginForm = () => {
  const [activeForm, setActiveForm] = useState('A');
  const [formA, setFormA] = useState({ name: '', country: '', phoneNumber: '' });
  const [formB, setFormB] = useState({ name: '', country: '', phoneNumber: '' });
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,cca2,flags,idd')
      .then(response => response.json())
      .then(data => {
        const sortedCountries = data.sort((a, b) => 
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      })
      .catch(error => console.error('Error fetching countries:', error));

    const storedFormA = JSON.parse(localStorage.getItem('formA'));
    const storedFormB = JSON.parse(localStorage.getItem('formB'));
    if (storedFormA) setFormA(storedFormA);
    if (storedFormB) setFormB(storedFormB);
  }, []);

  const handleChange = (form, field, value) => {
    const setForm = form === 'A' ? setFormA : setFormB;
    setForm(prevForm => {
      const newForm = { ...prevForm, [field]: value };
      localStorage.setItem(`form${form}`, JSON.stringify(newForm));
      return newForm;
    });
  };

  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z]/ig, '');
    handleChange(activeForm, 'name', value);
  };

  // const handleCountryChange = (e) => {
    

const handleCountryChange = (e) => {
  <input
  type="text"
  placeholder="Search countries..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd'}}
/>

  // {countries
  //   .filter(country => 
  //     country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  //   .map((country) => (
  //     <option key={country.cca2} value={country.cca2}>
  //       {country.name.common}
  //     </option>
  //   ))
  // }
  // ... existing code ...
  const selectedCountry = countries.find(country => country.cca2 === e.target.value);
    handleChange(activeForm, 'country', selectedCountry.cca2);
    if (selectedCountry && selectedCountry.idd.root) {
      const phoneCode = selectedCountry.idd.root + (selectedCountry.idd.suffixes?.[0] || '');
      handleChange(activeForm, 'phoneNumber', phoneCode + ' ');
    }
  setSearchTerm(''); // Reset search term
};



    // const selectedCountry = countries.find(country => country.cca2 === e.target.value);
    // handleChange(activeForm, 'country', selectedCountry.cca2);
    // if (selectedCountry && selectedCountry.idd.root) {
    //   const phoneCode = selectedCountry.idd.root + (selectedCountry.idd.suffixes?.[0] || '');
    //   handleChange(activeForm, 'phoneNumber', phoneCode + ' ');
    // }
  // };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const [, nationalNumber] = value.split(' ');
    const selectedCountry = countries.find(country => country.cca2 === currentForm.country);
    if (selectedCountry && selectedCountry.idd.root) {
      const phoneCode = selectedCountry.idd.root + (selectedCountry.idd.suffixes?.[0] || '');
      const newNumber = phoneCode + ' ' + (nationalNumber || '').replace(/\D/g, '');
      handleChange(activeForm, 'phoneNumber', newNumber);
    } else {
      handleChange(activeForm, 'phoneNumber', value.replace(/\D/g, ''));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = activeForm === 'A' ? formA : formB;
    console.log(`Form ${activeForm} submitted:`, formData);
    // Here you would typically send the data to your backend
  };

  const currentForm = activeForm === 'A' ? formA : formB;

  return (
    <div style={{maxWidth: '400px', margin: '40px auto', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)'}}>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
        <button 
          onClick={() => setActiveForm('A')} 
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: activeForm === 'A' ? '#007bff' : '#f8f9fa',
            color: activeForm === 'A' ? 'white' : 'black',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Form A
        </button>
        <button 
          onClick={() => setActiveForm('B')} 
          style={{
            padding: '10px 20px',
            backgroundColor: activeForm === 'B' ? '#007bff' : '#f8f9fa',
            color: activeForm === 'B' ? 'white' : 'black',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Form B
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: '20px'}}>
          <label style={{display: 'block', marginBottom: '5px'}} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={currentForm.name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
            style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd'}}
          />
        </div>
        <div style={{marginBottom: '20px'}}>
          <label style={{display: 'block', marginBottom: '5px'}} htmlFor="country">
            Country
          </label>
          <select
            id="country"
            value={currentForm.country}
            onChange={handleCountryChange}
            required
            style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd'}}
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country.cca2} value={country.cca2}>
                {country.name.common}
              </option>
            ))}
          </select>
        </div>
        <div style={{marginBottom: '20px'}}>
          <label style={{display: 'block', marginBottom: '5px'}} htmlFor="phone">
            Phone Number
          </label>
          <div style={{display: 'flex', alignItems: 'center'}}>
            {currentForm.country && (
              <img 
                src={countries.find(c => c.cca2 === currentForm.country)?.flags.png} 
                alt="Country flag" 
                style={{width: '20px', marginRight: '10px'}}
              />
            )}
            <input
              id="phone"
              type="tel"
              value={currentForm.phoneNumber}
              onChange={handlePhoneChange}
              placeholder="Enter your phone number"
              required
              style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd'}}
            />
          </div>
        </div>
        <button type="submit" style={{width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
          Submit Form {activeForm}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;