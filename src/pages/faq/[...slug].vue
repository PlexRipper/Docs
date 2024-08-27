<template>
	<Page>
		<article>
			<h1>Frequently Asked Questions</h1>
			<VExpansionPanels class="my-4">
				<template
					v-for="(question, index) in questions"
					:key="index">
					<VExpansionPanel
						:title="question.title"
						eager>
						<template #text>
							<ContentRenderer
								v-if="question.answer"
								:value="question.answer" />
						</template>
					</VExpansionPanel>
				</template>
			</VExpansionPanels>
			<EditThisPage :path="currentPage._file" />
		</article>
	</Page>
</template>

<script setup lang="ts">
import type { MarkdownNode, MarkdownParsedContent } from '@nuxt/content';
import { queryContent, useHead } from '#imports';

interface Question {
	title: string;
	answer: MarkdownParsedContent;
}

useHead({
	title: 'Frequently Asked Questions',
});

const currentPage = await queryContent('faq').findOne() as MarkdownParsedContent;
const questions = parseQuestions();

function parseQuestions() {
	if (!currentPage) {
		return [];
	}
	const children = currentPage?.body.children ?? [];
	if (!children) {
		return [];
	}
	const questionIndices = [];
	// Remove FAQ title
	children.splice(0, 1);
	// Retrieve all questions tagged with h2 tag
	for (let i = 0; i < children.length - 1; i++) {
		if (children[i]?.tag === 'h2') {
			questionIndices.push(i);
		}
	}

	// Retrieve all the answers between the questions and map them
	const result: Question[] = [];
	const lastIndex = children.length - 1;
	for (let i = 0; i < questionIndices.length; i++) {
		const questionIndex = questionIndices[i];
		const parent = children[questionIndex];
		if (!parent.children) {
			continue;
		}

		const title = parent.children[0].value ?? 'Title not found';
		let answerChildren: MarkdownNode[] = [];

		if (i < lastIndex) {
			const nextQuestionIndex = questionIndices[i + 1];
			answerChildren = children.slice(questionIndex + 1, nextQuestionIndex);
		} else {
			answerChildren = children.slice(questionIndex + 1, lastIndex + 1);
		}

		result.push({
			title,
			answer: {
				...currentPage,
				body: {
					type: 'root',
					children: answerChildren,
				},
			},
		});
	}

	return result;
}
</script>
