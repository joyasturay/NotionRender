import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';
const notion = new NotionAPI();

export const getPageData = async (pageId: string): Promise<ExtendedRecordMap> => {
  const recordMap = await notion.getPage(pageId);
  return recordMap;
};