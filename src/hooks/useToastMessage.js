import { toast } from 'react-toastify';

const useToastMessage = (message, state) => {
  if (state === 'success') {
    toast.success(message, {
      autoClose: 3000,
      position: toast.POSITION.TOP_RIGHT,
      draggable: false,
    });
  }
  if (state === 'error') {
    toast.error(message, {
      autoClose: 3000,
      position: toast.POSITION.TOP_RIGHT,
      draggable: false,
    });
  }
};

export default useToastMessage;
