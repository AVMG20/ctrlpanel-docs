import exampleImage from '../../public/images/2024-09-24_15-04.png';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { CreditCard, Sliders, Code, Settings } from 'lucide-react';
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center">
            {/* Hero Section */}
            <section className="text-center py-32">
                <h1 className="text-6xl font-extrabold tracking-tight mb-6">
                    Ctrlpanel's Dashboard
                </h1>
                <p className="text-2xl mb-10 max-w-2xl mx-auto">
                    A free and open-source management panel for Pterodactyl with credit-based billing and extensive customization.
                </p>
                <Link href={'/docs'}>
                    <button className="px-8 py-4 bg-fd-primary-foreground text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                        Get Started
                    </button>
                </Link>
            </section>

            <ImageZoom src={exampleImage} alt={'Example of the dashboard'} priority={true} width={1400}/>

            {/* Features Section */}
            <section className="py-32 bg-opacity-5 w-full">
                <h2 className="text-4xl font-bold mb-16 text-center">
                    Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <CreditCard size={48} className="mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">
                            Credit-Based Billing
                        </h3>
                        <p className="text-lg">
                            Implement flexible billing with a credit-based system, allowing users to manage their resources efficiently.
                        </p>
                    </div>
                    {/* Feature 2 */}
                    <div className="flex flex-col items-center text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <Sliders size={48} className="mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">
                            Extensive Customization
                        </h3>
                        <p className="text-lg">
                            Customize the panel to suit your needs with a wide range of settings and options.
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="flex flex-col items-center text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <Code size={48} className="mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">
                            Open Source
                        </h3>
                        <p className="text-lg">
                            Fully open-source project, allowing you to contribute and enhance its capabilities.
                        </p>
                    </div>
                    {/* Feature 4 */}
                    <div className="flex flex-col items-center text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <Settings size={48} className="mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">
                            Easy Management
                        </h3>
                        <p className="text-lg">
                            Simplify server management with an intuitive interface and powerful tools.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
