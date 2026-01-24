import { getPageData } from "@/lib/notion";
import NotionPage from "../components/NotionPage";

export default async function Page() {
    const rootPageId = "2db582d664d9808c95e0fa5afd3d7bd5"; 

    const recordMap = await getPageData(rootPageId);

    return (
        <main>
            <NotionPage recordMap={recordMap} rootPageId={rootPageId} />
        </main>
    )
}