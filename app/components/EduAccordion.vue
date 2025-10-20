<script lang="ts" setup>
	const props = defineProps<{
		title: string;
		helperText?: string;
		description?: string;
		content?: string;
	}>();

	const isOpen = ref(false);
</script>

<template>
	<div class="flex h-fit w-full flex-col gap-6 rounded-2xl bg-white p-4">
		<header class="flex w-full flex-col gap-2">
			<div class="flex w-full items-center justify-between gap-6">
				<h3 class="text-[16px] font-bold text-gray-900">
					{{ title || 'Titre' }}
				</h3>

				<div class="flex items-center gap-1">
					<p v-if="!isOpen" class="text-sm text-gray-600">
						{{ helperText || 'Compléter' }}
					</p>
					<EduButton
						variant="icon"
						icon="lucide-chevron-down"
						class="transition-transform duration-300"
						:class="[isOpen ? 'rotate-180' : '']"
						@click="isOpen = !isOpen"
					/>
				</div>
			</div>

			<p v-if="description">
				{{ description || 'Description' }}
			</p>
		</header>

		<div
			v-show="isOpen"
			class="flex h-0 w-full flex-col gap-2 overflow-hidden transition-all duration-300"
			:class="[isOpen ? 'h-auto' : 'h-0']"
		>
			<p v-if="content">{{ content || 'Contenu' }}</p>
			<slot v-else name="content" />
		</div>
	</div>
</template>
