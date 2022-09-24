<script setup lang="ts">
import { definePageMeta, queryContent, ref } from "#imports";
import PAGE from "const/page-name-constants";
import { MarkdownNode, MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

interface Question {
  title: string;
  answer: MarkdownParsedContent,
}

definePageMeta({
  title: 'Frequently Asked Questions',
  page: PAGE.FAQ,
})

const currentPage = ref<MarkdownParsedContent>();
currentPage.value = await queryContent(PAGE.FAQ).findOne() as MarkdownParsedContent
const questions = parseQuestions();

function parseQuestions() {
  if (!currentPage.value) {
    return [];
  }
  const children = currentPage.value?.body.children ?? [];
  let questionIndices = []
  // Remove FAQ title
  children.splice(0, 1);
  // Retrieve all questions tagged with h2 tag
  for (let i = 0; i < children.length - 1; i++) {
    if (children[i]?.tag === 'h2') {
      questionIndices.push(i);
    }
  }

  // Retrieve all the answers between the questions and map them
  let result: Question[] = []
  const lastIndex = children.length - 1;
  for (let i = 0; i < questionIndices.length; i++) {
    const questionIndex = questionIndices[i];
    const title = children[questionIndex].children[0].value;
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
        ...currentPage.value,
        body: {
          type: 'root',
          children: answerChildren,
        }
      }
    })
  }

  return result;
}


</script>

<template>
  <main>
    <v-container>
      <h1>Frequently Asked Questions</h1>
      <v-expansion-panels class="my-4">
        <template v-for="(question, index) in questions" :key="index">
          <v-expansion-panel :title="question.title" eager>
            <template #text>
              <ContentRenderer v-if="question.answer" :value="question.answer"/>
            </template>
          </v-expansion-panel>
        </template>
      </v-expansion-panels>
    </v-container>
  </main>
</template>
