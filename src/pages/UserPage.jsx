import { useParams } from "react-router-dom";

export default function UserPage() {
  const { wallet } = useParams();
  const jobsApplying = [
    { Company: "Websidyn", Role: "Dev" },
    { Company: "Google", Role: "Dev" },
    { Company: "Microsoft", Role: "Dev" },
    { Company: "Google", Role: "Dev" },
    { Company: "Microsoft", Role: "Dev" },
  ];
  return (
    <div>
      <div className="w-[86%] m-auto mt-[40px]">
        <h2
          className="text-4xl md:text-3xl xl:text-5xl font-bold tracking-tight mb-12"
          style={{ color: "hsl(218, 81%, 95%)" }}
        >
          Jobs Applied
        </h2>
        <div className="grid grid-cols-4 gap-x-4 gap-y-8 my-[40px]">
          {jobsApplying.map((job) => (
            <div className="relative group w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <div className="space-y-2">
                  <p className="text-xl font-bold tracking-tight text-black">
                    {job.Company}
                  </p>
                  <p className="text-gray-500">{job.Role}</p>
                  <a
                    href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background"
                    className="block text-[16px] text-indigo-400 group-hover:text-indigo-800 transition duration-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Check deets {"->"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-[86%] m-auto bg-white text-white py-[1px]" />
      <div className="w-[86%] m-auto my-[40px]">
        <h2
          className="text-4xl md:text-3xl xl:text-5xl font-bold tracking-tight mb-12"
          style={{ color: "hsl(218, 81%, 95%)" }}
        >
          Hiring Candidates
        </h2>
        <div className="grid grid-cols-4 gap-x-4 gap-y-8 mt-[40px]">
          {jobsApplying.map((job) => (
            <div className="relative group w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <div className="space-y-2">
                  <p className="text-xl font-bold tracking-tight text-black">
                    {job.Company}
                  </p>
                  <p className="text-gray-500">{job.Role}</p>
                  <a
                    href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background"
                    className="block text-[16px] text-indigo-400 group-hover:text-indigo-800 transition duration-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Check deets {"->"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
