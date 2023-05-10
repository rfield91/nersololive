import ResultsNavigation from "components/navigation/ResultsNavigation";

export default function SoloLiveLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ResultsNavigation />
            {children}
        </>
    );
}
