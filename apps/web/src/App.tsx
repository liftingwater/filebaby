import { useState, useEffect } from 'react'
import './App.css'

interface BackendStatus {
  isReachable: boolean
  message: string
  loading: boolean
}

function App() {
  const [status, setStatus] = useState<BackendStatus>({
    isReachable: false,
    message: 'Checking connection...',
    loading: true,
  })

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch('https://filebaby-api-qlkjj.sevalla.app/healthcheck')

        if (response.status === 200) {
          setStatus({
            isReachable: true,
            message: 'Can reach the backend.',
            loading: false,
          })
        } else {
          setStatus({
            isReachable: false,
            message: "Can't reach the backend.",
            loading: false,
          })
        }
      } catch (error) {
        setStatus({
          isReachable: false,
          message: "Can't reach the backend.",
          loading: false,
        })
      }
    }

    checkBackend()
  }, [])

  return (
    <div className="app-container">
      <div className="app-content">
        <h1>FileBaby</h1>
        <p className="subtitle">File sharing made simple</p>

        <div className={`status-card ${status.isReachable ? 'success' : 'error'}`}>
          <div className="status-indicator">
            {status.loading ? (
              <div className="spinner"></div>
            ) : (
              <div className={`dot ${status.isReachable ? 'online' : 'offline'}`}></div>
            )}
          </div>
          <p className="status-message">{status.message}</p>
        </div>

        <div className="info-section">
          <h2>About FileBaby</h2>
          <p>A modern file-sharing application with a Deno backend and React frontend.</p>
        </div>
      </div>
    </div>
  )
}

export default App
