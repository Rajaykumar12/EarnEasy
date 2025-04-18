import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div role="alert" className='max-w-md mx-auto mt-10'>
                <div class="bg-red-700 text-white rounded-t-lg px-4 py-2 text-center">
                    404 Not Found
                </div>
                <div class="border border-t-0 border-red-400 rounded-b-lg bg-red-100 px-4 py-3 text-red-700 text-center">
                    <p>Something went wrong!</p>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="bg-black rounded-md text-white cursor-pointer text-center p-4"
                        onClick={() => {
                            navigate('/dashboard')
                        }}>
                        Go to Dashboard
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage