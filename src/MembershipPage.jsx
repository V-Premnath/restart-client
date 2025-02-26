import  { useState } from 'react';

const MembershipSystem = () => {
  const [clubs, setClubs] = useState([
    { id: 1, name: 'Coding Club', members: [] },
    { id: 2, name: 'Drama Club', members: [] },
  ]);
  const [selectedClub, setSelectedClub] = useState(null);

  // Join a club (pending approval)
  const joinClub = (clubId) => {
    setClubs(clubs.map(club =>
      club.id === clubId ? { ...club, members: [...club.members, { id: club.members.length + 1, name: 'New Member', status: 'Pending Approval' }] } : club
    ));
  };

  // Approve a member
  const approveMember = (clubId, memberId) => {
    setClubs(clubs.map(club =>
      club.id === clubId
        ? {
            ...club,
            members: club.members.map(member =>
              member.id === memberId ? { ...member, status: 'Approved' } : member
            ),
          }
        : club
    ));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ color: '#2c3e50', textAlign: 'center', marginBottom: '20px' }}>Membership System</h1>

        {/* Club List */}
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {clubs.map(club => (
            <li
              key={club.id}
              style={{ padding: '15px', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span style={{ color: '#2c3e50' }}>{club.name}</span>
              <div>
                <button
                  onClick={() => setSelectedClub(club)}
                  style={{ padding: '8px 16px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}
                >
                  View Details
                </button>
                <button
                  onClick={() => joinClub(club.id)}
                  style={{ padding: '8px 16px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Join Club
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Selected Club Details */}
        {selectedClub && (
          <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <h2 style={{ color: '#3498db', marginBottom: '10px' }}>{selectedClub.name} Details</h2>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Members</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              {selectedClub.members.map(member => (
                <li
                  key={member.id}
                  style={{ padding: '10px', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <span style={{ color: '#2c3e50' }}>{member.name} - {member.status}</span>
                  {member.status === 'Pending Approval' && (
                    <button
                      onClick={() => approveMember(selectedClub.id, member.id)}
                      style={{ padding: '5px 10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      Approve
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedClub(null)}
              style={{ padding: '8px 16px', backgroundColor: '#e74c3c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
            >
              Close Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MembershipSystem;