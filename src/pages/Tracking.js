import React, { useState } from 'react';
import './Tracking.css';
import './Page.css';
import { fetchTrackingDetails } from '../services/api';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTrack = async (e) => {
    e.preventDefault();
    setError(null);
    setTrackingResult(null);
    
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    setLoading(true);
    try {
      const data = await fetchTrackingDetails(trackingNumber.trim());
      
      // Transform API response to match component expectations
      // Backend returns: number, awbDate, status, statusDate, statusTime, origin, destination,
      // statusReceiver, shipperName, statusRemark, weight, pieces, forwardName, forwardNo,
      // consigneeName, podImage, carrier, history
      setTrackingResult({
        number: data.number || data.awbNo || trackingNumber.trim(),
        status: data.status || data.dl_status || 'N/A',
        origin: data.origin || 'N/A',
        destination: data.destination || 'N/A',
        estimatedDelivery: data.estimatedDelivery || data.awbDate || null,
        currentLocation: data.currentLocation || data.destination || 'N/A',
        carrier: data.carrier || 'R A LOGISTICS',
        weight: data.weight || data.wt || 'N/A',
        dimensions: data.dimensions || 'N/A',
        cnNo: data.cnNo || data.number || trackingNumber.trim(),
        cnDate: data.cnDate || data.awbDate || null,
        consignorName: data.consignorName || data.shipperName || data.shp_name || 'N/A',
        noOfBox: data.noOfBox || data.pieces || data.pcs || 'N/A',
        fwdToBranch: data.fwdToBranch || data.forwardName || data.fwd_name || 'N/A',
        forwardNo: data.forwardNo || data.fwd_no || null,
        consignee: data.consignee || data.consigneeName || data.con_name || 'N/A',
        podImage: data.podImage || data.pod_img || null,
        statusDate: data.statusDate || data.dl_statusdate || data.awbDate || null,
        statusTime: data.statusTime || data.dl_statustime || null,
        statusReceiver: data.statusReceiver || data.dl_statusrec || 'N/A',
        statusRemark: data.statusRemark || data.dl_statusremk || '',
        history: data.history || []
      });
    } catch (err) {
      setError(err.message || 'Failed to fetch tracking details. Please try again.');
      setTrackingResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPOD = () => {
    if (trackingResult?.podImage) {
      try {
        // If it's a base64 data URL
        if (typeof trackingResult.podImage === 'string' && trackingResult.podImage.startsWith('data:image')) {
          // Extract base64 data
          const base64Data = trackingResult.podImage.split(',')[1] || trackingResult.podImage;
          const byteCharacters = atob(base64Data);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: 'image/jpeg' });
          
          // Create download link
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `POD_${trackingResult.number || 'tracking'}.jpg`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        } 
        // If it's a regular URL
        else if (typeof trackingResult.podImage === 'string' && trackingResult.podImage.startsWith('http')) {
          const link = document.createElement('a');
          link.href = trackingResult.podImage;
          link.download = `POD_${trackingResult.number || 'tracking'}.jpg`;
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } catch (error) {
        console.error('Error downloading POD image:', error);
        alert('Failed to download POD image. Please try again.');
      }
    }
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="container">
          <div className="tracking-section">
            <div className="tracking-form-container">
              <h2>Track Your Shipment</h2>
              <p>Enter your tracking number to get real-time updates on your shipment status.</p>
              {error && (
                <div style={{
                  padding: '15px',
                  marginBottom: '20px',
                  backgroundColor: '#fee',
                  color: '#c33',
                  borderRadius: '8px',
                  border: '1px solid #fcc'
                }}>
                  {error}
                </div>
              )}
              <form onSubmit={handleTrack} className="tracking-form">
                <input
                  type="text"
                  placeholder="Enter Tracking Number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="tracking-input"
                  required
                  disabled={loading}
                />
                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? 'Tracking...' : 'Track'}
                </button>
              </form>
            </div>

            {trackingResult && (
              <div className="tracking-result">
                <div className="tracking-header-bar">
                  <h2>R A LOGISTICS TRACKING SYSTEM</h2>
                </div>
                <div className="tracking-number-bar">
                  <span>Tracking No.#{trackingResult.number}</span>
                </div>
                
                <div className="tracking-header">
                  <h3>Shipment Details</h3>
                  <div className="tracking-number-display">
                    <span className="tracking-label">Tracking Number</span>
                    <span className="tracking-value">{trackingResult.number}</span>
                  </div>
                </div>

                <div className="tracking-info-grid">
                  <div className="info-card">
                    <div className="info-label">Status</div>
                    <div className="info-value">
                      <span className="status-badge">{trackingResult.status}</span>
                    </div>
                  </div>
                  <div className="info-card">
                    <div className="info-label">C/N No</div>
                    <div className="info-value">{trackingResult.cnNo || trackingResult.number}</div>
                  </div>
                  <div className="info-card">
                    <div className="info-label">AWB Date</div>
                    <div className="info-value">{trackingResult.cnDate || trackingResult.estimatedDelivery || 'N/A'}</div>
                  </div>
                  <div className="info-card">
                    <div className="info-label">Origin</div>
                    <div className="info-value">{trackingResult.origin}</div>
                  </div>
                  <div className="info-card">
                    <div className="info-label">Destination</div>
                    <div className="info-value">{trackingResult.destination}</div>
                  </div>
                  <div className="info-card">
                    <div className="info-label">Consignor Name</div>
                    <div className="info-value">{trackingResult.consignorName || 'N/A'}</div>
                  </div>
                  <div className="info-card">
                    <div className="info-label">Pieces</div>
                    <div className="info-value">{trackingResult.noOfBox || 'N/A'}</div>
                  </div>
                  <div className="info-card">
                    <div className="info-label">Forward Name</div>
                    <div className="info-value">{trackingResult.fwdToBranch || 'N/A'}</div>
                  </div>
                  {trackingResult.forwardNo && (
                    <div className="info-card">
                      <div className="info-label">Forward No</div>
                      <div className="info-value">{trackingResult.forwardNo}</div>
                    </div>
                  )}
                  <div className="info-card">
                    <div className="info-label">Consignee</div>
                    <div className="info-value">{trackingResult.consignee || 'N/A'}</div>
                  </div>
                  <div className="info-card">
                    <div className="info-label">Status Date</div>
                    <div className="info-value">{trackingResult.statusDate || trackingResult.estimatedDelivery}</div>
                  </div>
                  <div className="info-card">
                    <div className="info-label">Status Time</div>
                    <div className="info-value">{trackingResult.statusTime || 'N/A'}</div>
                  </div>
                  <div className="info-card">
                    <div className="info-label">Weight</div>
                    <div className="info-value">{trackingResult.weight}</div>
                  </div>
                  {trackingResult.podImage && (
                    <div className="info-card pod-card">
                      <div className="info-label">POD Image</div>
                      <div className="pod-image-container">
                        {trackingResult.podImage && typeof trackingResult.podImage === 'string' && 
                         (trackingResult.podImage.startsWith('data:image') || trackingResult.podImage.startsWith('http')) ? (
                          <>
                            <img 
                              src={trackingResult.podImage} 
                              alt="Proof of Delivery" 
                              className="pod-image"
                              onError={(e) => {
                                console.error('Error loading POD image:', e);
                                e.target.style.display = 'none';
                                const errorMsg = e.target.nextSibling;
                                if (errorMsg) {
                                  errorMsg.style.display = 'block';
                                }
                              }}
                            />
                            <div style={{ display: 'none', padding: '10px', textAlign: 'center', color: '#c33' }}>
                              Failed to load image
                            </div>
                            <button 
                              onClick={handleDownloadPOD}
                              className="download-pod-btn"
                              title="Download POD Image"
                            >
                              ⬇ Download POD
                            </button>
                          </>
                        ) : (
                          <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                            POD Image data available but format not supported for display
                            <br />
                            <button 
                              onClick={handleDownloadPOD}
                              className="download-pod-btn"
                              style={{ marginTop: '10px' }}
                              title="Try Download POD Image"
                            >
                              ⬇ Try Download
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="tracking-history">
                  <h4>Shipment History</h4>
                  <div className="history-timeline">
                    {trackingResult.history.map((item, index) => (
                      <div key={index} className="history-item">
                        <div className="history-date">
                          <strong>{item.date}</strong>
                          <span>{item.time}</span>
                        </div>
                        <div className="history-details">
                          <p className="history-status">{item.status}</p>
                          {item.remark && <p className="history-location">{item.remark}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;

