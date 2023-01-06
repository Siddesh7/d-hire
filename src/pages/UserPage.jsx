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
    <div className="h-[100vh]">
      <div className="grid grid-cols-4 gap-4 space-y-4 w-[80%] m-auto">
        {jobsApplying.map((job) => (
          <div className="relative group w-full h-[100px]">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <div className="space-y-2">
                <p className="text-slate-800">
                  Learn how to make a glowing gradient background! {wallet}
                </p>
                <a
                  href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background"
                  className="block text-indigo-400 group-hover:text-slate-800 transition duration-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read Article →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
