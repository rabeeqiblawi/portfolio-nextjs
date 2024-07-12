import { NextResponse } from "next/server";
import { fetchArticlesMetaJSON } from "@/lib/github.js";

export async function GET() {
  const repoOwner = "rabeeqiblawi";
  const repoName = "Articles";
  
  const articles = await fetchArticlesMetaJSON(repoOwner, repoName);
  
  return NextResponse.json({
    articles: articles,
  });
}