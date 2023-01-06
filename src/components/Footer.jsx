export default function Footer() {
  return (
    <div className="max-w-2xl mx-auto text-white py-10">
      <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
        <p className="order-2 md:order-1 mt-8 md:mt-0">
          {" "}
          © Beautiful Footer, 2021.{" "}
        </p>
        <div className="order-1 md:order-2">
          <span className="px-2">About us</span>
          <span className="px-2 border-l">Contact us</span>
          <span className="px-2 border-l">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}
