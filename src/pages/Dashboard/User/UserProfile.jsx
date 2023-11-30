import useAuth from "../../../hooks/useAuth";

const UserProfile = () => {
    const { user } = useAuth();
    const email = user?.email;
    const name = user?.displayName;
    const img = user?.photoURL;

    return (
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center mt-20">
            <h1 className="text-2xl font-serif text-[#219f85]">Current user:</h1>
            <div className="max-w-3xl mx-auto">
                <img src={img} alt="" className="w-48 h-48 rounded-full object-cover" />
            </div>
            <div className="text-black font-serif text-xl mt-4">
                <h1 className="mb-2">
                    <span className="text-blue-600">User name: </span>{name}
                </h1>
                <h1>
                    <span className="text-blue-600">User email: </span>{email}
                </h1>
            </div>
        </div>
    );
};

export default UserProfile;
