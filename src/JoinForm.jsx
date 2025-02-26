import  { useState } from 'react';

const JoinClubForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    email: '',
    club: '',
    collegeId: '',
    reason: '',
  });

  const clubs = [
    { id: 1, name: 'Coding Club' },
    { id: 2, name: 'Drama Club' },
    { id: 3, name: 'Music Club' },
    { id: 4, name: 'Sports Club' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Your request has been submitted successfully!');
    setFormData({
      name: '',
      year: '',
      email: '',
      club: '',
      collegeId: '',
      reason: '',
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ color: '#2c3e50', textAlign: 'center', marginBottom: '20px' }}>Join Club Request Form</h1>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', color: '#2c3e50', marginBottom: '5px' }}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #3498db', borderRadius: '4px' }}
            />
          </div>

          {/* Year Field */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', color: '#2c3e50', marginBottom: '5px' }}>Year:</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Enter your academic year"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #3498db', borderRadius: '4px' }}
            />
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', color: '#2c3e50', marginBottom: '5px' }}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #3498db', borderRadius: '4px' }}
            />
          </div>

          {/* Select Club Field */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', color: '#2c3e50', marginBottom: '5px' }}>Select Club:</label>
            <select
              name="club"
              value={formData.club}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #3498db', borderRadius: '4px' }}
            >
              <option value="">Select a club</option>
              {clubs.map(club => (
                <option key={club.id} value={club.name}>
                  {club.name}
                </option>
              ))}
            </select>
          </div>

          {/* College ID Field */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', color: '#2c3e50', marginBottom: '5px' }}>College ID:</label>
            <input
              type="text"
              name="collegeId"
              value={formData.collegeId}
              onChange={handleChange}
              placeholder="Enter your college ID"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #3498db', borderRadius: '4px' }}
            />
          </div>

          {/* Reason to Join Field */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#2c3e50', marginBottom: '5px' }}>Reason to Join:</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Why do you want to join this club?"
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #3498db', borderRadius: '4px', resize: 'vertical' }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{ padding: '10px 20px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinClubForm;