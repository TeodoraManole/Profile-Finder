import { useContext } from "react"
import AlertContext from "../../context/alert/AlertContext"


function Alert() {
    const {alert} = useContext(AlertContext)

    return alert !== null && (
        <p className="flex items-start mb-4 space-x-2">
            {alert.type === 'error' && (
                 <svg
                 className='w-6 h-6 stroke-current mr-3'
                 fill='none'
                 viewBox='0 0 24 24'
               >
                
                 <path
                   strokeLinecap='round'
                   strokeLinejoin='round'
                   stroke = '#960402'
                   strokeWidth='2'
                   d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
                 ></path>
               </svg>
            )}
            <p className="flex-1 text-base leading-7 text-white">
                <strong><i>{alert.msg}</i></strong>
            </p>

        </p>
    )
}

export default Alert