import {Client} from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getALLPosts = async () => {
    const posts = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID as string,
        page_size: 100, 
    });
    const getALLPosts = posts.results;

    return getALLPosts.map((post) => {
        return getPageMetaData(post);
    });
}

const getPageMetaData = (post) => {

    const getTags = (tags) => {
        const allTags = tags.map((tag) => {
            return tag.name
        });
        return allTags;
    }

    return {
        // post,
        id: post.id,
        title: post.properties.Name.title[0].plain_text,
        description: post.properties.Description.rich_text[0].plain_text,
        date: post.properties.Date.date.start,
        slug: post.properties.Slug.rich_text[0].plain_text,
        tags: getTags(post.properties.Tags.multi_select),
    }
};

export const getSinglePost = async (slug) => {
    const response = await notion.databases.query({
         database_id: process.env.NOTION_DATABASE_ID,
         filter: {
            property: "Slug",
            formula: {
                string: {
                    equals: slug,
                },
            },
         },
    });

    const page = response.results[0];
    const metadata = getPageMetaData(page);
    // console.log(metaData);

    const mdBlocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdBlocks);
    console.log(mdString);

    return {
        metadata,
        markdown: mdString,
    }
}