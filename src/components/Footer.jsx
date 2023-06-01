const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex-col md:flex-row flex justify-between items-center  text-white">
        <div>
          <span className="text-lg font-bold">MovieWave</span>
          <span className="ml-2 text-gray-400">
            - The Best Streaming Platform
          </span>
        </div>
        <div>
          <span className="text-gray-400 ">
            <div className="flex-col md:flex-row">
              <p>© 2023 MovieWave. All rights reserved.</p>
              <p className="text-center">Created By Ritvik</p>
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
