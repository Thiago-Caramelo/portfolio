import {
  CloudIcon,
  PaperAirplaneIcon,
  CodeBracketIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Azure",
    description:
      "Efficient and custom software solutions to drive business value, leveraging extensive expertise in Microsoft Azure.",
    icon: CloudIcon,
  },
  {
    name: ".NET and React",
    description:
      "Building comprehensive, full-stack web solutions using .NET and React, creating highly efficient and scalable applications tailored to business needs.",
    icon: CodeBracketIcon,
  },
  {
    name: "Telegram bots",
    description:
      "Custom Telegram Bots tailored to any workflow, seamlessly integrating with external systems and APIs. Whether it's handling complex interactions or automating business processes.",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Legacy .NET maintenance",
    description:
      "Extensive experience working with .NET legacy systems, offering seamless migration to cloud-native environments in Azure. With a deep understanding of legacy architectures and cloud modernization strategies.",
    icon: AdjustmentsHorizontalIcon,
  },
];

export default function Home() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
