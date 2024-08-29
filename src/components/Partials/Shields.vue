<template>
	<GridContainer justify="center">
		<GridColumn
			v-for="(link, index) in shields"
			:key="index"
			col="auto"
			class="m-2">
			<img
				:src="link.src"
				:alt="link.label">
		</GridColumn>
		<GridColumn col="auto">
			<table>
				<thead>
					<tr>
						<th class="text-left">
							<h3>
								Development
							</h3>
						</th>
						<th class="text-left">
							<h3>
								Stable
							</h3>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="(_, index) in Math.max(devShields.length, stableShields.length)"
						:key="index">
						<td v-if="devShields[index]">
							<img
								class="mt-2"
								:src="devShields[index].src"
								:alt="devShields[index].label">
						</td>
						<td v-if="stableShields[index]">
							<img
								class="mt-2"
								:src="stableShields[index].src"
								:alt="stableShields[index].label">
						</td>
					</tr>
				</tbody>
			</table>
		</GridColumn>
	</GridContainer>
</template>

<script setup lang="ts">
import { transform } from '~/common/lib/shields-parser';

const shields = transform([
	{
		label: 'Docker Pulls',
		src: 'https://img.shields.io/docker/pulls/plexripper/plexripper',
	},
	{
		label: 'Github Followers',
		src: 'https://img.shields.io/github/followers/plexripper',
	},
	{
		label: 'Github Watchers',
		src: 'https://img.shields.io/github/watchers/PlexRipper/PlexRipper',
	},
	{
		label: 'Github Forks',
		src: 'https://img.shields.io/github/forks/PlexRipper/PlexRipper',
	},
	{
		label: 'Github Stars',
		src: 'https://img.shields.io/github/stars/PlexRipper',
	},
	{
		label: 'Docker Stars',
		src: 'https://img.shields.io/docker/stars/plexripper/plexripper',
	},
	{
		label: 'GitHub issues',
		src: 'https://img.shields.io/github/issues/plexripper/plexripper',
	},
	{
		label: 'Created At',
		src: 'https://img.shields.io/github/created-at/plexripper/plexripper',
	},
	{
		label: 'License',
		src: 'https://img.shields.io/github/license/plexripper/plexripper',
	},
]);

const devShields = transform([
	{
		label: 'Development Version',
		fileName: 'src/WebAPI/ClientApp/package.json',
		src: 'https://img.shields.io/github/package-json/v/PlexRipper/PlexRipper/dev',
	},
	{
		label: 'PlexRipper Dev Image Size',
		src: 'https://img.shields.io/docker/image-size/plexripper/plexripper/dev',
	},
	{
		label: 'Last Commit on Dev Branch',
		src: 'https://img.shields.io/github/last-commit/PlexRipper/PlexRipper/dev',
	},
	{
		label: 'Commits since last release on Dev Branch',
		src: 'https://img.shields.io/github/commits-since/plexripper/plexripper/latest',
	},
]);

const stableShields = transform([
	{
		label: 'Stable Version',
		fileName: 'src/WebAPI/ClientApp/package.json',
		src: 'https://img.shields.io/github/package-json/v/PlexRipper/PlexRipper',
	},
	{
		label: 'PlexRipper Latest Image Size',
		src: 'https://img.shields.io/docker/image-size/plexripper/plexripper/latest',
	},
	{
		label: 'Last Release',
		src: 'https://img.shields.io/github/release-date/plexripper/plexripper',
	},
	{
		label: 'Contributors',
		src: 'https://img.shields.io/github/contributors/plexripper/plexripper',
	},
]);
</script>
