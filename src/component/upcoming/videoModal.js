import React, { useState } from 'react';
import styles from './modal.module.css'
const VideoModal = ({projectVideo}) => {
    const [videoUrl, setVideoUrl] = useState('');
    const [showModal, setShowModal] = useState(false);

    const playVideo = (url) => {
        setVideoUrl(url + "?autoplay=1");
        setShowModal(true); // Set the state to true to show the modal
      };
    const closeModal = () => {
      setShowModal(false); // Set the state to false to hide the modal
    };

    return (
        <>
          <span className="tag tag-red" onClick={() => playVideo(projectVideo)}>Play</span>
          {showModal && (
            <div 
            className={styles.extra_large_modal + " modal fade  bd-example-modal-lg show d-block"}
            tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div 
              className={styles.modal_dialog + " modal-dialog modal-lg"}
              >
                <div className="modal-content">
                  <button type="button" className={styles.close_icon + " close"} onClick={closeModal}>&times;</button>
                  <iframe id="videoFrame" title='videoplay' 
                  width="auto" height="700" src={videoUrl}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen></iframe>
                </div>
              </div>
            </div>
          )}
        </>
    )
}

export default VideoModal;
