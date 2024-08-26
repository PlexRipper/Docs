<script setup lang="ts">
import { definePageMeta, queryContent, useHead, useRoute } from '#imports';
import type { IAnnouncement } from '~/common/types/IAnnouncement';

useHead({
	title: 'Announcements',
});

// This is added due to missing document 404 errors popping up in the console
// Source: https://github.com/nuxt/content/issues/1656
definePageMeta({
	documentDriven: false,
});

const route = useRoute();
const currentPage: IAnnouncement[] = await queryContent(route.path).find() as IAnnouncement[];
</script>

<template>
	<v-row justify="center">
		<v-col>
			<v-row
				justify="center"
				class="mb-6"
			>
				<v-col cols="12">
					<h1>Announcements</h1>
				</v-col>
			</v-row>

			<v-row justify="start">
				<v-col
					v-for="(item, i) in currentPage"
					:key="i"
					cols="3"
				>
					<v-card
						width="400"
						:to="item._path"
					>
						<div class="logo-container">
							<Logo />
						</div>
						<v-card-title> {{ item.title }}</v-card-title>
						<v-card-subtitle> {{ item.description }}</v-card-subtitle>
						<v-card-actions v-if="item.authors">
							<Authors
								:authors="item.authors"
								:date="item.date"
							/>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>
