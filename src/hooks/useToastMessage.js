import { toast } from 'react-toastify';

const OPTIONS = {
  autoClose: 1500,
  position: toast.POSITION.TOP_RIGHT,
  draggable: false,
};

const useToastMessage = (message, state) => {
  if (state === 'success') {
    toast.success(message, OPTIONS);
  }
  if (state === 'error') {
    toast.error(message, OPTIONS);
  }
  if (state === 'warning') {
    toast.warning(message, OPTIONS);
  }
};

export default useToastMessage;
