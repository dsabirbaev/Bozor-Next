
import useModalStore from '@/stores/modalStore';

const LoginModal = () => {
  
  
  const { isOpen, closeModal } = useModalStore();

  return (
    
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-200">
          <div>
            {/* Modal content goes here */}
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </div>
      )}
  </>
    
   
  )
}

export default LoginModal;