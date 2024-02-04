export default function ComingSoon() {
    const url = '/images/coming-soon.jpg'
    return (
        <div
            className="flex items-center justify-center w-screen h-screen bg-cover bg-center text-white"
            style={{ backgroundImage: `url('/images/ellies.png')` }}
        >
            <div className="bg-gray-900 bg-opacity-75 p-10 rounded-lg">
                <h1 className="text-4xl font-bold">Coming Soon!</h1>
            </div>
        </div>
    );
}