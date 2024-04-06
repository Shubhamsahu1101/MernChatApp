import toast from 'react-hot-toast';

export const customToast = (props) => {
    toast.success(props.newMessage)
}