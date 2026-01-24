import { getPageData } from "@/lib/notion";
import NotionPage from "../components/NotionPage";
import { parsePageId } from "notion-utils";
interface props{
   params: Promise<{ pageId: string }>;
}
export default async function DynamicNotionPage({ params }: props) {
    const { pageId: rawId } = await params;
    const pageId = parsePageId(rawId)
    const recordMap = await getPageData(String(pageId));
    return (
        <main>
            {<NotionPage recordMap={recordMap} rootPageId={String(pageId)}/>}
        </main>
    )
}