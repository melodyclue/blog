import type { APIContext, InferGetStaticPropsType } from "astro";
import satori, { type SatoriOptions } from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import { siteConfig } from "@/site-config";
import { getAllPosts, getFormattedDate } from "@/utils";

import NotoSansJpSemiBold from "@/assets/NotoSansJP-SemiBold.ttf";
import { format } from "@formkit/tempo";

const ogOptions: SatoriOptions = {
	width: 1200,
	height: 630,
	// debug: true,
	fonts: [
		{
			name: "notosansjp",
			data: Buffer.from(NotoSansJpSemiBold),
			weight: 600,
			style: "normal",
		},
	],
};

const markup = (title: string, pubDate: string) =>
	html`<div class="flex h-full w-full flex-col bg-[#1d1f21] text-[#c9cacc]"
	style={{
		fontFamily: "notosansjp",
	}}>
		<div class="flex w-full max-w-[90%] flex-1 flex-col justify-center p-14">
			<p class="mb-6 text-2xl">${pubDate}</p>
			<h1 class="text-4xl leading-snug text-[#efefef]">${title}</h1>
		</div>
		<div class="flex w-full items-center justify-between border-t border-[#2bbc89] p-10 text-xl">
			<div class="flex items-center">
				<p class="ml-3 font-semibold">${siteConfig.title} Note</p>
			</div>
			<p>by ${siteConfig.author}</p>
		</div>
	</div>`;

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export async function GET(context: APIContext) {
	const { title, pubDate } = context.props as Props;
	const postDate = format(pubDate, "MMM D, YYYY");
	const svg = await satori(markup(title, postDate), ogOptions);
	const png = new Resvg(svg).render().asPng();
	return new Response(png, {
		headers: {
			"Content-Type": "image/png",
			"Cache-Control": "public, max-age=31536000, immutable",
		},
	});
}

export async function getStaticPaths() {
	const posts = await getAllPosts();
	return posts
		.filter(({ data }) => !data.ogImage)
		.map((post) => ({
			params: { slug: post.slug },
			props: {
				title: post.data.title,
				pubDate: post.data.updatedDate ?? post.data.publishDate,
			},
		}));
}
