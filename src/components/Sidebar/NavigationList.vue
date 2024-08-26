<script setup lang="ts">
import { useNavigationStore } from 'store';
import { computed } from '#imports';

const store = useNavigationStore();

const props = defineProps({
	sidebarKey: {
		type: String,
		default: '',
	},
});

const items = computed(() => {
	const navItems = store.getNavItems(props.sidebarKey);
	if (!navItems) {
		return [];
	}
	return navItems;
});
</script>

<template>
	<v-list
		v-if="items.length"
		:opened="store.getSidebarState(sidebarKey)"
		open-strategy="list"
		@update:opened="store.setSidebarState(sidebarKey, $event)"
	>
		<template v-for="item in items">
			<!-- Display as list-group when there are children -->
			<v-list-group
				v-if="item.children && item.children.length > 0"
				:value="item.title"
			>
				<template #activator="{ props }">
					<v-list-item
						v-bind="props"
						:title="item.title"
					/>
				</template>

				<v-list-item
					v-for="child in item.children"
					:key="child._id"
					:value="child._path"
					:title="child.title"
					:to="child._path"
				/>
			</v-list-group>
			<!-- Display as normal list-item when there are no children -->
			<v-list-item
				v-else
				:value="item._path"
				:title="item.title"
				:to="item._path"
			/>
		</template>
	</v-list>
</template>
