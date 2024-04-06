import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        // console.log('Data to signup', { fullName, username, password, confirmPassword, gender })
        // const success = checkInputs({ fullName, username, password, confirmPassword, gender })
        // if (!success) return;

        setLoading(true);
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            })

            const data = await res.json();
            // console.log('From useSignup', data);
            if(data.error){
                throw new Error(data.error);
            }
            if (data.message) toast.error('In useSignup',data.message);
            else {
                toast.success('Signed up successfully');
                //localStorage
                localStorage.setItem('authUser', JSON.stringify(data));
                //context
                setAuthUser(data);
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

    return { loading, signup };
}

export default useSignup;

// const checkInputs = ({ fullName, username, password, confirmPassword, gender }) => {
//     if (!fullName || !username || !password || !confirmPassword || !gender) {
//         toast.error('All fields are required');
//         return false;
//     }

//     if (password !== confirmPassword) {
//         toast.error('Passwords do not match');
//         return false;
//     }

//     if (password.length < 6) {
//         toast.error('Password must be at least 6 characters');
//         return false;
//     }

//     return true;
// }