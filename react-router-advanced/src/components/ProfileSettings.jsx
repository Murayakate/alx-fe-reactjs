import { useState } from 'react'
import '../styles/ProfileSettings.css'

function ProfileSettings() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    privacy: 'public',
    theme: 'light',
  })

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="profile-settings">
      <h2>Settings</h2>
      <div className="settings-form">
        <div className="setting-item">
          <label>
            <input 
              type="checkbox" 
              checked={settings.notifications}
              onChange={(e) => handleChange('notifications', e.target.checked)}
            />
            Enable Notifications
          </label>
        </div>

        <div className="setting-item">
          <label>
            <input 
              type="checkbox" 
              checked={settings.emailUpdates}
              onChange={(e) => handleChange('emailUpdates', e.target.checked)}
            />
            Email Updates
          </label>
        </div>

        <div className="setting-item">
          <label htmlFor="privacy">Privacy Setting:</label>
          <select 
            id="privacy"
            value={settings.privacy}
            onChange={(e) => handleChange('privacy', e.target.value)}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="friends">Friends Only</option>
          </select>
        </div>

        <div className="setting-item">
          <label htmlFor="theme">Theme:</label>
          <select 
            id="theme"
            value={settings.theme}
            onChange={(e) => handleChange('theme', e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </div>

        <button className="save-btn">Save Settings</button>
      </div>
      <p className="nested-route-info">This is a nested route: /profile/settings</p>
    </div>
  )
}

export default ProfileSettings
