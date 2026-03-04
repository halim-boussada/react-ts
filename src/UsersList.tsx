import { useEffect, useState } from 'react';
import type { User, UsersResponse } from './types/user';
import './UsersList.css';

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data: UsersResponse = await response.json();
        setUsers(data.users);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="users-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="users-container">
        <div className="error">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="users-container">
      <header className="users-header">
        <h1>Our Team</h1>
        <p className="users-count">{users.length} amazing people</p>
      </header>

      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-card-header">
              <div className="user-avatar-wrapper">
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="user-avatar"
                />
                <span className={`status-badge ${user.role}`}>{user.role}</span>
              </div>
            </div>

            <div className="user-card-body">
              <h2 className="user-name">
                {user.firstName} {user.lastName}
              </h2>
              <p className="user-username">@{user.username}</p>

              <div className="user-info">
                <div className="info-item">
                  <span className="info-icon">💼</span>
                  <div className="info-content">
                    <p className="info-label">Position</p>
                    <p className="info-value">{user.company.title}</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">🏢</span>
                  <div className="info-content">
                    <p className="info-label">Company</p>
                    <p className="info-value">{user.company.name}</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">📧</span>
                  <div className="info-content">
                    <p className="info-label">Email</p>
                    <p className="info-value">{user.email}</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">📱</span>
                  <div className="info-content">
                    <p className="info-label">Phone</p>
                    <p className="info-value">{user.phone}</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div className="info-content">
                    <p className="info-label">Location</p>
                    <p className="info-value">
                      {user.address.city}, {user.address.stateCode}
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">🎓</span>
                  <div className="info-content">
                    <p className="info-label">University</p>
                    <p className="info-value">{user.university}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="user-card-footer">
              <div className="user-stats">
                <div className="stat">
                  <span className="stat-label">Age</span>
                  <span className="stat-value">{user.age}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Department</span>
                  <span className="stat-value">{user.company.department}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
