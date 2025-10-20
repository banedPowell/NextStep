<script lang="ts" setup>
	interface CategoryOption {
		value: string;
		label: string;
	}

	interface Category {
		title?: string;
		name: string;
		options: CategoryOption[];
	}

	const props = defineProps<{
		categories: Category[];
		prefilledOptions: string[];
	}>();

	const selectedOptions = ref(props.prefilledOptions);

	const handleOptionChange = (value: string | null, categoryName: string) => {
		// Pour le comportement radio, on remplace la sélection précédente dans cette catégorie
		const category = props.categories.find(
			(cat) => cat.name === categoryName,
		);
		if (category) {
			// Retirer toutes les options de cette catégorie
			selectedOptions.value = selectedOptions.value.filter(
				(option) =>
					!category.options.some((opt) => opt.value === option),
			);
			// Ajouter la nouvelle sélection si elle existe
			if (value) {
				selectedOptions.value.push(value);
			}
		}
	};

	const emit = defineEmits<{
		'update:selectedOptions': [value: string[]];
	}>();

	const handleSubmit = () => {
		emit('update:selectedOptions', selectedOptions.value);
	};
</script>

<template>
	<form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
		<div
			v-for="(category, index) in categories"
			:key="category.name"
			class="space-y-4"
		>
			<h3 class="text-gray-900">
				{{ category.title }}
			</h3>
			<div class="flex flex-wrap gap-3">
				<EduChip
					v-for="option in category.options"
					:key="option.value"
					:id="option.value"
					:label="option.label"
					:value="option.value"
					:name="category.name"
					:modelValue="
						selectedOptions.includes(option.value)
							? option.value
							: null
					"
					@update:modelValue="
						(value: string | null) =>
							handleOptionChange(value as string, category.name)
					"
				/>
			</div>
			<USeparator v-if="index < categories.length - 1" />
		</div>

		<div class="flex justify-center pt-4">
			<EduButton
				variant="primary"
				label="Confirmer"
				type="submit"
				class="w-full"
				:disabled="selectedOptions.length === 0"
			/>
		</div>
	</form>
</template>
