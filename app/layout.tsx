import "styles/globals.css";

export const metadata = {
    title: "NER SoloLive",
    description: "NER SCCA Solo live timing",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="bg-slate-200 pb-20 min-h-screen">
                    <div className="lg:w-1/2 mx-auto">{children}</div>
                </div>
            </body>
        </html>
    );
}
