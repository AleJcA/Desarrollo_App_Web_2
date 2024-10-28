import CardAbout from "@/Components/CardAbout";


export default function page({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <main>
                <CardAbout h5="Noteworthy technology acquisitions 2021"
                           p="Here are the biggest enterprise technology acquisitions of 2021 so far, 
                              in reverse chronological order.">
                </CardAbout>
                {children}

            </main>
        </>

    );
}