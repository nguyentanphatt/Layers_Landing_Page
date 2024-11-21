import { type IntegrationsType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function IntegrationColumn(props: {
    integrations: IntegrationsType;
    className?: string;
}) {
    const { integrations, className } = props;
    return (
        <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
            {integrations.map((integraration) => (
                <div
                    key={integraration.name}
                    className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                >
                    <div className="flex justify-center">
                        <Image
                            src={integraration.icon}
                            alt={`${integraration.name} Icon`}
                            className="size-24"
                        />
                    </div>
                    <h3 className="text3xl text-center mt-6">
                        {integraration.name}
                    </h3>
                    <p className="text-center text-white/50 mt-2">
                        {integraration.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
