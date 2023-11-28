const Text = ({ Heading }) => {
    return (
        <div>
            <div className=" text-center w-96 mx-auto mt-10 mb-14">
                <h1 className="text-[#219f85] uppercase text-3xl font-serif  border-b-2 border-x-0 p-4">{Heading}</h1>
            </div>
        </div>
    );
};

export default Text;