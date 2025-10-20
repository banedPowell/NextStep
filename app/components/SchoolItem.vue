<script lang="ts" setup>
	const props = defineProps<{
		school: {
			id: number;
			name: string;
			city: string;
			type: string;
		};
		isSelected: boolean;
	}>();

	const emit = defineEmits<{
		'school-selected': [value: number];
	}>();

	const handleClick = () => {
		emit('school-selected', props.school.id);
	};
</script>

<template>
	<li
		class="items-starts flex cursor-pointer flex-col justify-center gap-2 rounded-lg p-2 hover:bg-gray-100"
		:class="[isSelected ? 'border-2 border-gray-900' : '']"
		@click="handleClick"
	>
		<h2 class="text-xl font-bold text-wrap">
			{{ school.name || `Nom de l'école` }}
		</h2>

		<ul class="flex gap-2">
			<li class="flex items-center gap-1">
				<UIcon name="lucide-map-pin" />
				{{ school.city || 'Ville' }}
			</li>

			<li class="flex items-center gap-1">
				<UIcon name="lucide-building" />
				{{ school.type === 'public' ? 'Lycée public' : 'Lycée privé' }}
			</li>
		</ul>
	</li>
</template>
