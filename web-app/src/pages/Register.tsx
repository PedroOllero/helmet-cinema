const Register: React.FC = () => {
    return(
        <div className="flex flex-col min-h-[91dvh] bg-red-600 justify-center items-center">
            <h1 className="text-4xl font-bold text-center py-4 my-8">Regist quickly!</h1>
            <form className="flex flex-col justify-center items-center">
                <div className="w-90 flex flex-col gap-2">
                    <label className="text-xl">Last Name</label>
                    <input type="text" className="text-input-standard" />
                </div>
                <div className="w-90 flex flex-col gap-2">
                    <label className="text-xl">First Name</label>
                    <input type="text" className="text-input-standard" />
                </div>
                <div className="w-90 flex flex-col gap-2">
                    <label className="text-xl">Email</label>
                    <input type="text" className="text-input-standard" />
                </div>
                <div className="w-90 flex flex-col gap-2">
                    <label className="text-xl">Password</label>
                    <input type="text" className="text-input-standard" />
                </div>
                <button className="px-6 py-3 bg-red-400 hover-standard">Submit</button>
            </form>
        </div>
    )
}

export default Register;