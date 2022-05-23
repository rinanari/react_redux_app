import React from 'react';
import './styles/modal.less'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeModal } from './actions/users';
import Card from './Card';

const Modal = ({children}) => {
    const isModal = useSelector((state)=> state.users.isModal )
    const dispatch = useDispatch();
    const dispatchCloseModal = () => {
      dispatch(closeModal())
    }
    const history = useNavigate()
    const {id} = useParams()
    const user = useSelector(state => state.user.data)
   
    useEffect(() => {
      dispatch(getCurrentUser(id))
  }, [])

 return (
     
    <div className='modal'>
         
            <div className="modal-content">
                <div className="avatar-container">
                    <img src={user.avatar} className='avatar' alt="Аватар пользователя" />
                </div>
                <div className="info-name-email">
                <h1>{user.first_name} {user.last_name}</h1>
               <div>Email:<a href={`mailto:${user.email}`}> {user.email}</a></div>
                </div>
            </div>
        
    </div>
 );
};

export default Modal