import { Toast, ToastContainer } from 'react-bootstrap';
import { useAppContext } from '../context/AppProvider.jsx';

export default function ToastNotification() {
  const { toastConfig, hideToast } = useAppContext();

  return (
    <ToastContainer position="bottom-end" className="p-4" style={{ zIndex: 9999, position: 'fixed' }}>
      <Toast 
        show={toastConfig.show} 
        onClose={hideToast} 
        delay={3000} 
        autohide
        bg={toastConfig.variant}
      >
        <Toast.Header>
          <strong className="me-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body className={toastConfig.variant === 'light' ? 'text-dark' : 'text-white'}>
          {toastConfig.message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
