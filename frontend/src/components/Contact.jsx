import { useState } from 'react';
import axios from 'axios';
import './Contact.css';  // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post('http://localhost:5000/api/contact', formData);
  //     alert('Message sent successfully!');
  //     setFormData({ name: '', email: '', subject: '', message: '' });
  //   } catch (error) {
  //     console.error('Error sending message:', error);
  //     alert('Failed to send message');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Message sent !');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("error sending message ",error);
      alert('Failed to send message');
      
    

    }
    };
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          {/* <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          /> */}
        <input

        type='text'
        name = "name"
        placeholder='Your Name'
        value = {formData.name}
        onChange = {handleChange}
        required/>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
