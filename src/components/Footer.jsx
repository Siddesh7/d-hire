export default function Footer() {
  return (
    <div className="max-w-2xl mx-auto text-white pt-10 pb-[6px]">
      <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
        <p className="order-2 md:order-1 mt-8 md:mt-0"> d-Hire. </p>
        <div className="order-1 md:order-2">
          <span className="px-2">App</span>
          <span className="px-2 border-l">Create a Profile</span>
        </div>
      </div>
    </div>
  );
}
